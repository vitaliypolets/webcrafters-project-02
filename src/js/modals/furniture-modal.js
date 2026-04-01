import { fetchFurnitureById } from '../api/furniture-api.js';
import { refs } from '../utils/selectors.js';
import { state } from '../utils/state.js';
import { openModal, closeModal } from './modal-base.js';

export async function openFurnitureModal(id) {
  const item = await fetchFurnitureById(id);
  if (!item || !refs.furnitureModalContent) return;

  state.selectedFurnitureId = item.id;
  state.selectedColor = item.colors[0] ?? null;

  refs.furnitureModalContent.innerHTML = `
    <h2 class="modal__title">${item.name}</h2>
    <p class="furniture-card__meta">Категорія: ${item.category}</p>
    <p class="furniture-card__meta">Опис: ${item.description}</p>
    <p class="furniture-card__meta">Розміри: ${item.sizes}</p>
    <p class="furniture-card__price">${item.price}</p>
    <p class="furniture-card__meta">Доступні кольори: ${item.colors.join(', ')}</p>
    <button class="btn btn--primary" type="button" data-open-order-modal>
      Перейти до замовлення
    </button>
  `;

  openModal(refs.furnitureModal);
}

export function initFurnitureModal() {
  document.addEventListener('click', event => {
    const openBtn = event.target.closest('[data-furniture-id]');
    const closeBtn = event.target.closest('[data-close-furniture-modal]');

    if (openBtn) {
      openFurnitureModal(openBtn.dataset.furnitureId);
    }

    if (closeBtn) {
      closeModal(refs.furnitureModal);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal(refs.furnitureModal);
    }
  });
}
