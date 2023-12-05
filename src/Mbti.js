import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartTest from "./HomePageRoutes/StartTest";
import Test from "./HomePageRoutes/Test";
import TestResult from "./HomePageRoutes/TestResult";
import YourResult from "./HomePageRoutes/YourResult";
import PersonalityTypes from "./HomePageRoutes/PersonalityTypes";
import TypeResult from "./HomePageRoutes/TypeResult";

import "./Mbti.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartTest />,
  },
  {
    path: `/Test`,
    element: <Test />,
  },
  {
    path: `/TestResult`,
    element: <TestResult />,
  },
  {
    path: `/YourResult`,
    element: <YourResult />,
  },
  {
    path: `/PersonalityTypes`,
    element: <PersonalityTypes />,
  },
  {
    path: `/PersonalityTypes/:id`,
    element: <TypeResult />,
  },
]);

export default function Mbti() {
  return (
    <div className="Mbti">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
