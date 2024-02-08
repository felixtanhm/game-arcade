import React from "react";
import GuessDisplay from "./GuessDisplay";
import GuessForm from "./GuessForm";
import DialogTW from "../DialogTW";
import { WORDS } from "../../utils/constants";
import { randomInt } from "../../utils/helperFunctions";

function Wordle() {
  const [answer, setAnswer] = React.useState(
    WORDS[randomInt(WORDS.length, "floor")]
  );
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("pending");
  console.log(answer);

  function validateGuess(guess) {}

  function updateGuessList(guess) {
    const nextGuessList = [...guessList];
    nextGuessList.push(guess);
    setGuessList(nextGuessList);
  }

  function resetGame() {
    setAnswer(WORDS[randomInt(WORDS.length, "floor")]);
    setGuessList([]);
    setGameStatus("pending");
  }

  return (
    <div>
      <GuessDisplay data={guessList} />
      <GuessForm updateGuessList={updateGuessList} />
      {gameStatus !== "pending" && (
        <DialogTW
          icon={gameStatus === "success" ? "🎉" : "👾"}
          title={
            gameStatus === "success"
              ? "You guessed the word!"
              : "You're out of guesses..."
          }
          description={"Would you like to play again?"}
          buttonCTA={"Play Again"}
          handleClick={resetGame}
        />
      )}
    </div>
  );
}

export default Wordle;
