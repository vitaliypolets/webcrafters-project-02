import{a as g}from"./assets/vendor-B2N6ulqC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}})();const r={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function b(){document.body.classList.add("is-locked")}function m(){document.body.classList.remove("is-locked")}function q(){var a,o;if(!r.menuOpenBtn||!r.mobileMenu)return;const e=()=>{r.mobileMenu.classList.remove("is-hidden"),r.menuOpenBtn.setAttribute("aria-expanded","true"),b()},t=()=>{r.mobileMenu.classList.add("is-hidden"),r.menuOpenBtn.setAttribute("aria-expanded","false"),m()};r.menuOpenBtn.addEventListener("click",e),(a=r.menuCloseBtn)==null||a.addEventListener("click",t),(o=r.mobileMenuOverlay)==null||o.addEventListener("click",t),r.mobileMenu.querySelectorAll("a").forEach(n=>n.addEventListener("click",t)),document.addEventListener("keydown",n=>{n.key==="Escape"&&t()})}function v(e=[],t="Усі"){return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${e.map(a=>{const o=a.name??"Категорія",n=a.image??"./categories/categories_all.jpg";return`
            <button
              class="category-card ${t===o?"is-active":""}"
              type="button"
              data-category="${o==="Усі"?"":o}"
            >
              <div class="category-card__image-wrap">
                <img
                  class="category-card__image"
                  src="${n}"
                  alt="${o}"
                  loading="lazy"
                />
              </div>
              <span class="category-card__title">${o}</span>
            </button>
          `}).join("")}
    </div>
  `}function L(e){return e._id??e.id??""}function O(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function C(e){return e.name??e.model??e.title??"Меблі"}function E(e){return Array.isArray(e.colors)&&e.colors.length>0?e.colors[0]:e.color??"Не вказано"}function B(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function $(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const a=L(t),o=O(t),n=C(t),c=E(t),u=B(t);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${o}"
              alt="${n}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${n}</h3>
            <p class="product-card__color">Колір: ${c}</p>
            <p class="product-card__price">${u}</p>

            <button
              class="product-card__btn btn btn--secondary"
              type="button"
              data-furniture-details
              data-id="${a}"
            >
              Детальніше
            </button>
          </div>
        </article>
      `}).join("")}async function A(){const a="https://furniture-store-v2.b.goit.study"+"/api/categories",o=await g.get(a);return o.data.unshift({id:"all",name:"Всі товари"}),o.data}async function F(e){const o="https://furniture-store-v2.b.goit.study"+"/api/furnitures",n={page:1,limit:8,...e};return(await g.get(o,{params:n})).data}async function w(e){const t="https://furniture-store-v2.b.goit.study",a=`/api/furnitures/${e}`,o=t+a;return(await g.get(o)).data}async function T(){if(r.categoriesContainer){const e=await A();r.categoriesContainer.innerHTML=v(e)}if(r.furnitureContainer){const e=await F();console.log(e),r.furnitureContainer.innerHTML=$(e.furnitures)}}function I(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(a=>{a!==t&&(a.open=!1)})})})}const N=Array.from({length:6},(e,t)=>({id:t+1,author:["Ірина","Олександр","Марія","Тетяна","Андрій","Світлана"][t],rating:4+(t%2?.5:0),text:"Дуже сподобалась якість меблів, сервіс і швидка доставка. Будемо замовляти ще."}));async function D(){return Promise.resolve(N)}function P(e=5){const t=Math.round(Number(e));return`<div class="stars" aria-label="Рейтинг ${t} з 5">${"★".repeat(t)}${"☆".repeat(5-t)}</div>`}function x(e=[]){return e.map(t=>`
        <li>
          <article class="feedback-card">
            <div class="feedback-card__body">
              <p class="feedback-card__author">${t.author}</p>
              ${P(t.rating)}
              <p class="feedback-card__text">${t.text}</p>
            </div>
          </article>
        </li>
      `).join("")}let i=null;function f(e="Щось пішло не так"){i&&i.remove(),i=document.createElement("div"),i.className="toast",i.textContent=e,document.body.append(i),setTimeout(()=>{i==null||i.remove(),i=null},2500)}async function j(){if(r.feedbackList)try{const e=await D();r.feedbackList.innerHTML=x(e)}catch{f("Не вдалося завантажити відгуки")}}const d={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function S(e){e&&(e.classList.remove("is-hidden"),b(),d.isOrderModalOpen=!0)}function s(e){e&&(e.classList.add("is-hidden"),m(),d.isOrderModalOpen=!1)}async function H(e){const t=await w(e);if(!t||!r.furnitureModal)return;d.selectedFurnitureId=t._id,d.selectedColor=t.color?t.color[0]:null;const a=r.furnitureModal.querySelector("[data-furniture-gallery]");a&&t.images&&t.images.length>0&&(a.innerHTML=t.images.map(y=>`
      <div class="furniture-modal__img-wrapper">
        <img src="${y}" alt="${t.name}" class="furniture-modal__img">
      </div>
    `).join(""));const o=r.furnitureModal.querySelector("[data-furniture-title]"),n=r.furnitureModal.querySelector("[data-furniture-category]"),c=r.furnitureModal.querySelector("[data-furniture-price]"),u=r.furnitureModal.querySelector("[data-furniture-rating]"),p=r.furnitureModal.querySelector("[data-furniture-colors]");if(p){const y=["#000000","#757575","#D3D3D3"],h=Array.isArray(t.color)&&t.color.length>0?t.color:y;p.innerHTML=h.map((l,k)=>`
        <li class="color-item">
          <label class="color-label">
            <input
              type="radio"
              name="furniture-color"
              value="${l}"
              class="color-input"
              ${k===0?"checked":""}>
            <span class="color-marker" style="background-color: ${l}"></span>
          </label>
        </li>
      `).join(""),p.onchange=l=>{l.target.classList.contains("color-input")&&(d.selectedColor=l.target.value)}}const M=r.furnitureModal.querySelector("[data-furniture-description]"),_=r.furnitureModal.querySelector("[data-furniture-dimensions]");a&&(a.textContent=t.images),o&&(o.textContent=t.name),n&&(n.textContent=t.category.name),c&&(c.textContent=`${t.price} грн`),u&&(u.textContent=t.rate),M&&(M.textContent=t.description),_&&(_.textContent=t.sizes),S(r.furnitureModal),b()}function R(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),a=e.target.closest("[data-modal-close]"),o=e.target.hasAttribute("data-modal-backdrop"),n=e.target.closest("[data-open-order-modal]");t&&H(t.dataset.id),(a||o)&&(s(r.furnitureModal),m()),n&&s(r.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(s(r.furnitureModal),m())})}async function U(e){const t=await fetch("/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to submit order");return t.json()}function z(){var e;document.addEventListener("click",t=>{const a=t.target.closest("[data-open-order-modal]"),o=t.target.closest("[data-modal-close]"),n=r.orderModal&&t.target===r.orderModal.querySelector("[data-modal-backdrop]");a&&S(r.orderModal),(o||n)&&s(r.orderModal)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&d.isOrderModalOpen&&s(r.orderModal)}),(e=r.orderForm)==null||e.addEventListener("submit",async t=>{t.preventDefault();const a=new FormData(t.currentTarget),o={name:a.get("name"),phone:a.get("phone"),comment:a.get("comment"),furnitureId:d.selectedFurnitureId,color:d.selectedColor};if(!o.name||!o.phone){f("Заповни обовʼязкові поля: імʼя та телефон");return}if(!o.furnitureId||!o.color){f("Не обрано товар або колір");return}try{await U(o),f("Замовлення успішно надіслано"),t.currentTarget.reset(),s(r.orderModal)}catch{f("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{q(),T(),I(),j(),R(),z()});
//# sourceMappingURL=index.js.map
