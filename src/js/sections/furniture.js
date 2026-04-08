import { refs } from '../utils/selectors.js';
import { renderCategories } from '../render/render-categories.js';
import { renderFurnitureCards } from '../render/render-furniture.js';
import { fetchCategories, fetchFurniture } from '../api/furniture-api.js';
import { showLoader, hideLoader } from '../utils/loader.js';
import { showToast } from '../utils/toast.js';

let currentPage = 1;
let currentCategoryId = '';
let furnitureCategories = [];
let totalPages = 1;

function showLoadMoreButton() {
  refs.loadMoreBtn?.classList.remove('is-hidden');
}

function hideLoadMoreButton() {
  refs.loadMoreBtn?.classList.add('is-hidden');
}

function checkButtonStatus() {
  if (!refs.loadMoreBtn) return;

  if (totalPages <= 1 || currentPage >= totalPages) {
    hideLoadMoreButton();
  } else {
    showLoadMoreButton();
  }
}

export async function initFurnitureSection() {
  if (refs.categoriesContainer) {
    try {
      showLoader('Завантаження категорій...');
      const categories = await fetchCategories();
      refs.categoriesContainer.innerHTML = renderCategories(categories);
      furnitureCategories = document.querySelectorAll('.category-card');
    } catch (error) {
      console.error('Помилка завантаження категорій:', error);
      showToast('Не вдалося завантажити категорії');
    } finally {
      hideLoader(); // <- додано
    }
  }

  if (refs.furnitureContainer) {
    try {
      showLoader('Завантаження меблів...');
      const res = await fetchFurniture({ page: currentPage });

      totalPages = Math.ceil((res.totalItems || 0) / (res.limit || 1));
      refs.furnitureContainer.innerHTML = renderFurnitureCards(res.furnitures);

      checkButtonStatus();

      if (res.furnitures.length === 0) {
        hideLoadMoreButton();
        showToast('Товарів поки немає');
      }
    } catch (error) {
      console.error('Помилка завантаження меблів:', error);
      hideLoadMoreButton();
      showToast('Помилка завантаження товарів');
    } finally {
      hideLoader();
    }
  }

  furnitureCategories.forEach(element => {
    element.addEventListener('click', async e => {
      e.preventDefault();

      furnitureCategories.forEach(btn => btn.classList.remove('is-active'));
      element.classList.add('is-active');

      currentCategoryId = element.dataset.categoryId || '';
      currentPage = 1;

      try {
        showLoader('Завантаження меблів...');

        const res = await fetchFurniture(
          currentCategoryId
            ? { category: currentCategoryId, page: currentPage }
            : { page: currentPage }
        );

        totalPages = Math.ceil((res.totalItems || 0) / (res.limit || 1));
        refs.furnitureContainer.innerHTML = renderFurnitureCards(res.furnitures);

        checkButtonStatus();

        if (res.furnitures.length === 0) {
          hideLoadMoreButton();
          showToast('Товарів у цій категорії немає');
        }
      } catch (error) {
        console.error('Помилка завантаження меблів:', error);
        hideLoadMoreButton();
        showToast('Помилка завантаження товарів');
      } finally {
        hideLoader(); // <- додано
      }
    });
  });

  if (refs.loadMoreBtn) {
    refs.loadMoreBtn.addEventListener('click', async () => {
      currentPage += 1;

      try {
        showLoader('Завантажуємо ще...');

        const res = await fetchFurniture(
          currentCategoryId
            ? { category: currentCategoryId, page: currentPage }
            : { page: currentPage }
        );

        totalPages = Math.ceil((res.totalItems || 0) / (res.limit || 1));

        refs.furnitureContainer.insertAdjacentHTML(
          'beforeend',
          renderFurnitureCards(res.furnitures)
        );

        checkButtonStatus();

        if (res.furnitures.length === 0 || currentPage >= totalPages) {
          hideLoadMoreButton();
          showToast('Більше товарів немає');
        }
      } catch (error) {
        console.error('Помилка завантаження меблів:', error);
        showToast('Помилка завантаження товарів');
      } finally {
        hideLoader();
      }
    });
  }
}