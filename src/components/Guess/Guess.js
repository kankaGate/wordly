import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter ? letter : undefined}</span>;
}

function Guess({ value, answer }) {
  const gameResult = checkGuess(value, answer);

  console.log({ gameResult });
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={gameResult ? gameResult[num].letter : undefined}
          status={gameResult ? gameResult[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
