import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Loader } from './components/ui/Loader.jsx';
import { router } from './routes/router.jsx';

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader fullScreen label="Loading EcoStay AI" />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster position="top-right" />
    </>
  );
}
