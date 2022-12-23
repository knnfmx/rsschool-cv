const menuBtn = document.getElementById('burger');
const menu = document.querySelector('.menu__links-list');
const menuItems = menu.querySelectorAll('.menu__links-list__item');
const menuLinks = document.querySelectorAll('.menu__link');
const menuActive = document.querySelector('._active');

function openMenu() {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('_active');
    menu.classList.toggle('_open');
    menuItems.forEach((link, idx) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `animateNavLinks 0.5s ease forwards ${idx / 10 + 0.5}s`;
      }
    });
  });
  function closeMenu() {
    menuLinks.forEach((el) => {
      el.addEventListener('click', () => {
        menuBtn.classList.remove('_active');
        menu.classList.remove('_open');
        menuItems.forEach((link) => link.style.animation = '');
      });
    });
  }
  closeMenu();
}
openMenu();
