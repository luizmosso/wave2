/* eslint-disable no-undef */
import { getDefaultRequestData } from './shared';

const apiPath = `${process.env.REACT_APP_API_URL}/usuario`;

export async function login(email, pwd) {
  const options = getDefaultRequestData('POST', JSON.stringify({ email, pwd }));
  const url = new URL(`${apiPath}/login`);
  const response = await fetch(url, options);

  if (!response.ok || response.status === 204) throw Error(response.statusText);
  return await response.json();
}

export async function refreshUserToken(_id, refreshToken) {
  const options = getDefaultRequestData(
    'POST',
    JSON.stringify({ _id, refreshToken })
  );
  const url = new URL(`${apiPath}/refreshToken`);
  const response = await fetch(url, options);

  if (!response.ok || response.status === 204) throw Error(response.statusText);
  return await response.json();
}
