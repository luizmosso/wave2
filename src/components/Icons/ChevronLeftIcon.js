import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../shared';

const ChevronLeftIcon = (props) => {
  const { color, width, maxWidth } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      style={{ maxWidth }}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
    </svg>
  );
};

ChevronLeftIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronLeftIcon.defaultProps = {
  color: colors.white,
  width: 18,
  maxWidth: 'none',
};

export default ChevronLeftIcon;
