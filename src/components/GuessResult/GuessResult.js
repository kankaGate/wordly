import React from "react";

function GuessResult({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess) => (
        <p class="guess" key={guess.id}>
          {guess.value}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
