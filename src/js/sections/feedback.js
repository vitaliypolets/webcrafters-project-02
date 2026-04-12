import { showLoader, hideLoader } from '../utils/loader.js';
import { getFeedbacks } from '../api/feedback-api.js';
import { renderFeedbacks } from '../render/render-feedbacks.js';
import { showToast } from '../utils/toast.js';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function initFeedback() {
  showLoader('Завантаження відгуків...');

  try {
    const { feedbacks } = await getFeedbacks();

    if (!feedbacks || feedbacks.length === 0) {
      showToast('Не вдалося завантажити відгуки', 'error');
      return;
    }

    renderFeedbacks(feedbacks);

    const swiper = new Swiper('.feedback-swiper', {
      modules: [Navigation, Pagination],

      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      centeredSlides: true,

      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          centeredSlides: false,
        },
        1440: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          centeredSlides: false,
        },
      },

      pagination: {
        el: '.swiper-pagination-dots',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
      },
    });

    const swiperControlPanel = document.querySelectorAll(
      '.swiper-pagination-dots, .swiper-next-button, .swiper-prev-button'
    );

    swiperControlPanel.forEach(elem => {
      elem.style.display = 'flex';
    });

    swiper.on('slideChange', () => {
      const swiperPreButton = document.querySelector('.swiper-prev-button');
      const swiperNextButton = document.querySelector('.swiper-next-button');

      swiperPreButton.disabled = swiper.isBeginning;
      swiperNextButton.disabled = swiper.isEnd;
    });
  } catch (err) {
    showToast('Не вдалося завантажити відгуки', 'error');
  } finally {
    hideLoader();
  }
}