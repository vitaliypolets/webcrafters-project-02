const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Відкриття меню
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.classList.add('no-scroll');
});

// Закриття меню кнопкою Х
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.classList.remove('no-scroll');
});

// Закриття меню після кліку на пункт
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
  });
});