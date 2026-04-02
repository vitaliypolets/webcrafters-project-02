import { getFeedbacks } from '../api/feedback-api.js';
import { renderFeedbacks } from '../render/render-feedbacks.js';
import { refs } from '../utils/selectors.js';
import { showToast } from '../utils/toast.js';

export async function initFeedback() {
  try {
    const { feedbacks } = await getFeedbacks();
    if (!feedbacks || feedbacks.length === 0) {
      showToast('Не вдалося завантажити відгуки');
      return;
    }

    renderFeedbacks(feedbacks);
  } catch (err) {
    console.error(err);
  }
}
