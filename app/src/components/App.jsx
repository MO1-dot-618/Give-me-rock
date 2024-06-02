// App.js
import React, { useState } from 'react';
import './App.css';
import Game from './Game';

export default function App() {
  const [showGame, setShowGame] = useState(false);

  function startGame() {
    setShowGame(true);
  }

  return (
    <div className='App'>
      <div className='game-container'>
        {!showGame ? (
          <>
            <p>
              Play Rock, Paper, Scissors with Gon! <br />
              Select the card you want and submit. <br />
              You have 3 chances to score high!
            </p>
            <button onClick={startGame}>Play</button>
          </>
        ) : (
          <Game />
        )}
      </div>
    </div>
  );
}
