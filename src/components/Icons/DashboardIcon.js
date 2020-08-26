import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../shared';

const DashboardIcon = (props) => {
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
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  );
};

DashboardIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DashboardIcon.defaultProps = {
  color: colors.white,
  width: 18,
  maxWidth: 'none',
};

export default DashboardIcon;
