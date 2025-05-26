import Home from "@/pages/home";
import type { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
];
