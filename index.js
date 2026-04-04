import{a as f,S as _,N as L,P as C}from"./assets/vendor-C6jGGvC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const a={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function M(){document.body.classList.add("is-locked")}function g(){document.body.classList.remove("is-locked")}function E(){var o,n;if(!a.menuOpenBtn||!a.mobileMenu)return;const e=()=>{a.mobileMenu.classList.remove("is-hidden"),a.menuOpenBtn.setAttribute("aria-expanded","true"),M()},t=()=>{a.mobileMenu.classList.add("is-hidden"),a.menuOpenBtn.setAttribute("aria-expanded","false"),g()};a.menuOpenBtn.addEventListener("click",e),(o=a.menuCloseBtn)==null||o.addEventListener("click",t),(n=a.mobileMenuOverlay)==null||n.addEventListener("click",t),a.mobileMenu.querySelectorAll("a").forEach(r=>r.addEventListener("click",t)),document.addEventListener("keydown",r=>{r.key==="Escape"&&t()})}function O(e=[],t="Усі"){return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${e.map(o=>{const n=o.name??"Категорія",r=o.image??"./categories/categories_all.jpg";return`
            <button
              class="category-card ${t===n?"is-active":""}"
              type="button"
              data-category="${n==="Усі"?"":n}"
            >
              <div class="category-card__image-wrap">
                <img
                  class="category-card__image"
                  src="${r}"
                  alt="${n}"
                  loading="lazy"
                />
              </div>
              <span class="category-card__title">${n}</span>
            </button>
          `}).join("")}
    </div>
  `}function B(e){return e._id??e.id??""}function $(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function x(e){return e.name??e.model??e.title??"Меблі"}function P(e){return Array.isArray(e.colors)&&e.colors.length>0?e.colors[0]:e.color??"Не вказано"}function A(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function F(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const o=B(t),n=$(t),r=x(t),i=P(t),s=A(t);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${n}"
              alt="${r}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${r}</h3>
            <p class="product-card__color">Колір: ${i}</p>
            <p class="product-card__price">${s}</p>

            <button
              class="product-card__btn btn btn--secondary"
              type="button"
              data-furniture-details
              data-id="${o}"
            >
              Детальніше
            </button>
          </div>
        </article>
      `}).join("")}async function N(){const o="https://furniture-store-v2.b.goit.study"+"/api/categories",n=await f.get(o);return n.data.unshift({id:"all",name:"Всі товари"}),n.data}async function I(e){const n="https://furniture-store-v2.b.goit.study"+"/api/furnitures",r={page:1,limit:8,...e};return(await f.get(n,{params:r})).data}async function T(e){const t="https://furniture-store-v2.b.goit.study",o=`/api/furnitures/${e}`,n=t+o;return(await f.get(n)).data}async function D(){if(a.categoriesContainer){const e=await N();a.categoriesContainer.innerHTML=O(e)}if(a.furnitureContainer){const e=await I();console.log(e),a.furnitureContainer.innerHTML=F(e.furnitures)}}function j(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(o=>{o!==t&&(o.open=!1)})})})}let u=null;function R(e="Завантаження..."){u||(u=document.createElement("div"),u.className="loader",document.body.append(u)),u.textContent=e,u.classList.remove("is-hidden")}function z(){u&&u.classList.add("is-hidden")}f.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";f.defaults.params={limit:10,page:1};async function U(){try{return(await f.get("feedbacks")).data}catch(e){throw console.log(e),e}}const h="data:image/svg+xml,%3csvg%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='star-empty'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-empty%3c/title%3e%3cpath%20class='path-star-empty'%20d='M33.412%2012.395l-11.842-1.021-4.628-10.904-4.628%2010.92-11.842%201.005%208.993%207.791-2.701%2011.579%2010.179-6.144%2010.179%206.144-2.685-11.579%208.976-7.791zM16.941%2022.541l-6.193%203.739%201.647-7.049-5.468-4.744%207.214-0.626%202.8-6.638%202.816%206.654%207.214%200.626-5.468%204.744%201.647%207.049-6.209-3.755z'/%3e%3c/symbol%3e%3csymbol%20id='star-half'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-half%3c/title%3e%3cpath%20class='path-star-half'%20d='M%2033.412,12.395%2021.57,11.374%2016.942,0.47%2012.314,11.39%200.472,12.395%209.465,20.186%206.764,31.765%2016.943,25.621%2027.122,31.765%2024.437,20.186%2033.413,12.395%20Z%20M%2016.941,22.541%20c%200,0%20-0.297971,-14.6455833%200,-15.318%20l%202.816,6.654%207.214,0.626%20-5.468,4.744%201.647,7.049%20z'/%3e%3c/symbol%3e%3csymbol%20id='star-filled'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-filled%3c/title%3e%3cpath%20class='path-star-filled'%20d='M16.941%2025.621l10.179%206.144-2.701-11.579%208.993-7.791-11.842-1.005-4.628-10.92-4.628%2010.92-11.842%201.005%208.993%207.791-2.701%2011.579z'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";function H(e){return Math.round(Number(e)*2)/2}function G(e){const t=H(e),n=[1,2,3,4,5].map(r=>t>=r?`<li><svg class="star"><use href="${h}#star-filled"></use></svg></li>`:t>=r-.5?`<li><svg class="star"><use href="${h}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${h}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${t} з 5">${n}</ul>`}function V(e){const t=document.querySelector(".feedback-list");if(!t)return;const o=e.map(n=>{const{name:r,descr:i,rate:s}=n;return`<li class ="swiper-slide feedback-item">
    ${G(s)}
    <p class="feedback-comment">"${i}"</p>
    <p class="feedback-name">${r}</p></li>`}).join("");t.innerHTML=o}let c=null;function p(e="Щось пішло не так"){c&&c.remove(),c=document.createElement("div"),c.className="toast",c.textContent=e,document.body.append(c),setTimeout(()=>{c==null||c.remove(),c=null},2500)}async function J(){R();try{const{feedbacks:e}=await U();if(!e||e.length===0){p("Не вдалося завантажити відгуки");return}V(e);const t=new _(".feedback-swiper",{modules:[L,C],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(n=>{n.style.display="flex"}),t.on("slideChange",()=>{const n=document.querySelector(".swiper-prev-button"),r=document.querySelector(".swiper-next-button");n.disabled=t.isBeginning,r.disabled=t.isEnd})}catch(e){console.error(e)}finally{z()}}const l={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function w(e){e&&(e.classList.remove("is-hidden"),M(),l.isOrderModalOpen=!0)}function d(e){e&&(e.classList.add("is-hidden"),g(),l.isOrderModalOpen=!1)}async function K(e){const t=await T(e);if(!t||!a.furnitureModal)return;l.selectedFurnitureId=t._id,l.selectedColor=t.color?t.color[0]:null;const o=a.furnitureModal.querySelector("[data-furniture-gallery]");o&&t.images&&t.images.length>0&&(o.innerHTML=t.images.map(b=>`
      <div class="furniture-modal__img-wrapper">
        <img src="${b}" alt="${t.name}" class="furniture-modal__img">
      </div>
    `).join(""));const n=a.furnitureModal.querySelector("[data-furniture-title]"),r=a.furnitureModal.querySelector("[data-furniture-category]"),i=a.furnitureModal.querySelector("[data-furniture-price]"),s=a.furnitureModal.querySelector("[data-furniture-rating]"),y=a.furnitureModal.querySelector("[data-furniture-colors]");if(y){const b=["#000000","#757575","#D3D3D3"],k=Array.isArray(t.color)&&t.color.length>0?t.color:b;y.innerHTML=k.map((m,q)=>`
        <li class="color-item">
          <label class="color-label">
            <input
              type="radio"
              name="furniture-color"
              value="${m}"
              class="color-input"
              ${q===0?"checked":""}>
            <span class="color-marker" style="background-color: ${m}"></span>
          </label>
        </li>
      `).join(""),y.onchange=m=>{m.target.classList.contains("color-input")&&(l.selectedColor=m.target.value)}}const v=a.furnitureModal.querySelector("[data-furniture-description]"),S=a.furnitureModal.querySelector("[data-furniture-dimensions]");o&&(o.textContent=t.images),n&&(n.textContent=t.name),r&&(r.textContent=t.category.name),i&&(i.textContent=`${t.price} грн`),s&&(s.textContent=t.rate),v&&(v.textContent=t.description),S&&(S.textContent=t.sizes),w(a.furnitureModal),M()}function Z(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),o=e.target.closest("[data-modal-close]"),n=e.target.hasAttribute("data-modal-backdrop"),r=e.target.closest("[data-open-order-modal]");t&&K(t.dataset.id),(o||n)&&(d(a.furnitureModal),g()),r&&d(a.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(d(a.furnitureModal),g())})}async function Q(e){const t=await fetch("/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to submit order");return t.json()}function W(){var e;document.addEventListener("click",t=>{const o=t.target.closest("[data-open-order-modal]"),n=t.target.closest("[data-modal-close]"),r=a.orderModal&&t.target===a.orderModal.querySelector("[data-modal-backdrop]");o&&w(a.orderModal),(n||r)&&d(a.orderModal)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&l.isOrderModalOpen&&d(a.orderModal)}),(e=a.orderForm)==null||e.addEventListener("submit",async t=>{t.preventDefault();const o=new FormData(t.currentTarget),n={name:o.get("name"),phone:o.get("phone"),comment:o.get("comment"),furnitureId:l.selectedFurnitureId,color:l.selectedColor};if(!n.name||!n.phone){p("Заповни обовʼязкові поля: імʼя та телефон");return}if(!n.furnitureId||!n.color){p("Не обрано товар або колір");return}try{await Q(n),p("Замовлення успішно надіслано"),t.currentTarget.reset(),d(a.orderModal)}catch{p("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{E(),D(),j(),J(),Z(),W()});
//# sourceMappingURL=index.js.map
