export const state = {
  currentCategory: '',
  page: 1,
  limit: 8,
  totalItems: 0,

  categories: [],
  furnitureItems: [],
  feedbackItems: [],

  selectedFurnitureId: null,
  selectedFurnitureData: null,
  selectedColor: null,

  isMobileMenuOpen: false,
  isFurnitureModalOpen: false,
  isOrderModalOpen: false,
};

export function setCurrentCategory(category) {
  state.currentCategory = category;
}
