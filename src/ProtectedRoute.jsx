import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/auth.context";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log(loading, isAuthenticated);
  if (loading) return <h1>Loading...</h1>;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;
  return <Outlet />;
};
