const menuBtn = document.querySelector('#burger');
const menu = document.querySelector('.menu__links-list');
const menuItems = menu.querySelectorAll('.menu__links-list__item');
const menuLinks = document.querySelectorAll('.menu__link');
const menuBGShadow = document.querySelector('.menu-bg-shadow');

function openMenu() {
  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('_open')) {
      menuBtn.classList.remove('_open');
      menuBtn.classList.add('_close');
      header.classList.remove('header_small');
      menuBGShadow.classList.remove('menu-bg-shadow_visible');
      menuBGShadow.classList.add('menu-bg-shadow_hidden');


    } else {
      menuBtn.classList.remove('_close');
      menuBtn.classList.add('_open');
      header.classList.add('header_small');
      menuBGShadow.classList.remove('menu-bg-shadow_hidden');
      menuBGShadow.classList.add('menu-bg-shadow_visible');
    }
    
    menu.classList.toggle('_active');
    menuItems.forEach((link, idx) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `animateNavLinks__open 0.5s ease forwards ${idx / 10 + 0.5}s`;
      }
    });
  });
  function closeMenu() {
    menuLinks.forEach((el) => {
      el.addEventListener('click', () => {
        menuBtn.classList.add('_close');
        menuBtn.classList.remove('_open');
        menu.classList.remove('_active');
        header.classList.remove('header_small');
        menuBGShadow.classList.remove('menu-bg-shadow_visible');
        menuBGShadow.classList.add('menu-bg-shadow_hidden');
        menuItems.forEach((link) => link.style.animation = '');
      });
    });
  }
  closeMenu();
}
openMenu();
