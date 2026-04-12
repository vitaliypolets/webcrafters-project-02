import { refs } from '../utils/selectors.js';
import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';
import { setMobileMenuOpen } from '../utils/state.js';

function openMobileMenu() {
  if (!refs.mobileMenu) return;

  refs.mobileMenu.classList.remove('is-hidden');
  refs.mobileMenu.classList.add('is-open');
  refs.menuOpenBtn?.setAttribute('aria-expanded', 'true');

  lockScroll();
  setMobileMenuOpen(true);

  refs.menuOpenBtn?.classList.add('is-hidden');
}

function closeMobileMenu() {
  if (!refs.mobileMenu) return;

  refs.mobileMenu.classList.add('is-hidden');
  refs.mobileMenu.classList.remove('is-open');
  refs.menuOpenBtn?.setAttribute('aria-expanded', 'false');

  unlockScroll();
  setMobileMenuOpen(false);

  refs.menuOpenBtn?.classList.remove('is-hidden');
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