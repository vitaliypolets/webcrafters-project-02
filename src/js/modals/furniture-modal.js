import { fetchFurnitureById } from '../api/furniture-api.js';
import { refs } from '../utils/selectors.js';
import { state } from '../utils/state.js';
import { openModal, closeModal } from './modal-base.js';
import { lockScroll, unlockScroll } from '../utils/scroll-lock.js';
import {renderStars} from '../render/render-stars.js'

export async function openFurnitureModal(id) {
  const item = await fetchFurnitureById(id);

  if (!item || !refs.furnitureModal) {
    return;
  };

  state.selectedFurnitureId = item._id;
  state.selectedColor = item.color ? item.color[0] : null;

  const gallery = refs.furnitureModal.querySelector('[data-furniture-gallery]');
  const placeholdList = {
    name: "Сучасний інтер'єр вітальні",
    images: [
      "https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  };
  if (gallery && placeholdList.images && placeholdList.images.length > 0) {
    // gallery.innerHTML = item.images
    gallery.innerHTML = placeholdList.images
      .map(
        imgUrl => `
      <div class="furniture-modal__img-wrapper">
        <img src="${imgUrl}" alt="${placeholdList.name}" class="furniture-modal__img">
      </div>
    `).join('');
  };

  const title = refs.furnitureModal.querySelector('[data-furniture-title]');
  const category = refs.furnitureModal.querySelector('[data-furniture-category]');
  const price = refs.furnitureModal.querySelector('[data-furniture-price]');
  const rating = refs.furnitureModal.querySelector('[data-furniture-rating]');
  if (rating) {
    rating.innerHTML = renderStars(item.rate);
  }

  const colorsList = refs.furnitureModal.querySelector('[data-furniture-colors]');
  if (colorsList) {

    const defaultColors = ['#000000', '#757575', '#D3D3D3']; // Кольори на випадок порожнечі
    const actualColors = (Array.isArray(item.color) && item.color.length > 0) 
    ? item.color 
      : defaultColors;
    
    
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

  const desc = refs.furnitureModal.querySelector('[data-furniture-description]');
  const dimensions = refs.furnitureModal.querySelector('[data-furniture-dimensions]');

  if (title) title.textContent = item.name;
  // if (category) category.textContent = item.type;
  if (price) price.textContent = `${item.price} грн`;
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
