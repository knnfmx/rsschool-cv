const body = document.getElementById('body');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('#burger');
const menu = document.querySelector('.menu__links-list');
const menuItems = menu.querySelectorAll('.menu__links-list__item');
const menuLinks = document.querySelectorAll('.menu__link');
const menuBGShadow = document.querySelector('.menu-bg-shadow');
const footer = document.getElementById('footer');
const bgOverlay = document.querySelector('.footer-bg-overlay');
const sign = document.getElementById('sign-animation');

const introText = document.querySelector('.intro-typing-text');
// For stable style sheet work, don't write messages longer than 14 characters
const phrases = ['Anton Vasilyuk', 'Front-End Dev', 'WEB 3.0 fan', 'Eager beaver', 'Your friend'];



let windowWidth = document.querySelector('.horizontal-scroll__section').offsetWidth;
let windowHeight = window.screen.height;

let horizontalLength = document.querySelector('.horizontal-scroll__section__wrapper').scrollWidth;
let horizontalScrollDistFromTop = document.querySelector('.horizontal-scroll').offsetTop;
let scrollDist = horizontalScrollDistFromTop + horizontalLength - windowWidth;
let skillSectionHeight = document.querySelector('.horizontal-scroll__section__wrapper').clientHeight;
let aboutDistFromTop = document.getElementById('about').offsetTop - 108;


window.onscroll = () => {
  let scrollTop = window.scrollY;

  if (scrollTop < aboutDistFromTop) {
    header.style.display = "none";
  } else {
    header.style.display = "flex";
  }
  if (windowWidth > 834) {
    document.querySelector('.horizontal-scroll').style.height = (horizontalLength - windowHeight + skillSectionHeight) + "px";
    if (scrollTop < horizontalScrollDistFromTop) {
      document.querySelector('.horizontal-scroll__section__wrapper').style.transform = "translateX(-" + "0" + "px)";
    }
    if (scrollTop >= horizontalScrollDistFromTop && scrollTop <= scrollDist) {
      document.querySelector('.horizontal-scroll__section__wrapper').style.transform = "translateX(-" + (scrollTop - horizontalScrollDistFromTop) + "px)";
    } else {

    }
  }
  if (scrollTop <= body.clientHeight - footer.clientHeight - 300) {
    bgOverlay.style.animation = "ghost-go 2s linear";
    bgOverlay.style.opacity = "0";
    sign.style.animation = "none";
  } else {
    bgOverlay.style.animation = "ghost-show 2s linear";
    bgOverlay.style.opacity = "1";
    sign.style.animation = "start-sign 4s linear forwards";
  }
};

//* INTRO TEXT

let idx = 0;
let char = 0;
let currentText = [];
let deleting = false;
let isEnd = false;

function typeText() {
  isEnd = false;

  if (idx < phrases.length) {
    if (!deleting && char <= phrases[idx].length) {
      currentText.push(phrases[idx][char]);
      char++;
      introText.innerHTML = currentText.join('');
    }
    if (deleting && char <= phrases[idx].length) {
      currentText.pop(phrases[idx][char]);
      char--;
      introText.innerHTML = currentText.join('');
    }
    if (char == phrases[idx].length) {
      isEnd = true;
      deleting = true;
    }
    if (deleting && char === 0) {
      currentText = [];
      deleting = false;
      idx++;
      if (idx == phrases.length) {
        idx = 0;
      }
    }
  }
  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 100) + 100;
  const time = isEnd ? 2000 : deleting ? speedUp : normalSpeed;
  setTimeout(typeText, time);
}
setTimeout(typeText, 3000);

//* BURGER

function openMenu() {
  header.classList.add('header_small');
  menuBtn.classList.remove('_close');
  menuBtn.classList.add('_open');
  menuBGShadow.classList.remove('menu-bg-shadow_hidden');
  menuBGShadow.classList.add('menu-bg-shadow_visible');
  menu.classList.toggle('_active');
  menuItems.forEach((link, idx) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `animateNavLinks__open 0.5s ease forwards ${idx / 10 + 0.5}s`;
    }
  });
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  header.classList.remove('header_small');
  menuBtn.classList.remove('_open');
  menuBtn.classList.add('_close');
  menuBGShadow.classList.remove('menu-bg-shadow_visible');
  menuBGShadow.classList.add('menu-bg-shadow_hidden');
  menu.classList.remove('_active');
  document.body.style.overflow = '';
  menuItems.forEach(link => link.style.animation = '');

}

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('_close')) {
    openMenu();
  } else {
    closeMenu();
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

menuBGShadow.addEventListener('click', (el) => {
  if(el.target.classList.contains('close-menu')) {
    closeMenu();
  }
});

//* SLIDER
const sliderWrapper = document.querySelector('.section-project__slider__wrapper');
const slider = document.querySelector('.slider');
console.log(slider.offsetWidth);
const projectContainer = document.querySelectorAll('.slider__project-container');

const controlDots = document.querySelectorAll('.dot');
let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);
function showSlide() {
  sliderWidth = sliderWrapper.offsetWidth;
  slider.style.width = sliderWidth * projectContainer.length + 'px';
  projectContainer.forEach(el => el.style.width = sliderWidth + 'px');
  changeSlide();
}
showSlide();

function changeSlide() {
  slider.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function activeSlide(idx) {
  controlDots.forEach(item => item.classList.remove('_dot-active'));
  controlDots[idx].classList.add('_dot-active');
}

controlDots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    sliderCount = idx;
    changeSlide();
    activeSlide(sliderCount);
  });
});