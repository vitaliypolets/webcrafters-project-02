export function renderCategories(
  categories = [],
  activeCategory = 'Всі товари'
) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return `<p class="furniture__empty">Категорії не знайдено.</p>`;
  }
  return `<div class="furniture__categories-list">
  ${categories
    .map((category, index) => {
      const name = category.name ?? 'Категорія';
      const image =
        index === 0
          ? './categories/categories_all.jpg'
          : `./categories/categories${index}.jpg`;
      const isActive = activeCategory === name;
      return `<button
    class="category-card ${isActive ? 'is-active' : ''}"
    type = "buton"
    data-category="${name === 'Всі товари' ? '' : name}"
    data-category-id="${category._id || ''}">
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
  </div>`;
}
