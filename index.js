(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const n={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function m(){document.body.classList.add("is-locked")}function p(){document.body.classList.remove("is-locked")}function b(){var o,u,t,a;const r=()=>{var c,d;(c=n.mobileMenu)==null||c.classList.remove("is-hidden"),(d=n.burger)==null||d.setAttribute("aria-expanded","true"),m()},e=()=>{var c,d;(c=n.mobileMenu)==null||c.classList.add("is-hidden"),(d=n.burger)==null||d.setAttribute("aria-expanded","false"),p()};(o=n.burger)==null||o.addEventListener("click",r),(u=n.mobileMenuClose)==null||u.addEventListener("click",e),(t=n.mobileMenu)==null||t.addEventListener("click",c=>{c.target===n.mobileMenu&&e()}),(a=n.mobileMenuLinks)==null||a.forEach(c=>c.addEventListener("click",e)),document.addEventListener("keydown",c=>{c.key==="Escape"&&e()})}const f=["all","sofas","chairs","tables","beds"],_=Array.from({length:12},(r,e)=>({id:e+1,name:`Модель ${e+1}`,category:f[e%(f.length-1)+1],color:["Горіх","Бежевий","Графіт"][e%3],price:`${12e3+e*850} грн`,rating:(4+e%10/10).toFixed(1),description:"Комфортні сучасні меблі для щоденного використання.",sizes:"180 x 90 x 85 см",colors:["Бежевий","Графіт","Коричневий"]}));async function M(r){const e=_.find(o=>String(o.id)===String(r));return Promise.resolve(e)}function h(r=[],e=""){if(!Array.isArray(r)||r.length===0)return'<p class="furniture__empty">Категорії не знайдено.</p>';const o=`
    <button
      class="category-btn ${e===""?"is-active":""}"
      type="button"
      data-category=""
    >
      Усі
    </button>
  `,u=r.map(t=>{const a=t.name??t.category??t,c=t.label??t.name??t.category??t;return`
        <button
          class="category-btn ${e===a?"is-active":""}"
          type="button"
          data-category="${a}"
        >
          ${c}
        </button>
      `}).join("");return`
    <div class="furniture__categories-list">
      ${o}
      ${u}
    </div>
  `}function k(r){return r._id??r.id??""}function S(r){return Array.isArray(r.images)&&r.images.length>0?r.images[0]:r.image?r.image:r.img?r.img:"./images/placeholder-furniture.jpg"}function v(r){return r.name??r.model??r.title??"Меблі"}function L(r){return Array.isArray(r.colors)&&r.colors.length>0?r.colors[0]:r.color??"Не вказано"}function q(r){const e=r.price??r.currentPrice??0;return typeof e=="number"?`${e.toLocaleString("uk-UA")} грн`:`${e} грн`}function $(r=[]){return!Array.isArray(r)||r.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:r.map(e=>{const o=k(e),u=S(e),t=v(e),a=L(e),c=q(e);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${u}"
              alt="${t}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${t}</h3>
            <p class="product-card__color">Колір: ${a}</p>
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
      `}).join("")}const l={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};let i=null;function y(r="Щось пішло не так"){i&&i.remove(),i=document.createElement("div"),i.className="toast",i.textContent=r,document.body.append(i),setTimeout(()=>{i==null||i.remove(),i=null},2500)}function F(){if(!n.categoriesContainer||!n.furnitureContainer)return;const r=["Дивани","Стільці","Столи"],e=[{_id:"1",name:"Сучасний диван",price:12500,colors:["Бежевий"],images:["./images/placeholder-furniture.jpg"]},{_id:"2",name:"Дерев’яний стілець",price:3200,colors:["Горіх"],images:["./images/placeholder-furniture.jpg"]},{_id:"3",name:"Журнальний столик",price:5400,colors:["Дуб"],images:["./images/placeholder-furniture.jpg"]}];n.categoriesContainer.innerHTML=h(r),n.furnitureContainer.innerHTML=$(e)}function C(){const r=document.querySelectorAll(".faq__item");r.forEach(e=>{e.addEventListener("toggle",()=>{e.open&&r.forEach(o=>{o!==e&&(o.open=!1)})})})}const E=Array.from({length:6},(r,e)=>({id:e+1,author:["Ірина","Олександр","Марія","Тетяна","Андрій","Світлана"][e],rating:4+(e%2?.5:0),text:"Дуже сподобалась якість меблів, сервіс і швидка доставка. Будемо замовляти ще."}));async function B(){return Promise.resolve(E)}function O(r=5){const e=Math.round(Number(r));return`<div class="stars" aria-label="Рейтинг ${e} з 5">${"★".repeat(e)}${"☆".repeat(5-e)}</div>`}function A(r=[]){return r.map(e=>`
        <li>
          <article class="feedback-card">
            <div class="feedback-card__body">
              <p class="feedback-card__author">${e.author}</p>
              ${O(e.rating)}
              <p class="feedback-card__text">${e.text}</p>
            </div>
          </article>
        </li>
      `).join("")}async function I(){if(n.feedbackList)try{const r=await B();n.feedbackList.innerHTML=A(r)}catch{y("Не вдалося завантажити відгуки")}}function g(r){r&&(r.classList.remove("is-hidden"),m())}function s(r){r&&(r.classList.add("is-hidden"),p())}async function P(r){const e=await M(r);!e||!n.furnitureModalContent||(l.selectedFurnitureId=e.id,l.selectedColor=e.colors[0]??null,n.furnitureModalContent.innerHTML=`
    <h2 class="modal__title">${e.name}</h2>
    <p class="furniture-card__meta">Категорія: ${e.category}</p>
    <p class="furniture-card__meta">Опис: ${e.description}</p>
    <p class="furniture-card__meta">Розміри: ${e.sizes}</p>
    <p class="furniture-card__price">${e.price}</p>
    <p class="furniture-card__meta">Доступні кольори: ${e.colors.join(", ")}</p>
    <button class="btn btn--primary" type="button" data-open-order-modal>
      Перейти до замовлення
    </button>
  `,g(n.furnitureModal))}function w(){document.addEventListener("click",r=>{const e=r.target.closest("[data-furniture-id]"),o=r.target.closest("[data-close-furniture-modal]");e&&P(e.dataset.furnitureId),o&&s(n.furnitureModal)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&s(n.furnitureModal)})}async function T(r){return console.log("Order payload:",r),Promise.resolve({success:!0,message:"Замовлення успішно надіслано"})}function j(){var r;document.addEventListener("click",e=>{const o=e.target.closest("[data-open-order-modal]"),u=e.target.closest("[data-close-order-modal]");o&&g(n.orderModal),u&&s(n.orderModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&s(n.orderModal)}),(r=n.orderForm)==null||r.addEventListener("submit",async e=>{e.preventDefault();const o=new FormData(e.currentTarget),u={name:o.get("name"),phone:o.get("phone"),comment:o.get("comment"),furnitureId:l.selectedFurnitureId,color:l.selectedColor};await T(u),y("Замовлення успішно надіслано"),e.currentTarget.reset(),s(n.orderModal)})}document.addEventListener("DOMContentLoaded",()=>{b(),F(),C(),I(),w(),j()});
//# sourceMappingURL=index.js.map
