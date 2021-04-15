import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInstitution } from '../../../contexts';
import {
  Container,
  Row,
  Title,
  SubTitle,
  Steps,
  SwiperContainer,
  SwiperChangedStyle,
} from './styles';
import { Step } from '../../../components';
import { BasicInfo, Rent, Members, Attendance } from './Steps';
import {
  getFamily,
  insertFamily,
  updateFamily,
} from '../../../services/family';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

function Details(props) {
  const { familyId } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [slideIndex, setSlideIndex] = useState(0);
  const [family, setFamily] = useState(null);
  const { institution } = useInstitution();

  const slideProps = {
    family,
    setFamily,
    isMobile,
    insertFamily,
    updateFamily,
  };
  const slides = [
    {
      title: 'Informações Básicas',
      component: <BasicInfo {...slideProps} isActive={slideIndex === 0} />,
    },
    {
      title: 'Renda',
      component: <Rent {...slideProps} isActive={slideIndex === 1} />,
    },
    {
      title: 'Membros',
      component: <Members {...slideProps} isActive={slideIndex === 2} />,
    },
    {
      title: 'Atendimento',
      component: <Attendance {...slideProps} isActive={slideIndex === 3} />,
    },
  ];

  useEffect(() => {
    if (familyId && institution) {
      const setUpFamily = async (id) => {
        const searchedFamily = await getFamily(id, institution._id);
        setFamily(searchedFamily);
      };
      setUpFamily(familyId);
    }
  }, [familyId, institution]);

  return (
    <Container>
      <SwiperChangedStyle />
      <Row>
        <Title>{family && family.id ? family.id : 'Nova Família'}</Title>
        <SubTitle>{` - ${slides[slideIndex].title}`}</SubTitle>
      </Row>
      <SwiperContainer>
        <Swiper
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          navigation={!isMobile}
        >
          {slides.map(({ component }, key) => (
            <SwiperSlide key={key}>{component}</SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
      <Steps>
        {slides.map((_, key) => (
          <Step
            key={key}
            active={slideIndex === key}
            last={slides.length - 1 === key}
          >
            {key + 1}
          </Step>
        ))}
      </Steps>
    </Container>
  );
}

export default Details;
