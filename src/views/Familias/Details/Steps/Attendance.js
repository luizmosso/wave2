/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import moment from 'moment';
import Switch from 'rc-switch';
import { SwitchStyle } from '../../styles';
import { Container, Row, SubTitle, Label, Wrapper, Text } from './styles';
import { Input, TextArea, MonthCheck, Button } from '../../../../components';
import { constants } from '../../../../shared';
import { useUser, useInstitution } from '../../../../contexts';

function Attendance(props) {
  const { isMobile, family, setFamily, insertFamily, updateFamily } = props;
  const {
    _id,
    observacao,
    tempoAtendimento,
    itensDoados,
    cronograma,
    ativo,
    dataCadastro,
  } = family || {};
  const [statusAtual, setStatusAtual] = useState(null);

  const { user } = useUser();
  const { institution } = useInstitution();
  const { addToast } = useToasts();

  const history = useHistory();

  const newCronograma = () => {
    if (!tempoAtendimento || tempoAtendimento === 0 || tempoAtendimento === '')
      return [];
    const currentDate = moment();
    const currentMonth = parseInt(currentDate.format('M'));
    const currentYear = parseInt(currentDate.format('y'));
    const crono = [];
    for (let index = 0; index < tempoAtendimento; index++) {
      const nextMonth = moment(currentDate).add(index, 'M');
      const number = parseInt(nextMonth.format('M'));
      const year = parseInt(nextMonth.format('Y'));
      const disabled = !(number === currentMonth && currentYear === year);
      const month = {
        number,
        year,
        label: `${constants.months[number].name} ${year}`,
        status: 'unset',
        disabled,
      };
      crono.push(month);
    }
    return crono;
  };

  const enablePastMonths = () => {
    const currentDate = moment();
    const currentMonth = parseInt(currentDate.format('M'));
    const currentYear = parseInt(currentDate.format('y'));
    let different = false;
    const disabledCronograma = cronograma.map((month) => {
      const disabled = !(
        month.year === currentYear && month.number <= currentMonth
      );
      if (different === false && disabled !== month.disabled) different = true;
      month.disabled = disabled;

      return month;
    });
    return different ? disabledCronograma : null;
  };

  const checkMandatoryFields = () => {
    const mandatory = [
      { nome: 'Código', valor: family.id },
      { nome: 'Endereço', valor: family.endereco },
      { nome: 'Bairro', valor: family.bairro },
      { nome: 'Documento', valor: family.documento },
      { nome: 'Quantidade de meses', valor: family.tempoAtendimento },
      { nome: 'Membros', valor: family.membros ? family.membros[0] : 0 },
    ];

    let strError = '';

    for (let m = 0; m < mandatory.length; m++) {
      let campo = mandatory[m];

      if (
        campo.valor === undefined ||
        campo.valor === null ||
        campo.valor === '' ||
        campo.valor === 0
      ) {
        strError += `${campo.nome}, `;
      }
    }

    if (strError !== '') return `Os campos [ ${strError} ] são obrigatórios!`;
    else return null;
  };

  const saveFamily = async () => {
    let mandatory = checkMandatoryFields();
    if (mandatory === null) {
      for (let b = 0; b < family.beneficios.length; b++) {
        let beneficio = family.beneficios[b];
        delete beneficio.key;
      }

      for (let m = 0; m < family.membros.length; m++) {
        let membro = family.membros[m];
        delete membro.key;
        delete membro.nascimentoFormatted;
      }

      if (family.ativo === undefined) family.ativo = true;
      if (!family.itensDoados || isNaN(family.itensDoados))
        family.itensDoados = Math.ceil(family.membros.length / 4);

      if (statusAtual !== family.ativo) {
        const historico = {
          userID: user._id,
          nome: user.nome,
          ativo: family.ativo,
        };
        family.historicoAtivacao = [...family.historicoAtivacao, historico];
      }

      let response = null;
      if (family._id) {
        response = await updateFamily(family);
      } else {
        response = await insertFamily({
          ...family,
          instituicao: institution._id,
        });
      }

      if (response && response.error) {
        addToast(`Erro: ${response.message}`, {
          appearance: 'error',
          autoDismiss: true,
        });
        return;
      }
      addToast(
        `Família ${family._id ? 'Atualizada' : 'Cadastrada'} com Sucesso!`,
        {
          appearance: 'success',
          autoDismiss: true,
          onDismiss: () => {
            history.push('/familias');
            history.go(0);
          },
        }
      );
    } else {
      addToast(mandatory, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  useEffect(() => {
    if (cronograma) {
      const disabled = enablePastMonths();
      if (disabled) setFamily({ ...family, cronograma: disabled });
    }
  }, [cronograma]);

  useEffect(() => {
    if (!_id && tempoAtendimento && tempoAtendimento > 0) {
      setFamily({ ...family, cronograma: newCronograma() });
    }
  }, [tempoAtendimento]);

  useEffect(() => {
    if (family && statusAtual === null)
      setStatusAtual(ativo === undefined ? true : ativo);
  }, [family]);

  return (
    <Container isMobile={isMobile} spaceBetween>
      <TextArea
        label="Observação"
        placeholder="Essa família possúi um deficiênte físico"
        value={observacao || ''}
        onChange={(observacao) => setFamily({ ...family, observacao })}
        resize="none"
        height={100}
      />
      <Row>
        <Input
          label="Quantidade de Meses"
          type="number"
          placeholder="0"
          value={tempoAtendimento || ''}
          onChange={(tempoAtendimento) =>
            setFamily({
              ...family,
              tempoAtendimento: parseFloat(
                tempoAtendimento === '' ? 1 : tempoAtendimento
              ),
            })
          }
          width="calc(50% - 4px)"
          disabled={family && family._id && family._id !== ''}
          mr={2}
        />
        <Input
          label="Cestas básicas"
          type="number"
          placeholder="0"
          value={itensDoados || ''}
          onChange={(itensDoados) =>
            setFamily({ ...family, itensDoados: parseFloat(itensDoados) })
          }
          width="calc(50% - 4px)"
        />
      </Row>
      {dataCadastro && (
        <Row>
          <Text>Data do Cadastro -</Text>
          <Text bold>
            {dataCadastro ? moment(dataCadastro).format('DD/MM/YYYY') : ''}
          </Text>
        </Row>
      )}
      <Wrapper>
        <SubTitle>Cronograma de Atendimento</SubTitle>
        <MonthCheck
          data={cronograma}
          onChange={(cronograma) => setFamily({ ...family, cronograma })}
        />
      </Wrapper>
      <Row>
        <Label>Situação</Label>
        <SwitchStyle>
          <Switch
            checked={ativo === undefined ? true : ativo}
            onChange={() => setFamily({ ...family, ativo: !ativo })}
            checkedChildren={'ativa'}
            unCheckedChildren={'inativa'}
          />
        </SwitchStyle>
      </Row>
      <Button onClick={saveFamily}>Salvar</Button>
    </Container>
  );
}

export default Attendance;
