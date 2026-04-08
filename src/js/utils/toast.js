let activeToast = null;
let toastTimer = null;

const TOAST_CONFIG = {
  error: {
    title: 'Помилка',
    icon: '✕',
  },
  success: {
    title: 'Успішно',
    icon: '✓',
  },
  info: {
    title: 'Інформація',
    icon: 'i',
  },
};

export function showToast(message = 'Щось пішло не так', type = 'error') {
  const currentType = TOAST_CONFIG[type] ? type : 'error';
  const { title, icon } = TOAST_CONFIG[currentType];

  if (activeToast) {
    clearTimeout(toastTimer);
    removeToast(activeToast);
  }

  activeToast = document.createElement('div');
  activeToast.className = `app-toast app-toast--${currentType}`;
  activeToast.setAttribute('role', 'alert');
  activeToast.setAttribute('aria-live', 'assertive');

  activeToast.innerHTML = `
    <div class="app-toast__icon">${icon}</div>
    <div class="app-toast__content">
      <p class="app-toast__title">${title}</p>
      <p class="app-toast__message">${message}</p>
    </div>
    <button class="app-toast__close" type="button" aria-label="Закрити повідомлення">
      ×
    </button>
  `;

  document.body.append(activeToast);

  requestAnimationFrame(() => {
    activeToast.classList.add('is-visible');
  });

  const closeBtn = activeToast.querySelector('.app-toast__close');

  closeBtn?.addEventListener('click', () => {
    clearTimeout(toastTimer);
    removeToast(activeToast);
    activeToast = null;
  });

  toastTimer = setTimeout(() => {
    if (!activeToast) return;
    removeToast(activeToast);
    activeToast = null;
  }, 4000);
}

function removeToast(toastEl) {
  toastEl.classList.remove('is-visible');
  toastEl.classList.add('is-hiding');

  setTimeout(() => {
    toastEl.remove();
  }, 300);
}