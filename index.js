(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();const t={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function g(){document.body.classList.add("is-locked")}function p(){document.body.classList.remove("is-locked")}function b(){var o,n,a,i;const r=()=>{var c,s;(c=t.mobileMenu)==null||c.classList.remove("is-hidden"),(s=t.burger)==null||s.setAttribute("aria-expanded","true"),g()},e=()=>{var c,s;(c=t.mobileMenu)==null||c.classList.add("is-hidden"),(s=t.burger)==null||s.setAttribute("aria-expanded","false"),p()};(o=t.burger)==null||o.addEventListener("click",r),(n=t.mobileMenuClose)==null||n.addEventListener("click",e),(a=t.mobileMenu)==null||a.addEventListener("click",c=>{c.target===t.mobileMenu&&e()}),(i=t.mobileMenuLinks)==null||i.forEach(c=>c.addEventListener("click",e)),document.addEventListener("keydown",c=>{c.key==="Escape"&&e()})}function _(r=[],e="Усі"){return!Array.isArray(r)||r.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${r.map(o=>{const n=o.name??"Категорія",a=o.image??"./categories/categories_all.jpg";return`
            <button
              class="category-card ${e===n?"is-active":""}"
              type="button"
              data-category="${n==="Усі"?"":n}"
            >
              <div class="category-card__image-wrap">
                <img
                  class="category-card__image"
                  src="${a}"
                  alt="${n}"
                  loading="lazy"
                />
              </div>
              <span class="category-card__title">${n}</span>
            </button>
          `}).join("")}
    </div>
  `}function M(r){return r._id??r.id??""}function k(r){return Array.isArray(r.images)&&r.images.length>0?r.images[0]:r.image?r.image:r.img?r.img:"./images/furniture1.jpg"}function h(r){return r.name??r.model??r.title??"Меблі"}function v(r){return Array.isArray(r.colors)&&r.colors.length>0?r.colors[0]:r.color??"Не вказано"}function S(r){const e=r.price??r.currentPrice??0;return typeof e=="number"?`${e.toLocaleString("uk-UA")} грн`:`${e} грн`}function q(r=[]){return!Array.isArray(r)||r.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:r.map(e=>{const o=M(e),n=k(e),a=h(e),i=v(e),c=S(e);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${n}"
              alt="${a}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${a}</h3>
            <p class="product-card__color">Колір: ${i}</p>
            <p class="product-card__price">${c}</p>

            <button
              class="product-card__btn btn btn--primary"
              type="button"
              data-furniture-details
              data-id="${o}"
            >
              Детальніше
            </button>
          </div>
        </article>
      `}).join("")}const L=[{name:"Всі товари",image:"./categories/categories_all.jpg"},{name:"Мякі меблі",image:"./categories/categories1.jpg"},{name:"Шафи та системи зберігання",image:"./categories/categories2.jpg"},{name:"Ліжка та матраци",image:"./categories/categories3.jpg"},{name:"Столи",image:"./categories/categories4.jpg"},{name:"Стільці та табурети",image:"./categories/categories5.jpg"},{name:"Кухні",image:"./categories/categories6.jpg"},{name:"Меблі для дитячої",image:"./categories/categories7.jpg"},{name:"Меблі для офісу",image:"./categories/categories8.jpg"},{name:"Меблі для передпокою",image:"./categories/categories9.jpg"},{name:"Меблі для ванної кімнати",image:"./categories/categories10.jpg"},{name:"Садові та вуличні меблі",image:"./categories/categories11.jpg"},{name:"Декор та аксесуари",image:"./categories/categories12.jpg"}],$=[{_id:"1",name:"Сучасний диван",price:12500,colors:["Бежевий"],images:["./images/furniture1.jpg"]},{_id:"2",name:"Деревʼяний стілець",price:3200,colors:["Горіх"],images:["./images/furniture2.jpg"]},{_id:"3",name:"Журнальний столик",price:5400,colors:["Дуб"],images:["./images/furniture3.jpg"]},{_id:"4",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture4.jpg"]},{_id:"5",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture5.jpg"]},{_id:"6",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture6.jpg"]},{_id:"7",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture7.jpg"]},{_id:"8",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture8.jpg"]}];function j(){t.categoriesContainer&&(t.categoriesContainer.innerHTML=_(L)),t.furnitureContainer&&(t.furnitureContainer.innerHTML=q($))}function C(){const r=document.querySelectorAll(".faq__item");r.forEach(e=>{e.addEventListener("toggle",()=>{e.open&&r.forEach(o=>{o!==e&&(o.open=!1)})})})}const F=Array.from({length:6},(r,e)=>({id:e+1,author:["Ірина","Олександр","Марія","Тетяна","Андрій","Світлана"][e],rating:4+(e%2?.5:0),text:"Дуже сподобалась якість меблів, сервіс і швидка доставка. Будемо замовляти ще."}));async function E(){return Promise.resolve(F)}function A(r=5){const e=Math.round(Number(r));return`<div class="stars" aria-label="Рейтинг ${e} з 5">${"★".repeat(e)}${"☆".repeat(5-e)}</div>`}function O(r=[]){return r.map(e=>`
        <li>
          <article class="feedback-card">
            <div class="feedback-card__body">
              <p class="feedback-card__author">${e.author}</p>
              ${A(e.rating)}
              <p class="feedback-card__text">${e.text}</p>
            </div>
          </article>
        </li>
      `).join("")}let u=null;function d(r="Щось пішло не так"){u&&u.remove(),u=document.createElement("div"),u.className="toast",u.textContent=r,document.body.append(u),setTimeout(()=>{u==null||u.remove(),u=null},2500)}async function B(){if(t.feedbackList)try{const r=await E();t.feedbackList.innerHTML=O(r)}catch{d("Не вдалося завантажити відгуки")}}const f=["all","sofas","chairs","tables","beds"],I=Array.from({length:12},(r,e)=>({id:e+1,name:`Модель ${e+1}`,category:f[e%(f.length-1)+1],color:["Горіх","Бежевий","Графіт"][e%3],price:`${12e3+e*850} грн`,rating:(4+e%10/10).toFixed(1),description:"Комфортні сучасні меблі для щоденного використання.",sizes:"180 x 90 x 85 см",colors:["Бежевий","Графіт","Коричневий"]}));async function P(r){const e=I.find(o=>String(o.id)===String(r));return Promise.resolve(e)}const m={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function y(r){r&&(r.classList.remove("is-hidden"),g())}function l(r){r&&(r.classList.add("is-hidden"),p())}async function w(r){const e=await P(r);!e||!t.furnitureModalContent||(m.selectedFurnitureId=e.id,m.selectedColor=e.colors[0]??null,t.furnitureModalContent.innerHTML=`
    <h2 class="modal__title">${e.name}</h2>
    <p class="furniture-card__meta">Категорія: ${e.category}</p>
    <p class="furniture-card__meta">Опис: ${e.description}</p>
    <p class="furniture-card__meta">Розміри: ${e.sizes}</p>
    <p class="furniture-card__price">${e.price}</p>
    <p class="furniture-card__meta">Доступні кольори: ${e.colors.join(", ")}</p>
    <button class="btn btn--primary" type="button" data-open-order-modal>
      Перейти до замовлення
    </button>
  `,y(t.furnitureModal))}function T(){document.addEventListener("click",r=>{const e=r.target.closest("[data-furniture-id]"),o=r.target.closest("[data-close-furniture-modal]");e&&w(e.dataset.furnitureId),o&&l(t.furnitureModal)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&l(t.furnitureModal)})}async function D(r){return console.log("Order payload:",r),Promise.resolve({success:!0,message:"Замовлення успішно надіслано"})}function N(){var r;document.addEventListener("click",e=>{const o=e.target.closest("[data-open-order-modal]"),n=e.target.closest("[data-close-order-modal]"),a=t.orderModal&&e.target===t.orderModal.querySelector("[data-modal-backdrop]");o&&y(t.orderModal),(n||a)&&l(t.orderModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&l(t.orderModal)}),(r=t.orderForm)==null||r.addEventListener("submit",async e=>{e.preventDefault();const o=new FormData(e.currentTarget),n={name:o.get("name"),phone:o.get("phone"),comment:o.get("comment"),furnitureId:m.selectedFurnitureId,color:m.selectedColor};if(!n.name||!n.phone){d("Заповни обовʼязкові поля: імʼя та телефон");return}if(!n.furnitureId||!n.color){d("Не обрано товар або колір");return}try{await D(n),d("Замовлення успішно надіслано"),e.currentTarget.reset(),l(t.orderModal)}catch{d("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{b(),j(),C(),B(),T(),N()});
//# sourceMappingURL=index.js.map
