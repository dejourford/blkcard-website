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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);