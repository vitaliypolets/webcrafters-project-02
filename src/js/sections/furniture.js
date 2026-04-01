import { fetchCategories, fetchFurniture } from '../api/furniture-api.js';
import { renderCategories } from '../render/render-categories.js';
import { renderFurniture } from '../render/render-furniture.js';
import { refs } from '../utils/selectors.js';
import { state } from '../utils/state.js';
import { showLoader, hideLoader } from '../utils/loader.js';
import { showToast } from '../utils/toast.js';

async function loadCategories() {
  const categories = await fetchCategories();
  state.categories = categories;
  refs.categoriesList.innerHTML = renderCategories(categories);
}

async function loadFurniture({ append = false } = {}) {
  showLoader();
  try {
    const { items, total } = await fetchFurniture({
      category: state.activeCategory,
      page: state.page,
      limit: state.limit,
    });

    refs.furnitureList.innerHTML = append
      ? refs.furnitureList.innerHTML + renderFurniture(items)
      : renderFurniture(items);

    const shownItems = state.page * state.limit;
    if (shownItems >= total) {
      refs.loadMoreBtn?.classList.add('is-hidden');
    } else {
      refs.loadMoreBtn?.classList.remove('is-hidden');
    }
  } catch (error) {
    showToast('Не вдалося завантажити меблі');
  } finally {
    hideLoader();
  }
}

export function initFurnitureSection() {
  if (!refs.categoriesContainer || !refs.furnitureContainer) return;

  const mockCategories = ['Дивани', 'Стільці', 'Столи'];
  const mockFurniture = [
    {
      _id: '1',
      name: 'Сучасний диван',
      price: 12500,
      colors: ['Бежевий'],
      images: ['./images/placeholder-furniture.jpg'],
    },
  ];

  refs.categoriesContainer.innerHTML = renderCategories(mockCategories);
  refs.furnitureContainer.innerHTML = renderFurnitureCards(mockFurniture);
}




export async function initFurniture() {
  if (!refs.categoriesList || !refs.furnitureList) return;

  await loadCategories();
  await loadFurniture();

  refs.categoriesList.addEventListener('click', async event => {
    const btn = event.target.closest('[data-category]');
    if (!btn) return;

    state.activeCategory = btn.dataset.category;
    state.page = 1;

    refs.categoriesList
      .querySelectorAll('.category-btn')
      .forEach(button => button.classList.toggle('is-active', button === btn));

    await loadFurniture();
  });

  refs.loadMoreBtn?.addEventListener('click', async () => {
    state.page += 1;
    await loadFurniture({ append: true });
  });
}
