import { submitOrder } from '../api/orders-api.js';
import { refs } from '../utils/selectors.js';
import { state } from '../utils/state.js';
import { showToast } from '../utils/toast.js';
import { openModal, closeModal } from './modal-base.js';

export function initOrderModal() {
  const nameInput = refs.orderForm.querySelector('[name="name"]');
  const phoneInput = refs.orderForm.querySelector('[name="phone"]');
  const nameError = refs.orderForm.querySelector('#name-error');
  const phoneError = refs.orderForm.querySelector('#phone-error');

  [nameInput, phoneInput].forEach(input => {
    input.addEventListener('input', () => {
      const value = input.value.trim();

      if (input.name === 'name') {
        const nameRegex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z\s]+$/;
        if (value && nameRegex.test(value)) {
          input.classList.remove('input-error');
          nameError.textContent = '';
          nameError.classList.remove('active');
        }
      }

      if (input.name === 'phone') {
        const cleaned = value.replace(/\D/g, '');
        if (/^\d{12}$/.test(cleaned)) {
          input.classList.remove('input-error');
          phoneError.textContent = '';
          phoneError.classList.remove('active');
        }
      }
    });
  });

  document.addEventListener('click', event => {
    const openBtn = event.target.closest('[data-open-order-modal]');
    const closeBtn = event.target.closest('[data-modal-close]');
    const backdrop = refs.orderModal && event.target === refs.orderModal.querySelector('[data-modal-backdrop]');

    if (openBtn) openModal(refs.orderModal);
    if (closeBtn || backdrop) closeModal(refs.orderModal);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal(refs.orderModal);
  });

  refs.orderForm?.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const rawPhone = formData.get('phone');
    const cleanedPhone = rawPhone.replace(/\D/g, '');
    const name = formData.get('name');

    [nameInput, phoneInput].forEach(input => input.classList.remove('input-error'));
    [nameError, phoneError].forEach(el => {
      el.textContent = '';
      el.classList.remove('active');
    });

    const nameRegex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z\s]+$/;
    if (!name || !name.trim() || !nameRegex.test(name)) {
      nameInput.classList.add('input-error');
      nameError.textContent = "Тільки укр/англ букви";
      nameError.classList.add('active');
      return;
    }

    if (!/^[\d\s]+$/.test(rawPhone)) {
      phoneInput.classList.add('input-error');
      phoneError.textContent = "Тільки цифри";
      phoneError.classList.add('active');
      return;
    }

    if (cleanedPhone.length !== 12) {
      phoneInput.classList.add('input-error');
      phoneError.textContent = "Телефон має містити тільки 12 цифр";
      phoneError.classList.add('active');
      return;
    }

    if (!state.selectedFurnitureId || !state.selectedColor) {
      showToast('Не обрано товар або колір', 'info');
      return;
    }

    const payload = {
      name,
      phone: cleanedPhone,
      comment: formData.get('comment') || 'Без коментаря',
      modelId: state.selectedFurnitureId,
      color: state.selectedColor,
    };

    try {
      const data = await submitOrder(payload);
      refs.orderForm.reset();
      showToast('Замовлення успішно надіслано', 'success');
      closeModal(refs.orderModal);
    } catch (error) {
      showToast('Помилка при відправці', 'error');
    }
  });
}