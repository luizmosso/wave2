import styled, { css } from 'styled-components';
import { colors } from '../../shared';

export const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-evenly;
  height: 100%;
`;

export const StyledTab = styled.div`
  text-align: center;
  width: 50px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      border-bottom: 3px solid ${colors.white};
    `}
`;
