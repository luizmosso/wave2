import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FamilyContext } from '../../../contexts';
import {
  Container,
  Title,
  ListBox,
  ListItem,
  Code,
  Name,
  Endereco,
  Row,
} from './styles';
import { InputSearch } from '../../../components';

function List() {
  const [familias, setFamilias] = useState([]);
  const [searchedFamilias, setSearchedFamilias] = useState([]);
  const { getFamilies } = useContext(FamilyContext);

  const history = useHistory();

  useEffect(() => {
    const setUpFamily = async () => {
      const fams = await getFamilies();
      setFamilias(fams);
      setSearchedFamilias(fams);
    };
    setUpFamily();
  }, [getFamilies]);

  const goToFamily = (id) => {
    history.push(`/familias/${id}`);
    history.go(0);
  };

  useEffect(() => {
    history.push('/familias');
  }, []);

  return (
    <Container>
      <Title>Famílias Cadastradas</Title>
      <InputSearch
        mb={3}
        placeholder="Localizar"
        data={familias}
        searched={(searched) => setSearchedFamilias(searched)}
      />
      <ListBox>
        {searchedFamilias &&
          searchedFamilias.length > 0 &&
          searchedFamilias.map(
            ({ _id, id, membros, ativo, endereco, bairro }) => {
              const { nome } = membros[0];
              return (
                <ListItem
                  active={ativo}
                  key={id}
                  onClick={() => goToFamily(_id)}
                >
                  <Row>
                    <Code>{id}</Code>
                    <Name>{nome}</Name>
                  </Row>
                  <Endereco>{`${endereco} - ${bairro}`}</Endereco>
                </ListItem>
              );
            }
          )}
      </ListBox>
    </Container>
  );
}

export default List;
