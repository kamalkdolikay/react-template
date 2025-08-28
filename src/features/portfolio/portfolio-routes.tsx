import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import ProtectedRoute from '@/guards/protected-route';
import LazyRoute from '@/ui/lazy-route/lazy-route.component';

const Portfolio = lazy(() => import('./components/portifolio.component'));

const PortfolioRoutes: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <LazyRoute element={<Portfolio />} />
        </ProtectedRoute>
      ),
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default PortfolioRoutes;
