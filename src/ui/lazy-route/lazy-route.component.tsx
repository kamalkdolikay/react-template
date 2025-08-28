import { Suspense } from 'react';
import Loader from '@/ui/loader/loader.component';

// Suspense wrapper for lazy-loaded components
const LazyRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => (
  <Suspense fallback={<Loader />}>{element}</Suspense>
);

export default LazyRoute;
