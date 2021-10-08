import { createParticle } from "./helpers";

function Target({ top, left, radius, hideTarget }) {
  console.log("Target renders")
  const styles = {
    height: radius,
    width: radius,
    top,
    left
  }
  
  function handleClick(evt) {
    let target = evt.target;
    target.style.display = "none";
    pop(evt);
    hideTarget();
  }

  function pop(e) {
    let amount = 15;
    for (let i = 0; i < amount; i++) {
      createParticle(e.clientX, e.clientY + window.scrollY);
    }
  }

  return (
    <div 
      className="Target" 
      style={styles}
      onClick={handleClick}>
    </div>
  );
}

export default Target