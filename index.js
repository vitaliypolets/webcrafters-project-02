(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();const t={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function f(){document.body.classList.add("is-locked")}function g(){document.body.classList.remove("is-locked")}function b(){var o,n,a,i;const e=()=>{var c,s;(c=t.mobileMenu)==null||c.classList.remove("is-hidden"),(s=t.burger)==null||s.setAttribute("aria-expanded","true"),f()},r=()=>{var c,s;(c=t.mobileMenu)==null||c.classList.add("is-hidden"),(s=t.burger)==null||s.setAttribute("aria-expanded","false"),g()};(o=t.burger)==null||o.addEventListener("click",e),(n=t.mobileMenuClose)==null||n.addEventListener("click",r),(a=t.mobileMenu)==null||a.addEventListener("click",c=>{c.target===t.mobileMenu&&r()}),(i=t.mobileMenuLinks)==null||i.forEach(c=>c.addEventListener("click",r)),document.addEventListener("keydown",c=>{c.key==="Escape"&&r()})}function _(e=[],r="Усі"){return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${e.map(o=>{const n=o.name??"Категорія",a=o.image??"./categories/categories_all.jpg";return`
            <button
              class="category-card ${r===n?"is-active":""}"
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
  `}function M(e){return e._id??e.id??""}function k(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function v(e){return e.name??e.model??e.title??"Меблі"}function S(e){return Array.isArray(e.colors)&&e.colors.length>0?e.colors[0]:e.color??"Не вказано"}function h(e){const r=e.price??e.currentPrice??0;return typeof r=="number"?`${r.toLocaleString("uk-UA")} грн`:`${r} грн`}function L(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(r=>{const o=M(r),n=k(r),a=v(r),i=S(r),c=h(r);return`
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
      `}).join("")}const q=[{name:"Всі товари",image:"./categories/categories_all.jpg"},{name:"Мякі меблі",image:"./categories/categories1.jpg"},{name:"Шафи та системи зберігання",image:"./categories/categories2.jpg"},{name:"Ліжка та матраци",image:"./categories/categories3.jpg"},{name:"Столи",image:"./categories/categories4.jpg"},{name:"Стільці та табурети",image:"./categories/categories5.jpg"},{name:"Кухні",image:"./categories/categories6.jpg"},{name:"Меблі для дитячої",image:"./categories/categories7.jpg"},{name:"Меблі для офісу",image:"./categories/categories8.jpg"},{name:"Меблі для передпокою",image:"./categories/categories9.jpg"},{name:"Меблі для ванної кімнати",image:"./categories/categories10.jpg"},{name:"Садові та вуличні меблі",image:"./categories/categories11.jpg"},{name:"Декор та аксесуари",image:"./categories/categories12.jpg"}],$=[{_id:"1",name:"Сучасний диван",price:12500,colors:["Бежевий"],images:["./images/furniture1.jpg"]},{_id:"2",name:"Деревʼяний стілець",price:3200,colors:["Горіх"],images:["./images/furniture2.jpg"]},{_id:"3",name:"Журнальний столик",price:5400,colors:["Дуб"],images:["./images/furniture3.jpg"]},{_id:"4",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture4.jpg"]},{_id:"5",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture5.jpg"]},{_id:"6",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture6.jpg"]},{_id:"7",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture7.jpg"]},{_id:"8",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture8.jpg"]}];function j(){t.categoriesContainer&&(t.categoriesContainer.innerHTML=_(q)),t.furnitureContainer&&(t.furnitureContainer.innerHTML=L($))}function C(){const e=document.querySelectorAll(".faq__item");e.forEach(r=>{r.addEventListener("toggle",()=>{r.open&&e.forEach(o=>{o!==r&&(o.open=!1)})})})}const F=Array.from({length:6},(e,r)=>({id:r+1,author:["Ірина","Олександр","Марія","Тетяна","Андрій","Світлана"][r],rating:4+(r%2?.5:0),text:"Дуже сподобалась якість меблів, сервіс і швидка доставка. Будемо замовляти ще."}));async function E(){return Promise.resolve(F)}function A(e=5){const r=Math.round(Number(e));return`<div class="stars" aria-label="Рейтинг ${r} з 5">${"★".repeat(r)}${"☆".repeat(5-r)}</div>`}function O(e=[]){return e.map(r=>`
        <li>
          <article class="feedback-card">
            <div class="feedback-card__body">
              <p class="feedback-card__author">${r.author}</p>
              ${A(r.rating)}
              <p class="feedback-card__text">${r.text}</p>
            </div>
          </article>
        </li>
      `).join("")}let u=null;function p(e="Щось пішло не так"){u&&u.remove(),u=document.createElement("div"),u.className="toast",u.textContent=e,document.body.append(u),setTimeout(()=>{u==null||u.remove(),u=null},2500)}async function B(){if(t.feedbackList)try{const e=await E();t.feedbackList.innerHTML=O(e)}catch{p("Не вдалося завантажити відгуки")}}const m=["all","sofas","chairs","tables","beds"],I=Array.from({length:12},(e,r)=>({id:r+1,name:`Модель ${r+1}`,category:m[r%(m.length-1)+1],color:["Горіх","Бежевий","Графіт"][r%3],price:`${12e3+r*850} грн`,rating:(4+r%10/10).toFixed(1),description:"Комфортні сучасні меблі для щоденного використання.",sizes:"180 x 90 x 85 см",colors:["Бежевий","Графіт","Коричневий"]}));async function P(e){const r=I.find(o=>String(o.id)===String(e));return Promise.resolve(r)}const l={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function y(e){e&&(e.classList.remove("is-hidden"),f())}function d(e){e&&(e.classList.add("is-hidden"),g())}async function w(e){const r=await P(e);!r||!t.furnitureModalContent||(l.selectedFurnitureId=r.id,l.selectedColor=r.colors[0]??null,t.furnitureModalContent.innerHTML=`
    <h2 class="modal__title">${r.name}</h2>
    <p class="furniture-card__meta">Категорія: ${r.category}</p>
    <p class="furniture-card__meta">Опис: ${r.description}</p>
    <p class="furniture-card__meta">Розміри: ${r.sizes}</p>
    <p class="furniture-card__price">${r.price}</p>
    <p class="furniture-card__meta">Доступні кольори: ${r.colors.join(", ")}</p>
    <button class="btn btn--primary" type="button" data-open-order-modal>
      Перейти до замовлення
    </button>
  `,y(t.furnitureModal))}function T(){document.addEventListener("click",e=>{const r=e.target.closest("[data-furniture-id]"),o=e.target.closest("[data-close-furniture-modal]");r&&w(r.dataset.furnitureId),o&&d(t.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&d(t.furnitureModal)})}async function D(e){return console.log("Order payload:",e),Promise.resolve({success:!0,message:"Замовлення успішно надіслано"})}function N(){var e;document.addEventListener("click",r=>{const o=r.target.closest("[data-open-order-modal]"),n=r.target.closest("[data-close-order-modal]");o&&y(t.orderModal),n&&d(t.orderModal)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&d(t.orderModal)}),(e=t.orderForm)==null||e.addEventListener("submit",async r=>{r.preventDefault();const o=new FormData(r.currentTarget),n={name:o.get("name"),phone:o.get("phone"),comment:o.get("comment"),furnitureId:l.selectedFurnitureId,color:l.selectedColor};await D(n),p("Замовлення успішно надіслано"),r.currentTarget.reset(),d(t.orderModal)})}document.addEventListener("DOMContentLoaded",()=>{b(),j(),C(),B(),T(),N()});
//# sourceMappingURL=index.js.map
