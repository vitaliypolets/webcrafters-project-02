export function renderFurniture(items = []) {
  return items
    .map(
      item => `
        <li>
          <article class="furniture-card">
            <div class="furniture-card__image">Furniture image</div>
            <div class="furniture-card__body">
              <h3 class="furniture-card__title">${item.name}</h3>
              <p class="furniture-card__meta">Категорія: ${item.category}</p>
              <p class="furniture-card__meta">Колір: ${item.color}</p>
              <p class="furniture-card__price">${item.price}</p>
              <div class="furniture-card__actions">
                <button class="btn btn--primary" type="button" data-furniture-id="${item.id}">
                  Детальніше
                </button>
              </div>
            </div>
          </article>
        </li>
      `
    )
    .join('');
}
