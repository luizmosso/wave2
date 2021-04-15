/* eslint-disable no-undef */
import { getDefaultRequestData, refreshToken } from './shared';

const apiPath = `${process.env.REACT_APP_API_URL}/familia`;

export const getFamilies = async (institutionId) => {
  await refreshToken();
  const options = getDefaultRequestData('GET', null, true);
  const url = new URL(`${apiPath}/byInstitution/${institutionId}`);
  const response = await fetch(url, options);
  return await response.json();
};

export const getFamily = async (id, institution) => {
  await refreshToken();
  const options = getDefaultRequestData('GET', null, true);
  const url = new URL(`${apiPath}/${id}/${institution}`);
  const response = await fetch(url, options);
  return await response.json();
};

export const insertFamily = async (family) => {
  await refreshToken();
  const options = getDefaultRequestData('POST', JSON.stringify(family), true);
  const url = new URL(apiPath);
  const response = await fetch(url, options);
  return await response.json();
};

export const updateFamily = async ({ _id, ...family }) => {
  await refreshToken();
  const options = getDefaultRequestData('PUT', JSON.stringify(family), true);
  const url = new URL(`${apiPath}/${_id}`);
  const response = await fetch(url, options);
  return await response.json();
};
