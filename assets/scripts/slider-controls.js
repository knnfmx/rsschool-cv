let projectContainer = document.querySelectorAll('.slider__project-container');
console.log(projectContainer);
let controlDot = document.querySelectorAll('.dot');
console.log(controlDot);

function changeSlide(ev) {
  controlDot.forEach(el => {
    el.classList.remove('active');
  });
  ev.target.classList.add('active');
}

controlDot.forEach(el => {
  el.addEventListener('click', changeSlide);
});