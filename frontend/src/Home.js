import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  console.log("Home Renders");

  return (
    <div className="Home">
      <h1>Aim.ly</h1>
      <p class="lead">An easy way to improve your FPS skills</p>
      <Link to="/classic">
        <button className="Home-Button btn btn-primary">Classic</button>
      </Link>
      <Link to="/tracking">
        <button className="Home-Button btn btn-primary">Tracking</button>
      </Link>
    </div>
  )
}

export default Home