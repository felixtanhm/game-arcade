import React from "react";
import { PlayerContext } from "../PlayerProvider";

function RockPaperScissors() {
  const [score1, setScore1] = React.useState(0);
  const [score2, setScore2] = React.useState(0);
  const { playerMode } = React.useContext(PlayerContext);
  const [gameStatus, setGameStatus] = React.useState({
    player1Selection: null,
    player2Selection: null,
    roundsLeft: 3,
    prevRound: null,
  });

  const OPTIONS = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  const OPTIONS_ARR = Object.keys(OPTIONS);
  console.log(score1);
  console.log(gameStatus);

  function handleOptionClick(e) {
    console.log("option clicked");
    if (gameStatus.roundsLeft === 0) return;
    executeRound(e.target.value);
  }

  function computerPlay() {
    let int = Math.floor(Math.random() * 3);
    return OPTIONS_ARR[int];
  }

  function executeRound(player1Choice, player2Choice) {
    const comChoice = computerPlay();
    if (player1Choice === comChoice) {
      const prevGameStatus = { ...gameStatus };
      setGameStatus({
        ...gameStatus,
        roundsLeft: prevGameStatus.roundsLeft - 1,
        prevRound: "draw",
      });
    }
    if (OPTIONS[player1Choice] == comChoice) {
      const prevGameStatus = { ...gameStatus };
      setScore1(score1 + 1);
      setGameStatus({
        ...gameStatus,
        roundsLeft: prevGameStatus.roundsLeft - 1,
        prevRound: "player1",
      });
    } else {
      const prevGameStatus = { ...gameStatus };
      setScore2(score2 + 1);
      setGameStatus({
        ...gameStatus,
        roundsLeft: prevGameStatus.roundsLeft - 1,
        prevRound: "player2",
      });
    }
  }

  return (
    <div>
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
      {/* Option Selection */}
      <div className="flex gap-2">
        {OPTIONS_ARR.map((option) => {
          let emoji;
          if (option === "rock") emoji = "🪨";
          if (option === "paper") emoji = "📄";
          if (option === "scissors") emoji = "✂️";
          return (
            <button
              key={option}
              value={option}
              className="btn-sec-color p-8 rounded-lg border-2 text-6xl"
              onClick={handleOptionClick}
            >
              {emoji}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RockPaperScissors;
