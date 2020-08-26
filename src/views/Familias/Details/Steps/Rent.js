import React, { useState, useEffect } from 'react';
import { Container, Row, ThinButton, Beneficios } from './styles';
import { Input, GroupInput } from '../../../../components';

function Rent(props) {
  const { isMobile, family, setFamily, isActive } = props;
  const { renda, despesas, beneficios: benefits } = family || {};
  const [beneficios, setBeneficios] = useState([]);

  const removeBeneficio = (key) => {
    setBeneficios(beneficios.filter((f) => f.key !== key));
  };

  const createBeneficio = () => {
    const newKey =
      beneficios.length === 0
        ? 0
        : Math.max.apply(
            Math,
            beneficios.map((b) => b.key)
          ) + 1;

    const beneficio = {
      key: newKey,
      nome: '',
      valor: '',
    };
    setBeneficios([...beneficios, beneficio]);
  };

  useEffect(() => {
    if (benefits && benefits.length > 0) {
      const data = benefits.map((b, key) => ({ ...b, key }));
      setBeneficios(data);
    }
  }, [benefits]);

  useEffect(() => {
    if (beneficios && beneficios.length === 0) createBeneficio();
  }, [beneficios]);

  const updateBeneficio = (beneficio) => {
    const newBeneficios = beneficios.map((b) =>
      b.key === beneficio.key ? beneficio : b
    );
    setBeneficios(newBeneficios);
  };

  useEffect(() => {
    if (!isActive && family && family.beneficios !== beneficios)
      setFamily({ ...family, beneficios });
  }, [isActive]);

  return (
    <Container isMobile={isMobile}>
      <Input
        label="Renda mensal"
        placeholder="0.00"
        value={renda || 0.0}
        currency
        onChange={(renda) => setFamily({ ...family, renda: parseFloat(renda) })}
        mb={2}
      />
      <Input
        label="Despesas mensal"
        placeholder="0.00"
        value={despesas || 0.0}
        currency
        onChange={(despesas) =>
          setFamily({ ...family, despesas: parseFloat(despesas) })
        }
        mb={4}
      />
      <ThinButton onClick={createBeneficio}>Adicionar Benefício</ThinButton>
      <Beneficios>
        {beneficios &&
          beneficios.length > 0 &&
          beneficios.map((beneficio) => (
            <GroupInput
              key={beneficio.key}
              onClose={() => removeBeneficio(beneficio.key)}
            >
              <Row>
                <Input
                  label="Nome"
                  type="text"
                  placeholder="Bolsa Família"
                  value={beneficio.nome || ''}
                  onChange={(nome) => updateBeneficio({ ...beneficio, nome })}
                  width="70%"
                  mr={2}
                />
                <Input
                  label="Valor"
                  placeholder="0.00"
                  value={beneficio.valor || ''}
                  currency
                  onChange={(valor) =>
                    updateBeneficio({ ...beneficio, valor: parseFloat(valor) })
                  }
                  width="30%"
                />
              </Row>
            </GroupInput>
          ))}
      </Beneficios>
    </Container>
  );
}

export default Rent;
