import { submitOrder } from '../api/orders-api.js';
import { refs } from '../utils/selectors.js';
import { state } from '../utils/state.js';
import { showToast } from '../utils/toast.js';
import { openModal, closeModal } from './modal-base.js';

export function initOrderModal() {
  document.addEventListener('click', event => {
    const openBtn = event.target.closest('[data-open-order-modal]');
    const closeBtn = event.target.closest('[data-modal-close]');
    const backdrop = refs.orderModal && event.target === refs.orderModal.querySelector('[data-modal-backdrop]');

    if (openBtn) {
      openModal(refs.orderModal);
    }

    if (closeBtn || backdrop) {
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
   const rawPhone = formData.get('phone');
   const cleanedPhone = rawPhone.replace(/\D/g, '');
   const payload = {
  name: formData.get('name'),
  phone: cleanedPhone,
  comment: formData.get('comment') || 'Без коментаря',
  modelId: state.selectedFurnitureId,
  color: state.selectedColor,
};
    console.log(payload);
    
      if (!/^\d{12}$/.test(payload.phone)) {
    showToast('Телефон має містити 12 цифр (наприклад: 380XXXXXXXXX)');
    return;
  }

    if (!payload.name || !payload.phone) {
      showToast("Заповни обовʼязкові поля: імʼя та телефон");
      return;
    };

    if (!payload.modelId || !payload.color) {
      showToast("Не обрано товар або колір");
      return;
    };

try {
  const data = await submitOrder(payload);
  console.log('Order success:', data);
  if (refs.orderForm) refs.orderForm.reset();
  showToast('Замовлення успішно надіслано');


  closeModal(refs.orderModal);
} catch (error) {
  console.error('Order error:', error);
  showToast('Помилка при відправці');
}
  });
};
