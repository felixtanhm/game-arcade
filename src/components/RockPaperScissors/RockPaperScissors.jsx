import React from "react";
import { PlayerContext } from "../PlayerProvider";

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
  const OPTIONS = {
    "🪨": "✂️",
    "📄": "🪨",
    "✂️": "📄",
  };
  const OPTIONS_ARR = Object.keys(OPTIONS);
  console.log(score1);
  console.log(gameStatus);

  function handleOptionClick(e) {
    console.log(`${e.target.value} clicked`);
    if (gameStatus.roundsLeft === 0) return;
    executeRound(e.target.value);
  }

  function computerPlay() {
    let int = Math.floor(Math.random() * 3);
    return OPTIONS_ARR[int];
  }

  function executeRound(player1Choice, player2Choice) {
    player2Choice = computerPlay();
    if (player1Choice === player2Choice) {
      const prevGameStatus = { ...gameStatus };
      setGameStatus({
        player1Selection: player1Choice,
        player2Selection: player2Choice,
        roundsLeft: prevGameStatus.roundsLeft - 1,
        prevRound: "draw",
      });
      return;
    }
    if (OPTIONS[player1Choice] == player2Choice) {
      const prevGameStatus = { ...gameStatus };
      setScore1(score1 + 1);
      setGameStatus({
        player1Selection: player1Choice,
        player2Selection: player2Choice,
        roundsLeft: prevGameStatus.roundsLeft - 1,
        prevRound: "player1",
      });
      return;
    } else {
      const prevGameStatus = { ...gameStatus };
      setScore2(score2 + 1);
      setGameStatus({
        player1Selection: player1Choice,
        player2Selection: player2Choice,
        roundsLeft: prevGameStatus.roundsLeft - 1,
        prevRound: "player2",
      });
      return;
    }
    console.log(`Player1: ` + player1Choice);
    console.log(`Player2: ` + player2Choice);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header  */}
      <div className="flex flex-col gap-4">
        <h1 className="text-color font-bold text-5xl text-center">🪨 📄 ✂️</h1>
        <div className="flex flex-col">
          <h2 className="text-color font-bold text-2xl text-center">
            Rock, Paper, Scissors
          </h2>
          <h2 className="text-color font-medium text-xl text-center">
            The best of 3 rounds win!
          </h2>
        </div>
      </div>
      {/* Score Display */}
      <div className="flex justify-center gap-8 md:gap-16 py-4">
        {/* Player 1 */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 justify-end">
          <span className="text-5xl sm:text-6xl">
            {gameStatus.player1Selection}
          </span>
          <p className="text-color font-bold text-xl sm:text-2xl">
            Player 1: {score1}
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
              className="btn-sec-color p-4 sm:p-8 rounded-lg border-2 text-4xl sm:text-6xl"
              onClick={handleOptionClick}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RockPaperScissors;
