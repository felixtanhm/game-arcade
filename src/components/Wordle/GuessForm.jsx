import React from "react";
import Button from "../Button";
import InputGroup from "./InputGroup";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { range } from "../../utils/helperFunctions";
import { WORD_LENGTH } from "../../utils/constants";

function GuessForm({ updateGuessList }) {
  const [formValue, setFormValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (formValue.length !== 5)
      throw new Error("Invalid Submission: Guess is not a 5 letter word");
    console.log(formValue.toUpperCase());
    // updateGuessList(formValue.toUpperCase());
    setFormValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <InputGroup formValue={formValue} onChange={setFormValue} />
      <Button variant="soft" type="submit" customStyles={"h-fit"}>
        Submit Guess
      </Button>
    </form>
  );
}

export default GuessForm;
