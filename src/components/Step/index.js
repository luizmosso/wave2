import React from 'react';
import withBaseStyle from '../../shared/baseStyle';
import { StyledStep, Text } from './styles';

function Step(props) {
  const { children, active, single, last, ...rest } = props;
  return (
    <StyledStep {...rest} active={active} single={single} last={last}>
      <Text>{children}</Text>
    </StyledStep>
  );
}

export default withBaseStyle(Step);
