import TargetTracking from './TargetTracking';
import Timer from './Timer';
import React, { useState } from 'react';

const HEIGHT = 500;
const WIDTH = 600;
const TARGET_RADIUS = 30;

function GameTracking() {
  console.log("GameTracking renders");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function updateScore(score) {
    setScore(s => s + score);
  }

  function endGame() {
    setGameOver(true);
  }

  function restart() {
    setScore(s => 0);
    setGameOver(false);
  }

  return (
    <div className="Game">
      {gameOver
      ? ""
      : <Timer endGame={endGame}/>
      }
      
    <h2>Score: {score}</h2>

      {gameOver
      ? <span>
          <button className="btn btn-secondary" onClick={restart}>Restart</button>
        </span>
      : <div className="Game-Area">
      {<TargetTracking 
          radius={TARGET_RADIUS}
          updateScore={updateScore}/>}
        </div>
      }
    </div>
  )

}

export default GameTracking