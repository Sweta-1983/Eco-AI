import { createSlice } from '@reduxjs/toolkit';
import { AUTH_TOKEN_KEY } from '../../constants/storage.js';

const initialState = {
  user: null,
  token: localStorage.getItem(AUTH_TOKEN_KEY),
  isAuthenticated: Boolean(localStorage.getItem(AUTH_TOKEN_KEY)),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem(AUTH_TOKEN_KEY, action.payload.token);
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem(AUTH_TOKEN_KEY);
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
