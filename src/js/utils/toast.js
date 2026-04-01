let activeToast = null;

export function showToast(message = 'Щось пішло не так') {
  if (activeToast) {
    activeToast.remove();
  }

  activeToast = document.createElement('div');
  activeToast.className = 'toast';
  activeToast.textContent = message;
  document.body.append(activeToast);

  setTimeout(() => {
    activeToast?.remove();
    activeToast = null;
  }, 2500);
}
