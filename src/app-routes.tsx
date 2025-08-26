import { Routes, Route, Navigate } from 'react-router-dom';
import HomeRoutes from './features/home/routes';
import PortfolioRoutes from './features/portfolio/routes';
import NotFound from './features/not-found/not-found.component';

const AppRoutes = () => (
  <Routes>
    {/* Feature modules */}
    <Route path="/*" element={<HomeRoutes />} />
    <Route path="/portfolio/*" element={<PortfolioRoutes />} />
    {/* Global catch-all for unmatched routes */}
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/404" replace />} />
  </Routes>
);

export default AppRoutes;
