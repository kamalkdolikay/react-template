import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './components/portifolio.component';

const PortfolioRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Portfolio />}></Route>
    <Route path="*" element={<Navigate to="/404" replace />}></Route>
  </Routes>
);

export default PortfolioRoutes;
