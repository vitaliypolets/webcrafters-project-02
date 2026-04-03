# Таски для команди проєкту “Меблерія”
## Розподіл задач згідно ТЗ

---

## DEV 1 — Header + Burger Menu

**Задача:** реалізувати верхню частину сторінки та мобільне/планшетне меню.

### Що зробити
- Створити `src/partials/header.html`
- Реалізувати:
  - логотип
  - desktop navigation
  - кнопку **«До покупок»**
  - burger button
  - mobile/tablet menu
  - overlay/backdrop
- У `src/js/sections/header.js` зробити:
  - `initHeader()`
  - відкриття меню
  - закриття по:
    - close button
    - overlay
    - `Escape`
    - кліку по mobile nav link
- Підключити `scroll-lock.js`

### Які файли
- `src/partials/header.html`
- `src/js/sections/header.js`
- `src/css/layout.css`

### Обов’язкові `data-*`
- `data-menu-open`
- `data-menu-close`
- `data-mobile-menu`
- `data-menu-overlay`

### Acceptance criteria
- логотип веде на `#top`
- nav links ведуть до секцій
- CTA веде до `#furniture`
- burger відкриває меню
- mobile menu закривається усіма потрібними способами
- під відкритим меню сторінка не скролиться

---

## DEV 2 — Hero + About

**Задача:** зробити статичні секції Hero і About.

### Що зробити
- Створити `src/partials/hero.html`
- Створити `src/partials/about.html`
- У Hero зробити:
  - label
  - title
  - text
  - CTA
- CTA має вести до `#feedback`
- У About зробити:
  - title
  - text
  - image

### Які файли
- `src/partials/hero.html`
- `src/partials/about.html`
- `src/js/sections/hero.js`
- `src/js/sections/about.js`
- `src/css/layout.css`

### Acceptance criteria
- hero має правильну структуру
- CTA веде до feedback section
- about block відповідає макету
- секції адаптивні

---

## DEV 3 — Furniture UI

**Задача:** зробити HTML-каркас секції меблів і render-функції.

### Що зробити
- Створити `src/partials/furniture.html`
- Реалізувати:
  - title
  - subtitle
  - categories container
  - furniture container
  - button `Показати ще`
- Написати:
  - `src/js/render/render-categories.js`
  - `src/js/render/render-furniture.js`
- У `src/js/sections/furniture.js` підключити mock data для перевірки UI

### Які файли
- `src/partials/furniture.html`
- `src/js/render/render-categories.js`
- `src/js/render/render-furniture.js`
- `src/js/sections/furniture.js`
- `src/css/layout.css`

### Обов’язкові `data-*`
- `data-categories-container`
- `data-furniture-container`
- `data-load-more`
- на кнопці details:
  - `data-furniture-details`
  - `data-id`

### Acceptance criteria
- categories render працює
- furniture cards render працює
- картка має:
  - image
  - title/model
  - color
  - price
  - details button
- details button має `data-id`
- секція готова до підключення API

---

## DEV 4 — Furniture API + Filter + Load More

**Задача:** підключити секцію меблів до бекенду.

### Що зробити
- Реалізувати в `src/js/api/furniture-api.js`:
  - `fetchCategories()`
  - `fetchFurniture(params)`
  - `fetchFurnitureById(id)` можна одразу підготувати
- У `src/js/sections/furniture.js` зробити:
  - initial load categories
  - initial load furniture
  - category click handling
  - active category state
  - load more
  - integration з `loader.js` і `toast.js`
- Оновлювати `state.js`

### Які файли
- `src/js/api/furniture-api.js`
- `src/js/sections/furniture.js`
- `src/js/utils/state.js`

### Acceptance criteria
- категорії завантажуються з API
- меблі завантажуються з API
- по кліку на категорію список фільтрується
- page скидається після category change
- `Показати ще` додає нові меблі
- якщо даних більше немає — кнопка ховається або disabled
- loader працює
- помилки показуються через toast

---

## DEV 5 — Feedback + Slider + Stars

**Задача:** реалізувати блок “Відгуки” з API, слайдером і рейтингом зірками.

### Що зробити
- Створити `src/partials/feedback.html`
- Реалізувати `src/js/api/feedback-api.js`
- Написати:
  - `src/js/render/render-feedbacks.js`
  - `src/js/render/render-stars.js`
- У `src/js/sections/feedback.js` зробити:
  - fetch feedbacks
  - render cards
  - нормалізацію рейтингу
  - ініціалізацію бібліотеки зірок
  - ініціалізацію Swiper

### Які файли
- `src/partials/feedback.html`
- `src/js/api/feedback-api.js`
- `src/js/render/render-feedbacks.js`
- `src/js/render/render-stars.js`
- `src/js/sections/feedback.js`
- `src/css/layout.css`

### Acceptance criteria
- список відгуків приходить з API
- показується 10 відгуків
- рейтинг округлюється за правилами ТЗ
- зірки реалізовані через бібліотеку
- Swiper працює
- prev/next працюють
- pagination працює
- крайні кнопки деактивуються правильно

---

## DEV 6 — Furniture Details Modal

**Задача:** реалізувати модальне вікно з детальною інформацією про меблі.

### Що зробити
- Створити `src/partials/furniture-modal.html`
- У `src/js/modals/furniture-modal.js` зробити:
  - `initFurnitureModal()`
  - відкриття по `data-furniture-details`
  - отримання `data-id`
  - fetch details by id
  - fill modal content
  - render gallery
  - render stars
  - render colors
  - вибір кольору
  - close logic
  - запис у state:
    - `selectedFurnitureId`
    - `selectedFurnitureData`
    - `selectedColor`

### Які файли
- `src/partials/furniture-modal.html`
- `src/js/modals/furniture-modal.js`
- `src/js/modals/modal-base.js`
- `src/js/api/furniture-api.js`
- `src/js/render/render-stars.js`
- `src/js/utils/state.js`

### Acceptance criteria
- modal відкривається по кліку на details
- дані тягнуться по `id`
- title/price/category/description/dimensions відображаються
- кольори працюють
- перший колір активний автоматично
- `selectedFurnitureId` і `selectedColor` пишуться в state
- modal закривається по:
  - close button
  - backdrop
  - Escape
- body scroll lock працює

---

## DEV 7 — Order Modal + Submit

**Задача:** реалізувати форму замовлення і POST `/orders`.

### Що зробити
- Створити `src/partials/order-modal.html`
- Реалізувати `src/js/api/orders-api.js`
- У `src/js/modals/order-modal.js` зробити:
  - `initOrderModal()`
  - open modal по `data-open-order-modal`
  - читання зі `state`:
    - `selectedFurnitureId`
    - `selectedColor`
  - валідацію форми
  - submit
  - success / error flow
  - close logic

### Які файли
- `src/partials/order-modal.html`
- `src/js/api/orders-api.js`
- `src/js/modals/order-modal.js`
- `src/js/modals/modal-base.js`
- `src/js/utils/state.js`

### Acceptance criteria
- order modal відкривається після details modal
- payload містить:
  - name
  - phone
  - comment
  - furnitureId
  - color
- success:
  - toast success
  - modal closes
  - form resets
- error:
  - toast error
  - modal stays open
  - form data stays
- закриття працює по close/backdrop/Escape

---

## DEV 8 — FAQ + Footer

**Задача:** реалізувати блок FAQ та Footer.

### Що зробити
- Створити `src/partials/faq.html`
- Створити `src/partials/footer.html`
- У `src/js/sections/faq.js`:
  - підключити accordion-js
  - зробити accordion
- У `src/js/sections/footer.js`:
  - footer navigation
  - social links

### Які файли
- `src/partials/faq.html`
- `src/partials/footer.html`
- `src/js/sections/faq.js`
- `src/js/sections/footer.js`
- `src/css/layout.css`

### Acceptance criteria
- FAQ працює як accordion
- бажано одночасно відкрита лише одна відповідь
- footer містить logo, nav, social links
- social links відкриваються в новій вкладці
- є `rel="noopener noreferrer"`

---

## DEV 9 — Shared UI / Utils

**Задача:** підготувати спільну основу для всієї команди.

### Що зробити
- У `src/css/base.css`:
  - root variables
  - reset
  - typography base
  - body/img/a/button/input/textarea
  - `.container`
  - `.section`
  - `.visually-hidden`
  - `body.no-scroll`
- У `src/css/components.css`:
  - `.btn`
  - `.btn--primary`
  - `.btn--secondary`
  - `.section-title`
  - `.section-text`
  - `.section-label`
  - `.modal`
  - `.modal__dialog`
  - `.modal__close`
  - `.loader`
- У `src/js/utils/`:
  - `loader.js`
  - `toast.js`
  - `scroll-lock.js`
  - `smooth-scroll.js`

### Які файли
- `src/css/base.css`
- `src/css/components.css`
- `src/js/utils/loader.js`
- `src/js/utils/toast.js`
- `src/js/utils/scroll-lock.js`
- `src/js/utils/smooth-scroll.js`

### Acceptance criteria
- shared styles готові
- кнопки працюють однаково по всьому сайту
- loader працює
- toast wrapper працює
- scroll lock працює
- smooth scroll працює
- інші деви можуть використовувати ці utilities без дублювання логіки

---

## Загальні правила для всіх DEV

- Працюємо тільки від `develop`
- Кожна задача = окрема `feature/...` гілка
- PR тільки в `develop`
- Не чіпати чужі файли без потреби
- `render` не робить `fetch`
- `api` не рендерить HTML
- `main.js` тільки ініціалізує модулі
- Під час backend-запитів має бути loader
- Помилки мають показуватись через toast
- Усі “клікабельні” елементи мають hover/focus/active states
- Після завершення задачі обов’язково створити PR з коротким описом змін
