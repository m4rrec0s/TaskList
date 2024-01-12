import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from './Pages/Home'
import Graphics from "./Pages/Graphics";
import DefaultMenu from "./components/DefaultMenu";
import Messages from "./Pages/Messages";
import Calendar from "./Pages/Calendar";
import Tasks from "./Pages/Tasks";

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
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      }
    ]
  },
]);
