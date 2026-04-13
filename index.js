import{a as y,S as T,N as I,P as j}from"./assets/vendor-C6jGGvC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const n={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function O(){document.body.classList.add("no-scroll")}function w(){document.body.classList.remove("no-scroll")}const d={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function N(e){d.isMobileMenuOpen=e}function H(){var e,t;n.mobileMenu&&(n.mobileMenu.classList.remove("is-hidden"),n.mobileMenu.classList.add("is-open"),(e=n.menuOpenBtn)==null||e.setAttribute("aria-expanded","true"),O(),N(!0),(t=n.menuOpenBtn)==null||t.classList.add("is-hidden"))}function k(){var e,t;n.mobileMenu&&(n.mobileMenu.classList.add("is-hidden"),n.mobileMenu.classList.remove("is-open"),(e=n.menuOpenBtn)==null||e.setAttribute("aria-expanded","false"),w(),N(!1),(t=n.menuOpenBtn)==null||t.classList.remove("is-hidden"))}function U(e){e.key==="Escape"&&k()}function G(e){e.target===n.mobileMenuOverlay&&k()}function V(e){e.target.closest(".mobile-menu__link, .mobile-menu__cta")&&k()}function z(){var e,t,r,a;(e=n.menuOpenBtn)==null||e.addEventListener("click",H),(t=n.menuCloseBtn)==null||t.addEventListener("click",k),(r=n.mobileMenuOverlay)==null||r.addEventListener("click",G),(a=n.mobileMenu)==null||a.addEventListener("click",V),document.addEventListener("keydown",U)}function Z(e=[],t="Всі товари"){const r={"Всі товари":"./categories/categories_all.jpg","М'які меблі":"./categories/categories2.jpg","Шафи та системи зберігання":"./categories/categories3.jpg","Ліжка та матраци":"./categories/categories1.jpg",Столи:"./categories/categories4.jpg","Стільці та табурети":"./categories/categories12.jpg",Кухні:"./categories/categories11.jpg","Меблі для дитячої":"./categories/categories5.jpg","Меблі для офісу":"./categories/categories6.jpg","Меблі для передпокою":"./categories/categories7.jpg","Меблі для ванної кімнати":"./categories/categories8.jpg","Садові та вуличні меблі":"./categories/categories9.jpg","Декор та аксесуари":"./categories/categories10.jpg"};return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`<div class="furniture__categories-list">
    ${e.map(a=>{const o=a.name??"Категорія",i=r[o]||"./categories/default.jpg";return`<button
          class="category-card ${t===o?"is-active":""}"
          type="button"
          data-category="${o==="Всі товари"?"":o}"
          data-category-id="${a._id||""}">
          
          <div class="category-card__image-wrap">
            <img
              class="category-card__image"
              src="${i}" 
              alt="${o}" 
              loading="lazy"
            />
          </div>

          <span class="category-card__title">${o}</span>
        </button>`}).join("")}
  </div>`}function K(e){return e._id??e.id??""}function J(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function Q(e){return e.name??e.model??e.title??"Меблі"}function W(e){let t;return Array.isArray(e.color)&&e.color.length>0?t=e.color:t=[e.color],t.map(r=>`<div class="item-color" style = "background-color:${r}"></div>`??"Не вказано").join("")}function X(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function x(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const r=K(t),a=J(t),o=Q(t),i=W(t),s=X(t);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${a}"
              alt="${o}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${o}</h3>
            <div class="product-card__color">
            ${i}
            </div>

            <p class="product-card__price">${s}</p>

            <button
              class="product-card__btn btn btn--secondary"
              type="button"
              data-furniture-details
              data-id="${r}"
            >
              Детальніше
            </button>
          </div>
        </article>
      `}).join("")}async function Y(){const r="https://furniture-store-v2.b.goit.study"+"/api/categories",a=await y.get(r);return a.data.unshift({id:"all",name:"Всі товари"}),a.data}async function ee(e){const a="https://furniture-store-v2.b.goit.study"+"/api/furnitures",o={page:1,limit:8,...e};return(await y.get(a,{params:o})).data}async function te(e){const t="https://furniture-store-v2.b.goit.study",r=`/api/furnitures/${e}`,a=t+r;return(await y.get(a)).data}let L=null;function re(){const e=document.createElement("div");return e.className="loader-backdrop is-hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
    <div class="loader-modal" role="status" aria-live="polite">
      <div class="loader-spinner"></div>
      <p class="loader-text">Завантаження...</p>
    </div>
  `,document.body.append(e),e}function q(e="Завантаження..."){L||(L=re());const t=L.querySelector(".loader-text");t&&(t.textContent=e),L.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function E(){L&&(L.classList.add("is-hidden"),document.body.classList.remove("no-scroll"))}let c=null,C=null;const F={error:{title:"Помилка",icon:"✕"},success:{title:"Успішно",icon:"✓"},info:{title:"Інформація",icon:"i"}};function l(e="Щось пішло не так",t="error"){const r=F[t]?t:"error",{title:a,icon:o}=F[r];c&&(clearTimeout(C),$(c)),c=document.createElement("div"),c.className=`app-toast app-toast--${r}`,c.setAttribute("role","alert"),c.setAttribute("aria-live","assertive"),c.innerHTML=`
    <div class="app-toast__icon">${o}</div>
    <div class="app-toast__content">
      <p class="app-toast__title">${a}</p>
      <p class="app-toast__message">${e}</p>
    </div>
    <button class="app-toast__close" type="button" aria-label="Закрити повідомлення">
      ×
    </button>
  `,document.body.append(c),requestAnimationFrame(()=>{c.classList.add("is-visible")});const i=c.querySelector(".app-toast__close");i==null||i.addEventListener("click",()=>{clearTimeout(C),$(c),c=null}),C=setTimeout(()=>{c&&($(c),c=null)},4e3)}function $(e){e.classList.remove("is-visible"),e.classList.add("is-hiding"),setTimeout(()=>{e.remove()},300)}let g=1,_="",h=1,P=[];function ne(){var e;(e=n.loadMoreBtn)==null||e.classList.remove("is-hidden")}function S(){var e;(e=n.loadMoreBtn)==null||e.classList.add("is-hidden")}function oe(){n.loadMoreBtn&&(h<=1||g>=h?S():ne())}function ae(){return _?{category:_,page:g}:{page:g}}function ie(e){const t=Number(e==null?void 0:e.totalItems)||0,r=Number(e==null?void 0:e.limit)||1;h=Math.ceil(t/r),t===0&&(h=0)}async function A({append:e=!1}={}){try{q(e?"Завантажуємо ще...":"Завантаження меблів...");const t=await ee(ae()),r=Array.isArray(t==null?void 0:t.furnitures)?t.furnitures:[];if(ie(t),e?r.length>0&&n.furnitureContainer.insertAdjacentHTML("beforeend",x(r)):n.furnitureContainer.innerHTML=x(r),r.length===0){S(),l(e?"Більше товарів немає":_?"Товарів у цій категорії немає":"Товарів поки немає","info");return}oe()}catch(t){console.error("Помилка завантаження меблів:",t),e&&(g-=1),S(),l("Помилка завантаження товарів","error")}finally{E()}}function se(){P.forEach(e=>{e.addEventListener("click",async t=>{t.preventDefault(),P.forEach(r=>r.classList.remove("is-active")),e.classList.add("is-active"),_=e.dataset.categoryId||"",g=1,h=1,await A({append:!1})})})}function ce(){n.loadMoreBtn&&n.loadMoreBtn.addEventListener("click",async()=>{if(g>=h){S();return}g+=1,await A({append:!0})})}async function le(){if(n.categoriesContainer)try{q("Завантаження категорій...");const e=await Y();n.categoriesContainer.innerHTML=Z(e),P=document.querySelectorAll(".category-card"),se()}catch(e){console.error("Помилка завантаження категорій:",e),l("Не вдалося завантажити категорії","error")}finally{E()}}async function ue(){S(),await le(),n.furnitureContainer&&(g=1,_="",h=1,await A({append:!1})),ce()}const de="https://furniture-store-v2.b.goit.study/api/";async function fe(){return(await y.get(`${de}furnitures`,{params:{type:"popular",limit:10,page:1}})).data}function pe(e){const t=document.querySelector(".popular-list");t&&(t.innerHTML=e.map(r=>{var a;return`
    <li class="swiper-slide">
      <article class="product-card">
        <div class="product-card__image-wrap">
          <img src="${(a=r.images)==null?void 0:a[0]}" alt="${r.name}" loading="lazy" class="product-card__image"/>
        </div>

        <div class="product-card__content">
          <h3 class="product-card__title">${r.name}</h3>
          <div class="product-card__color">
            ${r.color.map(o=>`<div class="item-color" style="background-color:${o}"></div>`).join("")}
          </div>
          <p class="product-card__price">${r.price} грн</p>
          <button class="product-card__btn btn btn--secondary" type="button" data-id="${r._id}">Детальніше</button>
        </div>
      </article>
    </li>
  `}).join(""))}async function me(){q();try{const{furnitures:e}=await fe();if(!e||e.length===0){l("Не вдалося завантажити популярні товари","error");return}pe(e);const t=new T(".popular-swiper",{modules:[I,j],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots-popular",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-next-button-popular",prevEl:".swiper-prev-button-popular"}}),r=document.querySelector(".swiper-prev-button-popular"),a=document.querySelector(".swiper-next-button-popular"),o=document.querySelector(".swiper-pagination-dots-popular");r&&(r.style.display="flex"),a&&(a.style.display="flex"),o&&(o.style.display="block");const i=()=>{r&&(r.disabled=t.isBeginning),a&&(a.disabled=t.isEnd)};i(),t.on("slideChange",i)}catch(e){console.error(e),l("Не вдалося завантажити популярні товари","error")}finally{E()}}function ge(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(r=>{r!==t&&(r.open=!1)})})})}y.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";y.defaults.params={limit:10,page:1};async function ye(){return(await y.get("feedbacks")).data}const B="./images/star-rating.icons.svg";function be(e){return Math.round(Number(e)*2)/2}function D(e){const t=be(e),a=[1,2,3,4,5].map(o=>t>=o?`<li><svg class="star"><use href="${B}#star-filled"></use></svg></li>`:t>=o-.5?`<li><svg class="star"><use href="${B}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${B}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${t} з 5">${a}</ul>`}function ve(e){const t=document.querySelector(".feedback-list");if(!t)return;const r=e.map(a=>{const{name:o,descr:i,rate:s}=a;return`<li class ="swiper-slide feedback-item">
    ${D(s)}
    <p class="feedback-comment">"${i}"</p>
    <p class="feedback-name">${o}</p></li>`}).join("");t.innerHTML=r}async function he(){q("Завантаження відгуків...");try{const{feedbacks:e}=await ye();if(!e||e.length===0){l("Не вдалося завантажити відгуки","error");return}ve(e);const t=new T(".feedback-swiper",{modules:[I,j],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(a=>{a.style.display="flex"}),t.on("slideChange",()=>{const a=document.querySelector(".swiper-prev-button"),o=document.querySelector(".swiper-next-button");a.disabled=t.isBeginning,o.disabled=t.isEnd})}catch{l("Не вдалося завантажити відгуки","error")}finally{E()}}function R(e){e&&(e.classList.remove("is-hidden"),O(),d.isOrderModalOpen=!0)}function M(e){e&&(e.classList.add("is-hidden"),w(),d.isOrderModalOpen=!1)}async function Le(e){try{const t=await te(e);if(!t||!n.furnitureModal){l("Не вдалося завантажити товар","error");return}d.selectedFurnitureId=t._id,d.selectedColor=t.color?t.color[0]:null;const r=n.furnitureModal.querySelector("[data-furniture-gallery]");r&&t.images&&t.images.length>0&&(r.innerHTML=t.images.map(m=>`
            <div class="furniture-modal__img-wrapper">
              <img src="${m}" alt="${t.name}" class="furniture-modal__img">
            </div>
          `).join(""));const a=n.furnitureModal.querySelector("[data-furniture-title]"),o=n.furnitureModal.querySelector("[data-furniture-category]"),i=n.furnitureModal.querySelector("[data-furniture-price]"),s=n.furnitureModal.querySelector("[data-furniture-rating]");s&&(s.innerHTML=D(t.rate));const u=n.furnitureModal.querySelector("[data-furniture-colors]");u&&(u.innerHTML=t.color.map((m,f)=>`
            <li class="color-item">
              <label class="color-label">
                <input
                  type="checkbox"
                  name="furniture-color"
                  value="${m}"
                  class="color-input"
                  ${f===0?"checked":""}>
                <span class="color-marker" style="background-color: ${m}"></span>
              </label>
            </li>
          `).join(""),u.onchange=m=>{const f=m.target;if(f.classList.contains("color-input")){if(!f.checked){f.checked=!0;return}u.querySelectorAll(".color-input").forEach(p=>{p.checked=p===f}),d.selectedColor=f.value}});const b=n.furnitureModal.querySelector("[data-furniture-description]"),v=n.furnitureModal.querySelector("[data-furniture-dimensions]");a&&(a.textContent=t.name),o&&(o.textContent=t.type),i&&(i.textContent=`${t.price} грн`),b&&(b.textContent=t.description),v&&(v.textContent=t.sizes),R(n.furnitureModal),O()}catch(t){console.error("Помилка завантаження товару:",t),l("Не вдалося завантажити товар","error")}}function Me(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),r=e.target.closest("[data-modal-close]"),a=e.target.hasAttribute("data-modal-backdrop"),o=e.target.closest("[data-open-order-modal]");t&&Le(t.dataset.id),(r||a)&&(M(n.furnitureModal),w()),o&&M(n.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!n.furnitureModal.classList.contains("is-hidden")&&(M(n.furnitureModal),w())})}const _e=y.create({baseURL:"https://furniture-store-v2.b.goit.study/api/",headers:{"Content-Type":"application/json"}});async function Se(e){return(await _e.post("orders",e)).data}function we(){var o;const e=n.orderForm.querySelector('[name="name"]'),t=n.orderForm.querySelector('[name="phone"]'),r=n.orderForm.querySelector("#name-error"),a=n.orderForm.querySelector("#phone-error");[e,t].forEach(i=>{i.addEventListener("input",()=>{const s=i.value.trim();if(i.name==="name"&&s&&/^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z\s]+$/.test(s)&&(i.classList.remove("input-error"),r.textContent="",r.classList.remove("active")),i.name==="phone"){const u=s.replace(/\D/g,"");/^\d{12}$/.test(u)&&(i.classList.remove("input-error"),a.textContent="",a.classList.remove("active"))}})}),document.addEventListener("click",i=>{const s=i.target.closest("[data-open-order-modal]"),u=i.target.closest("[data-modal-close]"),b=n.orderModal&&i.target===n.orderModal.querySelector("[data-modal-backdrop]");s&&R(n.orderModal),(u||b)&&M(n.orderModal)}),document.addEventListener("keydown",i=>{i.key==="Escape"&&M(n.orderModal)}),(o=n.orderForm)==null||o.addEventListener("submit",async i=>{i.preventDefault();const s=new FormData(i.currentTarget),u=s.get("phone"),b=u.replace(/\D/g,""),v=s.get("name");[e,t].forEach(p=>p.classList.remove("input-error")),[r,a].forEach(p=>{p.textContent="",p.classList.remove("active")});const m=/^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z\s]+$/;if(!v||!v.trim()||!m.test(v)){e.classList.add("input-error"),r.textContent="Тільки укр/англ букви",r.classList.add("active");return}if(!/^[\d\s]+$/.test(u)){t.classList.add("input-error"),a.textContent="Тільки цифри",a.classList.add("active");return}if(b.length!==12){t.classList.add("input-error"),a.textContent="Телефон має містити тільки 12 цифр",a.classList.add("active");return}if(!d.selectedFurnitureId||!d.selectedColor){l("Не обрано товар або колір","info");return}const f={name:v,phone:b,comment:s.get("comment")||"Без коментаря",modelId:d.selectedFurnitureId,color:d.selectedColor};try{const p=await Se(f);n.orderForm.reset(),l("Замовлення успішно надіслано","success"),M(n.orderModal)}catch{l("Помилка при відправці","error")}})}document.addEventListener("DOMContentLoaded",()=>{z(),ue(),ge(),he(),me(),Me(),we()});
//# sourceMappingURL=index.js.map
