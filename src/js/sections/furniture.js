import { refs } from '../utils/selectors.js';
import { renderCategories } from '../render/render-categories.js';
import { renderFurnitureCards } from '../render/render-furniture.js';
import { fetchCategories, fetchFurniture } from '../api/furniture-api.js';
import { showLoader, hideLoader } from '../utils/loader.js';
import { showToast } from '../utils/toast.js';

const MOBILE_BREAKPOINT = 768;
const MOBILE_LIMIT = 4;
const DESKTOP_LIMIT = 8;

let currentPage = 1;
let currentCategoryId = '';
let totalPages = 1;
let furnitureCategories = [];
let currentViewMode = getViewMode();
let areStaticEventsBound = false;
let resizeTimeoutId = null;

function getViewMode() {
  return window.innerWidth < MOBILE_BREAKPOINT ? 'mobile' : 'desktop';
}

function getCurrentLimit() {
  return getViewMode() === 'mobile' ? MOBILE_LIMIT : DESKTOP_LIMIT;
}

function showLoadMoreButton() {
  refs.loadMoreBtn?.classList.remove('is-hidden');
}

function hideLoadMoreButton() {
  refs.loadMoreBtn?.classList.add('is-hidden');
}

function showPagination() {
  refs.furniturePaginationWrap?.classList.remove('is-hidden');
}

function hidePagination() {
  refs.furniturePaginationWrap?.classList.add('is-hidden');
}

function getRequestParams() {
  const params = {
    page: currentPage,
    limit: getCurrentLimit(),
  };

  if (currentCategoryId) {
    params.category = currentCategoryId;
  }

  return params;
}

function updatePaginationData(response) {
  const totalItems = Number(response?.totalItems) || 0;
  const responseLimit = Number(response?.limit) || getCurrentLimit();

  totalPages = totalItems > 0 ? Math.ceil(totalItems / responseLimit) : 0;
}

function updateArrowState() {
  if (refs.furniturePrevBtn) {
    refs.furniturePrevBtn.disabled = currentPage <= 1;
  }

  if (refs.furnitureNextBtn) {
    refs.furnitureNextBtn.disabled = currentPage >= totalPages;
  }
}

function buildPaginationModel() {
  if (totalPages <= 1) return [];

  const items = [];

  for (let page = 1; page <= totalPages; page += 1) {
    const isFirst = page === 1;
    const isLast = page === totalPages;
    const isNearCurrent = Math.abs(page - currentPage) <= 1;
    const isNearStart = currentPage <= 3 && page <= 3;
    const isNearEnd = currentPage >= totalPages - 2 && page >= totalPages - 2;

    if (isFirst || isLast || isNearCurrent || isNearStart || isNearEnd) {
      items.push(page);
    } else if (items[items.length - 1] !== '...') {
      items.push('...');
    }
  }

  return items;
}

function renderPagination() {
  if (!refs.furniturePagination) return;

  const paginationItems = buildPaginationModel();

  refs.furniturePagination.innerHTML = paginationItems
    .map(item => {
      if (item === '...') {
        return `<span class="furniture-pagination__ellipsis">...</span>`;
      }

      const isActive = item === currentPage;

      return `
        <button
          class="furniture-pagination__page ${isActive ? 'is-active' : ''}"
          type="button"
          data-page="${item}"
          aria-label="Сторінка ${item}"
          ${isActive ? 'aria-current="page"' : ''}
        >
          ${item}
        </button>
      `;
    })
    .join('');
}

function updateControlsVisibility() {
  const isMobile = getViewMode() === 'mobile';

  if (isMobile) {
    hidePagination();

    if (totalPages <= 1 || currentPage >= totalPages) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    return;
  }

  hideLoadMoreButton();

  if (totalPages <= 1) {
    hidePagination();
    return;
  }

  showPagination();
  updateArrowState();
  renderPagination();
}

function scrollToFurnitureSection() {
  const furnitureList = refs.furnitureContainer;
  const firstCard = furnitureList?.querySelector('.product-card');
  const header = document.querySelector('.header');

  const scrollTarget = firstCard || furnitureList;
  if (!scrollTarget) return;

  const headerHeight = header ? header.offsetHeight : 0;
  const targetTop =
    scrollTarget.getBoundingClientRect().top +
    window.pageYOffset -
    headerHeight -
    24;

  window.scrollTo({
    top: targetTop,
    behavior: 'smooth',
  });
}

async function loadFurniture({ append = false } = {}) {
  if (!refs.furnitureContainer) return;

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
      if (!append) {
        refs.furnitureContainer.innerHTML = renderFurnitureCards([]);
        showToast(
          currentCategoryId
            ? 'Товарів у цій категорії немає'
            : 'Товарів поки немає',
          'info'
        );
      } else {
        showToast('Більше товарів немає', 'info');
      }

      updateControlsVisibility();
      return;
    }

    updateControlsVisibility();
  } catch (error) {
    console.error('Помилка завантаження меблів:', error);

    if (append && currentPage > 1) {
      currentPage -= 1;
    }

    updateControlsVisibility();
    showToast('Помилка завантаження товарів', 'error');
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

      await loadFurniture({ append: false });
      scrollToFurnitureSection();
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

function bindPaginationEvents() {
  refs.furniturePrevBtn?.addEventListener('click', async () => {
    if (currentPage <= 1) return;

    currentPage -= 1;
    await loadFurniture({ append: false });
    scrollToFurnitureSection();
  });

  refs.furnitureNextBtn?.addEventListener('click', async () => {
    if (currentPage >= totalPages) return;

    currentPage += 1;
    await loadFurniture({ append: false });
    scrollToFurnitureSection();
  });

  refs.furniturePagination?.addEventListener('click', async event => {
    const pageBtn = event.target.closest('[data-page]');
    if (!pageBtn) return;

    const nextPage = Number(pageBtn.dataset.page);

    if (!nextPage || nextPage === currentPage) return;

    currentPage = nextPage;
    await loadFurniture({ append: false });
    scrollToFurnitureSection();
  });
}

function bindResizeEvent() {
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeoutId);

    resizeTimeoutId = setTimeout(async () => {
      const nextViewMode = getViewMode();

      if (nextViewMode === currentViewMode) return;

      currentViewMode = nextViewMode;
      currentPage = 1;

      await loadFurniture({ append: false });
    }, 200);
  });
}

function bindStaticEventsOnce() {
  if (areStaticEventsBound) return;

  bindLoadMoreEvent();
  bindPaginationEvents();
  bindResizeEvent();

  areStaticEventsBound = true;
}

async function loadCategories() {
  if (!refs.categoriesContainer) return;

  try {
    showLoader('Завантаження категорій...');

    const categories = await fetchCategories();

    refs.categoriesContainer.innerHTML = renderCategories(
      categories,
      'Всі товари'
    );

    furnitureCategories =
      refs.categoriesContainer.querySelectorAll('.category-card');

    bindCategoryEvents();
  } catch (error) {
    console.error('Помилка завантаження категорій:', error);
    showToast('Не вдалося завантажити категорії', 'error');
  } finally {
    hideLoader();
  }
}

export async function initFurnitureSection() {
  hideLoadMoreButton();
  hidePagination();
  bindStaticEventsOnce();

  await loadCategories();

  currentPage = 1;
  currentCategoryId = '';
  totalPages = 1;
  currentViewMode = getViewMode();

  await loadFurniture({ append: false });
}