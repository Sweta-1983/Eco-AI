import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../../../constants/storage.js';

const readStorageValue = (key) => localStorage.getItem(key) || sessionStorage.getItem(key);

const parseUser = (value) => {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export const getToken = () => readStorageValue(AUTH_TOKEN_KEY);

export const getCurrentUser = () => parseUser(readStorageValue(AUTH_USER_KEY));

export const isAuthenticated = () => Boolean(getToken());

export const isPersistentSession = () => Boolean(localStorage.getItem(AUTH_TOKEN_KEY));

export const clearSession = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
  sessionStorage.removeItem(AUTH_TOKEN_KEY);
  sessionStorage.removeItem(AUTH_USER_KEY);
};

export const persistSession = ({ remember = true, token, user }) => {
  clearSession();

  const storage = remember ? localStorage : sessionStorage;
  storage.setItem(AUTH_TOKEN_KEY, token);
  storage.setItem(AUTH_USER_KEY, JSON.stringify(user));
};
