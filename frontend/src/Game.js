import React, { useState, useEffect, useCallback } from 'react';
import Target from './Target';
import Timer from './Timer';
import AimlyApi from './api';
import ScoreForm from './ScoreForm';

const HEIGHT = 500;
const WIDTH = 600;
const TARGET_RADIUS = 30;

function Game() {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [showTarget, setShowTarget] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  console.log("Game renders");

  useEffect(function showTarget() {
    setTimeout(() => {
      setShowTarget(true)
    }, 0)
  }, [score])

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
      hideTarget={hideTarget}
    />;
  }

  function hideTarget() {
    setShowTarget(false);
    setScore(s => s + 1);
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
    await AimlyApi.createClassic(data);
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
          {showTarget && generateTarget()}
        </div>}
    </div>
  );

}

export default Game