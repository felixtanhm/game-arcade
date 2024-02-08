import React from "react";
import GuessDisplay from "./GuessDisplay";
import GuessForm from "./GuessForm";
import { NUM_OF_GUESSES, WORDS } from "../../utils/constants";
import { randomInt, range } from "../../utils/helperFunctions";

function Wordle() {
  const [answer, setAnswer] = React.useState(
    WORDS[randomInt(WORDS.length, "floor")]
  );
  const [guessList, setGuessList] = React.useState(["HELLO", "WORLD"]);

  console.log(answer);
  console.log(guessList);
  return (
    <div>
      <GuessDisplay guessList={guessList} />
      <GuessForm updateGuessList={setGuessList} />
    </div>
  );
}

export default Wordle;
