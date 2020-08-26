/* eslint-disable operator-linebreak */
import styled from 'styled-components';
import { colors } from '../../shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  color: ${colors.light};
  font-size: 0.8rem;
`;

export const TextAreaField = styled.textarea`
  height: ${({ height }) => (height ? height : '50')}px;
  border: 1px solid ${colors.lighter};
  border-radius: 4px;
  padding-left: 1rem;
  font-weight: bold;
  resize: ${({ resize }) => (resize ? resize : 'none')};

  &::placeholder {
    color: ${colors.lighter};
    font-weight: bold;
  }
`;
