import { fetchFurnitureById } from '../api/furniture-api.js';
import { refs } from '../utils/selectors.js';
import { state } from '../utils/state.js';
import { openModal, closeModal } from './modal-base.js';
import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';

export async function openFurnitureModal(id) {
  const item = await fetchFurnitureById(id);

  if (!item || !refs.furnitureModal) {
    return;
  };

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
    `).join('');
  };

  const title = refs.furnitureModal.querySelector('[data-furniture-title]');
  const category = refs.furnitureModal.querySelector('[data-furniture-category]');
  const price = refs.furnitureModal.querySelector('[data-furniture-price]');
  const rating = refs.furnitureModal.querySelector('[data-furniture-rating]');
 const desc = refs.furnitureModal.querySelector('[data-furniture-description]');
  const dimensions = refs.furnitureModal.querySelector('[data-furniture-dimensions]');

  const colorsList = refs.furnitureModal.querySelector('[data-furniture-colors]');
  if (colorsList) {

    const actualColors = Array.isArray(item.color) ? item.color : [];
    

if (actualColors.length === 0) {
  colorsList.innerHTML = '<li>Кольори недоступні</li>';
  state.selectedColor = null;
} else {
  colorsList.innerHTML = actualColors
    .map((hex, index) => `
      <li class="color-item">
        <label class="color-label">
          <input
            type="radio"
            name="furniture-color"
            value="${hex}"
            class="color-input"
            ${index === 0 ? 'checked' : ''}
          >
          <span class="color-marker" style="background-color: ${hex}"></span>
        </label>
      </li>
    `).join('');

  state.selectedColor = actualColors[0];

  colorsList.onchange = (e) => {
    if (e.target.classList.contains('color-input')) {
      state.selectedColor = e.target.value;
    }
  };
}
    
    
    colorsList.innerHTML = actualColors
      .map((hex, index) => `
        <li class="color-item">
          <label class="color-label">
            <input
              type="radio"
              name="furniture-color"
              value="${hex}"
              class="color-input"
              ${index === 0 ? 'checked' : ''}>
            <span class="color-marker" style="background-color: ${hex}"></span>
          </label>
        </li>
      `).join('');
    
    colorsList.onchange = (e) => {
    if (e.target.classList.contains('color-input')) {
      state.selectedColor = e.target.value;
    }
  };
  }


  if (gallery) gallery.textContent = item.images;
  if (title) title.textContent = item.name;
  if (category) category.textContent = item.category.name;
  if (price) price.textContent = `${item.price} грн`;
  if (rating) rating.textContent = item.rate;
  if (desc) desc.textContent = item.description;
  if (dimensions) dimensions.textContent = item.sizes;


  openModal(refs.furnitureModal);
  lockScroll();
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
    if (event.key === 'Escape') {
      closeModal(refs.furnitureModal);
      unlockScroll();
    }
  });
}
