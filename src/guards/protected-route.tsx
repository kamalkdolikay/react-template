import { Navigate } from 'react-router-dom';

// Mock authentication check (replace with real auth logic)
const isAuthenticated = (): boolean => {
  return true; // Simulate logged-in user; replace with actual auth check
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
