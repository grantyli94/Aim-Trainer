import React, { useState, useEffect } from "react";
import AimlyApi from "./api";

function Leaderboard() {
  console.log("Leaderboard renders");

  const [scores, setScores] = useState([]);
  const [gameType, setGameType] = useState("classic");
  console.log(scores);

  useEffect(() => {
    async function fetchClassicScores() {
      const results = await AimlyApi.getClassicScores();
      setScores(results);
    }
    
    async function fetchTrackingScores() {
      const results = await AimlyApi.getTrackingScores();
      setScores(results);
    }

    gameType === "classic" ? fetchClassicScores() : fetchTrackingScores();
  }, [gameType]);

  return (
    <div className="Leaderboard">
      <div className="Leaderboard-Options">
        <h1 onClick={() => setGameType("classic")}>CLASSIC</h1>
        <h1 onClick={() => setGameType("tracking")}>TRACKING</h1>
      </div>
      <ol>
        {scores.map(s => <li>{s.name}, {s.score}</li>)}
      </ol>
    </div>
  );
}

export default Leaderboard;