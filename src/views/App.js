import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer, GlobalStyle } from '../shared/GlobalStyle';
import { UserProvider, InstitutionProvider } from '../contexts';
import Routes from '../routes';

function App() {
  return (
    <Router>
      <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-left">
        <UserProvider>
          <InstitutionProvider>
            <AppContainer>
              <GlobalStyle />
              <Routes />
            </AppContainer>
          </InstitutionProvider>
        </UserProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
