import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center">
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
          <span>⭕✖️⭕</span> <span className="font-semibold">Tic Tac Toe</span>
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
    </div>
  );
}

export default App;
