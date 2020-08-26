/* eslint-disable operator-linebreak */
import styled from 'styled-components';
import { colors } from '../../shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputField = styled.input`
  height: 50px;
  border: none;
  border-radius: 4px;
  padding-left: 1rem;
  font-weight: bold;
  background: ${colors.pale};

  &::placeholder {
    color: ${colors.lighter};
  }
`;
