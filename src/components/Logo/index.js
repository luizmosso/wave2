import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import WaveIcon from '../Icons/WaveIcon';

function Logo({ variant }) {
  const Icon = () => <WaveIcon width={50} transform="rotate(-50deg)" />;

  return (
    <Container variant={variant}>
      Wav
      <Icon />
    </Container>
  );
}

Logo.propTypes = {
  variant: PropTypes.string,
};

Logo.defaultProps = {
  variant: 'light',
};

export default Logo;
