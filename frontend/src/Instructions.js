const classicText = "Click on as many targets as you can before time runs out";
const trackingText = "Hover over the target for as long as you can";

function Instructions({ gameType }) {
  return (
    <div className="card border-primary mb-3">
      <div className="card-body">
        <h4 className="card-title">Instructions</h4>
        <p className="card-text">{gameType === "classic" ? classicText : trackingText}</p>
      </div>
    </div>
  );
}

export default Instructions;