import React from "react";
import DialogTW from "../DialogTW";
import { range, randomInt } from "../../utils/helperFunctions";
import { WIN_CONDITIONS } from "../../utils/constants";

function TicTacToe() {
  const [playerTurn, setPlayerTurn] = React.useState(true);
  const [gridState, setGridState] = React.useState(range(9));
  const [gameWinner, setGameWinner] = React.useState(null);
  const currentSign = playerTurn ? "X" : "O";

  React.useEffect(() => {
    if (gameWinner) return;
    const draw = gridState.every((grid) => typeof grid === "string");
    if (draw) setGameWinner("draw");
  }, [gridState, gameWinner]);

  // Computer Play
  React.useEffect(() => {
    if (playerTurn) return;
    const validGrids = gridState.filter((grid) => typeof grid === "number");
    const computerTarget = randomInt(validGrids.length);
    evalTurn(validGrids[computerTarget]);
  }, [playerTurn]);

  function handleClick(e) {
    evalTurn(e.target.value);
  }

  function evalTurn(value) {
    const nextGridState = [...gridState];
    nextGridState[value] = currentSign;
    setPlayerTurn(!playerTurn);
    setGridState(nextGridState);
    if (checkWin(value, nextGridState))
      setGameWinner(playerTurn ? "player" : "computer");
  }

  function checkWin(value, nextGridState) {
    const possibleConditions = WIN_CONDITIONS.filter((condition) =>
      condition.includes(Number(value))
    );
    const winningCondition = possibleConditions.some((condition) =>
      condition.every((grid) => nextGridState[grid] === currentSign)
    );

    return winningCondition;
  }

  function resetGame() {
    setPlayerTurn(true);
    setGridState(range(9));
    setGameWinner(null);
  }

  return (
    <>
      <div id="board-container" className="grid grid-cols-3 gap-1 p-2">
        {gridState.map((grid, index) => {
          const filledGrid = typeof grid === "string";
          const textColor = !filledGrid
            ? ""
            : grid == "O"
            ? "text-red-600 dark:text-red-400/80"
            : "text-gray-900 dark:text-white";
          return (
            <button
              key={index}
              value={grid}
              className={`${textColor} bg-white hover:bg-white/10 dark:bg-white/10 hover:dark:bg-white/20 w-full aspect-square rounded-md grid place-content-center min-w-20 text-4xl font-semibold`}
              onClick={handleClick}
              disabled={filledGrid}
            >
              {filledGrid ? grid : ""}
            </button>
          );
        })}
      </div>
      {gameWinner && (
        <DialogTW
          icon={
            gameWinner === "draw" ? "👐" : gameWinner === "player" ? "🎉" : "👾"
          }
          title={
            gameWinner === "draw"
              ? "It's a draw!"
              : gameWinner === "player"
              ? "You won!"
              : "Computer won..."
          }
          description={"Would you like to play again?"}
          buttonCTA={"Play Again"}
          handleClick={resetGame}
        />
      )}
    </>
  );
}

export default TicTacToe;
