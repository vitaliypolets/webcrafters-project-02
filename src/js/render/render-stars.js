export function renderStars(rating = 5) {
  const rounded = Math.round(Number(rating));
  return `<div class="stars" aria-label="Рейтинг ${rounded} з 5">${'★'.repeat(rounded)}${'☆'.repeat(5 - rounded)}</div>`;
}
