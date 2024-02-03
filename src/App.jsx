import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  const linkClassName =
    "bg-slate-200 text-slate-900 border-slate-500 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-500 dark:hover:bg-slate-700 w-full h-48 p-4 border-solid border-2 rounded-lg flex flex-col gap-1 items-center justify-center text-center";
  return (
    <div className="flex flex-col	place-items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 sm:size-3/5 md:size-2/4">
        <Link className={linkClassName} to="rockpaperscissors">
          <span>🪨📄✂️</span>
          <span className="font-semibold">Rock, Paper, Scissors</span>
        </Link>
        <Link className={linkClassName} to="tictactoe">
          <span>⭕✖️⭕</span> <span className="font-semibold">Tic Tac Toe</span>
        </Link>
        <Link className={linkClassName} to="beatthat">
          <span>🎲🎲 </span> <span className="font-semibold">Beat That</span>
        </Link>
        <Link className={linkClassName} to="wordle">
          <span>🟩🔠🟨</span> <span className="font-semibold">Wordle</span>
        </Link>
      </div>
    </div>
  );
}

export default App;
