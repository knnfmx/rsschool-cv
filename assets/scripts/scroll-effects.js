let windowWidth = document.querySelector('.horizontal-scroll__section').offsetWidth;
console.log(windowWidth);

let horizontalLength = document.querySelector('.horizontal-scroll__section__wrapper').scrollWidth;
console.log(horizontalLength);

let distFromTop = document.querySelector('.horizontal-scroll').offsetTop;
console.log(distFromTop);

let scrollDist = distFromTop + horizontalLength - windowWidth;
console.log(scrollDist);

let header = document.querySelector('.header');
let about = document.getElementById('about').offsetTop - 128;
console.log("do" + about);

document.querySelector('.horizontal-scroll').style.height = horizontalLength + "px";

window.onscroll = () => {
  let scrollTop = window.scrollY;
  console.log(scrollTop);

  if (scrollTop < about) {
    header.style.display = "none";
  } else {
    header.style.display = "flex";
  }


  if (scrollTop < distFromTop) {
    // header.style.display = "none";
    document.querySelector('.horizontal-scroll__section__wrapper').style.transform = "translateX(-" + "0" + "px)";
  }

  if (scrollTop >= distFromTop  && scrollTop <= scrollDist) {
    // header.style.display = "flex";
    document.querySelector('.horizontal-scroll__section__wrapper').style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
  }
}