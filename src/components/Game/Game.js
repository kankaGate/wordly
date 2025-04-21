import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessRersult from "../GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleReceivedGuessInput(guess) {
    const uuid = crypto.randomUUID();
    const guestObject = {
      id: uuid,
      value: guess,
    };

    const currentGuesses = [...guesses, guestObject];
    setGuesses(currentGuesses);
  }

  return (
    <>
      <GuessRersult guesses={guesses} />
      <GuessInput submitGuess={handleReceivedGuessInput} />
    </>
  );
}

export default Game;
