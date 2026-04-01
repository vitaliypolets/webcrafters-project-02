import { initHeader } from './sections/header.js';
import { initHero } from './sections/hero.js';
import { initFurniture } from './sections/furniture.js';
import { initAbout } from './sections/about.js';
import { initFaq } from './sections/faq.js';
import { initFeedback } from './sections/feedback.js';
import { initFooter } from './sections/footer.js';
import { initFurnitureModal } from './modals/furniture-modal.js';
import { initOrderModal } from './modals/order-modal.js';
import { initSmoothScroll } from './utils/smooth-scroll.js';

function initApp() {
  initHeader();
  initHero();
  initFurniture();
  initAbout();
  initFaq();
  initFeedback();
  initFooter();
  initFurnitureModal();
  initOrderModal();
  initSmoothScroll();
}

document.addEventListener('DOMContentLoaded', initApp);
