import React from "react";
import Button from "../Button";
import InputGroup from "./InputGroup";
import { WORD_LENGTH } from "../../utils/constants";

function GuessForm({ updateGuessList }) {
  const [formValue, setFormValue] = React.useState("");

  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (formValue.length !== WORD_LENGTH)
      throw new Error("Invalid Submission: Guess is not a 5 letter word");
    updateGuessList(formValue.toUpperCase());
    setFormValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2 p-2">
      <InputGroup
        ref={inputRef}
        formValue={formValue}
        onChange={setFormValue}
      />
      <Button variant="soft" type="submit" customStyles={"h-fit"}>
        Submit
      </Button>
    </form>
  );
}

export default GuessForm;
