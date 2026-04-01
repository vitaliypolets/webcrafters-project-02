import { submitOrder } from '../api/orders-api.js';
import { refs } from '../utils/selectors.js';
import { state } from '../utils/state.js';
import { showToast } from '../utils/toast.js';
import { openModal, closeModal } from './modal-base.js';

export function initOrderModal() {
  document.addEventListener('click', event => {
    const openBtn = event.target.closest('[data-open-order-modal]');
    const closeBtn = event.target.closest('[data-close-order-modal]');

    if (openBtn) {
      openModal(refs.orderModal);
    }

    if (closeBtn) {
      closeModal(refs.orderModal);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal(refs.orderModal);
    }
  });

  refs.orderForm?.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      comment: formData.get('comment'),
      furnitureId: state.selectedFurnitureId,
      color: state.selectedColor,
    };

    await submitOrder(payload);
    showToast('Замовлення успішно надіслано');
    event.currentTarget.reset();
    closeModal(refs.orderModal);
  });
}
