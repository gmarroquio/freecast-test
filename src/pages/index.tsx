import { Home } from "./Home";
import { FiveDays } from "./5days";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/5days",
        element: <FiveDays />,
      },
    ],
  },
]);
