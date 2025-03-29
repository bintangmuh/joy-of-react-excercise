import React from "react";

function GuessInput({ submitWord }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.trim.length < 5) {
      alert("You're wrong!")
    } else {
      submitWord(guess)
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        value={guess}
        required
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
