import React, { useEffect, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import {
  Container,
  Box,
  Form,
  Fields,
  SubTitle,
  Info,
  InfoCover,
  InfoText,
  InfoTitle,
  InfoDescription,
} from './styles';
import { Logo, Input, Button } from '../../components';
import { UserContext } from '../../contexts';

function Login() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const { login, logout } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const { addToast } = useToasts();

  useEffect(() => {
    logout();
  }, []);

  const doLogin = async () => {
    const response = await login(email, pwd);
    if (response.error) {
      addToast(response.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    } else history.push('/');
  };

  return (
    <Container>
      <Box fullWidth={isTabletOrMobile}>
        <Form fullWidth={isTabletOrMobile}>
          <Logo variant="dark" />
          <SubTitle>Entre com sua conta</SubTitle>
          <Fields px={4} mt={5}>
            <Input
              label="E-mail"
              type="email"
              placeholder="seu@email.com.br"
              value={email}
              onChange={setEmail}
            />
            <Input
              label="Senha"
              type="password"
              mt={2}
              value={pwd}
              onChange={setPwd}
            />
            <Button mt={4} onClick={doLogin}>
              Entrar
            </Button>
          </Fields>
        </Form>
        {!isTabletOrMobile && (
          <Info>
            <InfoCover>
              <InfoText>
                <InfoTitle>Auxilie com Qualidade</InfoTitle>
                <InfoDescription>
                  A Tecnologia à sua disposição para aumentar a organização,
                  controle e a efetividade da sua atividade social.
                </InfoDescription>
              </InfoText>
            </InfoCover>
          </Info>
        )}
      </Box>
    </Container>
  );
}

export default Login;
