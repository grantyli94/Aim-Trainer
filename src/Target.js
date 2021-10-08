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

  function createParticle(x, y) {
    const particle = document.createElement('particle')
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
    width = height = Math.random() * 5 + 4;
    particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
    particle.style.background = color;
    particle.style.borderRadius = '50%';
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
        opacity: 0
      }
    ], {
      duration: Math.random() * 1000 + 2000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: delay
    });
    animation.onfinish = removeParticle;
  }

  function removeParticle(e) {
    e.srcElement.effect.target.remove();
  }

  return (
    <div 
      className="Target" 
      style={styles}
      onClick={handleClick}>
    </div>
  )
}

export default Target