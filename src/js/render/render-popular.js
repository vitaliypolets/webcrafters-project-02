export function renderPopular(items) {
  const list = document.querySelector('.popular-list');
  if (!list) return;

  list.innerHTML = items
    .map(
      item => `
    <li class="swiper-slide">
      <article class="product-card">
        <div class="product-card__image-wrap">
          <img src="${item.images?.[0]}" alt="${item.name}" loading="lazy" class="product-card__image"/>
        </div>

        <div class="product-card__content">
          <h3 class="product-card__title">${item.name}</h3>
          <div class="product-card__color">
            ${item.color.map(c => `<div class="item-color" style="background-color:${c}"></div>`).join('')}
          </div>
          <p class="product-card__price">${item.price} грн</p>
          <button class="product-card__btn btn btn--secondary" type="button" data-id="${item._id}">Детальніше</button>
        </div>
      </article>
    </li>
  `
    )
    .join('');
}
