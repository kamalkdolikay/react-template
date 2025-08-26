import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Portfolio = lazy(() => import('./components/portifolio.component'));

const PortfolioRoutes: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Portfolio />}></Route>
      <Route path="*" element={<Navigate to="/404" replace />}></Route>
    </Routes>
  </Suspense>
);

export default PortfolioRoutes;
