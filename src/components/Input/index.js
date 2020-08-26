import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Label,
  InputField,
  MaskedInputField,
  CurrencyInputField,
} from './styles';
import withBaseStyle from '../../shared/baseStyle';

function Input(props) {
  const {
    label,
    type,
    value,
    onChange,
    placeholder,
    mask,
    maskChar,
    currency,
    thousandSeparator,
    disabled,
    ...rest
  } = props;
  return (
    <Container {...rest}>
      {label && <Label>{label}</Label>}
      {mask ? (
        <MaskedInputField
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          mask={mask}
          maskChar={maskChar}
          disabled={disabled}
        />
      ) : currency ? (
        <CurrencyInputField
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          thousandSeparator={thousandSeparator}
          disabled={disabled}
        />
      ) : (
        <InputField
          value={value}
          type={type}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mask: PropTypes.string,
  currency: PropTypes.bool,
  thousandSeparator: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  label: null,
  type: 'text',
  onChange: () => {},
  value: null,
  mask: null,
  currency: false,
  thousandSeparator: '',
  disabled: false,
};

export default withBaseStyle(Input);
