import starIcons from 'css-star-rating/images/star-rating.icons.svg';

function roundRating(rate) {
  return Math.round(Number(rate) * 2) / 2;
}

export function renderStars(rate) {
  const rounded = roundRating(rate);
  const stars = [1, 2, 3, 4, 5];

  const markup = stars
    .map(star => {
      if (rounded >= star) {
        return `<li><svg class="star"><use href="${starIcons}#star-filled"></use></svg></li>`;
      } else if (rounded >= star - 0.5) {
        return `<li><svg class="star"><use href="${starIcons}#star-half"></use></svg></li>`;
      } else {
        return `<li><svg class="star"><use href="${starIcons}#star-empty"></use></svg></li>`;
      }
    })
    .join('');

  return `<ul class="star-container" aria-label="Рейтинг ${rounded} з 5">${markup}</ul>`;
}