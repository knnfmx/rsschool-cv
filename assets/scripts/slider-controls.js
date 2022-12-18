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
     


controlDot[0].addEventListener('click', (el) => {
  projectContainer.forEach(el => {
    el.style.transform = "translateX(0px)";
  });
  changeSlide(el);
});

controlDot[1].addEventListener('click', (el) => {
  projectContainer.forEach(el => {
    el.style.transform = "translateX(-1000px)";
  });
  changeSlide(el);
});