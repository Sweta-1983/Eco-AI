import { createSlice } from '@reduxjs/toolkit';
import { clearSession, getCurrentUser, getToken, isAuthenticated, isPersistentSession, persistSession } from './utils/session.js';

const initialState = {
  user: getCurrentUser(),
  token: getToken(),
  isAuthenticated: isAuthenticated(),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      persistSession(action.payload);
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
      clearSession();
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      clearSession();
    },
    setUser: (state, action) => {
      state.user = action.payload;
      const token = getToken();
      if (token) {
        persistSession({ remember: isPersistentSession(), token, user: action.payload });
      }
    },
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      persistSession(action.payload);
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      clearSession();
    },
  },
});

export const { clearCredentials, loginFailure, loginStart, loginSuccess, logout, setCredentials, setUser } = authSlice.actions;
export default authSlice.reducer;
