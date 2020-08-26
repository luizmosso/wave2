import React from 'react';
import withBaseStyle from '../../shared/baseStyle';
import { StyledButton } from './styles';

function Button(props) {
  return <StyledButton {...props} />;
}

export default withBaseStyle(Button);
