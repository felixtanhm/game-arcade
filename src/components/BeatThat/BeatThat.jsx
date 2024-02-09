import React from "react";
import Button from "../Button";
import Dice from "./Dice";
import DialogTW from "../DialogTW";
import { randomInt } from "../../utils/helperFunctions";

function BeatThat() {
  const [loading, setLoading] = React.useState(false);
  const [score1, setScore1] = React.useState(0);
  const [score2, setScore2] = React.useState(0);
  const [currentRoll, setCurrentRoll] = React.useState([
    rollDice(),
    rollDice(),
  ]);

  React.useEffect(() => {
    if (!loading) return;

    const stopRolling = window.setTimeout(() => {
      const comDice1 = rollDice();
      const comDice2 = rollDice();
      comDice1 > comDice2
        ? setScore2(comDice1 + comDice2)
        : setScore2(comDice2 + comDice1);
      setCurrentRoll([rollDice(), rollDice()]);
      setLoading(false);
    }, "1000");

    return () => {
      window.clearTimeout(stopRolling);
    };
  }, [loading]);

  function rollDice() {
    const num = randomInt(6, "ceil");
    return String(num);
  }

  function handleRollClick() {
    setLoading(true);
  }

  function handleDiceClick(value) {
    if (score2 === 0) return;
    currentRoll[0] == value
      ? setScore1(value + currentRoll[1])
      : setScore1(value + currentRoll[0]);
  }

  function resetGame() {
    setScore1(0);
    setScore2(0);
    setCurrentRoll[(rollDice(), rollDice())];
  }

  return (
    <div className="flex flex-col grow justify-evenly px-4">
      {/* Helper Text & Announcement */}
      <div className="flex flex-col">
        <h2 className="text-color font-bold text-lg md:text-2xl text-center">
          {score2 ? "Select a dice!" : "Roll your dice!"}
        </h2>
        <h2 className="text-color font-medium text-md md:text-xl text-center">
          {score2
            ? "The selected dice will be the first number."
            : "Assemble the larger number with your roll results!"}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
        {/* Player Dice */}
        <div className="flex flex-col items-center gap-4 md:gap-10 justify-end">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {!loading && (
              <>
                <Dice
                  value={currentRoll[0]}
                  showValue
                  onClick={handleDiceClick}
                />
                <Dice
                  value={currentRoll[1]}
                  showValue
                  onClick={handleDiceClick}
                />
              </>
            )}
            {loading && (
              <>
                <Dice value={currentRoll[0]} showValue rotate />
                <Dice value={currentRoll[1]} showValue rotate />
              </>
            )}
          </div>
          <p className="text-color font-bold text-lg md:text-2xl">Player</p>
        </div>
        {/* Computer Dice */}
        <div className="flex flex-col items-center gap-4 md:gap-10 justify-end">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {!loading && (
              <>
                <Dice
                  value={String(score2).split("")[0]}
                  showValue={score1 !== 0 ? true : false}
                />
                <Dice
                  value={String(score2).split("")[1]}
                  showValue={score1 !== 0 ? true : false}
                />
              </>
            )}
            {loading && (
              <>
                <Dice value={4} rotate />
                <Dice value={4} rotate />
              </>
            )}
          </div>
          <p className="text-color font-bold text-lg md:text-2xl">Computer</p>
        </div>
      </div>
      {/* Roll Button */}
      {score2 === 0 && (
        <Button variant="soft" onClick={handleRollClick}>
          Roll Dice
        </Button>
      )}
      {/* Winner Announcement */}
      {score1 !== 0 && (
        <DialogTW
          icon={score1 === score2 ? "👐" : score1 > score2 ? "🎉" : "👾"}
          title={
            score1 === score2
              ? "It's a draw!"
              : score1 > score2
              ? `You won!`
              : `Computer won...`
          }
          description={`Your submitted number is ${score1}. Computer's number is ${score2}.          
          Would you like to play again?`}
          buttonCTA={"Play Again"}
          handleClick={resetGame}
        />
      )}
    </div>
  );
}

export default BeatThat;
