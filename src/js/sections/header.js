import { refs } from '../utils/selectors.js';
import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';

export function initHeader() {
  const openMenu = () => {
    refs.mobileMenu?.classList.remove('is-hidden');
    refs.burger?.setAttribute('aria-expanded', 'true');
    lockScroll();
  };

  const closeMenu = () => {
    refs.mobileMenu?.classList.add('is-hidden');
    refs.burger?.setAttribute('aria-expanded', 'false');
    unlockScroll();
  };

  refs.burger?.addEventListener('click', openMenu);
  refs.mobileMenuClose?.addEventListener('click', closeMenu);

  refs.mobileMenu?.addEventListener('click', event => {
    if (event.target === refs.mobileMenu) {
      closeMenu();
    }
  });

  refs.mobileMenuLinks?.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}
