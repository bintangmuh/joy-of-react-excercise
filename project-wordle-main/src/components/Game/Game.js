import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function submitWord(word) {
    setGuesses([...guesses, word]);
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput submitWord={submitWord} />
    </>
  );
}

export default Game;
