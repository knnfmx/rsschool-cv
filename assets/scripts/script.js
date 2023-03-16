const body = document.querySelector('#body'),
      header = document.querySelector('.header'),
      menuBtn = document.querySelector('#burger'),
      menu = document.querySelector('.menu__links-list'),
      menuItems = menu.querySelectorAll('.menu__links-list__item'),
      menuLinks = document.querySelectorAll('.menu__link'),
      headerLogo = document.querySelector('.header__menu-logo');
      menuBGShadow = document.querySelector('.menu-bg-shadow'),

      sectionIntro = document.querySelector('#intro'),
      introSocialsContainer = document.querySelector('.intro-page__socials-container'),
      sectionAbout = document.querySelector('#about'),
      sectionSkills = document.querySelector('#horizontal'),
      sectionCode = document.querySelector('#code'),
      sectionProjects = document.querySelector('#projects'),
      sectionEducation = document.querySelector('#education'),
      bgOverlayEducation = document.querySelector('.section-education-bg-overlay'),
      navSectionAll = document.querySelectorAll('.nav-section'),

      footer = document.querySelector('#footer'),
      bgOverlayFooter = document.querySelector('.footer-bg-overlay'),
      sign = document.querySelector('#sign-animation'),

      introText = document.querySelector('.intro-typing-text'),
// For stable style sheet work, don't write messages longer than 14 characters
      phrases = ['Anton Vasilyuk', 'Developer', 'Front-end', 'Design',
    'WEB 3.0'];

//* INTRO TEXT
let idx = 0,
char = 0,
currentText = [],
deleting = false,
isEnd = false;

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
  if (menuBtn.classList.contains('_open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', (el) => {
    closeMenu();
  });
});

headerLogo.addEventListener('click', closeMenu);

menuBGShadow.addEventListener('click', (el) => {
  if (el.target.classList.contains('close-menu')) {
    closeMenu();
  }
});



const paragraphAboutFirst = document.querySelector('.first-paragraph__wrapper'),
      paragraphAboutSecond = document.querySelector('.second-paragraph__wrapper'),
      paragraphAnim = document.querySelectorAll('.section-about__paragraph'),
      paragraphImageFirst = document.querySelector('.first-paragraph__img'),
      paragraphImageSecond = document.querySelector('.second-paragraph__img');

function offset(el) {
  const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function animationOnScroll() {
  let scrollTop = window.scrollY;
  
  // Header navigation animation
  navSectionAll.forEach(el => {
    let sectionHeight = el.offsetHeight,
        sectionTop = el.offsetTop - 350,
        sectionId = el.getAttribute('id');
        if (scrollTop > sectionTop && scrollTop <= sectionTop + sectionHeight) {
          document.querySelector(`.${sectionId}-link`).classList.add('_active');
        } else {
          document.querySelector(`.${sectionId}-link`).classList.remove('_active');
        }
      });
      
  function  displayNone() {
    header.style.display = "none";
    header.style.visibility = "hidden";
  }
  
  function slowShow() {
    header.style.display = "flex";
    header.style.visibility = "visible";
  }
  
  let aboutDistFromTop = sectionAbout.offsetTop - 350;

  if (scrollTop < aboutDistFromTop) {
    header.style.animation = "hideMenu .5s linear forwards";
    header.style.opacity = 0;
    menuBtn.classList.remove('_close');
    setTimeout(displayNone, 500);
  } else {
    header.style.animation = "showMenu .5s linear forwards";
    header.style.opacity = 1;
    setTimeout(slowShow, 500);
  }

  let windowWidth = document.querySelector('.horizontal-scroll__section').offsetWidth,
      windowHeight = window.screen.height,
      horizontalLength = document.querySelector('.horizontal-scroll__section__wrapper').scrollWidth,
      horizontalScrollDistFromTop = document.querySelector('.horizontal-scroll').offsetTop - 500,
      // -200
      scrollDist = horizontalScrollDistFromTop + horizontalLength - windowWidth,
      skillSectionHeight = document.querySelector('.horizontal-scroll__section__wrapper').clientHeight;
      console.log("horisontal scroll " + horizontalScrollDistFromTop);
      console.log("horisontal dist " + scrollDist);
      console.log("skill height " + skillSectionHeight);
      console.log("scroll top " + scrollTop);
 
  // section Skill horizontal scroll animation
  if (windowWidth > 834) {
    document.querySelector('.horizontal-scroll').style.height = (horizontalLength - windowHeight + skillSectionHeight - 400) + "px";
    if (scrollTop < horizontalScrollDistFromTop) {
      document.querySelector('.horizontal-scroll__section__wrapper').style.transform = "translateX(-" + "0" + "px)";
    }
    if (scrollTop >= horizontalScrollDistFromTop && scrollTop <= scrollDist) {
      document.querySelector('.horizontal-scroll__section__wrapper').style.transform = "translateX(-" + (scrollTop - horizontalScrollDistFromTop) + "px)";
    }
  }
      

  function showParagraph(idx, el) {
    el.children.item(idx).style.animation = 'showParagraph .7s linear';
    el.children.item(idx).style.opacity = '1';
    el.children.item(idx).style.filter = 'blur(0px)';
  }

  function hideParagraph(idx, el) {
    el.children.item(idx).style.animation = 'hideParagraph .7s linear';
    el.children.item(idx).style.opacity = '0';
    el.children.item(idx).style.filter = 'blur(4px)';
  }

  function showElement(el) {
    el.style.animation = 'showParagraphPhoto .7s linear';
    el.style.transform = 'scale(1)';
    el.style.opacity = '0.8';
    el.style.filter = 'blur(0px)';
  }

  function hideElement(el) {
    el.style.animation = 'hideParagraphPhoto .7s linear';
    el.style.transform = 'scale(0.98)';
    el.style.opacity = '0';
    el.style.filter = 'blur(4px)';
  }

  if (paragraphAboutFirst.getBoundingClientRect().top >= windowHeight / 2) {
    hideElement(paragraphImageFirst);
    paragraphAnim[0].style.animation = 'zoomOut 2s linear';
    paragraphAnim[0].style.transform = 'scale(0.98)';
    for (let idx = 0; idx < paragraphAnim[0].children.length; idx++) {
      hideParagraph(idx, paragraphAnim[0]);
    } 
  } else if (paragraphAboutFirst.getBoundingClientRect().top <= -windowHeight / 8) {
    hideElement(paragraphImageFirst);
    paragraphAnim[0].style.animation = 'zoomOut 2s linear';
    paragraphAnim[0].style.transform = 'scale(0.98)';
    for (let idx = 0; idx < paragraphAnim[0].children.length; idx++) {
      hideParagraph(idx, paragraphAnim[0]);
    }
  } else {
    showElement(paragraphImageFirst);
    paragraphAnim[0].style.animation = 'zoomIn 2s linear';
    paragraphAnim[0].style.transform = 'scale(1)';
    for (let idx = 0; idx < paragraphAnim[0].children.length; idx++) {
      setTimeout(() => showParagraph(idx, paragraphAnim[0]), `${idx * 200}`);
    }
  }

  if (paragraphAboutSecond.getBoundingClientRect().top >= windowHeight / 1.5) {
    hideElement(paragraphImageSecond);
    paragraphAnim[1].style.animation = 'zoomOut 2s linear';
    paragraphAnim[1].style.transform = 'scale(0.94)';
    for (let idx = 0; idx < paragraphAnim[1].children.length; idx++) {
      hideParagraph(idx, paragraphAnim[1]);
    }
  } else if (paragraphAboutSecond.getBoundingClientRect().top <= -windowHeight / 10) {
    hideElement(paragraphImageSecond);
    paragraphAnim[1].style.animation = 'zoomOut 2s linear';
    paragraphAnim[1].style.transform = 'scale(0.94)';
    for (let idx = 0; idx < paragraphAnim[1].children.length; idx++) {
      hideParagraph(idx, paragraphAnim[1]);
    }
  } else {
    showElement(paragraphImageSecond);
    paragraphAnim[1].style.animation = 'zoomIn 2s linear';
    paragraphAnim[1].style.transform = 'scale(1)';
    for (let idx = 0; idx < paragraphAnim[1].children.length; idx++) {
      setTimeout(() => showParagraph(idx, paragraphAnim[1]), `${idx * 200}`);
    }
  }

  const education = document.querySelector('.education'),
        language = document.querySelector('.language');

  if (sectionEducation.getBoundingClientRect().top >= windowHeight / 4) {
    hideElement(education);
    hideElement(language);
    bgOverlayEducation.style.animation = 'brainOut .7s linear';
    bgOverlayEducation.style.opacity = '0';
  } else if (sectionEducation.getBoundingClientRect().top <= -windowHeight / 2) {
    hideElement(education);
    hideElement(language);
    bgOverlayEducation.style.animation = 'brainOut .7s linear';
    bgOverlayEducation.style.opacity = '0';
  } else {
    showElement(education);
    showElement(language);
    bgOverlayEducation.style.animation = 'brainShow .7s linear';
    bgOverlayEducation.style.opacity = '1';
  }

  const contactForm = document.querySelector('.contact-form__wrapper');

  if (scrollTop <= body.clientHeight - footer.clientHeight - 300) {
    bgOverlayFooter.style.animation = 'ghostOut 2s linear';
    bgOverlayFooter.style.opacity = '0';
    sign.style.animation = 'none';
    hideElement(contactForm);
  } else {
    bgOverlayFooter.style.animation = 'ghostShow 2s linear';
    bgOverlayFooter.style.opacity = '1';
    sign.style.animation = 'start-sign 4s linear forwards';
    setTimeout(() => showElement(contactForm), 1000);
  }
};

window.addEventListener('scroll', animationOnScroll);


//* SLIDER

const sliderWrapper = document.querySelector('.section-project__slider__wrapper'),
      slider = document.querySelector('.slider'),
      projectContainer = document.querySelectorAll('.slider__project-container'),
      controlDots = document.querySelectorAll('.dot');
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

// CONTACT FORM

const form = document.querySelector('#contact-form');

form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
  let formData = new FormData(form);

  if (error === 0) {
    footer.classList.add('_sending');
    body.style.overflow = 'hidden';
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
      footer.classList.remove('_sending');
      body.style.overflow = '';
    } else {
      alert('error');
      footer.classList.remove('_sending');
      body.style.overflow = '';
    }
  } else {
    alert('Please required field');
  }
}

function formValidate(form) {
  let error = 0;
  let formRequired = document.querySelectorAll('._req');
  for (let i = 0; i < formRequired.length; i++) {
    const input = formRequired[i];
    formRemoveError(input);
    if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        formAddError(input);
        error++;
      } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
          formAddError(input);
          error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}
function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}