# Меблерія

**Меблерія** — це командний front-end проєкт меблевого магазину з адаптивним
інтерфейсом, каталогом товарів, фільтрацією за категоріями, модальним вікном із
деталями товару, формою замовлення зворотного зв'язку та секцією відгуків.

## Про проєкт

Проєкт створюється як односторінковий застосунок для демонстрації меблів із
бекенду та взаємодії користувача з каталогом. Основна мета — дати користувачу
зручний спосіб:

- переглядати меблі за категоріями;
- завантажувати додаткові товари;
- відкривати детальну інформацію про товар;
- надсилати заявку через форму замовлення;
- переглядати відгуки клієнтів.

## Основний функціонал

### Header

- логотип;
- навігація по секціях сторінки;
- кнопка **«До покупок»**;
- burger-menu для mobile/tablet;
- плавний скрол до потрібних секцій.

### Hero Section

- головний заголовок;
- опис;
- кнопка **«Що про нас думають»** з переходом до секції відгуків;
- фонові зображення.

### Furniture List Section

- заголовок **«Наші меблі»**;
- підзаголовок **«Знайдіть ідеальні рішення для вашого інтер'єру»**;
- список категорій для фільтрації;
- картки меблів із зображенням, назвою, кольором, ціною та кнопкою
  **«Детальніше»**;
- кнопка **«Показати ще»** для дозавантаження товарів.

### About Us

- контентне зображення;
- заголовок **«Про Меблерію»**;
- опис місії проєкту.

### FAQ

- секція **«Часті питання»**;
- accordion зі списком питань та відповідей.

### Feedback

- секція **«Відгуки клієнтів»**;
- картки відгуків;
- рейтинг у вигляді зірок;
- slider на базі Swiper;
- пагінація та кнопки навігації.

### Furniture Details Modal

- галерея зображень товару;
- модель, категорія, ціна, рейтинг;
- кольори у вигляді маркерів;
- опис і розміри;
- кнопка переходу до форми замовлення.

### Order Modal

- форма з полями: ім'я, телефон, коментар;
- submit заявки на бекенд;
- повідомлення про успіх або помилку.

### Footer

- логотип;
- навігація по сторінці;
- копірайт;
- соціальні мережі: YouTube, Instagram, Facebook.

## Технології

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Swiper.js** — для слайдера відгуків
- **iziToast** — для push-повідомлень
- **Accordion library** — для FAQ
- **Star rating library** (`css-star-rating`, `raty-js` або аналог) — для
  відображення рейтингу

## API

Проєкт працює з бекендом меблевого магазину.

Основні маршрути:

- `GET /categories` — отримання категорій;
- `GET /furniture` — отримання списку меблів;
- `GET /furniture/{id}` — отримання деталей конкретного товару;
- `GET /feedbacks` — отримання відгуків;
- `POST /orders` — надсилання заявки із форми.

## Адаптивність

Проєкт реалізується за такими брейкпойнтами:

- **mobile** — від `375px`
- **tablet** — від `768px`
- **desktop** — від `1440px`

## Основні вимоги до реалізації

- верстка повинна відповідати макету;
- усі клікабельні елементи повинні мати стани `hover`, `focus`, `active`;
- під час будь-якого запиту на бекенд повинен відображатися loader;
- помилки запитів повинні оброблятися через push-повідомлення;
- фонові та контентні зображення мають бути адаптовані під retina;
- у консолі не повинно бути зайвих логів;
- під відкритими burger-menu та modal сторінка не повинна скролитися.

## Запуск проєкту локально

### 1. Клонувати репозиторій

```bash
git clone https://github.com/vitaliypolets/webcrafters-project-02.git
cd <project-folder>
```

### 2. Встановити залежності

```bash
npm install
```

### 3. Запустити проєкт

```bash
npm run dev
```

## Структура проєкту

```text
src/
├── index.html
├── partials/
│   ├── about.html
│   ├── faq.html
│   ├── feedback.html
│   ├── footer.html
│   ├── furniture-modal.html
│   ├── furniture.html
│   ├── header.html
│   ├── hero.html
│   └── order-modal.html
├── css/
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   └── styles.css
├── js/
│   ├── main.js
│   ├── api/
│   │   ├── feedback-api.js
│   │   ├── furniture-api.js
│   │   └── orders-api.js
│   ├── modals/
│   │   ├── furniture-modal.js
│   │   ├── modal-base.js
│   │   └── order-modal.js
│   ├── render/
│   │   ├── render-categories.js
│   │   ├── render-feedbacks.js
│   │   ├── render-furniture.js
│   │   └── render-stars.js
│   ├── sections/
│   │   ├── about.js
│   │   ├── faq.js
│   │   ├── feedback.js
│   │   ├── footer.js
│   │   ├── furniture.js
│   │   ├── header.js
│   │   └── hero.js
│   └── utils/
│       ├── loader.js
│       ├── scroll-lock.js
│       ├── selectors.js
│       ├── smooth-scroll.js
│       ├── state.js
│       └── toast.js
├── images/
└── icons/

```

Логіка структури проекту:

1. partials/ — HTML-фрагменти секцій і модалок
2. sections/ — JS-логіка конкретної секції
3. render/ — функції, які генерують розмітку списків/карток
4. api/ — запити до бекенду
5. modals/ — логіка модалок
6. utils/ — shared helpers
7. css/ — база, layout, components, підсумковий styles

## Командна розробка

Робота в репозиторії ведеться через гілку **develop**:

- `main` — стабільна production-ready версія;
- `develop` — спільна робоча гілка;
- `feature/*` — окремі гілки під задачі.

Рекомендований процес:

1. Оновити `develop`
2. Створити власну `feature`-гілку
3. Виконати задачу
4. Створити Pull Request у `develop`
5. Після рев'ю зробити merge

Приклад назв гілок:

- `feature/header`
- `feature/hero`
- `feature/furniture-list`
- `feature/furniture-modal`
- `feature/order-modal`
- `feature/feedback`
- `feature/footer`

Як працювати з гілками:

Команда, працюємо через `develop`.

Що це означає:

- `main` — тільки фінальна, стабільна версія
- `develop` — спільна гілка команди
- кожен працює **у своїй окремій гілці**
- готову задачу заливаємо **через PR у `develop`**
- у `main` напряму нічого не пушимо

### 1. Кожен перед початком роботи переходить на `develop`

```bash
git checkout develop
git pull origin develop
```

### 2. Під свою задачу кожен створює окрему гілку

Приклади:

```bash
git checkout -b feature/header
```

```bash
git checkout -b feature/hero
```

```bash
git checkout -b feature/faq
```

Формат назв:

- `feature/header`
- `feature/hero`
- `feature/furniture-list`
- `feature/furniture-modal`
- `feature/order-modal`
- `feature/feedback`
- `feature/footer`

### 3. Працюєте тільки у своїй гілці

Після змін:

```bash
git add .
git commit -m "add header markup and burger menu"
git push -u origin feature/header
```

### 4 Потім створюєте Pull Request

Не в `main`, а тільки:

- `feature/...` → `develop`

Приклад:

- `feature/header` → `develop`

### 5. Після мержу PR оновлюєте собі `develop`

```bash
git checkout develop
git pull origin develop
```

І тільки після цього створюєте нову feature-гілку.

### Важливі правила

- напряму в `main` не пушимо
- напряму в `develop` теж не пушимо, тільки через PR
- одна задача = одна гілка
- нову задачу не робимо в старій гілці
- перед початком роботи завжди робимо `git pull origin develop`

### Схема роботи

```bash
main
└── develop
    ├── feature/header
    ├── feature/hero
    ├── feature/furniture-list
    ├── feature/faq
    └── feature/footer
```

### Коротко

1. Оновив `develop`
2. Створив свою `feature/...` гілку
3. Зробив задачу
4. Запушив
5. Створив PR у `develop`

Якщо у когось вилізе помилка з git або конфлікт — одразу пишіть у чат.

## Корисні посилання

- **Макет (Figma):**
  https://www.figma.com/design/xmuUuDiEAbT0mjmpgzPrc0/%D0%9C%D0%B5%D0%B1%D0%BB%D0%B5%D1%80%D1%96%D1%8F?node-id=5999-10563&p=f&t=zeEGaQ5CxjGkOlwX-0
- **API Docs:** https://furniture-store-v2.b.goit.study/api-docs/

## Додатково

Після завершення основного функціоналу можна реалізувати додаткові завдання:

- динамічну пагінацію для секції меблів на tablet/desktop;
- секцію **«Популярні товари»**;
- розширену пагінацію для відгуків.

## Автори

Командний проєкт команди **Меблерія**.

Напишу додатково пізніше .......
