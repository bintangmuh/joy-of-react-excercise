import React from "react";

function GuessResult({ guesses }) {
  return (
    <div>
      {guesses.map((guess) => (
        <div key={guess.id}>{guess.answer}</div>
      ))}
    </div>
  );
}

export default GuessResult;
