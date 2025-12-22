import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // 🔥 wait for Firebase auth check
  if (loading) return null; // or loader

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
