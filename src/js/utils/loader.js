let loaderEl = null;

export function showLoader(message = 'Завантаження...') {
  if (!loaderEl) {
    loaderEl = document.createElement('div');
    loaderEl.className = 'loader';
    document.body.append(loaderEl);
  }
  loaderEl.textContent = message;
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add('is-hidden');
}
