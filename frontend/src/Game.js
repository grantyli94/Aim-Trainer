import Target from './Target';
import Timer from './Timer';
import React, { useState, useEffect } from 'react';
import AimlyApi from './api';

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
      hideTarget={hideTarget} />
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

  async function submitScore(score) {

  }

  useEffect(function showTarget() {
    setTimeout(() => {
      setShowTarget(true)
    }, 0)
  }, [score])

  return (
    <div className="Game">
      {gameOver
        ? ""
        : <Timer endGame={endGame} />
      }

      <h2 className="Game-Score">Score: {score}</h2>

      {gameOver
        ? <div className="container">
          <button className="btn btn-secondary" onClick={restart}>Restart</button>
          <br />
          <form onSubmit={() => submitScore(score)}>
            <div class="form-group">
              {/* <label for="scoreInput" class="form-label mt-4">Name</label> */}
              <input type="text" class="form-control" id="scoreInput" aria-describedby="enterName" placeholder="Enter Name (3 Characters)"/>
            </div>
            <button type="submit" className="btn btn-secondary">Submit Score</button>
          </form>
        </div>
        : <div className="Game-Area">
          {showTarget && generateTarget()}
        </div>
      }
    </div>
  );

}

export default Game