import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector.js';
import { ROUTES } from '../constants/routes.js';
import { getToken } from '../features/auth/utils/session.js';

export function PublicRoute() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const token = getToken();

  if (token || isAuthenticated) {
    return <Navigate replace to={ROUTES.DISCOVER} />;
  }

  return <Outlet />;
}
