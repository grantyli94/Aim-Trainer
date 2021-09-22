import './TargetTracking.css';
import './Target.css';

import React, { useState, useEffect } from 'react';

const HEIGHT = 500;
const WIDTH = 600;

function TargetTracking({ radius, updateScore }) {
  console.log("TargetTracking renders");

  const initialStyles = {
    height: radius,
    width: radius,
    top: 0,
    left: 0
  }
  const [currScore, setCurrTime] = useState(0);
  const [styles, setStyles] = useState(initialStyles);

  useEffect(() => {
    console.log("useEffect runs")
    const interval = setInterval(() => {
      setStyles(styles => ({
        ...styles,
        top: generateY(HEIGHT),
        left: generateX(WIDTH),
        transition: "3s"
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function generateY(height) {
    let maxTop = HEIGHT - radius;
    let top = Math.random() * maxTop;
    return top;
  }

  function generateX(width) {
    let maxLeft = WIDTH - radius;
    let left = Math.random() * maxLeft;
    return left;
  }

  function handleEvent(evt) {
    if (evt.type === "mouseover") {
      setCurrTime(+new Date());
    } else {
      let end = +new Date();
      let diff = end - currScore;
      updateScore(diff);
    }

  }

  return (
    <div 
      className="TargetTracking" 
      style={styles}
      onMouseOver={handleEvent}
      onMouseLeave={handleEvent}>
    </div>
  );
}

export default TargetTracking