import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const authenticated = false;
  if (authenticated) return <Navigate to={"/home"} />;
  return <Outlet />;
};

export default GuestRoute;
