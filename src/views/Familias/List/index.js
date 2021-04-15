/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Switch from 'rc-switch';
import { useInstitution } from '../../../contexts';
import { getFamilies } from '../../../services/family';
import {
  Container,
  Title,
  ListBox,
  ListItem,
  Code,
  Name,
  Endereco,
  Row,
  SearchContainer,
  SwitchContainer,
} from './styles';
import { SwitchStyle } from '../styles';
import { InputSearch } from '../../../components';

function List() {
  const [familias, setFamilias] = useState([]);
  const [searchedFamilias, setSearchedFamilias] = useState([]);
  const [filteredFamilias, setFilteredFamilias] = useState([]);
  const [onlyActives, setOnlyActives] = useState(true);

  const history = useHistory();
  const { institution } = useInstitution();

  useEffect(() => {
    const setUpFamily = async () => {
      const fams = await getFamilies(institution._id);
      setFamilias(fams);
      setSearchedFamilias(fams);
    };
    if (institution) setUpFamily();
  }, [institution]);

  const goToFamily = (id) => {
    history.push(`/familias/${id}`);
    history.go(0);
  };

  const filterFamiliasByStatus = () => {
    const filtered = searchedFamilias.filter(
      ({ ativo }) => ativo === onlyActives
    );
    setFilteredFamilias(filtered);
  };

  useEffect(() => {
    filterFamiliasByStatus();
  }, [searchedFamilias, onlyActives]);

  useEffect(() => {
    history.push('/familias');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>Famílias Cadastradas</Title>
      <SearchContainer>
        <InputSearch
          placeholder="Localizar"
          data={familias}
          searched={(searched) => setSearchedFamilias(searched)}
        />
        <SwitchContainer>
          <SwitchStyle>
            <Switch
              checked={onlyActives}
              onChange={setOnlyActives}
              checkedChildren={'ativas'}
              unCheckedChildren={'inativas'}
            />
          </SwitchStyle>
        </SwitchContainer>
      </SearchContainer>
      <ListBox>
        {filteredFamilias &&
          filteredFamilias.length > 0 &&
          filteredFamilias.map(
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
