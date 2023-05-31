import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home"
import FeaturesPage from "./pages/FeaturesPage"
import Memberships from "./pages/Memberships"
import Cards from "./pages/Cards"
import Services from "./pages/Services"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/memberships",
    element: <Memberships />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);