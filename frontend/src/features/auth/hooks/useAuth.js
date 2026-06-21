import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ROUTES } from '../../../constants/routes.js';
import { useAppDispatch } from '../../../hooks/useAppDispatch.js';
import { useAppSelector } from '../../../hooks/useAppSelector.js';
import { loginFailure, loginStart, loginSuccess, logout as logoutAction } from '../authSlice.js';
import { mockAuthService } from '../services/authService.js';

export function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated, loading, user } = useAppSelector((state) => state.auth);

  const login = useCallback(
    async (credentials) => {
      dispatch(loginStart());

      try {
        const response = await mockAuthService.login(credentials);
        dispatch(loginSuccess({ ...response, remember: credentials.remember }));
        toast.success('Login Successful');
        navigate(ROUTES.DISCOVER, { replace: true });
        return response;
      } catch (authError) {
        const message = authError.message || 'Something went wrong. Please try again.';
        dispatch(loginFailure(message));
        toast.error(message);
        throw authError;
      }
    },
    [dispatch, navigate],
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
    toast.success('Logged out successfully');
    navigate(ROUTES.HOME, { replace: true });
  }, [dispatch, navigate]);

  return {
    currentUser: user,
    error,
    isAuthenticated,
    loading,
    login,
    logout,
  };
}
