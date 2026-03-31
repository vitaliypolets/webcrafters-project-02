// Оголошення змінних
const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');

// Функція відкриття модального вікна
function openModal() {
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // Заборонити прокрутку
}

// Функція закриття модального вікна
function closeModal() {
  modal.classList.remove('is-open');
  document.body.style.overflow = 'auto'; // Дозволити прокрутку
}

// Додавання обробників подій
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Закриття по кліку на backdrop
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Закриття по клавіші Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

// Перевірка, чи не було вікно закрите користувачем
document.addEventListener('DOMContentLoaded', function() {
  const isModalClosed = localStorage.getItem('modalClosed');
  if (!isModalClosed) {
    // Показати модальне вікно тільки якщо користувач його ще не закривав
    // openModal();
  } else {
    closeModal();
  }
});

// При закритті модального вікна зберігати стан
function closeModal() {
  modal.classList.remove('is-open');
  document.body.style.overflow = 'auto';
  localStorage.setItem('modalClosed', 'true');
}