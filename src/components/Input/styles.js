/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input';
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

const inputBaseCSS = css`
  height: 50px;
  border: 1px solid ${colors.lighter};
  border-radius: 4px;
  padding-left: 1rem;
  font-weight: bold;

  &::placeholder {
    color: ${colors.lighter};
    font-weight: bold;
  }
`;

export const InputField = styled.input`
  ${inputBaseCSS}
`;

export const MaskedInputField = styled(InputMask)`
  ${inputBaseCSS}
`;

export const CurrencyInputField = styled(CurrencyInput)`
  ${inputBaseCSS}
`;
