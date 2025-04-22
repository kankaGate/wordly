import React from "react";
import Guess from "../Guess/Guess";

function GuessResult({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess, i) => (
        <Guess key={i} value={guess} />
        // <p class="guess" key={i}>
        //   {guess}
        // </p>
      ))}
    </div>
  );
}

export default GuessResult;
