import { useAuthStore } from "@/stores/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuthStore();

  if (loading) return null;

  if (!isAuthenticated) return <Navigate to="/auth/sign-in" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
