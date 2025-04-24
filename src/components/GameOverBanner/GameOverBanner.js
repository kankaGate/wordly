import React from "react";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

function GameOverBanner({ gameStatus, numOfGuess, answer }) {
  if (gameStatus === "won") {
    return <WonBanner numOfGuess={numOfGuess} />;
  } else if (gameStatus === "lost") {
    return <LostBanner answer={answer} />;
  }
}

export default GameOverBanner;
