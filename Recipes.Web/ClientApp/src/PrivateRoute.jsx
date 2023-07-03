import { Navigate } from 'react-router-dom';
import { useCon } from './Context';

const PrivateRoute = ({ children }) => {
  const { user } = useCon();

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;