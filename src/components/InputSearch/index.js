import React from 'react';
import PropTypes from 'prop-types';
import { Container, InputField } from './styles';
import withBaseStyle from '../../shared/baseStyle';
import { colors } from '../../shared';
import { SearchIcon } from '../Icons';

function InputSearch(props) {
  const { placeholder, data, searched, ...rest } = props;

  const search = (text) => {
    let results = [];
    if (text !== '' && text.length > 2) {
      results = data.filter((item) => {
        const { id, membros, endereco, bairro } = item;
        const { nome } = membros[0];
        const str = `${id}${endereco}${bairro}${nome}`;
        return str
          .toString()
          .toLowerCase()
          .includes(text.toString().toLowerCase());
      });
      results = results.filter((item, pos) => results.indexOf(item) === pos);
    } else results = data;

    searched(results);
  };

  return (
    <Container {...rest}>
      <InputField
        type="text"
        onChange={(event) => search(event.target.value)}
        placeholder={placeholder}
      />
      <SearchIcon
        color={colors.lighter}
        style={{
          position: 'absolute',
          right: 12,
          top: 14,
        }}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

InputSearch.defaultProps = {
  onChange: () => {},
  value: null,
};

export default withBaseStyle(InputSearch);
