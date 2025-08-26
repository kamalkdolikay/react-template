import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Home from './components/home.component';

const HomeRoutes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default HomeRoutes;
