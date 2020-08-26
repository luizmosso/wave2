import React, { useEffect, useContext, useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { colors } from '../../../shared';
import {
  Container,
  Title,
  Box,
  BoxIcon,
  BoxHeader,
  BoxTitle,
  BoxValue,
  Row,
  Col,
} from './styles';
import { FamilyIcon, FoodIcon } from '../../../components';
import { FamilyContext } from '../../../contexts';

function General() {
  const [data, setData] = useState(null);
  const { getFamilies } = useContext(FamilyContext);
  const history = useHistory();

  useEffect(() => {
    history.push('/familias');
  }, []);

  const fixItensDoados = (family) => {
    let value = 0;
    if (family.itensDoados) {
      if (isNaN(family.itensDoados)) {
        value = Math.ceil(family.membros.length / 4);
      } else {
        value = parseFloat(family.itensDoados);
      }
    } else {
      value = family;
    }
    return value;
  };

  const getRecolhidasMesPassado = (families) => {
    const pastMonthDate = moment().add(-1, 'M');
    const pastMonth = parseInt(pastMonthDate.format('M'));
    const pastYear = parseInt(pastMonthDate.format('Y'));

    const familiesPickedUp = families.filter(({ cronograma }) => {
      if (!cronograma) return false;
      const found = cronograma.filter(
        ({ number, year }) => number === pastMonth && year === pastYear
      );
      if (found && found.length > 0) return true;
      return false;
    });
    if (familiesPickedUp && familiesPickedUp.length > 0)
      return familiesPickedUp.reduce(
        (prev, next) => fixItensDoados(prev) + fixItensDoados(next)
      );
    return 0;
  };

  const setUpDashboardData = (families) => {
    const familiasAtivas = families.filter(({ ativo }) => ativo);
    const ativas = familiasAtivas.length;
    const inativas = families.filter(({ ativo }) => !ativo).length;
    const cestas = familiasAtivas.reduce(
      (prev, next) => fixItensDoados(prev) + fixItensDoados(next)
    );
    const recolhidasMesPassado = getRecolhidasMesPassado(families);
    const newData = {
      ATIVAS: {
        key: 0,
        title: 'Famílias Ativas',
        value: ativas,
        color: colors.pink,
        height: '40vh',
        icon: <FamilyIcon />,
      },
      INATIVAS: {
        key: 1,
        title: 'Famílias Inativas',
        value: inativas,
        color: colors.purple,
        height: '30vh',
        icon: <FamilyIcon />,
      },
      QTD: {
        key: 2,
        title: 'Quantidade de cestas básicas',
        value: cestas,
        color: colors.orange,
        height: '40vh',
        icon: <FoodIcon />,
      },
      RECOLHIDAS: {
        key: 3,
        title: 'Recolhidas mês passado',
        value: recolhidasMesPassado,
        color: colors.lightBlue,
        height: '30vh',
        icon: <FoodIcon />,
      },
    };
    setData(newData);
  };

  useEffect(() => {
    const setUpData = async () => {
      const fams = await getFamilies();
      setUpDashboardData(fams);
    };
    setUpData();
  }, [getFamilies]);

  const Item = ({ color, title, value, height, icon }) => (
    <Box color={color} height={height}>
      <BoxHeader>
        <BoxTitle>{title}</BoxTitle>
        <BoxIcon>{icon}</BoxIcon>
      </BoxHeader>
      <BoxValue>{value}</BoxValue>
    </Box>
  );

  return (
    <Container>
      <Title>Dashboard</Title>
      {data && (
        <Row>
          <Col>
            <Item {...data['ATIVAS']} />
            <Item {...data['RECOLHIDAS']} />
          </Col>
          <Col>
            <Item {...data['INATIVAS']} />
            <Item {...data['QTD']} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default General;
