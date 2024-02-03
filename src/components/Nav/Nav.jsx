import React from "react";
import { Link } from "react-router-dom";
import * as Switch from "@radix-ui/react-switch";
import { PlayerContext } from "../PlayerProvider";

function Nav({ type }) {
  const { playerMode, setPlayerMode } = React.useContext(PlayerContext);
  if (type === "main") {
    return (
      <>
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
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 sm:size-3/5 md:size-2/4">
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
            <span>🎲🎲 </span> <span className="font-semibold">Beat That</span>
          </Link>
          <Link
            className="btn-sec-color w-full h-48 p-4 border-solid border-2 rounded-lg flex flex-col gap-1 items-center justify-center text-center"
            to="wordle"
          >
            <span>🟩🔠🟨</span> <span className="font-semibold">Wordle</span>
          </Link>
        </div>
        ;
      </>
    );
  } else {
    return <div id="test"></div>;
  }
}

export default Nav;
