import React from "react";
import GuessRow from "./GuessDisplay";
import { NUM_OF_GUESSES } from "../../utils/constants";
import { range } from "../../utils/helperFunctions";

function GuessDisplay({ guessList }) {
  const rows = range(NUM_OF_GUESSES);

  return (
    <div id="guessDisplay">
      {rows.map((guess, index) => {
        return <div id="guessContainer" key={index}></div>;
      })}
    </div>
  );
}

export default GuessDisplay;
