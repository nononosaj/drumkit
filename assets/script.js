



function playSound(hit) {
  const audio = document.querySelector(`audio[data-key="${hit.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${hit.keyCode}"]`);
  console.log(audio);

  if (!audio) return; // Stop the function from running all together
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add('playing');

});

function removeTransition(hit){
  if (hit.propertyName !== 'transform') return; // skip if it isn't a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
