import { fetchFeedbacks } from '../api/feedback-api.js';
import { renderFeedbacks } from '../render/render-feedbacks.js';
import { refs } from '../utils/selectors.js';
import { showToast } from '../utils/toast.js';

export async function initFeedback() {
  if (!refs.feedbackList) return;

  try {
    const feedbacks = await fetchFeedbacks();
    refs.feedbackList.innerHTML = renderFeedbacks(feedbacks);
  } catch (error) {
    showToast('Не вдалося завантажити відгуки');
  }
}
