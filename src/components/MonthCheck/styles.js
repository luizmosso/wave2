/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';
import { colors } from '../../shared';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

export const Month = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 25%;
`;
export const Label = styled.p`
  margin-bottom: 2px;
  font-size: 0.7rem;
  color: ${colors.light};
`;
export const Check = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border-width: 3px;
  border-style: solid;
  background: ${({ status }) =>
    !['success', 'error'].includes(status) && colors.lighter};
  border-color: ${({ status }) =>
    status === 'success'
      ? colors.lightBlue
      : status === 'error'
      ? colors.pink
      : colors.lighter};

  ${({ status }) =>
    ['success', 'error'].includes(status) &&
    css`
      &::after {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 20px;
        position: absolute;
        background: ${status === 'success' ? colors.lightBlue : colors.pink};
      }
    `}
`;
