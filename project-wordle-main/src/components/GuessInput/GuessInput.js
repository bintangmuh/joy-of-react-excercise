import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
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
