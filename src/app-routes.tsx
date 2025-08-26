import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './guards/protected-route';

const HomeRoutes = lazy(() => import('./features/home/routes'));
const PortfolioRoutes = lazy(() => import('./features/portfolio/routes'));
const NotFound = lazy(() => import('./features/not-found/not-found.component'));

const AppRoutes: React.FC = () => (
  <Suspense
    fallback={
      <div role="status" aria-live="polite">
        Loading...
      </div>
    }
  >
    <Routes>
      {/* Feature modules */}
      <Route path="/*" element={<HomeRoutes />} />
      <Route
        path="/portfolio/*"
        element={
          <ProtectedRoute>
            <PortfolioRoutes />
          </ProtectedRoute>
        }
      />
      {/* Global catch-all for unmatched routes */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
