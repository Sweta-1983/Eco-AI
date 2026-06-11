import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../components/layout';

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
