import { refs } from '../utils/selectors.js';
import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';

export function initHeader() {
  if (!refs.menuOpenBtn || !refs.mobileMenu) return;

  const openMenu = () => {
    refs.mobileMenu.classList.remove('is-hidden');
    refs.menuOpenBtn.setAttribute('aria-expanded', 'true');
    lockScroll();
  };

  const closeMenu = () => {
    refs.mobileMenu.classList.add('is-hidden');
    refs.menuOpenBtn.setAttribute('aria-expanded', 'false');
    unlockScroll();
  };

  const logoLinks = document.querySelectorAll('a[href="#top"]');

  logoLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      closeMenu();

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      history.replaceState(null, '', '#top');
    });
  });

  refs.menuOpenBtn.addEventListener('click', openMenu);
  refs.menuCloseBtn?.addEventListener('click', closeMenu);
  refs.mobileMenuOverlay?.addEventListener('click', closeMenu);

  refs.mobileMenu
    .querySelectorAll('a')
    .forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}
