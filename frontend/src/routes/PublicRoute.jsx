import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector.js';
import { ROUTES } from '../constants/routes.js';

export function PublicRoute() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate replace to={ROUTES.DISCOVER} />;
  }

  return <Outlet />;
}
