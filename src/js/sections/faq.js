export function initFaq() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;

      items.forEach(other => {
        if (other !== item) {
          other.open = false;
        }
      });
    });
  });
}

