import GuessRow from "./GuessRow";
import { NUM_OF_GUESSES } from "../../utils/constants";
import { range } from "../../utils/helperFunctions";

function GuessDisplay({ data }) {
  const rows = range(NUM_OF_GUESSES);

  return (
    <div className="p-2 grid gap-1">
      {rows.map((row) => {
        return <GuessRow key={row} guess={data[row]} />;
      })}
    </div>
  );
}

export default GuessDisplay;
