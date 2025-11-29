import React from 'react';

import { sample } from "../../utils/utils";
import { WORDS } from "../../utils/data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <>Put a game here!</>
}

export default Game;
