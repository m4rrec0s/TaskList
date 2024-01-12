import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from './Pages/Home'
import Graphics from "./Pages/Graphics";
import DefaultMenu from "./components/DefaultMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultMenu />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "graphics",
        element: <Graphics />,
      },
    ]
  },
]);
