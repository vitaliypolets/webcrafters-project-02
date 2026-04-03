import { getFeedbacks } from '../api/feedback-api.js';
import { renderFeedbacks } from '../render/render-feedbacks.js';
import { showToast } from '../utils/toast.js';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function initFeedback() {
  try {
    const { feedbacks } = await getFeedbacks();
    if (!feedbacks || feedbacks.length === 0) {
      showToast('Не вдалося завантажити відгуки');
      return;
    }

    renderFeedbacks(feedbacks);

    new Swiper('.feedback-swiper', {
      modules: [Navigation, Pagination],

      loop: false,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
      },
    });
  } catch (err) {
    console.error(err);
  }
}
