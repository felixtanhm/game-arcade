import React from "react";
import { range } from "../../utils/helperFunctions";
import { randomInt } from "../../utils/helperFunctions";

function TicTacToe() {
  const [playerTurn, setPlayerTurn] = React.useState(
    Boolean(randomInt(2, "floor"))
  );
  const [gridState, setGridState] = React.useState(range(9));

  function handleClick(e) {
    const nextGridState = [...gridState];
    nextGridState[e.target.value] = playerTurn ? "X" : "O";
    setPlayerTurn(!playerTurn);
    setGridState(nextGridState);
  }

  return (
    <div id="board-container" className="grid grid-cols-3 gap-1 p-2">
      {gridState.map((grid, index) => {
        return (
          <button
            key={index}
            value={grid}
            className="bg-white text-gray-900 hover:bg-white/10 dark:bg-white/10 dark:text-white hover:dark:bg-white/20 w-full aspect-square rounded-md grid place-content-center min-w-20 text-4xl font-semibold"
            onClick={handleClick}
          >
            {typeof grid === "string" ? grid : ""}
          </button>
        );
      })}
    </div>
  );
}

export default TicTacToe;
