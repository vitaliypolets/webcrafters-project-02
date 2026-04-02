import starIcons from 'css-star-rating/images/star-rating.icons.svg';

function roundRating(rate) {
  return Math.round(Number(rate) * 2) / 2;
}

export function renderStars(rate) {
  const rounded = roundRating(rate);

  let markup = '';

  for (let i = 1; i <= 5; i++) {
    if (rounded >= i) {
      markup += `<li><svg class="star"><use href="${starIcons}#star-filled"></use></svg></li>`;
    } else if (rounded >= i - 0.5) {
      markup += `<li><svg class="star"><use href="${starIcons}#star-half"></use></svg></li>`;
    } else {
      markup += `<li><svg class="star"><use href="${starIcons}#star-empty"></use></svg></li>`;
    }
  }

  return `<ul class="star-container" aria-label="Рейтинг ${rounded} з 5">${markup}</ul>`;
}
