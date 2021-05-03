import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useInstitution } from '../../../contexts/Institution';
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
import { getFamilies } from '../../../services/family';

function General() {
  const [data, setData] = useState(null);
  const history = useHistory();
  const { addToast } = useToasts();
  const { institution } = useInstitution();

  useEffect(() => {
    history.push('/familias');
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        (prev, next) => fixItensDoados(prev) + fixItensDoados(next),
        0
      );
    return 0;
  };

  const calcCestasBasicas = (familiasAtivas) => {
    if (familiasAtivas?.length === 0) return 0;
    if (familiasAtivas?.length === 1) return fixItensDoados(familiasAtivas[0]);
    return familiasAtivas.reduce(
      (prev, next) => fixItensDoados(prev) + fixItensDoados(next)
    );
  };

  const setUpDashboardData = (families) => {
    const familiasAtivas = families.filter(({ ativo }) => ativo);
    const ativas = familiasAtivas.length;

    const inativas = families.filter(({ ativo }) => !ativo).length;
    const cestas = calcCestasBasicas(familiasAtivas);
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
      const fams = await getFamilies(institution._id);
      if (fams.error) {
        addToast(`Erro: ${fams.error}`, {
          appearance: 'error',
          autoDismiss: true,
        });
        return;
      }
      setUpDashboardData(fams || []);
    };
    if (getFamilies && institution) setUpData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [institution]);

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
