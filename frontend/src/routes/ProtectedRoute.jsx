import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector.js';
import { ROUTES } from '../constants/routes.js';

export function ProtectedRoute() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to={ROUTES.LOGIN} />;
  }

  return <Outlet />;
}
