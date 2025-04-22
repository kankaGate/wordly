import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResult({ guesses }) {
  return (
    <div class="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} />
        // <p class="guess" key={i}>
        //   {guess}
        // </p>
      ))}
    </div>
  );
}

export default GuessResult;
