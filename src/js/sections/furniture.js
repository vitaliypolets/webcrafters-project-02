import { refs } from '../utils/selectors.js';
import { renderCategories } from '../render/render-categories.js';
import { renderFurnitureCards } from '../render/render-furniture.js';
import { fetchCategories, fetchFurniture } from '../api/furniture-api.js';

export async function initFurnitureSection() {
  if (refs.categoriesContainer) {
    const categories = await fetchCategories();
    refs.categoriesContainer.innerHTML = renderCategories(categories);
  }

  if (refs.furnitureContainer) {
    const res = await fetchFurniture();
    console.log(res);

    refs.furnitureContainer.innerHTML = renderFurnitureCards(res.furnitures);
  }
}
