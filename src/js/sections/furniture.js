import { refs } from '../utils/selectors.js';
import { renderCategories } from '../render/render-categories.js';
import { renderFurnitureCards } from '../render/render-furniture.js';
import {
  fetchCategories,
  fetchFurniture,
  fetchFurnitureById,
} from '../api/furniture-api.js';

import { showLoader, hideLoader } from '../utils/loader.js';

let currentPage = 1;
let currentCategoryId = '';

export async function initFurnitureSection() {
  if (refs.categoriesContainer) {
    const categories = await fetchCategories();
    refs.categoriesContainer.innerHTML = renderCategories(categories);
  }

  if (refs.furnitureContainer) {
    try {
      showLoader('Завантаження...');

      const res = await fetchFurniture({ page: currentPage });
      refs.furnitureContainer.innerHTML = renderFurnitureCards(res.furnitures);
    } catch (error) {
      console.error('Помилка завантаження:', error);
    } finally {
      hideLoader();
    }
  }

  const furnitureCategories = document.querySelectorAll('.category-card');
  furnitureCategories.forEach(element => {
    element.addEventListener('click', async e => {
      e.preventDefault();

      const categoryId = e.currentTarget.dataset.categoryId;
      currentCategoryId = categoryId || '';
      currentPage = 1;

      try {
        showLoader('Завантаження...');

        const res = await fetchFurniture(
          currentCategoryId
            ? { category: currentCategoryId, page: currentPage }
            : { page: currentPage }
        );

        refs.furnitureContainer.innerHTML = renderFurnitureCards(
          res.furnitures
        );

        const loadMoreBtn = document.querySelector('[data-load-more]');
        if (loadMoreBtn) loadMoreBtn.style.display = 'block';
      } catch (error) {
        console.error('Помилка завантаження:', error);
      } finally {
        hideLoader();
      }
    });
  });

  const loadMoreBtn = document.querySelector('[data-load-more]');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', async () => {
      currentPage += 1;

      try {
        showLoader('Завантажуємо ще...');

        const res = await fetchFurniture(
          currentCategoryId
            ? { category: currentCategoryId, page: currentPage }
            : { page: currentPage }
        );
        refs.furnitureContainer.insertAdjacentHTML(
          'beforeend',
          renderFurnitureCards(res.furnitures)
        );

        if (res.furnitures.length === 0) {
          loadMoreBtn.style.display = 'none';
        }
      } catch (error) {
        console.error('Помилка завантаження:', error);
      } finally {
        hideLoader();
      }
    });
  }
}
