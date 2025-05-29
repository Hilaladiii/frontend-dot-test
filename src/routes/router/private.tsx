import MainLayout from "@/components/layout/MainLayout";
import QuizSavedLayout from "@/components/layout/QuizSavedLayout";
import Quiz from "@/pages/quiz";
import Result from "@/pages/result";
import Setup from "@/pages/setup";
import type { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject[] = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        Component: QuizSavedLayout,
        children: [
          {
            index: true,
            element: <Setup />,
          },
          {
            path: "quiz",
            element: <Quiz />,
          },
        ],
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
];
