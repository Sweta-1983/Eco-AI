import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar.jsx';

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
