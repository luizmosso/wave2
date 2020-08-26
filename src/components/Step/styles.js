/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';
import { colors } from '../../shared';

export const StyledStep = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${colors.pale};

  ${({ active }) => css`
    border: 3px solid ${active ? colors.lightBlue : colors.lighter};
    color: ${active ? colors.lightBlue : colors.lighter};
    background: ${active ? colors.white : colors.pale};
  `}

  ${({ single, last, active }) => {
    if (!single && !last) {
      return css`
        margin-right: 30px;
        &::after {
          content: '';
          border: 2px solid ${active ? colors.lightBlue : colors.lighter};
          width: 30px;
          position: absolute;
          right: -35px;
        }
      `;
    }
  }}
`;

export const Text = styled.h3``;
