function getFurnitureId(item) {
  return item._id ?? item.id ?? '';
}

function getFurnitureImage(item) {
  if (Array.isArray(item.images) && item.images.length > 0) {
    return item.images[0];
  }

  if (item.image) return item.image;
  if (item.img) return item.img;

  return './images/furniture1.jpg';
}

function getFurnitureTitle(item) {
  return item.name ?? item.model ?? item.title ?? 'Меблі';
}

function getFurnitureColor(item) {
  if (Array.isArray(item.colors) && item.colors.length > 0) {
    return item.colors[0];
  }

  return item.color ?? 'Не вказано';
}

function getFurniturePrice(item) {
  const price = item.price ?? item.currentPrice ?? 0;

  if (typeof price === 'number') {
    return `${price.toLocaleString('uk-UA')} грн`;
  }

  return `${price} грн`;
}

export function renderFurnitureCards(items = []) {
  if (!Array.isArray(items) || items.length === 0) {
    return `
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `;
  }

  return items
    .map(item => {
      const id = getFurnitureId(item);
      const image = getFurnitureImage(item);
      const title = getFurnitureTitle(item);
      const color = getFurnitureColor(item);
      const price = getFurniturePrice(item);

      return `
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${image}"
              alt="${title}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${title}</h3>
            <p class="product-card__color">Колір: ${color}</p>
            <p class="product-card__price">${price}</p>

            <button
              class="product-card__btn btn btn--primary"
              type="button"
              data-furniture-details
              data-id="${id}"
            >
              Детальніше
            </button>
          </div>
        </article>
      `;
    })
    .join('');
}
