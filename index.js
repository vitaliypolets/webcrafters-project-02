import{a as l,S as _,N as w,P as C}from"./assets/vendor-C6jGGvC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();const o={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function h(){document.body.classList.add("is-locked")}function g(){document.body.classList.remove("is-locked")}function E(){var n,r;if(!o.menuOpenBtn||!o.mobileMenu)return;const e=()=>{o.mobileMenu.classList.remove("is-hidden"),o.menuOpenBtn.setAttribute("aria-expanded","true"),h()},t=()=>{o.mobileMenu.classList.add("is-hidden"),o.menuOpenBtn.setAttribute("aria-expanded","false"),g()};document.querySelectorAll('a[href="#top"]').forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),t(),window.scrollTo({top:0,behavior:"smooth"}),history.replaceState(null,"","#top")})}),o.menuOpenBtn.addEventListener("click",e),(n=o.menuCloseBtn)==null||n.addEventListener("click",t),(r=o.mobileMenuOverlay)==null||r.addEventListener("click",t),o.mobileMenu.querySelectorAll("a").forEach(i=>i.addEventListener("click",t)),document.addEventListener("keydown",i=>{i.key==="Escape"&&t()})}function O(e=[],t="Усі"){return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${e.map(a=>{const n=a.name??"Категорія",r=a.image??"./categories/categories_all.jpg";return`
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
  `}function B(e){return e._id??e.id??""}function $(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function A(e){return e.name??e.model??e.title??"Меблі"}function F(e){return Array.isArray(e.colors)&&e.colors.length>0?e.colors[0]:e.color??"Не вказано"}function P(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function N(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const a=B(t),n=$(t),r=A(t),i=F(t),s=P(t);return`
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
              data-id="${a}"
            >
              Детальніше
            </button>
          </div>
        </article>
      `}).join("")}async function x(){const a="https://furniture-store-v2.b.goit.study"+"/api/categories",n=await l.get(a);return n.data.unshift({id:"all",name:"Всі товари"}),n.data}async function I(e){const n="https://furniture-store-v2.b.goit.study"+"/api/furnitures",r={page:1,limit:8,...e};return(await l.get(n,{params:r})).data}async function D(e){const t="https://furniture-store-v2.b.goit.study",a=`/api/furnitures/${e}`,n=t+a;return(await l.get(n)).data}async function T(){if(o.categoriesContainer){const e=await x();o.categoriesContainer.innerHTML=O(e)}if(o.furnitureContainer){const e=await I();console.log(e),o.furnitureContainer.innerHTML=N(e.furnitures)}}function j(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(a=>{a!==t&&(a.open=!1)})})})}let u=null;function R(e="Завантаження..."){u||(u=document.createElement("div"),u.className="loader",document.body.append(u)),u.textContent=e,u.classList.remove("is-hidden")}function X(){u&&u.classList.add("is-hidden")}l.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";l.defaults.params={limit:10,page:1};async function U(){try{return(await l.get("feedbacks")).data}catch(e){throw console.log(e),e}}const S="./images/star-rating.icons.svg";function H(e){return Math.round(Number(e)*2)/2}function G(e){const t=H(e),n=[1,2,3,4,5].map(r=>t>=r?`<li><svg class="star"><use href="${S}#star-filled"></use></svg></li>`:t>=r-.5?`<li><svg class="star"><use href="${S}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${S}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${t} з 5">${n}</ul>`}function z(e){const t=document.querySelector(".feedback-list");if(!t)return;const a=e.map(n=>{const{name:r,descr:i,rate:s}=n;return`<li class ="swiper-slide feedback-item">
    ${G(s)}
    <p class="feedback-comment">"${i}"</p>
    <p class="feedback-name">${r}</p></li>`}).join("");t.innerHTML=a}let c=null;function f(e="Щось пішло не так"){c&&c.remove(),c=document.createElement("div"),c.className="toast",c.textContent=e,document.body.append(c),setTimeout(()=>{c==null||c.remove(),c=null},2500)}async function V(){R();try{const{feedbacks:e}=await U();if(!e||e.length===0){f("Не вдалося завантажити відгуки");return}z(e);const t=new _(".feedback-swiper",{modules:[w,C],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(n=>{n.style.display="flex"}),t.on("slideChange",()=>{const n=document.querySelector(".swiper-prev-button"),r=document.querySelector(".swiper-next-button");n.disabled=t.isBeginning,r.disabled=t.isEnd})}catch(e){console.error(e)}finally{X()}}const d={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function k(e){e&&(e.classList.remove("is-hidden"),h(),d.isOrderModalOpen=!0)}function p(e){e&&(e.classList.add("is-hidden"),g(),d.isOrderModalOpen=!1)}async function K(e){const t=await D(e);if(!t||!o.furnitureModal)return;d.selectedFurnitureId=t._id,d.selectedColor=t.color?t.color[0]:null;const a=o.furnitureModal.querySelector("[data-furniture-gallery]");a&&t.images&&t.images.length>0&&(a.innerHTML=t.images.map(b=>`
      <div class="furniture-modal__img-wrapper">
        <img src="${b}" alt="${t.name}" class="furniture-modal__img">
      </div>
    `).join(""));const n=o.furnitureModal.querySelector("[data-furniture-title]"),r=o.furnitureModal.querySelector("[data-furniture-category]"),i=o.furnitureModal.querySelector("[data-furniture-price]"),s=o.furnitureModal.querySelector("[data-furniture-rating]"),y=o.furnitureModal.querySelector("[data-furniture-colors]");if(y){const b=["#000000","#757575","#D3D3D3"],L=Array.isArray(t.color)&&t.color.length>0?t.color:b;y.innerHTML=L.map((m,q)=>`
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
      `).join(""),y.onchange=m=>{m.target.classList.contains("color-input")&&(d.selectedColor=m.target.value)}}const v=o.furnitureModal.querySelector("[data-furniture-description]"),M=o.furnitureModal.querySelector("[data-furniture-dimensions]");a&&(a.textContent=t.images),n&&(n.textContent=t.name),r&&(r.textContent=t.category.name),i&&(i.textContent=`${t.price} грн`),s&&(s.textContent=t.rate),v&&(v.textContent=t.description),M&&(M.textContent=t.sizes),k(o.furnitureModal),h()}function J(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),a=e.target.closest("[data-modal-close]"),n=e.target.hasAttribute("data-modal-backdrop"),r=e.target.closest("[data-open-order-modal]");t&&K(t.dataset.id),(a||n)&&(p(o.furnitureModal),g()),r&&p(o.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(p(o.furnitureModal),g())})}const Q=l.create({baseURL:"https://furniture-store-v2.b.goit.study/api/",headers:{"Content-Type":"application/json"}});async function W(e){return(await Q.post("orders",e)).data}function Y(){var e;document.addEventListener("click",t=>{const a=t.target.closest("[data-open-order-modal]"),n=t.target.closest("[data-modal-close]"),r=o.orderModal&&t.target===o.orderModal.querySelector("[data-modal-backdrop]");a&&k(o.orderModal),(n||r)&&p(o.orderModal)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&d.isOrderModalOpen&&p(o.orderModal)}),(e=o.orderForm)==null||e.addEventListener("submit",async t=>{t.preventDefault();const a=new FormData(t.currentTarget),n={name:a.get("name"),phone:a.get("phone"),comment:a.get("comment")||"Без коментаря",modelId:d.selectedFurnitureId,color:d.selectedColor};if(console.log(n),!/^\d{12}$/.test(n.phone)){f("Телефон має містити 12 цифр (наприклад: 380XXXXXXXXX)");return}if(!n.name||!n.phone){f("Заповни обовʼязкові поля: імʼя та телефон");return}if(!n.modelId||!n.color){f("Не обрано товар або колір");return}try{const r=await W(n);console.log("Order success:",r),o.orderForm&&o.orderForm.reset(),f("Замовлення успішно надіслано"),p(o.orderModal)}catch(r){console.error("Order error:",r),f("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{E(),T(),j(),V(),J(),Y()});
//# sourceMappingURL=index.js.map
