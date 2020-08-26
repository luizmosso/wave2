import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../shared';

const PlusIcon = (props) => {
  const { color, width, maxWidth } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      style={{ maxWidth }}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
  );
};

PlusIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlusIcon.defaultProps = {
  color: colors.white,
  width: 24,
  maxWidth: 'none',
};

export default PlusIcon;
