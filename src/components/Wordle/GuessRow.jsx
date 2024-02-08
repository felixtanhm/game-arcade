import React from "react";
import { range } from "../../utils/helperFunctions";
import { WORD_LENGTH } from "../../utils/constants";

function GuessRow({ guess }) {
  const letters = range(WORD_LENGTH);

  return (
    <p id="guessDisplay">
      {letters.map((char, index) => {
        return (
          <span id="guessCell" key={index}>
            {guess[index]}
          </span>
        );
      })}
    </p>
  );
}

export default GuessRow;
