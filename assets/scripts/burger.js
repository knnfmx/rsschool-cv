const menuBtn = document.querySelector('#burger');
const menu = document.querySelector('.menu__links-list');
const menuItems = menu.querySelectorAll('.menu__links-list__item');
const menuLinks = document.querySelectorAll('.menu__link');

function openMenu() {
  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('_open')) {
      menuBtn.classList.remove('_open');
      menuBtn.classList.add('_close');
    } else {
      menuBtn.classList.remove('_close');
      menuBtn.classList.add('_open');
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
        menuItems.forEach((link) => link.style.animation = '');
      });
    });
  }
  closeMenu();
}
openMenu();
