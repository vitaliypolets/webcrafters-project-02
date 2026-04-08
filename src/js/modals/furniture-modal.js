import { fetchFurnitureById } from '../api/furniture-api.js';
import { showToast } from '../utils/toast.js';
import { refs } from '../utils/selectors.js';
import { state } from '../utils/state.js';
import { openModal, closeModal } from './modal-base.js';
import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';
import { renderStars } from '../render/render-stars.js';

export async function openFurnitureModal(id) {
  try {
    const item = await fetchFurnitureById(id);

    if (!item || !refs.furnitureModal) {
      showToast('Не вдалося завантажити товар', 'error');
      return;
    }

    state.selectedFurnitureId = item._id;
    state.selectedColor = item.color ? item.color[0] : null;

    const gallery = refs.furnitureModal.querySelector('[data-furniture-gallery]');

    if (gallery && item.images && item.images.length > 0) {
      gallery.innerHTML = item.images
        .map(
          imgUrl => `
            <div class="furniture-modal__img-wrapper">
              <img src="${imgUrl}" alt="${item.name}" class="furniture-modal__img">
            </div>
          `
        )
        .join('');
    }

    const title = refs.furnitureModal.querySelector('[data-furniture-title]');
    const category = refs.furnitureModal.querySelector('[data-furniture-category]');
    const price = refs.furnitureModal.querySelector('[data-furniture-price]');
    const rating = refs.furnitureModal.querySelector('[data-furniture-rating]');

    if (rating) {
      rating.innerHTML = renderStars(item.rate);
    }

    const colorsList = refs.furnitureModal.querySelector('[data-furniture-colors]');

    if (colorsList) {
      colorsList.innerHTML = item.color
        .map(
          (hex, index) => `
            <li class="color-item">
              <label class="color-label">
                <input
                  type="checkbox"
                  name="furniture-color"
                  value="${hex}"
                  class="color-input"
                  ${index === 0 ? 'checked' : ''}>
                <span class="color-marker" style="background-color: ${hex}"></span>
              </label>
            </li>
          `
        )
        .join('');

      colorsList.onchange = e => {
        const target = e.target;

        if (target.classList.contains('color-input')) {
          if (!target.checked) {
            target.checked = true;
            return;
          }

          colorsList.querySelectorAll('.color-input').forEach(checkbox => {
            checkbox.checked = checkbox === target;
          });

          state.selectedColor = target.value;
        }
      };
    }

    const desc = refs.furnitureModal.querySelector('[data-furniture-description]');
    const dimensions = refs.furnitureModal.querySelector('[data-furniture-dimensions]');

    if (title) title.textContent = item.name;
    if (category) category.textContent = item.type;
    if (price) price.textContent = `${item.price} грн`;
    if (desc) desc.textContent = item.description;
    if (dimensions) dimensions.textContent = item.sizes;

    openModal(refs.furnitureModal);
    lockScroll();
  } catch (error) {
    console.error('Помилка завантаження товару:', error);
    showToast('Не вдалося завантажити товар', 'error');
  }
}

export function initFurnitureModal() {
  document.addEventListener('click', event => {
    const openBtn = event.target.closest('[data-id]');
    const closeBtn = event.target.closest('[data-modal-close]');
    const isBackDrop = event.target.hasAttribute('data-modal-backdrop');

    const goToOrderBtn = event.target.closest('[data-open-order-modal]');

    if (openBtn) {
      openFurnitureModal(openBtn.dataset.id);
    }

    if (closeBtn || isBackDrop) {
      closeModal(refs.furnitureModal);
      unlockScroll();
    }

    if (goToOrderBtn) {
      closeModal(refs.furnitureModal);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !refs.furnitureModal.classList.contains('is-hidden')) {
      closeModal(refs.furnitureModal);
      unlockScroll();
    }
  });
}
