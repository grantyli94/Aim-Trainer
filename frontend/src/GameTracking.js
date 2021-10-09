import React, { useState, useCallback } from 'react';
import TargetTracking from './TargetTracking';
import Timer from './Timer';
import AimlyApi from './api';
import ScoreForm from './ScoreForm';
import Instructions from './Instructions';

const TARGET_RADIUS = 30;

function GameTracking() {
  console.log("GameTracking renders");
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateScore(score) {
    setScore(s => s + score);
  }

  const endGame = useCallback(() => setGameOver(true), []);

  function restart() {
    setScore(0);
    setGameOver(false);
    setSubmitted(false);
  }

  function handleChange(evt) {
    setName(evt.target.value);
  }

  async function submitScore(evt) {
    evt.preventDefault();
    const data = { name: name.toUpperCase(), score };
    await AimlyApi.createTracking(data);
    setSubmitted(true);
  }

  return (
    <div className="Game">
      {gameOver
        ? ""
        : <Timer endGame={endGame} />}

      <h2 className="Game-Score">Score: {score}</h2>

      {gameOver
        ? <div>
          <button className="Game-Restart btn btn-secondary" onClick={restart}>Restart</button>
          <ScoreForm
            submitScore={submitScore}
            handleChange={handleChange}
            name={name}
            submitted={submitted}
          />
        </div>
        : <div className="Game-Area">
            <div className="Game-Area-Box">
              {<TargetTracking
                radius={TARGET_RADIUS}
                updateScore={updateScore} />}
            </div>
            <Instructions gameType="tracking"/>
        </div>}
    </div>
  );

}

export default GameTracking