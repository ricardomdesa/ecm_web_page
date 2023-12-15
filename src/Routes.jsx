import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import PortifolioPage from "./PortifolioPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "portifolio",
    element: <PortifolioPage />,
  },
]);
export default routes;
