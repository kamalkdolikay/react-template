import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import LazyRoute from '@/ui/lazy-route/lazy-route.component';

const Home = lazy(() => import('./components/home.component'));

const HomeRoutes: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: <LazyRoute element={<Home />} />,
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default HomeRoutes;
