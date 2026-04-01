export function renderCategories(categories = []) {
  return categories
    .map(
      category => `
        <li>
          <button class="category-btn ${category === 'all' ? 'is-active' : ''}" type="button" data-category="${category}">
            ${category}
          </button>
        </li>
      `
    )
    .join('');
}
