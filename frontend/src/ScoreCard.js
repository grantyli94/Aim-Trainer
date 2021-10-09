function ScoreCard({ rank, name, score }) {

  return (
    <div className="ScoreCard card text-white bg-secondary mb-3 container">
      <div className="row card-body">
        <h4 className="col-4 card-title"><strong>{rank}.</strong></h4>
        <h4 className="col-4 card-title">Name: <strong>{name}</strong></h4>
        <h4 className="col-4 card-title">Score: <strong>{score}</strong></h4>
      </div>
    </div>
  );
}

export default ScoreCard;