const introText = document.getElementById('intro-text');
const phrases = ['Anton Vasilyuk', 'Front-End', 'Raspberry Pi', 'Code lover', 'Your friend'];
let idx = 0;
let char = 0;
let currentText = [];
let deliting = false;
let isEnd = false;

function autoText() {
  isEnd = false;

  if (idx < phrases.length) {
    if (!deliting && char <= phrases[idx].length) {
      currentText.push(phrases[idx][char]);
      char++;
      introText.innerHTML = currentText.join('');
    }
    if (deliting && char <= phrases[idx].length) {
      currentText.pop(phrases[idx][char]);
      char--;
      introText.innerHTML = currentText.join('');
    }
    if (char == phrases[idx].length) {
      isEnd = true;
      deliting = true;
    }
    if (deliting && char === 0) {
      currentText = [];
      deliting = false;
      idx++;
      if (idx == phrases.length) {
        idx = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 100) + 100;
  const time = isEnd ? 2000 : deliting ? spedUp : normalSpeed;
  setTimeout(autoText, time);
}
setTimeout(autoText, 3000);