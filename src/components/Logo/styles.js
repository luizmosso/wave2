/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';
import { colors } from '../../shared';

export const Container = styled.div`
  font-family: 'Mansalva', cursive;
  color: white;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ variant }) => css`
    color: ${variant === 'light' ? colors.white : colors.regular};
    ${variant === 'light' &&
    css`
      text-shadow: 2px 2px 2px ${colors.darkBlue};
    `}
  `}
`;
