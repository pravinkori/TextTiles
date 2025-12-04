import React from "react";

import Button from "../Button";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // To make debugging easier, we'll log the guess in the console.
    console.log({ tentativeGuess });

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <div className="guess-input">
        <input
          required
          disabled={gameStatus !== "running"}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="Enter exactly 5 characters"
          value={tentativeGuess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
          id="guess-input"
          type="text"
        />
        <Button disabled={gameStatus !== "running"} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default GuessInput;
