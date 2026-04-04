import{a as f,S as L,N as _,P as E}from"./assets/vendor-C6jGGvC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const o={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function h(){document.body.classList.add("is-locked")}function g(){document.body.classList.remove("is-locked")}function C(){var r,n;if(!o.menuOpenBtn||!o.mobileMenu)return;const e=()=>{o.mobileMenu.classList.remove("is-hidden"),o.menuOpenBtn.setAttribute("aria-expanded","true"),h()},t=()=>{o.mobileMenu.classList.add("is-hidden"),o.menuOpenBtn.setAttribute("aria-expanded","false"),g()};document.querySelectorAll('a[href="#top"]').forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),t(),window.scrollTo({top:0,behavior:"smooth"}),history.replaceState(null,"","#top")})}),o.menuOpenBtn.addEventListener("click",e),(r=o.menuCloseBtn)==null||r.addEventListener("click",t),(n=o.mobileMenuOverlay)==null||n.addEventListener("click",t),o.mobileMenu.querySelectorAll("a").forEach(i=>i.addEventListener("click",t)),document.addEventListener("keydown",i=>{i.key==="Escape"&&t()})}function O(e=[],t="Усі"){return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${e.map(a=>{const r=a.name??"Категорія",n=a.image??"./categories/categories_all.jpg";return`
            <button
              class="category-card ${t===r?"is-active":""}"
              type="button"
              data-category="${r==="Усі"?"":r}"
            >
              <div class="category-card__image-wrap">
                <img
                  class="category-card__image"
                  src="${n}"
                  alt="${r}"
                  loading="lazy"
                />
              </div>
              <span class="category-card__title">${r}</span>
            </button>
          `}).join("")}
    </div>
  `}function B(e){return e._id??e.id??""}function $(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function A(e){return e.name??e.model??e.title??"Меблі"}function P(e){return Array.isArray(e.colors)&&e.colors.length>0?e.colors[0]:e.color??"Не вказано"}function F(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function N(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const a=B(t),r=$(t),n=A(t),i=P(t),s=F(t);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${r}"
              alt="${n}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${n}</h3>
            <p class="product-card__color">Колір: ${i}</p>
            <p class="product-card__price">${s}</p>

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
      `}).join("")}async function x(){const a="https://furniture-store-v2.b.goit.study"+"/api/categories",r=await f.get(a);return r.data.unshift({id:"all",name:"Всі товари"}),r.data}async function T(e){const r="https://furniture-store-v2.b.goit.study"+"/api/furnitures",n={page:1,limit:8,...e};return(await f.get(r,{params:n})).data}async function I(e){const t="https://furniture-store-v2.b.goit.study",a=`/api/furnitures/${e}`,r=t+a;return(await f.get(r)).data}async function D(){if(o.categoriesContainer){const e=await x();o.categoriesContainer.innerHTML=O(e)}if(o.furnitureContainer){const e=await T();console.log(e),o.furnitureContainer.innerHTML=N(e.furnitures)}}function j(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(a=>{a!==t&&(a.open=!1)})})})}let u=null;function R(e="Завантаження..."){u||(u=document.createElement("div"),u.className="loader",document.body.append(u)),u.textContent=e,u.classList.remove("is-hidden")}function U(){u&&u.classList.add("is-hidden")}f.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";f.defaults.params={limit:10,page:1};async function H(){try{return(await f.get("feedbacks")).data}catch(e){throw console.log(e),e}}const S="./images/star-rating.icons.svg";function G(e){return Math.round(Number(e)*2)/2}function z(e){const t=G(e),r=[1,2,3,4,5].map(n=>t>=n?`<li><svg class="star"><use href="${S}#star-filled"></use></svg></li>`:t>=n-.5?`<li><svg class="star"><use href="${S}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${S}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${t} з 5">${r}</ul>`}function V(e){const t=document.querySelector(".feedback-list");if(!t)return;const a=e.map(r=>{const{name:n,descr:i,rate:s}=r;return`<li class ="swiper-slide feedback-item">
    ${z(s)}
    <p class="feedback-comment">"${i}"</p>
    <p class="feedback-name">${n}</p></li>`}).join("");t.innerHTML=a}let c=null;function p(e="Щось пішло не так"){c&&c.remove(),c=document.createElement("div"),c.className="toast",c.textContent=e,document.body.append(c),setTimeout(()=>{c==null||c.remove(),c=null},2500)}async function J(){R();try{const{feedbacks:e}=await H();if(!e||e.length===0){p("Не вдалося завантажити відгуки");return}V(e);const t=new L(".feedback-swiper",{modules:[_,E],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(r=>{r.style.display="flex"}),t.on("slideChange",()=>{const r=document.querySelector(".swiper-prev-button"),n=document.querySelector(".swiper-next-button");r.disabled=t.isBeginning,n.disabled=t.isEnd})}catch(e){console.error(e)}finally{U()}}const d={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function k(e){e&&(e.classList.remove("is-hidden"),h(),d.isOrderModalOpen=!0)}function l(e){e&&(e.classList.add("is-hidden"),g(),d.isOrderModalOpen=!1)}async function K(e){const t=await I(e);if(!t||!o.furnitureModal)return;d.selectedFurnitureId=t._id,d.selectedColor=t.color?t.color[0]:null;const a=o.furnitureModal.querySelector("[data-furniture-gallery]");a&&t.images&&t.images.length>0&&(a.innerHTML=t.images.map(b=>`
      <div class="furniture-modal__img-wrapper">
        <img src="${b}" alt="${t.name}" class="furniture-modal__img">
      </div>
    `).join(""));const r=o.furnitureModal.querySelector("[data-furniture-title]"),n=o.furnitureModal.querySelector("[data-furniture-category]"),i=o.furnitureModal.querySelector("[data-furniture-price]"),s=o.furnitureModal.querySelector("[data-furniture-rating]"),y=o.furnitureModal.querySelector("[data-furniture-colors]");if(y){const b=["#000000","#757575","#D3D3D3"],q=Array.isArray(t.color)&&t.color.length>0?t.color:b;y.innerHTML=q.map((m,w)=>`
        <li class="color-item">
          <label class="color-label">
            <input
              type="radio"
              name="furniture-color"
              value="${m}"
              class="color-input"
              ${w===0?"checked":""}>
            <span class="color-marker" style="background-color: ${m}"></span>
          </label>
        </li>
      `).join(""),y.onchange=m=>{m.target.classList.contains("color-input")&&(d.selectedColor=m.target.value)}}const M=o.furnitureModal.querySelector("[data-furniture-description]"),v=o.furnitureModal.querySelector("[data-furniture-dimensions]");a&&(a.textContent=t.images),r&&(r.textContent=t.name),n&&(n.textContent=t.category.name),i&&(i.textContent=`${t.price} грн`),s&&(s.textContent=t.rate),M&&(M.textContent=t.description),v&&(v.textContent=t.sizes),k(o.furnitureModal),h()}function Q(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),a=e.target.closest("[data-modal-close]"),r=e.target.hasAttribute("data-modal-backdrop"),n=e.target.closest("[data-open-order-modal]");t&&K(t.dataset.id),(a||r)&&(l(o.furnitureModal),g()),n&&l(o.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(l(o.furnitureModal),g())})}async function W(e){const t=await fetch("/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to submit order");return t.json()}function X(){var e;document.addEventListener("click",t=>{const a=t.target.closest("[data-open-order-modal]"),r=t.target.closest("[data-modal-close]"),n=o.orderModal&&t.target===o.orderModal.querySelector("[data-modal-backdrop]");a&&k(o.orderModal),(r||n)&&l(o.orderModal)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&d.isOrderModalOpen&&l(o.orderModal)}),(e=o.orderForm)==null||e.addEventListener("submit",async t=>{t.preventDefault();const a=new FormData(t.currentTarget),r={name:a.get("name"),phone:a.get("phone"),comment:a.get("comment"),furnitureId:d.selectedFurnitureId,color:d.selectedColor};if(!r.name||!r.phone){p("Заповни обовʼязкові поля: імʼя та телефон");return}if(!r.furnitureId||!r.color){p("Не обрано товар або колір");return}try{await W(r),p("Замовлення успішно надіслано"),t.currentTarget.reset(),l(o.orderModal)}catch{p("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{C(),D(),j(),J(),Q(),X()});
//# sourceMappingURL=index.js.map
