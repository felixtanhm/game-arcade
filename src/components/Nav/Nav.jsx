import React from "react";
import { Link } from "react-router-dom";
import * as Switch from "@radix-ui/react-switch";
import { PlayerContext } from "../PlayerProvider";

function Nav({ route = "/" }) {
  const { playerMode, setPlayerMode } = React.useContext(PlayerContext);
  if (route === "/") {
    return (
      <>
        <div className="sm:size-3/5 md:size-2/4">
          {/* Toggle Input */}
          <div className="flex justify-center">
            <label
              className="text-color font-semibold pr-4"
              htmlFor="player-mode"
            >
              MultiPlayer Mode
            </label>
            <Switch.Root
              className="toggle"
              id="player-mode"
              checked={playerMode === "multi"}
              onCheckedChange={() => {
                playerMode === "single"
                  ? setPlayerMode("multi")
                  : setPlayerMode("single");
              }}
            >
              <Switch.Thumb className="toggle-thumb" />
            </Switch.Root>
          </div>
          {/* Nav Options */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2">
            <Link
              className="btn-sec-color w-full h-48 p-4 border-solid border-2 rounded-lg flex flex-col gap-1 items-center justify-center text-center"
              to="rockpaperscissors"
            >
              <span>🪨📄✂️</span>
              <span className="font-semibold">Rock, Paper, Scissors</span>
            </Link>
            <Link
              className="btn-sec-color w-full h-48 p-4 border-solid border-2 rounded-lg flex flex-col gap-1 items-center justify-center text-center"
              to="tictactoe"
            >
              <span>⭕✖️⭕</span>{" "}
              <span className="font-semibold">Tic Tac Toe</span>
            </Link>
            <Link
              className="btn-sec-color w-full h-48 p-4 border-solid border-2 rounded-lg flex flex-col gap-1 items-center justify-center text-center"
              to="beatthat"
            >
              <span>🎲🎲 </span>{" "}
              <span className="font-semibold">Beat That</span>
            </Link>
            <Link
              className="btn-sec-color w-full h-48 p-4 border-solid border-2 rounded-lg flex flex-col gap-1 items-center justify-center text-center"
              to="wordle"
            >
              <span>🟩🔠🟨</span> <span className="font-semibold">Wordle</span>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex w-full p-4 justify-center items-center">
        <Link
          className="btn-sec-color border-2 rounded-lg p-2 font-semibold absolute left-4"
          to="/"
        >
          🕹️ Back to Selection
        </Link>
        <div className="flex flex-col text-color items-center	">
          <span className="font-bold text-xl">🪨 📄 ✂️</span>
          <p className="font-bold text-2xl">Rock, Paper, Scissors</p>
        </div>
      </div>
    );
  }
}

export default Nav;
