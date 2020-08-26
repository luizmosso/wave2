import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, TextAreaField } from './styles';
import withBaseStyle from '../../shared/baseStyle';

function TextArea(props) {
  const {
    label,
    value,
    onChange,
    placeholder,
    height,
    resize,
    ...rest
  } = props;
  return (
    <Container {...rest}>
      {label && <Label>{label}</Label>}
      <TextAreaField
        value={value}
        height={height}
        resize={resize}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </Container>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

TextArea.defaultProps = {
  label: null,
  onChange: () => {},
  value: null,
};

export default withBaseStyle(TextArea);
