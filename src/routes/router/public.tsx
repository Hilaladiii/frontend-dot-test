import type { RouteObject } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import SignIn from "../../pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";

export const publicRoutes: RouteObject[] = [
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
];
