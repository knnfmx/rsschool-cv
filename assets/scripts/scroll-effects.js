let windowWidth = document.querySelector('.horizontal-scroll__section').offsetWidth;
let windowHeight = window.screen.height;
let body = document.getElementById('body');

let horizontalLength = document.querySelector('.horizontal-scroll__section__wrapper').scrollWidth;
let horizontalScrollDistFromTop = document.querySelector('.horizontal-scroll').offsetTop;
let scrollDist = horizontalScrollDistFromTop + horizontalLength - windowWidth;
let skillSectionHeight = document.querySelector('.horizontal-scroll__section__wrapper').clientHeight;

document.querySelector('.horizontal-scroll').style.height = (horizontalLength - windowHeight + skillSectionHeight) + "px";

let header = document.querySelector('.header');
let aboutDistFromTop = document.getElementById('about').offsetTop - 108;
let footer = document.getElementById('footer');
let bgOverlay = document.querySelector('.footer-bg-overlay');
let sign = document.getElementById('sign-animation');




window.onscroll = () => {
  let scrollTop = window.scrollY;

  if (scrollTop < aboutDistFromTop) {
    header.style.display = "none";
  } else {
    header.style.display = "flex";
  }
  if (windowWidth > 768) {
    if (scrollTop < horizontalScrollDistFromTop) {
      document.querySelector('.horizontal-scroll__section__wrapper').style.transform = "translateX(-" + "0" + "px)";
    }
    if (scrollTop >= horizontalScrollDistFromTop  && scrollTop <= scrollDist) {
      document.querySelector('.horizontal-scroll__section__wrapper').style.transform = "translateX(-" + (scrollTop - horizontalScrollDistFromTop) + "px)";
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
}