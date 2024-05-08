import {
  Routes,
  Route,
  Navigate,
  // Navigate,w
} from 'react-router-dom';
import { HomePage } from '../shop/pages/HomePage';
import { LoginPage } from '../auth/pages';
import { ProtectedRoute } from '../auth/components/ProtectedRoute';
export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<Navigate to='/login' />} />
      <Route
        path='/products'
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
