import Target from './Target';
import Timer from './Timer';
import React, { useState, useEffect } from 'react';

const HEIGHT = 500;
const WIDTH = 600;
const TARGET_RADIUS = 30;

function Game() {
  const [score, setScore] = useState(0);
  const [showTarget, setShowTarget] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  console.log("Game renders");

  function generateTargetCoordinates() {
    console.log('generateTargetCoordinates')
    let maxTop = HEIGHT - TARGET_RADIUS;
    let maxLeft = WIDTH - TARGET_RADIUS;
    let top = Math.random() * maxTop;
    let left = Math.random() * maxLeft;
    return [top, left];
  }

  function generateTarget() {
    console.log('generateTarget');
    let [top, left] = generateTargetCoordinates();
    return <Target 
              top={top} 
              left={left} 
              radius={TARGET_RADIUS}
              hideTarget={hideTarget}/>
  }

  function hideTarget() {
    setShowTarget(false);
    setScore(s => s + 1);
  }

  function endGame() {
    setGameOver(true);
  }

  function restart() {
    setScore(s => 0);
    setGameOver(false);
  }

  useEffect(function showTarget() {
    setTimeout(() => {
      setShowTarget(true)
    },0)
  }, [score])

  return (
    <div className="Game">
      {gameOver
      ? ""
      : <Timer endGame={endGame}/>
      }
      
      <h2 className="Game-Score">Score: {score}</h2>

      {gameOver
      ? <button className="btn btn-secondary" onClick={restart}>Restart</button>
      : <div className="Game-Area">
      {showTarget && generateTarget()}
        </div>
      }
    </div>
  )

}

export default Game