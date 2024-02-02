import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import RockPaperScissors from "./components/RockPaperScissors";
import TicTacToe from "./components/TicTacToe";
import Wordle from "./components/Wordle";
import BeatThat from "./components/BeatThat";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App route="/" />,
  },
  {
    path: "rockpaperscissors",
    element: <RockPaperScissors />,
  },
  {
    path: "tictactoe",
    element: <TicTacToe />,
  },
  {
    path: "wordle",
    element: <Wordle />,
  },
  {
    path: "beatthat",
    element: <BeatThat />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
