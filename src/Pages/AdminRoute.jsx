import { Navigate } from "react-router-dom";
import { useAuth } from "../routes/Auth/AuthContext";

const AdminRoute = ({ children }) => {
  const { user, userData, loading } = useAuth();
  console.log("ADMIN ROUTE CHECK", {
    role: userData?.role,
    loading,
    file: "AdminRoute.jsx",
  });

  // 🔒 Wait until auth + Firestore data is ready
  if (loading || !userData) {
    return <p>Checking admin access...</p>;
  }

  // 🔐 Allow only admin
  if (userData.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
