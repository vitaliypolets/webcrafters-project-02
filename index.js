import{a as m,S as P,N as A,P as F}from"./assets/vendor-C6jGGvC7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const n={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function _(){document.body.classList.add("is-locked")}function M(){document.body.classList.remove("is-locked")}function I(){var o,r;if(!n.menuOpenBtn||!n.mobileMenu)return;const t=()=>{n.mobileMenu.classList.remove("is-hidden"),n.menuOpenBtn.setAttribute("aria-expanded","true"),_()},e=()=>{n.mobileMenu.classList.add("is-hidden"),n.menuOpenBtn.setAttribute("aria-expanded","false"),M()};document.querySelectorAll('a[href="#top"]').forEach(a=>{a.addEventListener("click",c=>{c.preventDefault(),e(),window.scrollTo({top:0,behavior:"smooth"}),history.replaceState(null,"","#top")})}),n.menuOpenBtn.addEventListener("click",t),(o=n.menuCloseBtn)==null||o.addEventListener("click",e),(r=n.mobileMenuOverlay)==null||r.addEventListener("click",e),n.mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",e)),document.addEventListener("keydown",a=>{a.key==="Escape"&&e()})}function N(t=[],e="Усі"){return!Array.isArray(t)||t.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${t.map(i=>{const o=i.name??"Категорія",r=i.image??"./categories/categories_all.jpg";return`
            <button
              class="category-card ${e===o?"is-active":""}"
              type="button"
              data-category="${o==="Усі"?"":o}"
              data-category-id="${i._id||""}"
            >
              <div class="category-card__image-wrap">
                <img
                  class="category-card__image"
                  src="${r}"
                  alt="${o}"
                  loading="lazy"
                />
              </div>
              <span class="category-card__title">${o}</span>
            </button>
          `}).join("")}
    </div>
  `}function T(t){return t._id??t.id??""}function x(t){return Array.isArray(t.images)&&t.images.length>0?t.images[0]:t.image?t.image:t.img?t.img:"./images/furniture1.jpg"}function D(t){return t.name??t.model??t.title??"Меблі"}function j(t){return Array.isArray(t.colors)&&t.colors.length>0?t.colors[0]:t.color??"Не вказано"}function H(t){const e=t.price??t.currentPrice??0;return typeof e=="number"?`${e.toLocaleString("uk-UA")} грн`:`${e} грн`}function k(t=[]){return!Array.isArray(t)||t.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:t.map(e=>{const i=T(e),o=x(e),r=D(e),a=j(e),c=H(e);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${o}"
              alt="${r}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${r}</h3>
            <p class="product-card__color">Колір: ${a}</p>
            <p class="product-card__price">${c}</p>

            <button
              class="product-card__btn btn btn--secondary"
              type="button"
              data-furniture-details
              data-id="${i}"
            >
              Детальніше
            </button>
          </div>
        </article>
      `}).join("")}async function R(){const i="https://furniture-store-v2.b.goit.study"+"/api/categories",o=await m.get(i);return o.data.unshift({id:"all",name:"Всі товари"}),o.data}async function L(t){const o="https://furniture-store-v2.b.goit.study"+"/api/furnitures",r={page:1,limit:8,...t};return(await m.get(o,{params:r})).data}async function X(t){const e="https://furniture-store-v2.b.goit.study",i=`/api/furnitures/${t}`,o=e+i;return(await m.get(o)).data}let l=null;function h(t="Завантаження..."){l||(l=document.createElement("div"),l.className="loader",document.body.append(l)),l.textContent=t,l.classList.remove("is-hidden")}function S(){l&&l.classList.add("is-hidden")}let u=null;function s(t="Щось пішло не так"){u&&u.remove(),u=document.createElement("div"),u.className="toast",u.textContent=t,document.body.append(u),setTimeout(()=>{u==null||u.remove(),u=null},2500)}let f=1,b="",q=[];async function U(){if(n.categoriesContainer)try{h("Завантаження категорій...");const e=await R();n.categoriesContainer.innerHTML=N(e),q=document.querySelectorAll(".category-card")}catch(e){console.error("Помилка завантаження категорій:",e),s("Не вдалося завантажити категорії")}finally{S()}if(n.furnitureContainer)try{h("Завантаження меблів...");const e=await L({page:f});n.furnitureContainer.innerHTML=k(e.furnitures),e.furnitures.length===0&&s("Товарів поки немає")}catch(e){console.error("Помилка завантаження меблів:",e),s("Помилка завантаження товарів")}finally{S()}q.forEach(e=>{e.addEventListener("click",async i=>{i.preventDefault(),q.forEach(r=>r.classList.remove("is-active")),e.classList.add("is-active"),b=e.dataset.categoryId||"",f=1;try{h("Завантаження меблів...");const r=await L(b?{category:b,page:f}:{page:f});n.furnitureContainer.innerHTML=k(r.furnitures),r.furnitures.length===0&&s("Товарів у цій категорії немає");const a=document.querySelector("[data-load-more]");a&&(a.style.display="block")}catch(r){console.error("Помилка завантаження меблів:",r),s("Помилка завантаження товарів")}finally{S()}})});const t=document.querySelector("[data-load-more]");t&&t.addEventListener("click",async()=>{f+=1;try{h("Завантажуємо ще...");const e=await L(b?{category:b,page:f}:{page:f});n.furnitureContainer.insertAdjacentHTML("beforeend",k(e.furnitures)),e.furnitures.length===0&&(t.style.display="none",s("Більше товарів немає"))}catch(e){console.error("Помилка завантаження меблів:",e),s("Помилка завантаження товарів")}finally{S()}})}function G(){const t=document.querySelectorAll(".faq__item");t.forEach(e=>{e.addEventListener("toggle",()=>{e.open&&t.forEach(i=>{i!==e&&(i.open=!1)})})})}m.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";m.defaults.params={limit:10,page:1};async function z(){return(await m.get("feedbacks")).data}const w="./images/star-rating.icons.svg";function V(t){return Math.round(Number(t)*2)/2}function O(t){const e=V(t),o=[1,2,3,4,5].map(r=>e>=r?`<li><svg class="star"><use href="${w}#star-filled"></use></svg></li>`:e>=r-.5?`<li><svg class="star"><use href="${w}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${w}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${e} з 5">${o}</ul>`}function K(t){const e=document.querySelector(".feedback-list");if(!e)return;const i=t.map(o=>{const{name:r,descr:a,rate:c}=o;return`<li class ="swiper-slide feedback-item">
    ${O(c)}
    <p class="feedback-comment">"${a}"</p>
    <p class="feedback-name">${r}</p></li>`}).join("");e.innerHTML=i}async function J(){h();try{const{feedbacks:t}=await z();if(!t||t.length===0){s("Не вдалося завантажити відгуки");return}K(t);const e=new P(".feedback-swiper",{modules:[A,F],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(o=>{o.style.display="flex"}),e.on("slideChange",()=>{const o=document.querySelector(".swiper-prev-button"),r=document.querySelector(".swiper-next-button");o.disabled=e.isBeginning,r.disabled=e.isEnd})}catch(t){console.error(t)}finally{S()}}const p={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function $(t){t&&(t.classList.remove("is-hidden"),_(),p.isOrderModalOpen=!0)}function g(t){t&&(t.classList.add("is-hidden"),M(),p.isOrderModalOpen=!1)}async function Q(t){const e=await X(t);if(!e||!n.furnitureModal)return;p.selectedFurnitureId=e._id,p.selectedColor=e.color?e.color[0]:null;const i=n.furnitureModal.querySelector("[data-furniture-gallery]");i&&e.images&&e.images.length>0&&(i.innerHTML=e.images.map(d=>`
      <div class="furniture-modal__img-wrapper">
        <img src="${d}" alt="${e.name}" class="furniture-modal__img">
      </div>
    `).join(""));const o=n.furnitureModal.querySelector("[data-furniture-title]"),r=n.furnitureModal.querySelector("[data-furniture-category]"),a=n.furnitureModal.querySelector("[data-furniture-price]"),c=n.furnitureModal.querySelector("[data-furniture-rating]");c&&(c.innerHTML=O(e.rate));const v=n.furnitureModal.querySelector("[data-furniture-colors]");v&&(v.innerHTML=e.color.map((d,y)=>`
        <li class="color-item">
          <label class="color-label">
            <input
              type="checkbox"
              name="furniture-color"
              value="${d}"
              class="color-input"
              ${y===0?"checked":""}>
            <span class="color-marker" style="background-color: ${d}"></span>
          </label>
        </li>
      `).join(""),v.onchange=d=>{const y=d.target;if(d.target.classList.contains("color-input")){if(!y.checked){y.checked=!0;return}v.querySelectorAll(".color-input").forEach(B=>{B.checked=B===y}),p.selectedColor=d.target.value}});const E=n.furnitureModal.querySelector("[data-furniture-description]"),C=n.furnitureModal.querySelector("[data-furniture-dimensions]");o&&(o.textContent=e.name),r&&(r.textContent=e.type),a&&(a.textContent=`${e.price} грн`),E&&(E.textContent=e.description),C&&(C.textContent=e.sizes),$(n.furnitureModal),_()}function W(){document.addEventListener("click",t=>{const e=t.target.closest("[data-id]"),i=t.target.closest("[data-modal-close]"),o=t.target.hasAttribute("data-modal-backdrop"),r=t.target.closest("[data-open-order-modal]");e&&Q(e.dataset.id),(i||o)&&(g(n.furnitureModal),M()),r&&g(n.furnitureModal)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!n.furnitureModal.classList.contains("is-hidden")&&(g(n.furnitureModal),M())})}const Y=m.create({baseURL:"https://furniture-store-v2.b.goit.study/api/",headers:{"Content-Type":"application/json"}});async function Z(t){return(await Y.post("orders",t)).data}function ee(){var t;document.addEventListener("click",e=>{const i=e.target.closest("[data-open-order-modal]"),o=e.target.closest("[data-modal-close]"),r=n.orderModal&&e.target===n.orderModal.querySelector("[data-modal-backdrop]");i&&$(n.orderModal),(o||r)&&g(n.orderModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&g(n.orderModal)}),(t=n.orderForm)==null||t.addEventListener("submit",async e=>{e.preventDefault();const i=new FormData(e.currentTarget),r=i.get("phone").replace(/\D/g,""),a={name:i.get("name"),phone:r,comment:i.get("comment")||"Без коментаря",modelId:p.selectedFurnitureId,color:p.selectedColor};if(console.log(a),!/^\d{12}$/.test(a.phone)){s("Телефон має містити 12 цифр (наприклад: 380XXXXXXXXX)");return}if(!a.name||!a.phone){s("Заповни обовʼязкові поля: імʼя та телефон");return}if(!a.modelId||!a.color){s("Не обрано товар або колір");return}try{const c=await Z(a);console.log("Order success:",c),n.orderForm&&n.orderForm.reset(),s("Замовлення успішно надіслано"),g(n.orderModal)}catch(c){console.error("Order error:",c),s("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{I(),U(),G(),J(),W(),ee()});
//# sourceMappingURL=index.js.map
