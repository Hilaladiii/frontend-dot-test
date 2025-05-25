import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./router/public";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";
import { privateRoutes } from "./router/private";

const routes = createBrowserRouter([
  {
    element: <GuestRoute />,
    children: publicRoutes,
  },
  {
    element: <ProtectedRoute />,
    children: privateRoutes,
  },
]);

export default routes;
