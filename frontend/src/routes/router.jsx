import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/routes.js';
import { ProtectedRoute } from './ProtectedRoute.jsx';
import { PublicRoute } from './PublicRoute.jsx';

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const PrivateLayout = lazy(() => import('../layouts/PrivateLayout'));

const Home = lazy(() => import('../pages/Home.jsx'));
const Login = lazy(() => import('../features/auth/pages/LoginPage.jsx'));
const Register = lazy(() => import('../features/auth/pages/RegisterPage.jsx'));
const ForgotPassword = lazy(() => import('../features/auth/pages/ForgotPasswordPage.jsx'));
const Discover = lazy(() => import('../pages/Discover.jsx'));
const TripPlanner = lazy(() => import('../pages/TripPlanner.jsx'));
const Bookings = lazy(() => import('../pages/Bookings.jsx'));
const Community = lazy(() => import('../pages/Community.jsx'));
const Profile = lazy(() => import('../pages/Profile.jsx'));
const TrustDashboard = lazy(() => import('../pages/TrustDashboard.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      {
        element: <PublicRoute />,
        children: [
          { path: ROUTES.LOGIN, element: <Login /> },
          { path: ROUTES.REGISTER, element: <Register /> },
          { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPassword /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          { path: ROUTES.DISCOVER, element: <Discover /> },
          { path: ROUTES.PLANNER, element: <TripPlanner /> },
          { path: '/planner', element: <TripPlanner /> },
          { path: ROUTES.BOOKINGS, element: <Bookings /> },
          { path: '/booking', element: <Bookings /> },
          { path: ROUTES.COMMUNITY, element: <Community /> },
          { path: ROUTES.PROFILE, element: <Profile /> },
          { path: ROUTES.TRUST, element: <TrustDashboard /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
