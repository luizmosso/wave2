import React from 'react';
import { Container } from './styles';
import { Input } from '../../../../components';

function BasicInfo(props) {
  const { isMobile, family, setFamily } = props;
  const { id, endereco, bairro, telefone, documento } = family || {};
  return (
    <Container isMobile={isMobile} spaceBetween>
      <Input
        label="Código"
        type="text"
        placeholder="F120"
        value={id || ''}
        onChange={(id) => setFamily({ ...family, id })}
      />
      <Input
        label="Endereço"
        type="text"
        placeholder="Rua das Margaridas, 150"
        value={endereco || ''}
        onChange={(endereco) => setFamily({ ...family, endereco })}
      />
      <Input
        label="Bairro"
        type="text"
        placeholder="Urciano Lemos"
        value={bairro || ''}
        onChange={(bairro) => setFamily({ ...family, bairro })}
      />
      <Input
        label="Telefone"
        type="text"
        placeholder="3436624878"
        value={telefone || ''}
        onChange={(telefone) => setFamily({ ...family, telefone })}
      />
      <Input
        label="Documento"
        mask="99999999999"
        maskChar={null}
        placeholder="CPF ou RG"
        value={documento || ''}
        onChange={(documento) => setFamily({ ...family, documento })}
      />
    </Container>
  );
}

export default BasicInfo;
