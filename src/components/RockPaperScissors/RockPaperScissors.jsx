import React from "react";
import { PlayerContext } from "../PlayerProvider";
import DialogTW from "../DialogTW";
import { randomInt } from "../../utils/helperFunctions";
import { OPTIONS, OPTIONS_ARR } from "../../utils/constants";

function RockPaperScissors() {
  const [score1, setScore1] = React.useState(0);
  const [score2, setScore2] = React.useState(0);
  const { playerMode } = React.useContext(PlayerContext);
  const [gameStatus, setGameStatus] = React.useState({
    player1Selection: "😶‍🌫️",
    player2Selection: "😶‍🌫️",
    roundsLeft: 3,
    prevRound: null,
  });

  function handleOptionClick(e) {
    if (gameStatus.roundsLeft === 0) return;
    executeRound(e.target.value);
  }

  function computerPlay() {
    let int = randomInt(3, "floor");
    return OPTIONS_ARR[int];
  }

  function executeRound(player1Choice, player2Choice) {
    player2Choice = computerPlay();
    const prevGameStatus = { ...gameStatus };
    const nextGameStatus = {
      player1Selection: player1Choice,
      player2Selection: player2Choice,
      roundsLeft: prevGameStatus.roundsLeft - 1,
    };

    if (player1Choice === player2Choice) {
      setGameStatus({
        ...nextGameStatus,
        prevRound: "draw",
      });
      return;
    }
    if (OPTIONS[player1Choice] == player2Choice) {
      setScore1(score1 + 1);
      setGameStatus({
        ...nextGameStatus,
        prevRound: "Player 1",
      });
      return;
    } else {
      setScore2(score2 + 1);
      setGameStatus({
        ...nextGameStatus,
        prevRound: "Computer",
      });
      return;
    }
  }

  function resetGame() {
    setGameStatus({
      player1Selection: "😶‍🌫️",
      player2Selection: "😶‍🌫️",
      roundsLeft: 3,
      prevRound: null,
    });
    setScore1(0);
    setScore2(0);
  }

  return (
    <div className="flex flex-col grow justify-evenly">
      {/* Helper Text & Announcement */}
      {!gameStatus.prevRound && (
        <div className="flex flex-col">
          <h2 className="text-color font-bold text-2xl text-center">
            Pick your choice!
          </h2>
          <h2 className="text-color font-medium text-xl text-center">
            The best of 3 rounds win!
          </h2>
        </div>
      )}
      {gameStatus.prevRound && (
        <h2 className="text-color font-bold text-4xl text-center">
          {gameStatus.prevRound === "draw"
            ? "It's a draw!"
            : `${gameStatus.prevRound} wins!`}
        </h2>
      )}
      {/* Score Display */}
      <div className="flex justify-center gap-8 md:gap-16 py-4">
        {/* Player 1 */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 justify-end">
          <span className="text-5xl sm:text-6xl">
            {gameStatus.player1Selection}
          </span>
          <p className="text-color font-bold text-xl sm:text-2xl">
            {playerMode === "single" ? "Player" : "Player 1"}: {score1}
          </p>
        </div>
        {/* Player 2 */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 justify-end">
          <span className="text-5xl sm:text-6xl">
            {gameStatus.player2Selection}
          </span>
          <p className="text-color font-bold text-xl sm:text-2xl">
            {playerMode === "single" ? "Computer" : "Player 2"}: {score2}
          </p>
        </div>
      </div>
      {/* Option Selection */}
      <div className="flex flex-col md:flex-row gap-2">
        {OPTIONS_ARR.map((option) => {
          return (
            <button
              key={option}
              value={option}
              className="btn-sec-color p-4 sm:p-8 md:p-10 rounded-lg border-2 text-4xl sm:text-6xl md:text-8xl"
              onClick={handleOptionClick}
            >
              {option}
            </button>
          );
        })}
      </div>
      {/* Winner Announcement */}
      {gameStatus.roundsLeft === 0 && (
        <DialogTW
          icon={score1 === score2 ? "👐" : score1 > score2 ? "🎉" : "👾"}
          title={
            score1 === score2
              ? "It's a draw!"
              : score1 > score2
              ? "You won!"
              : "Computer won..."
          }
          description={"Would you like to play again?"}
          buttonCTA={"Play Again"}
          handleClick={resetGame}
        />
      )}
    </div>
  );
}

export default RockPaperScissors;
