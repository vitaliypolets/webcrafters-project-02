let loaderEl = null;

function createLoader() {
  const backdrop = document.createElement('div');
  backdrop.className = 'loader-backdrop is-hidden';
  backdrop.setAttribute('aria-hidden', 'true');

  backdrop.innerHTML = `
    <div class="loader-modal" role="status" aria-live="polite">
      <div class="loader-spinner"></div>
      <p class="loader-text">Завантаження...</p>
    </div>
  `;

  document.body.append(backdrop);
  return backdrop;
}

export function showLoader(message = 'Завантаження...') {
  if (!loaderEl) {
    loaderEl = createLoader();
  }

  const textEl = loaderEl.querySelector('.loader-text');

  if (textEl) {
    textEl.textContent = message;
  }

  loaderEl.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

export function hideLoader() {
  if (!loaderEl) return;

  loaderEl.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}