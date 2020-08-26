import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const usuarioURL = `${process.env.REACT_APP_API_URL}/usuario`;
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  const login = async (email, pwd) => {
    try {
      const url = new URL(`${usuarioURL}/login`);
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, pwd }),
      });
      if (!response.ok || response.status === 204)
        throw Error(response.statusText);
      const usuario = await response.json();
      if (usuario.error) throw Error(usuario.error);
      setUser(usuario);
      localStorage.setItem('userData', JSON.stringify(usuario));
      return usuario;
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  return (
    <UserContext.Provider value={{ login, user, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};
