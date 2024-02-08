import React from "react";
import GuessDisplay from "./GuessDisplay";
import GuessForm from "./GuessForm";
import { WORDS } from "../../utils/constants";
import { randomInt } from "../../utils/helperFunctions";

function Wordle() {
  const [answer, setAnswer] = React.useState(
    WORDS[randomInt(WORDS.length, "floor")]
  );
  const [guessList, setGuessList] = React.useState([]);
  console.log(answer);

  function updateGuessList(guess) {
    const nextGuessList = [...guessList];
    nextGuessList.push(guess);
    setGuessList(nextGuessList);
  }

  return (
    <div>
      <GuessDisplay data={guessList} />
      <GuessForm updateGuessList={updateGuessList} />
    </div>
  );
}

export default Wordle;
