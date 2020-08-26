import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../../../shared';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 12px;
  overflow-x: hidden;
`;

export const Title = styled.h3`
  align-self: flex-start;
  color: ${colors.regular};
`;

export const SubTitle = styled.h5`
  color: ${colors.light};
  margin-left: 5px;
  margin-bottom: 16px;
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 12px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const SwiperChangedStyle = createGlobalStyle`
  .swiper-container, .swiper-wrapper, .swiper-slide {
    height: 100%;
  }

  .swiper-button-next, .swiper-button-prev {
    color: ${colors.lightBlue};
  }

  .swiper-button-next:after, .swiper-button-prev:after{
    font-size: 30px;
  }
`;
