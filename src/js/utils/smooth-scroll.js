export function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', event => {
      if (link.closest('.mobile-menu')) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;

      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });

      history.replaceState(null, '', href);
    });
  });
}