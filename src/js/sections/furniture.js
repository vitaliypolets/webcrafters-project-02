import { refs } from '../utils/selectors.js';
import { renderCategories } from '../render/render-categories.js';
import { renderFurnitureCards } from '../render/render-furniture.js';
import { fetchCategories, fetchFurniture } from '../api/furniture-api.js';
import { showLoader, hideLoader } from '../utils/loader.js';
import { showToast } from '../utils/toast.js'; // <- додано

let currentPage = 1;
let currentCategoryId = '';
let furnitureCategories = [];

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
      hideLoader();
    }
  }

  if (refs.furnitureContainer) {
    try {
      showLoader('Завантаження меблів...');
      const res = await fetchFurniture({ page: currentPage });
      refs.furnitureContainer.innerHTML = renderFurnitureCards(res.furnitures);

      if (res.furnitures.length === 0) {
        showToast('Товарів поки немає');
      }
    } catch (error) {
      console.error('Помилка завантаження меблів:', error);
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

      const categoryId = element.dataset.categoryId;
      currentCategoryId = categoryId || '';
      currentPage = 1;

      try {
        showLoader('Завантаження меблів...');
        const res = await fetchFurniture(
          currentCategoryId
            ? { category: currentCategoryId, page: currentPage }
            : { page: currentPage }
        );

        refs.furnitureContainer.innerHTML = renderFurnitureCards(
          res.furnitures
        );

        if (res.furnitures.length === 0) {
          showToast('Товарів у цій категорії немає');
        }

        const loadMoreBtn = document.querySelector('[data-load-more]');
        if (loadMoreBtn) loadMoreBtn.style.display = 'block';
      } catch (error) {
        console.error('Помилка завантаження меблів:', error);
        showToast('Помилка завантаження товарів');
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
