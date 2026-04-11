import { refs } from '../utils/selectors.js';
import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';
import { setMobileMenuOpen } from '../utils/state.js';

function openMobileMenu() {
  if (!refs.mobileMenu) return;

  refs.mobileMenu.classList.remove('is-hidden-mobail');
  refs.mobileMenu.classList.add('is-open-mobail');
  refs.mobileMenuCloseBtn.classList.remove('is-hidden-mobail');
  refs.mobileMenuOpenBtn.classList.add('is-hidden-mobail');

  refs.menuOpenBtn?.setAttribute('aria-expanded', 'true');
  refs.mobileMenu?.addEventListener('click', handleMenuLinkClick);

  lockScroll();
  setMobileMenuOpen(true);
}

function closeMobileMenu() {
  if (!refs.mobileMenu) return;

  refs.mobileMenu.classList.add('is-hidden-mobail');
  refs.mobileMenu.classList.remove('is-open-mobail');
  refs.mobileMenuCloseBtn.classList.add('is-hidden-mobail');
  refs.mobileMenuOpenBtn.classList.remove('is-hidden-mobail');

  refs.menuOpenBtn?.setAttribute('aria-expanded', 'false');

  unlockScroll();
  setMobileMenuOpen(false);
}

function handleEscClose(event) {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
}

function handleMenuOverlayClick(event) {
  if (event.target === refs.mobileMenuOverlay) {
    closeMobileMenu();
  }
}

function handleMenuLinkClick(event) {
  const link = event.target.closest('.mobile-menu__link, .mobile-menu__cta');
  if (!link) return;

  closeMobileMenu();
}

export function initHeader() {
  refs.menuOpenBtn?.addEventListener('click', openMobileMenu);
  refs.menuCloseBtn?.addEventListener('click', closeMobileMenu);
  refs.mobileMenuOverlay?.addEventListener('click', handleMenuOverlayClick);
  refs.mobileMenu?.addEventListener('click', handleMenuLinkClick);

  document.addEventListener('keydown', handleEscClose);
}
