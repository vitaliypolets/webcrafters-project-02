import starIcons from 'css-star-rating/images/star-rating.icons.svg';

function roundRating(rate) {
  return Math.round(Number(rate) * 2) / 2;
}

export function renderStars(rate) {
  const rounded = roundRating(rate);

  let markup = '';

  for (let i = 1; i <= 5; i++) {
    if (rounded >= i) {
      markup += `<svg class="star"><use href="${starIcons}#star-filled"></use></svg>`;
    } else if (rounded >= i - 0.5) {
      markup += `<svg class="star"><use href="${starIcons}#star-half"></use></svg>`;
    } else {
      markup += `<svg class="star"><use href="${starIcons}#star-empty"></use></svg>`;
    }
  }

  return `<ul class="rating value-1 half">
  <div class="star-container">${markup}</div>
  </ul>`;
}
