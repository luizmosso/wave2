import React from 'react';
import PropTypes from 'prop-types';
import { Container, CloseButton } from './styles';
import { PlusIcon } from '../Icons';
import { colors } from '../../shared';
import withBaseStyle from '../../shared/baseStyle';

function GroupInput(props) {
  const { children, onClose, ...rest } = props;
  return (
    <Container {...rest}>
      <CloseButton onClick={onClose}>
        <PlusIcon color={colors.lighter} />
      </CloseButton>
      {children}
    </Container>
  );
}

GroupInput.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.any]),
};

GroupInput.defaultProps = {
  onClose: () => {},
  children: '',
};

export default withBaseStyle(GroupInput);
