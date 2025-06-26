import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ✅ Corrected import

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth(); // ✅ Use the custom hook

  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
