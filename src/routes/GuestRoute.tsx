import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/home" replace />;

  return <Outlet />;
};

export default GuestRoute;
