import { renderStars } from './render-stars.js';

export function renderFeedbacks(feedbacks) {
  const feedbacksList = document.querySelector('.feedback-list');
  if (!feedbacksList) return;

  const markup = feedbacks
    .map(feedback => {
      const { name, descr, rate } = feedback;
      return `<li class ="swiper-slide feedback-item">
    ${renderStars(rate)}
    <p class="feedback-comment">"${descr}"</p>
    <p class="feedback-name">${name}</p></li>`;
    })
    .join('');

  feedbacksList.innerHTML = markup;
}
