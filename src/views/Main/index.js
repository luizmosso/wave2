import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Header,
  List,
  Footer,
  BoxContainer,
  BoxImage,
  BoxTitle,
} from './styles';
import { Logo } from '../../components';
import FamiliasIcon from '../../assets/familias.svg';
import EventosIcon from '../../assets/eventos.svg';
import DoacoesIcon from '../../assets/doacoes.svg';
import FinanceiroIcon from '../../assets/financeiro.svg';

function Main() {
  const boxes = [
    { image: FamiliasIcon, path: '/familias', title: 'Famílias' },
    { image: EventosIcon, path: '/', title: 'Eventos' },
    { image: DoacoesIcon, path: '/', title: 'Financeiro' },
    { image: FinanceiroIcon, path: '/', title: 'Doações' },
  ];

  const history = useHistory();

  const Box = ({ image, path, title }) => (
    <BoxContainer onClick={() => history.push(path)}>
      <BoxImage src={image} />
      <BoxTitle>{title}</BoxTitle>
    </BoxContainer>
  );

  return (
    <Container>
      <Header>
        <Logo variant="light" />
      </Header>
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
