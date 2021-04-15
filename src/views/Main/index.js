/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import {
  Container,
  Header,
  List,
  Footer,
  BoxContainer,
  BoxImage,
  BoxTitle,
  SelectContainer,
} from './styles';
import { useUser, useInstitution } from '../../contexts';
import { Logo } from '../../components';
import FamiliasIcon from '../../assets/familias.svg';
import EventosIcon from '../../assets/eventos.svg';
import DoacoesIcon from '../../assets/doacoes.svg';
import FinanceiroIcon from '../../assets/financeiro.svg';
import { colors } from '../../shared';

function Main() {
  const [selectedInstitution, selectInstitution] = useState();
  const boxes = [
    { image: FamiliasIcon, path: '/familias', title: 'Famílias' },
    { image: EventosIcon, path: '/', title: 'Eventos' },
    { image: DoacoesIcon, path: '/', title: 'Financeiro' },
    { image: FinanceiroIcon, path: '/', title: 'Doações' },
  ];

  const { user } = useUser();
  const { institution, setCurrentInstitution } = useInstitution();

  const history = useHistory();

  const Box = ({ image, path, title }) => (
    <BoxContainer onClick={() => history.push(path)}>
      <BoxImage src={image} />
      <BoxTitle>{title}</BoxTitle>
    </BoxContainer>
  );

  const getInstitutionsList = () => {
    if (!user) return [];
    const { instituicoes } = user;
    return instituicoes.map(({ _id, nome }) => ({
      value: _id,
      label: nome,
    }));
  };

  useEffect(() => {
    if (institution) {
      const { instituicoes } = user;
      const { _id: value, nome: label } = instituicoes.find(
        ({ _id }) => _id === institution._id
      );
      if (value) selectInstitution({ value, label });
    }
  }, [institution]);

  useEffect(() => {
    if (selectedInstitution) {
      setCurrentInstitution(selectedInstitution.value);
    }
  }, [selectedInstitution]);

  return (
    <Container>
      <Header>
        <Logo variant="light" />
      </Header>
      <SelectContainer>
        <Select
          value={selectedInstitution}
          onChange={selectInstitution}
          options={getInstitutionsList()}
          styles={{
            option: (provided, { data, isSelected }) => ({
              ...provided,
              backgroundColor: isSelected ? colors.blue : data.color,
            }),
          }}
        />
      </SelectContainer>
      <List>
        {boxes.map((box) => (
          <Box {...box} key={box.title} />
        ))}
      </List>
      <Footer to="/login">Log out</Footer>
    </Container>
  );
}

export default Main;
