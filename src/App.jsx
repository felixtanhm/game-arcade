import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <Link to="rockpaperscissors">RockPaperScissors</Link>
      <Link to="tictactoe">TicTacToe</Link>
      <Link to="beatthat">Beat That</Link>
      <Link to="wordle">Wordle</Link>
    </div>
  );
}

export default App;
