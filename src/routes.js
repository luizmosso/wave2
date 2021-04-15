import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useUser } from './contexts';
import { Login, Main, Familias } from './views';

export default function Routes() {
  const { isLoggedIn, setIsLoggedIn, setUser } = useUser() || {};

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_USER_LOCALSTORAGE)
    );
    if (!storedUser) {
      setIsLoggedIn(false);
      setUser(null);
      return;
    }

    if (!isLoggedIn) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, [isLoggedIn, setIsLoggedIn, setUser]);

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Main} />
      <Route path="/familias/:id" component={Familias} />
      <Route path="/familias" component={Familias} />
      <Route path="/doacoes" component={Main} />
      <Route path="/financeiro" component={Main} />
      <Route path="/eventos" component={Main} />
      {!isLoggedIn && (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )}
    </Switch>
  );
}
