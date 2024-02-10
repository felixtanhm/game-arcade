import React from "react";
import GuessDisplay from "./GuessDisplay";
import GuessForm from "./GuessForm";
import DialogTW from "../DialogTW";
import { NUM_OF_GUESSES, WORDS } from "../../utils/constants";
import { randomInt } from "../../utils/helperFunctions";

function Wordle() {
  const [answer, setAnswer] = React.useState(WORDS[randomInt(WORDS.length)]);
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("pending");

  function validateGuess(guess) {
    const result = [];

    const guessArr = guess.toUpperCase().split("");
    const answerArr = answer.split("");
    for (let i = 0; i < guessArr.length; i++) {
      // Check if letters are in word and in correct spot
      if (guessArr[i] === answerArr[i]) {
        result.push({
          letter: guessArr[i],
          status: "correct",
        });
        continue;
      }
      let status = "incorrect";
      // Check if letters are in word and in wrong spot
      const misplacedIndex = answerArr.findIndex(
        (char) => char === guessArr[i]
      );
      if (misplacedIndex >= 0) status = "misplaced";
      result.push({
        letter: guessArr[i],
        status,
      });
    }
    return result;
  }

  function updateGuessList(guess) {
    const validatedGuess = validateGuess(guess);
    const nextGuessList = [...guessList];
    nextGuessList.push(validatedGuess);
    setGuessList(nextGuessList);
    if (guess === answer) setGameStatus("success");
    if (nextGuessList.length === NUM_OF_GUESSES && guess !== answer)
      setGameStatus("lose");
  }

  function resetGame() {
    setAnswer(WORDS[randomInt(WORDS.length)]);
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
              ? `You guessed it!`
              : `You're out of guesses...`
          }
          description={`The word is ${answer}. Would you like to play again?`}
          buttonCTA={"Play Again"}
          handleClick={resetGame}
        />
      )}
    </div>
  );
}

export default Wordle;
