/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Container, Row, ThinButton, Membros } from './styles';
import { Input, GroupInput } from '../../../../components';

function Members(props) {
  const { isMobile, family, setFamily, isActive } = props;
  const { membros: members } = family || {};
  const [membros, setMembros] = useState([]);

  const removeMembro = (key) => {
    setMembros(membros.filter((f) => f.key !== key));
  };

  const createMembro = () => {
    const newKey =
      membros.length === 0
        ? 0
        : Math.max.apply(
            Math,
            membros.map((b) => b.key)
          ) + 1;

    const membro = {
      key: newKey,
      nome: '',
      nascimento: '',
      nascimentoFormatted: '',
      escolaridade: '',
    };
    setMembros([...membros, membro]);
  };

  useEffect(() => {
    if (members && members.length > 0) {
      const data = members.map((m, key) => ({
        ...m,
        key,
        nascimentoFormatted: moment(m.nascimento).format('DD/MM/YYYY'),
      }));
      setMembros(data);
    }
  }, [members]);

  useEffect(() => {
    if (membros && membros.length === 0) createMembro();
  }, [membros]);

  const unformatDate = (date) => {
    const [day, month, year] = date.split('/');
    return moment(new Date(`${year}-${month}- ${day}`)).toISOString();
  };

  const updateMembro = (membro) => {
    membro.nascimento = unformatDate(membro.nascimentoFormatted);
    const newMembros = membros.map((b) => (b.key === membro.key ? membro : b));
    setMembros(newMembros);
  };

  useEffect(() => {
    if (!isActive && family && family.membros !== membros)
      setFamily({ ...family, membros });
  }, [isActive]);

  return (
    <Container isMobile={isMobile}>
      <Membros>
        {membros &&
          membros.length > 0 &&
          membros.map((membro, index) => (
            <GroupInput
              key={membro.key}
              onClose={() => removeMembro(membro.key)}
            >
              <Row mb={index > 0 && 1}>
                <Input
                  label={index === 0 ? 'Nome' : null}
                  type="text"
                  placeholder="José da Silva"
                  value={membro.nome || ''}
                  onChange={(nome) => updateMembro({ ...membro, nome })}
                  width="70%"
                  mr={2}
                />
                <Input
                  label={index === 0 ? 'Nascimento' : null}
                  mask="99/99/9999"
                  maskChar={null}
                  placeholder="11/10/1986"
                  value={membro.nascimentoFormatted || ''}
                  onChange={(nascimentoFormatted) =>
                    updateMembro({ ...membro, nascimentoFormatted })
                  }
                  width="30%"
                />
              </Row>
              <Input
                label={index === 0 ? 'Escolaridade' : null}
                type="text"
                placeholder="Ensino Fundamental Incompleto"
                value={membro.escolaridade || ''}
                onChange={(escolaridade) =>
                  updateMembro({ ...membro, escolaridade })
                }
              />
            </GroupInput>
          ))}
        <ThinButton onClick={createMembro}>Adicionar Membro</ThinButton>
      </Membros>
    </Container>
  );
}

export default Members;
