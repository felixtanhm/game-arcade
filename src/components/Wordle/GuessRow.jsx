import { range } from "../../utils/helperFunctions";
import { WORD_LENGTH } from "../../utils/constants";

function GuessRow({ guess }) {
  const letters = range(WORD_LENGTH);
  if (guess) {
    return (
      <div id="guessRow" className="grid grid-cols-5 gap-1">
        {letters.map((char) => {
          const statusColor = {
            correct: "dark:bg-emerald-600/50",
            incorrect: "dark:bg-white/20",
            misplaced: "dark:bg-amber-400/50",
          };
          return (
            <span
              key={char}
              className={`bg-white text-gray-900 dark:text-white ${
                statusColor[guess[char].status]
              } w-full aspect-square rounded-md grid place-content-center text-4xl font-semibold`}
            >
              {guess[char].letter}
            </span>
          );
        })}
      </div>
    );
  }
  return (
    <div id="guessRow" className="grid grid-cols-5 gap-1 ">
      {letters.map((char) => {
        return (
          <span
            key={char}
            className="bg-white text-gray-900 dark:bg-white/10 dark:text-white w-full aspect-square rounded-md"
          ></span>
        );
      })}
    </div>
  );
}

export default GuessRow;
