// src/components/AdminRoute.jsx
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/secret-admin-login" />;

  try {
    const decoded = jwtDecode(token);
    if (decoded.role === 'admin') {
      return children;
    } else {
      return <Navigate to="/secret-admin-login" />;
    }
  } catch (err) {
    return <Navigate to="/secret-admin-login" />;
  }
};

export default AdminRoute;
