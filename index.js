import{a as f,S as q,N as w,P as _}from"./assets/vendor-C6jGGvC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const o={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function v(){document.body.classList.add("is-locked")}function b(){document.body.classList.remove("is-locked")}function C(){var n,r;if(!o.menuOpenBtn||!o.mobileMenu)return;const e=()=>{o.mobileMenu.classList.remove("is-hidden"),o.menuOpenBtn.setAttribute("aria-expanded","true"),v()},t=()=>{o.mobileMenu.classList.add("is-hidden"),o.menuOpenBtn.setAttribute("aria-expanded","false"),b()};document.querySelectorAll('a[href="#top"]').forEach(a=>{a.addEventListener("click",s=>{s.preventDefault(),t(),window.scrollTo({top:0,behavior:"smooth"}),history.replaceState(null,"","#top")})}),o.menuOpenBtn.addEventListener("click",e),(n=o.menuCloseBtn)==null||n.addEventListener("click",t),(r=o.mobileMenuOverlay)==null||r.addEventListener("click",t),o.mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",t)),document.addEventListener("keydown",a=>{a.key==="Escape"&&t()})}function E(e=[],t="Усі"){return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${e.map(i=>{const n=i.name??"Категорія",r=i.image??"./categories/categories_all.jpg";return`
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
  `}function O(e){return e._id??e.id??""}function $(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function B(e){return e.name??e.model??e.title??"Меблі"}function P(e){return Array.isArray(e.colors)&&e.colors.length>0?e.colors[0]:e.color??"Не вказано"}function A(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function F(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const i=O(t),n=$(t),r=B(t),a=P(t),s=A(t);return`
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
      `}).join("")}async function N(){const i="https://furniture-store-v2.b.goit.study"+"/api/categories",n=await f.get(i);return n.data.unshift({id:"all",name:"Всі товари"}),n.data}async function I(e){const n="https://furniture-store-v2.b.goit.study"+"/api/furnitures",r={page:1,limit:8,...e};return(await f.get(n,{params:r})).data}async function T(e){const t="https://furniture-store-v2.b.goit.study",i=`/api/furnitures/${e}`,n=t+i;return(await f.get(n)).data}async function x(){if(o.categoriesContainer){const e=await N();o.categoriesContainer.innerHTML=E(e)}if(o.furnitureContainer){const e=await I();console.log(e),o.furnitureContainer.innerHTML=F(e.furnitures)}}function D(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(i=>{i!==t&&(i.open=!1)})})})}let d=null;function j(e="Завантаження..."){d||(d=document.createElement("div"),d.className="loader",document.body.append(d)),d.textContent=e,d.classList.remove("is-hidden")}function R(){d&&d.classList.add("is-hidden")}f.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";f.defaults.params={limit:10,page:1};async function X(){return(await f.get("feedbacks")).data}const S="./images/star-rating.icons.svg";function H(e){return Math.round(Number(e)*2)/2}function U(e){const t=H(e),n=[1,2,3,4,5].map(r=>t>=r?`<li><svg class="star"><use href="${S}#star-filled"></use></svg></li>`:t>=r-.5?`<li><svg class="star"><use href="${S}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${S}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${t} з 5">${n}</ul>`}function G(e){const t=document.querySelector(".feedback-list");if(!t)return;const i=e.map(n=>{const{name:r,descr:a,rate:s}=n;return`<li class ="swiper-slide feedback-item">
    ${U(s)}
    <p class="feedback-comment">"${a}"</p>
    <p class="feedback-name">${r}</p></li>`}).join("");t.innerHTML=i}let l=null;function g(e="Щось пішло не так"){l&&l.remove(),l=document.createElement("div"),l.className="toast",l.textContent=e,document.body.append(l),setTimeout(()=>{l==null||l.remove(),l=null},2500)}async function z(){j();try{const{feedbacks:e}=await X();if(!e||e.length===0){g("Не вдалося завантажити відгуки");return}G(e);const t=new q(".feedback-swiper",{modules:[w,_],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(n=>{n.style.display="flex"}),t.on("slideChange",()=>{const n=document.querySelector(".swiper-prev-button"),r=document.querySelector(".swiper-next-button");n.disabled=t.isBeginning,r.disabled=t.isEnd})}catch(e){console.error(e)}finally{R()}}const u={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function L(e){e&&(e.classList.remove("is-hidden"),v(),u.isOrderModalOpen=!0)}function y(e){e&&(e.classList.add("is-hidden"),b(),u.isOrderModalOpen=!1)}async function V(e){const t=await T(e);if(!t||!o.furnitureModal)return;u.selectedFurnitureId=t._id,u.selectedColor=t.color?t.color[0]:null;const i=o.furnitureModal.querySelector("[data-furniture-gallery]");i&&t.images&&t.images.length>0&&(i.innerHTML=t.images.map(m=>`
      <div class="furniture-modal__img-wrapper">
        <img src="${m}" alt="${t.name}" class="furniture-modal__img">
      </div>
    `).join(""));const n=o.furnitureModal.querySelector("[data-furniture-title]"),r=o.furnitureModal.querySelector("[data-furniture-category]"),a=o.furnitureModal.querySelector("[data-furniture-price]"),s=o.furnitureModal.querySelector("[data-furniture-rating]"),M=o.furnitureModal.querySelector("[data-furniture-description]"),k=o.furnitureModal.querySelector("[data-furniture-dimensions]"),p=o.furnitureModal.querySelector("[data-furniture-colors]");if(p){const m=Array.isArray(t.color)?t.color:[];m.length===0?(p.innerHTML="<li>Кольори недоступні</li>",u.selectedColor=null):(p.innerHTML=m.map((c,h)=>`
      <li class="color-item">
        <label class="color-label">
          <input
            type="radio"
            name="furniture-color"
            value="${c}"
            class="color-input"
            ${h===0?"checked":""}
          >
          <span class="color-marker" style="background-color: ${c}"></span>
        </label>
      </li>
    `).join(""),u.selectedColor=m[0],p.onchange=c=>{c.target.classList.contains("color-input")&&(u.selectedColor=c.target.value)}),p.innerHTML=m.map((c,h)=>`
        <li class="color-item">
          <label class="color-label">
            <input
              type="radio"
              name="furniture-color"
              value="${c}"
              class="color-input"
              ${h===0?"checked":""}>
            <span class="color-marker" style="background-color: ${c}"></span>
          </label>
        </li>
      `).join(""),p.onchange=c=>{c.target.classList.contains("color-input")&&(u.selectedColor=c.target.value)}}i&&(i.textContent=t.images),n&&(n.textContent=t.name),r&&(r.textContent=t.category.name),a&&(a.textContent=`${t.price} грн`),s&&(s.textContent=t.rate),M&&(M.textContent=t.description),k&&(k.textContent=t.sizes),L(o.furnitureModal),v()}function K(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),i=e.target.closest("[data-modal-close]"),n=e.target.hasAttribute("data-modal-backdrop"),r=e.target.closest("[data-open-order-modal]");t&&V(t.dataset.id),(i||n)&&(y(o.furnitureModal),b()),r&&y(o.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(y(o.furnitureModal),b())})}const J=f.create({baseURL:"https://furniture-store-v2.b.goit.study/api/",headers:{"Content-Type":"application/json"}});async function Q(e){return(await J.post("orders",e)).data}function W(){var e;document.addEventListener("click",t=>{const i=t.target.closest("[data-open-order-modal]"),n=t.target.closest("[data-modal-close]"),r=o.orderModal&&t.target===o.orderModal.querySelector("[data-modal-backdrop]");i&&L(o.orderModal),(n||r)&&y(o.orderModal)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&u.isOrderModalOpen&&y(o.orderModal)}),(e=o.orderForm)==null||e.addEventListener("submit",async t=>{t.preventDefault();const i=new FormData(t.currentTarget),r=i.get("phone").replace(/\D/g,""),a={name:i.get("name"),phone:r,comment:i.get("comment")||"Без коментаря",modelId:u.selectedFurnitureId,color:u.selectedColor};if(console.log(a),!/^\d{12}$/.test(a.phone)){g("Телефон має містити 12 цифр (наприклад: 380XXXXXXXXX)");return}if(!a.name||!a.phone){g("Заповни обовʼязкові поля: імʼя та телефон");return}if(!a.modelId||!a.color){g("Не обрано товар або колір");return}try{const s=await Q(a);console.log("Order success:",s),o.orderForm&&o.orderForm.reset(),g("Замовлення успішно надіслано"),y(o.orderModal)}catch(s){console.error("Order error:",s),g("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{C(),x(),D(),z(),K(),W()});
//# sourceMappingURL=index.js.map
