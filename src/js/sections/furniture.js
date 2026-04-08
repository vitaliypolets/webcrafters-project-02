import { refs } from '../utils/selectors.js';
import { renderCategories } from '../render/render-categories.js';
import { renderFurnitureCards } from '../render/render-furniture.js';
import { fetchCategories, fetchFurniture } from '../api/furniture-api.js';
import { showLoader, hideLoader } from '../utils/loader.js';
import { showToast } from '../utils/toast.js';

let currentPage = 1;
let currentCategoryId = '';
let totalPages = 1;
let furnitureCategories = [];

function showLoadMoreButton() {
  refs.loadMoreBtn?.classList.remove('is-hidden');
}

function hideLoadMoreButton() {
  refs.loadMoreBtn?.classList.add('is-hidden');
}

function updateLoadMoreButtonVisibility() {
  if (!refs.loadMoreBtn) return;

  if (totalPages <= 1 || currentPage >= totalPages) {
    hideLoadMoreButton();
  } else {
    showLoadMoreButton();
  }
}

function getRequestParams() {
  if (currentCategoryId) {
    return {
      category: currentCategoryId,
      page: currentPage,
    };
  }

  return {
    page: currentPage,
  };
}

function updatePaginationData(response) {
  const totalItems = Number(response?.totalItems) || 0;
  const limit = Number(response?.limit) || 1;

  totalPages = Math.ceil(totalItems / limit);

  if (totalItems === 0) {
    totalPages = 0;
  }
}

async function loadFurniture({ append = false } = {}) {
  try {
    showLoader(append ? 'Завантажуємо ще...' : 'Завантаження меблів...');

    const response = await fetchFurniture(getRequestParams());

    const furnitures = Array.isArray(response?.furnitures)
      ? response.furnitures
      : [];

    updatePaginationData(response);

    if (!append) {
      refs.furnitureContainer.innerHTML = renderFurnitureCards(furnitures);
    } else if (furnitures.length > 0) {
      refs.furnitureContainer.insertAdjacentHTML(
        'beforeend',
        renderFurnitureCards(furnitures)
      );
    }

    if (furnitures.length === 0) {
      hideLoadMoreButton();

      if (!append) {
        showToast(
          currentCategoryId
            ? 'Товарів у цій категорії немає'
            : 'Товарів поки немає'
        );
      } else {
        showToast('Більше товарів немає');
      }

      return;
    }

    updateLoadMoreButtonVisibility();
  } catch (error) {
    console.error('Помилка завантаження меблів:', error);

    if (append) {
      currentPage -= 1;
    }

    hideLoadMoreButton();
    showToast('Помилка завантаження товарів');
  } finally {
    hideLoader();
  }
}

function bindCategoryEvents() {
  furnitureCategories.forEach(categoryBtn => {
    categoryBtn.addEventListener('click', async event => {
      event.preventDefault();

      furnitureCategories.forEach(btn => btn.classList.remove('is-active'));
      categoryBtn.classList.add('is-active');

      currentCategoryId = categoryBtn.dataset.categoryId || '';
      currentPage = 1;
      totalPages = 1;

      await loadFurniture({ append: false });
    });
  });
}

function bindLoadMoreEvent() {
  if (!refs.loadMoreBtn) return;

  refs.loadMoreBtn.addEventListener('click', async () => {
    if (currentPage >= totalPages) {
      hideLoadMoreButton();
      return;
    }

    currentPage += 1;
    await loadFurniture({ append: true });
  });
}

async function loadCategories() {
  if (!refs.categoriesContainer) return;

  try {
    showLoader('Завантаження категорій...');

    const categories = await fetchCategories();
    refs.categoriesContainer.innerHTML = renderCategories(categories);

    furnitureCategories = document.querySelectorAll('.category-card');

    bindCategoryEvents();
  } catch (error) {
    console.error('Помилка завантаження категорій:', error);
    showToast('Не вдалося завантажити категорії');
  } finally {
    hideLoader();
  }
}

export async function initFurnitureSection() {
  hideLoadMoreButton();

  await loadCategories();

  if (refs.furnitureContainer) {
    currentPage = 1;
    currentCategoryId = '';
    totalPages = 1;

    await loadFurniture({ append: false });
  }

  bindLoadMoreEvent();
}