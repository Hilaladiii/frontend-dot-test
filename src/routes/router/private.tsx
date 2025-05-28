import MainLayout from "@/components/layout/MainLayout";
import Quiz from "@/pages/quiz";
import Result from "@/pages/result";
import Setup from "@/pages/setup";
import type { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject[] = [
  {
    Component: MainLayout,
    children: [
      {
        path: "/setup",
        element: <Setup />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
];
