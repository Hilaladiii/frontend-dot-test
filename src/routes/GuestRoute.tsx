import { useAuthStore } from "@/stores/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { isAuthenticated, loading } = useAuthStore();

  if (loading) return null;

  if (isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default GuestRoute;
