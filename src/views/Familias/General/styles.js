import styled from 'styled-components';
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
`;

export const Box = styled.div`
  width: 100%;
  background: ${({ color }) => color && color};
  color: white;
  height: ${({ height }) => height && height};
  border-radius: 10px;
  margin-bottom: 12px;
  text-align: center;
`;

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const BoxTitle = styled.p`
  text-align: left;
  width: 70%;
`;

export const BoxValue = styled.h1`
  font-size: 3rem;
`;

export const BoxIcon = styled.div`
  border-radius: 1000px;
  background: ${colors.alpha30};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Col = styled.div`
  width: 100%;
  &:first-child {
    margin-right: 12px;
  }
`;

export const Title = styled.h3`
  align-self: flex-start;
  color: ${colors.regular};
`;
