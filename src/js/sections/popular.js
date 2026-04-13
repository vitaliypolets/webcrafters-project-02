import { showLoader, hideLoader } from '../utils/loader.js';
import { fetchPopular } from '../api/popular-api.js';
import { renderPopular } from '../render/render-popular';
import { showToast } from '../utils/toast.js';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function initPopular() {
  showLoader();

  try {
    const { furnitures } = await fetchPopular();

    if (!furnitures || furnitures.length === 0) {
      showToast('Не вдалося завантажити популярні товари', 'error');
      return;
    }

    renderPopular(furnitures);

    const swiper = new Swiper('.popular-swiper', {
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
        el: '.swiper-pagination-dots-popular',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },

      navigation: {
        nextEl: '.swiper-next-button-popular',
        prevEl: '.swiper-prev-button-popular',
      },
    });

    const swiperPrevButton = document.querySelector('.swiper-prev-button-popular');
    const swiperNextButton = document.querySelector('.swiper-next-button-popular');
    const swiperPagination = document.querySelector('.swiper-pagination-dots-popular');

    if (swiperPrevButton) swiperPrevButton.style.display = 'flex';
    if (swiperNextButton) swiperNextButton.style.display = 'flex';
    if (swiperPagination) swiperPagination.style.display = 'block';

    const updateButtonsState = () => {
      if (swiperPrevButton) swiperPrevButton.disabled = swiper.isBeginning;
      if (swiperNextButton) swiperNextButton.disabled = swiper.isEnd;
    };

    updateButtonsState();
    swiper.on('slideChange', updateButtonsState);
  } catch (err) {
    console.error(err);
    showToast('Не вдалося завантажити популярні товари', 'error');
  } finally {
    hideLoader();
  }
}