const button = document.querySelector('.ball__button');
const field = document.querySelector('.ball__field');
const ball = document.querySelector('.ball');

button.addEventListener('click', () => {
  animate();
});

const ground = field.clientHeight - ball.clientHeight;
let start;
let progress;

function animate() {
  start = Date.now();
  progress = ground;
  requestId = window.requestAnimationFrame(bounce);
  let counter = 0;

  function bounce() {
    const timeFraction = Date.now() - start;
    progress *= 0.97;
    const wave = Math.cos(timeFraction / (200 - timeFraction / 30));
    ball.style.top = ground - Math.abs(wave) * progress + 'px';

    if (ground - Math.abs(wave) * progress > 343) {
      counter++;
    }
    console;
    if (counter < 20) {
      window.requestAnimationFrame(bounce);
    } else {
      ball.style.top = ground + 'px';
      window.cancelAnimationFrame(requestId);
    }
  }
}
