import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../shared';

const CircleIcon = (props) => {
  const { color, width, maxWidth } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      style={{ maxWidth }}
    >
      <path d="M24 24H0V0h24v24z" fill="none" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
};

CircleIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CircleIcon.defaultProps = {
  color: colors.white,
  width: 24,
  maxWidth: 'none',
};

export default CircleIcon;
