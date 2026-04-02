export function renderCategories(categories = [], activeCategory = '') {
  if (!Array.isArray(categories) || categories.length === 0) {
    return '<p class="furniture__empty">Категорії не знайдено.</p>';
  }

  const allButton = `
    <button
      class="category-btn ${activeCategory === '' ? 'is-active' : ''}"
      type="button"
      data-category=""
    >
      Усі
    </button>
  `;

  const categoryButtons = categories
    .map(category => {
      const value = category.name ?? category.category ?? category;
      const label = category.label ?? category.name ?? category.category ?? category;

      return `
        <button
          class="category-btn ${activeCategory === value ? 'is-active' : ''}"
          type="button"
          data-category="${value}"
        >
          ${label}
        </button>
      `;
    })
    .join('');

  return `
    <div class="furniture__categories-list">
      ${allButton}
      ${categoryButtons}
    </div>
  `;
}