import { WORD_LENGTH } from "../../utils/constants";

function InputGroup({ formValue, onChange }) {
  return (
    <div>
      <label
        htmlFor="guess-input"
        className="block text-sm font-medium leading-6 text-color"
      >
        Enter guess:
      </label>
      <input
        type="text"
        name="guess-input"
        id="guess-input"
        className="block w-full rounded-md border-0 py-1.5 mt-1 gap-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Type your guess here"
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        value={formValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputGroup;
