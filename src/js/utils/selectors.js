export const refs = {
  body: document.body,

  menuOpenBtn: document.querySelector('[data-menu-open]'),
  menuCloseBtn: document.querySelector('[data-menu-close]'),
  mobileMenu: document.querySelector('[data-mobile-menu]'),
  mobileMenuOverlay: document.querySelector('[data-menu-overlay]'),

  categoriesContainer: document.querySelector('[data-categories-container]'),
  furnitureContainer: document.querySelector('[data-furniture-container]'),
  loadMoreBtn: document.querySelector('[data-load-more]'),

  feedbackContainer: document.querySelector('[data-feedback-container]'),
  feedbackPrevBtn: document.querySelector('[data-feedback-prev]'),
  feedbackNextBtn: document.querySelector('[data-feedback-next]'),
  feedbackPagination: document.querySelector('[data-feedback-pagination]'),

  furnitureModal: document.querySelector('[data-furniture-modal]'),
  furnitureModalBackdrop: document.querySelector(
    '[data-furniture-modal] [data-modal-backdrop]'
  ),
  furnitureModalCloseBtn: document.querySelector(
    '[data-furniture-modal] [data-modal-close]'
  ),
  furnitureGallery: document.querySelector('[data-furniture-gallery]'),
  furnitureCategory: document.querySelector('[data-furniture-category]'),
  furnitureTitle: document.querySelector('[data-furniture-title]'),
  furniturePrice: document.querySelector('[data-furniture-price]'),
  furnitureRating: document.querySelector('[data-furniture-rating]'),
  furnitureColors: document.querySelector('[data-furniture-colors]'),
  furnitureDescription: document.querySelector('[data-furniture-description]'),
  furnitureDimensions: document.querySelector('[data-furniture-dimensions]'),
  openOrderModalBtn: document.querySelector('[data-open-order-modal]'),

  orderModal: document.querySelector('[data-order-modal]'),
  orderModalBackdrop: document.querySelector(
    '[data-order-modal] [data-modal-backdrop]'
  ),
  orderModalCloseBtn: document.querySelector(
    '[data-order-modal] [data-modal-close]'
  ),
  orderForm: document.querySelector('[data-order-form]'),
};