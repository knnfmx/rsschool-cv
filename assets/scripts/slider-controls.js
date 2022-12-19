let projectContainer = document.querySelectorAll('.slider__project-container');
console.log(projectContainer);
let controlDot = document.querySelectorAll('.dot');
console.log(controlDot);

let slider = document.querySelector('.slider');

function changeSlide(ev) {
  controlDot.forEach(el => {
    el.classList.remove('active');
  });
  ev.target.classList.add('active');
}



if (slider.offsetWidth <= 450) {
    controlDot[0].addEventListener('click', (el) => {
      projectContainer.forEach(el => {
        el.style.transform = "translateX(0px)";
      });
      changeSlide(el);
    });

    controlDot[1].addEventListener('click', (el) => {
      projectContainer.forEach(el => {
        el.style.transform = "translateX(-500px)";
      });
      changeSlide(el);
    });
    controlDot[2].addEventListener('click', (el) => {
      projectContainer.forEach(el => {
        el.style.transform = "translateX(-1000px)";
      });
      changeSlide(el);
    });
    controlDot[3].addEventListener('click', (el) => {
      projectContainer.forEach(el => {
        el.style.transform = "translateX(-1500px)";
      });
      changeSlide(el);
    });
} else if (slider.offsetWidth >= 950) {
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
}


     


