import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
