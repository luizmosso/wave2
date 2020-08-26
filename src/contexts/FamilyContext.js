import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
  const familyURL = `${process.env.REACT_APP_API_URL}/familia`;
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  const getFamilies = async () => {
    try {
      const url = new URL(familyURL);
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) throw Error(response.statusText);
      return await response.json();
    } catch (error) {
      return error;
    }
  };

  const getFamily = async (id) => {
    try {
      const url = new URL(`${familyURL}/${id}`);
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) throw Error(response.statusText);
      return await response.json();
    } catch (error) {
      return error;
    }
  };

  const insertFamily = async (family) => {
    try {
      const url = new URL(familyURL);
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(family),
      });
      if (!response.ok) throw Error(response.statusText);
      return await response.json();
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  const updateFamily = async (family) => {
    try {
      const url = new URL(`${familyURL}/${family._id}`);
      const response = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(family),
      });
      if (!response.ok) throw Error(response.statusText);
      return await response.json();
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  return (
    <FamilyContext.Provider
      value={{
        getFamilies,
        getFamily,
        insertFamily,
        updateFamily,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

FamilyProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};
