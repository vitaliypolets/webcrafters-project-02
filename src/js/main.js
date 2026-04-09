import { initHeader } from './sections/header.js';
import { initHero } from './sections/hero.js';
import { initFurnitureSection } from './sections/furniture.js';
import { initAbout } from './sections/about.js';
import { initPopular} from './sections/popular.js';
import { initFaq } from './sections/faq.js';
import { initFeedback } from './sections/feedback.js';
import { initFooter } from './sections/footer.js';

import { initFurnitureModal } from './modals/furniture-modal.js';
import { initOrderModal } from './modals/order-modal.js';


document.addEventListener('DOMContentLoaded', () => {

  initHeader();
  initHero();
  initFurnitureSection();
  initAbout();
  initFaq();
  initFeedback();
  initFooter();
  initPopular();

  initFurnitureModal();
  initOrderModal();
});
