import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>; // or spinner
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
