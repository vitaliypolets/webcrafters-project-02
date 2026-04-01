import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';

export function openModal(modal) {
  if (!modal) return;
  modal.classList.remove('is-hidden');
  lockScroll();
}

export function closeModal(modal) {
  if (!modal) return;
  modal.classList.add('is-hidden');
  unlockScroll();
}
