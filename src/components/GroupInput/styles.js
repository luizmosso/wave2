/* eslint-disable operator-linebreak */
import styled from 'styled-components';
import { colors } from '../../shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  border-radius: 6px;
  margin-top: 12px;
  position: relative;
  padding: 12px;
  overflow-x: hidden;
  background: ${colors.pale};
`;

export const CloseButton = styled.button`
  border: none;
  width: fit-content;
  border-radius: 22px;
  height: 22px;
  padding: 0;
  margin: 0;
  background: transparent;
  transform: rotate(45deg);
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
