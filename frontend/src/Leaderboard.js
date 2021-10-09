import React, { useState, useEffect } from "react";
import AimlyApi from "./api";
import ScoreCard from "./ScoreCard";

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
        <button className="btn btn-primary"><h1 onClick={() => setGameType("classic")}>CLASSIC</h1></button>
        <button className="btn btn-primary"><h1 onClick={() => setGameType("tracking")}>TRACKING</h1></button>
      </div>
      <div className="Leaderboard-Scores">
        {scores.map((s, i) => <ScoreCard rank={i+1} name={s.name} score={s.score}/>)}
      </div>
    </div>
  );
}

export default Leaderboard;