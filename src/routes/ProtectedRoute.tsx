import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const authenticated = false;
  if (!authenticated) return <Navigate to={"/auth/sign-in"} />;
  return <Outlet />;
};

export default ProtectedRoute;
