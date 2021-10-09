import React, { useState, useEffect} from "react";

const TIME = 5;

function Timer({ endGame }) {
  const [seconds, setSeconds] = useState(TIME);

  useEffect(function tick() {
    if (seconds > 0) {
      setTimeout(() => setSeconds(secs => secs - 1), 1000);
    } else {
      setSeconds('BOOOM!');
      endGame();
      setSeconds(s => TIME);
    }
  }, [seconds]);

  return (
    <div className="Timer">
      <h1>Time Remaining: {seconds}</h1>
    </div>
  )
}

export default Timer