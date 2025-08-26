import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./components/home.component'));

const HomeRoutes: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div role="status" aria-live="polite">
          Loading...
        </div>
      }
    >
      {useRoutes([
        { path: '/', element: <Home /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ])}
    </Suspense>
  );
};

export default HomeRoutes;
