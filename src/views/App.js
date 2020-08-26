import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { AppContainer, GlobalStyle } from './styles';
import { UserProvider } from '../contexts';
import Login from '../views/Login';
import Main from '../views/Main';
import Familias from '../views/Familias';

function App() {
  return (
    <Router>
      <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-left">
        <UserProvider>
          <Routes />
        </UserProvider>
      </ToastProvider>
    </Router>
  );
}

function Routes() {
  const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    const storedUser = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE);
    const user = storedUser ? JSON.parse(storedUser) : null;
    return (
      <Route
        {...rest}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Switch>
        <AuthenticatedRoute exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <AuthenticatedRoute exact path="/familias" component={Familias} />
        <AuthenticatedRoute exact path="/familias/:id" component={Familias} />
        <AuthenticatedRoute path="/doacoes" component={Main} />
        <AuthenticatedRoute path="/financeiro" component={Main} />
        <AuthenticatedRoute path="/eventos" component={Main} />
      </Switch>
    </AppContainer>
  );
}

export default App;
