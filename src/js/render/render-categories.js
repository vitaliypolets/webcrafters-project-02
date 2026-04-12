export function renderCategories(
  categories = [],
  activeCategory = 'Всі товари'
) {
  const categoryImages = {
    'Всі товари': './categories/categories_all.jpg',
    "М'які меблі": './categories/categories2.jpg',
    'Шафи та системи зберігання': './categories/categories3.jpg',
    'Ліжка та матраци': './categories/categories1.jpg',
    'Столи': './categories/categories4.jpg',
    'Стільці та табурети': './categories/categories12.jpg',
    'Кухні': './categories/categories11.jpg',
    'Меблі для дитячої': './categories/categories5.jpg',
    'Меблі для офісу': './categories/categories6.jpg',
    'Меблі для передпокою': './categories/categories7.jpg',
    'Меблі для ванної кімнати': './categories/categories8.jpg',
    'Садові та вуличні меблі': './categories/categories9.jpg',
    'Декор та аксесуари': './categories/categories10.jpg',
  };

  if (!Array.isArray(categories) || categories.length === 0) {
    return `<p class="furniture__empty">Категорії не знайдено.</p>`;
  }

  return `<div class="furniture__categories-list">
    ${categories
      .map(category => {
        const name = category.name ?? 'Категорія';
        const image = categoryImages[name] || './categories/default.jpg';

        const isActive = activeCategory === name;

        return `<button
          class="category-card ${isActive ? 'is-active' : ''}"
          type="button"
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
        </button>`;
      })
      .join('')}
  </div>`;
}
