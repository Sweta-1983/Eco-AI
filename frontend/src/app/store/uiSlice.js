import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  globalLoading: false,
  error: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setGlobalLoading, setError, clearError } = uiSlice.actions;
export default uiSlice.reducer;
