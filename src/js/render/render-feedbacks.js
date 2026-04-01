import { renderStars } from './render-stars.js';

export function renderFeedbacks(items = []) {
  return items
    .map(
      item => `
        <li>
          <article class="feedback-card">
            <div class="feedback-card__body">
              <p class="feedback-card__author">${item.author}</p>
              ${renderStars(item.rating)}
              <p class="feedback-card__text">${item.text}</p>
            </div>
          </article>
        </li>
      `
    )
    .join('');
}
