import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';
import { state } from '../utils/state.js';

export function openModal(modal) {
  if (!modal) return;
  modal.classList.remove('is-hidden');
  lockScroll();
   state.isOrderModalOpen = true;
}

export function closeModal(modal) {
  if (!modal) return;
  modal.classList.add('is-hidden');
  unlockScroll();
  state.isOrderModalOpen = false;
}
