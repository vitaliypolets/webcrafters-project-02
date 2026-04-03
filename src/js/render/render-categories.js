export function renderCategories(categories = [], activeCategory = 'Усі') {
  if (!Array.isArray(categories) || categories.length === 0) {
    return '<p class="furniture__empty">Категорії не знайдено.</p>';
  }

  return `
    <div class="furniture__categories-list">
      ${categories
        .map(category => {
          const name = category.name ?? 'Категорія';
          const image = category.image ?? '/categories/categories_all.jpg';
          const isActive = activeCategory === name;

          return `
            <button
              class="category-card ${isActive ? 'is-active' : ''}"
              type="button"
              data-category="${name === 'Усі' ? '' : name}"
            >
              <div class="category-card__image-wrap">
                <img
                  class="category-card__image"
                  src="${image}"
                  alt="${name}"
                  loading="lazy"
                />
              </div>
              <span class="category-card__title">${name}</span>
            </button>
          `;
        })
        .join('')}
    </div>
  `;
}