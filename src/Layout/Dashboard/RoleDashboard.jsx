import { Navigate } from 'react-router-dom';
import useRole from '../../Hooks/useRole';

export const RoleDashboard = () => {
  const [role] = useRole();
  const roles = role?.role;

  switch(roles) {
    case 'User':
      return <Navigate to="participate" replace />;
    case 'Creator':
      return <Navigate to="addcontest" replace />;
    case 'Admin':
      return <Navigate to="alluser" replace />;
    default:
      return <Navigate to="/" replace />;
  }
};