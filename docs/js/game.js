const screamSound = new Audio("./sound/scream.mp3");

function gameover() {
  const second = 20;
  window.setTimeout(() => {
    screamSound.play();
  }, 1000*second)
}

window.onload = () => {
  document.getElementById("noneBtn").click();
  gameover();
}
