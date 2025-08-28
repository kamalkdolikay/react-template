import { Navigate, createBrowserRouter } from 'react-router-dom';
import HomeRoutes from './features/home/home-routes';
import PortfolioRoutes from './features/portfolio/portfolio-routes';
import NotFound from './features/not-found/not-found.component';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <HomeRoutes />,
  },
  {
    path: '/portfolio/*',
    element: <PortfolioRoutes />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
]);

export default router;
