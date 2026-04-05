import{a as l,S as _,N as E,P as C}from"./assets/vendor-C6jGGvC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const n={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function M(){document.body.classList.add("is-locked")}function g(){document.body.classList.remove("is-locked")}function x(){var o,r;if(!n.menuOpenBtn||!n.mobileMenu)return;const e=()=>{n.mobileMenu.classList.remove("is-hidden"),n.menuOpenBtn.setAttribute("aria-expanded","true"),M()},t=()=>{n.mobileMenu.classList.add("is-hidden"),n.menuOpenBtn.setAttribute("aria-expanded","false"),g()};document.querySelectorAll('a[href="#top"]').forEach(a=>{a.addEventListener("click",s=>{s.preventDefault(),t(),window.scrollTo({top:0,behavior:"smooth"}),history.replaceState(null,"","#top")})}),n.menuOpenBtn.addEventListener("click",e),(o=n.menuCloseBtn)==null||o.addEventListener("click",t),(r=n.mobileMenuOverlay)==null||r.addEventListener("click",t),n.mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",t)),document.addEventListener("keydown",a=>{a.key==="Escape"&&t()})}function B(e=[],t="Усі"){return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${e.map(i=>{const o=i.name??"Категорія",r=i.image??"./categories/categories_all.jpg";return`
            <button
              class="category-card ${t===o?"is-active":""}"
              type="button"
              data-category="${o==="Усі"?"":o}"
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
  `}function A(e){return e._id??e.id??""}function O(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function D(e){return e.name??e.model??e.title??"Меблі"}function $(e){return Array.isArray(e.colors)&&e.colors.length>0?e.colors[0]:e.color??"Не вказано"}function F(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function P(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const i=A(t),o=O(t),r=D(t),a=$(t),s=F(t);return`
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
            <p class="product-card__price">${s}</p>

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
      `}).join("")}async function N(){const i="https://furniture-store-v2.b.goit.study"+"/api/categories",o=await l.get(i);return o.data.unshift({id:"all",name:"Всі товари"}),o.data}async function I(e){const o="https://furniture-store-v2.b.goit.study"+"/api/furnitures",r={page:1,limit:8,...e};return(await l.get(o,{params:r})).data}async function T(e){const t="https://furniture-store-v2.b.goit.study",i=`/api/furnitures/${e}`,o=t+i;return(await l.get(o)).data}async function H(){if(n.categoriesContainer){const e=await N();n.categoriesContainer.innerHTML=B(e)}if(n.furnitureContainer){const e=await I();console.log(e),n.furnitureContainer.innerHTML=P(e.furnitures)}}function j(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(i=>{i!==t&&(i.open=!1)})})})}let u=null;function G(e="Завантаження..."){u||(u=document.createElement("div"),u.className="loader",document.body.append(u)),u.textContent=e,u.classList.remove("is-hidden")}function R(){u&&u.classList.add("is-hidden")}l.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";l.defaults.params={limit:10,page:1};async function X(){return(await l.get("feedbacks")).data}const h="./images/star-rating.icons.svg";function U(e){return Math.round(Number(e)*2)/2}function w(e){const t=U(e),o=[1,2,3,4,5].map(r=>t>=r?`<li><svg class="star"><use href="${h}#star-filled"></use></svg></li>`:t>=r-.5?`<li><svg class="star"><use href="${h}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${h}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${t} з 5">${o}</ul>`}function V(e){const t=document.querySelector(".feedback-list");if(!t)return;const i=e.map(o=>{const{name:r,descr:a,rate:s}=o;return`<li class ="swiper-slide feedback-item">
    ${w(s)}
    <p class="feedback-comment">"${a}"</p>
    <p class="feedback-name">${r}</p></li>`}).join("");t.innerHTML=i}let c=null;function f(e="Щось пішло не так"){c&&c.remove(),c=document.createElement("div"),c.className="toast",c.textContent=e,document.body.append(c),setTimeout(()=>{c==null||c.remove(),c=null},2500)}async function z(){G();try{const{feedbacks:e}=await X();if(!e||e.length===0){f("Не вдалося завантажити відгуки");return}V(e);const t=new _(".feedback-swiper",{modules:[E,C],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(o=>{o.style.display="flex"}),t.on("slideChange",()=>{const o=document.querySelector(".swiper-prev-button"),r=document.querySelector(".swiper-next-button");o.disabled=t.isBeginning,r.disabled=t.isEnd})}catch(e){console.error(e)}finally{R()}}const d={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function k(e){e&&(e.classList.remove("is-hidden"),M(),d.isOrderModalOpen=!0)}function p(e){e&&(e.classList.add("is-hidden"),g(),d.isOrderModalOpen=!1)}async function W(e){const t=await T(e);if(!t||!n.furnitureModal)return;d.selectedFurnitureId=t._id,d.selectedColor=t.color?t.color[0]:null;const i=n.furnitureModal.querySelector("[data-furniture-gallery]"),o={name:"Сучасний інтер'єр вітальні",images:["https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]};i&&o.images&&o.images.length>0&&(i.innerHTML=o.images.map(b=>`
      <div class="furniture-modal__img-wrapper">
        <img src="${b}" alt="${o.name}" class="furniture-modal__img">
      </div>
    `).join(""));const r=n.furnitureModal.querySelector("[data-furniture-title]");n.furnitureModal.querySelector("[data-furniture-category]");const a=n.furnitureModal.querySelector("[data-furniture-price]"),s=n.furnitureModal.querySelector("[data-furniture-rating]");s&&(s.innerHTML=w(t.rate));const y=n.furnitureModal.querySelector("[data-furniture-colors]");if(y){const b=["#000000","#757575","#D3D3D3"],q=Array.isArray(t.color)&&t.color.length>0?t.color:b;y.innerHTML=q.map((m,L)=>`
        <li class="color-item">
          <label class="color-label">
            <input
              type="radio"
              name="furniture-color"
              value="${m}"
              class="color-input"
              ${L===0?"checked":""}>
            <span class="color-marker" style="background-color: ${m}"></span>
          </label>
        </li>
      `).join(""),y.onchange=m=>{m.target.classList.contains("color-input")&&(d.selectedColor=m.target.value)}}const S=n.furnitureModal.querySelector("[data-furniture-description]"),v=n.furnitureModal.querySelector("[data-furniture-dimensions]");r&&(r.textContent=t.name),a&&(a.textContent=`${t.price} грн`),S&&(S.textContent=t.description),v&&(v.textContent=t.sizes),k(n.furnitureModal),M()}function Y(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),i=e.target.closest("[data-modal-close]"),o=e.target.hasAttribute("data-modal-backdrop"),r=e.target.closest("[data-open-order-modal]");t&&W(t.dataset.id),(i||o)&&(p(n.furnitureModal),g()),r&&p(n.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(p(n.furnitureModal),g())})}const K=l.create({baseURL:"https://furniture-store-v2.b.goit.study/api/",headers:{"Content-Type":"application/json"}});async function J(e){return(await K.post("orders",e)).data}function Q(){var e;document.addEventListener("click",t=>{const i=t.target.closest("[data-open-order-modal]"),o=t.target.closest("[data-modal-close]"),r=n.orderModal&&t.target===n.orderModal.querySelector("[data-modal-backdrop]");i&&k(n.orderModal),(o||r)&&p(n.orderModal)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&p(n.orderModal)}),(e=n.orderForm)==null||e.addEventListener("submit",async t=>{t.preventDefault();const i=new FormData(t.currentTarget),r=i.get("phone").replace(/\D/g,""),a={name:i.get("name"),phone:r,comment:i.get("comment")||"Без коментаря",modelId:d.selectedFurnitureId,color:d.selectedColor};if(console.log(a),!/^\d{12}$/.test(a.phone)){f("Телефон має містити 12 цифр (наприклад: 380XXXXXXXXX)");return}if(!a.name||!a.phone){f("Заповни обовʼязкові поля: імʼя та телефон");return}if(!a.modelId||!a.color){f("Не обрано товар або колір");return}try{const s=await J(a);console.log("Order success:",s),n.orderForm&&n.orderForm.reset(),f("Замовлення успішно надіслано"),p(n.orderModal)}catch(s){console.error("Order error:",s),f("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{x(),H(),j(),z(),Y(),Q()});
//# sourceMappingURL=index.js.map
