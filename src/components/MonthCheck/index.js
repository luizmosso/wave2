import React from 'react';
import PropTypes from 'prop-types';
import { Container, Month, Label, Check } from './styles';
import withBaseStyle from '../../shared/baseStyle';

function MonthCheck(props) {
  const { data, onChange, ...rest } = props;

  const changeMonths = (month) => {
    const newData = data.map((item) => {
      if (item === month) {
        switch (month.status) {
          case 'unset':
            item.status = 'success';
            break;
          case 'success':
            item.status = 'error';
            break;
          default:
            item.status = 'unset';
            break;
        }
      }
      return item;
    });
    return newData;
  };

  return (
    <Container {...rest}>
      {data &&
        data.length > 0 &&
        data.map((month) => (
          <Month key={month.number}>
            <Label>{month.label}</Label>
            <Check
              status={month.status}
              disabled={month.disabled}
              onClick={() => onChange(changeMonths(month))}
            />
          </Month>
        ))}
    </Container>
  );
}

MonthCheck.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      status: PropTypes.string,
      number: PropTypes.number,
      disabled: PropTypes.bool,
    })
  ),
};

MonthCheck.defaultProps = {
  data: [],
};

export default withBaseStyle(MonthCheck);
