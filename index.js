import{a as y,S as T,N as I,P as j}from"./assets/vendor-C6jGGvC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const o={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function A(){document.body.classList.add("no-scroll")}function w(){document.body.classList.remove("no-scroll")}const d={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function N(e){d.isMobileMenuOpen=e}function U(){var t,r;if(!o.mobileMenu)return;o.mobileMenu.classList.remove("is-hidden"),o.mobileMenu.classList.add("is-open"),(t=o.menuOpenBtn)==null||t.setAttribute("aria-expanded","true"),(r=o.mobileMenu)==null||r.addEventListener("click",D),A(),N(!0);const e=document.querySelector(".burger");e&&e.classList.add("is-hidden")}function k(){var t;if(!o.mobileMenu)return;o.mobileMenu.classList.add("is-hidden"),o.mobileMenu.classList.remove("is-open"),(t=o.menuOpenBtn)==null||t.setAttribute("aria-expanded","false"),w(),N(!1);const e=document.querySelector(".burger");e&&e.classList.remove("is-hidden")}function G(e){e.key==="Escape"&&k()}function V(e){e.target===o.mobileMenuOverlay&&k()}function D(e){e.target.closest(".mobile-menu__link, .mobile-menu__cta")&&k()}function z(){var e,t,r,a;(e=o.menuOpenBtn)==null||e.addEventListener("click",U),(t=o.menuCloseBtn)==null||t.addEventListener("click",k),(r=o.mobileMenuOverlay)==null||r.addEventListener("click",V),(a=o.mobileMenu)==null||a.addEventListener("click",D),document.addEventListener("keydown",G)}function Z(e=[],t="Всі товари"){const r={"Всі товари":"./categories/categories_all.jpg","М'які меблі":"./categories/categories2.jpg","Шафи та системи зберігання":"./categories/categories3.jpg","Ліжка та матраци":"./categories/categories1.jpg",Столи:"./categories/categories4.jpg","Стільці та табурети":"./categories/categories12.jpg",Кухні:"./categories/categories11.jpg","Меблі для дитячої":"./categories/categories5.jpg","Меблі для офісу":"./categories/categories6.jpg","Меблі для передпокою":"./categories/categories7.jpg","Меблі для ванної кімнати":"./categories/categories8.jpg","Садові та вуличні меблі":"./categories/categories9.jpg","Декор та аксесуари":"./categories/categories10.jpg"};return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`<div class="furniture__categories-list">
    ${e.map(a=>{const n=a.name??"Категорія",i=r[n]||"./categories/default.jpg";return`<button
          class="category-card ${t===n?"is-active":""}"
          type="button"
          data-category="${n==="Всі товари"?"":n}"
          data-category-id="${a._id||""}">
          
          <div class="category-card__image-wrap">
            <img
              class="category-card__image"
              src="${i}" 
              alt="${n}" 
              loading="lazy"
            />
          </div>

          <span class="category-card__title">${n}</span>
        </button>`}).join("")}
  </div>`}function K(e){return e._id??e.id??""}function J(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function Q(e){return e.name??e.model??e.title??"Меблі"}function W(e){let t;return Array.isArray(e.color)&&e.color.length>0?t=e.color:t=[e.color],t.map(r=>`<div class="item-color" style = "background-color:${r}"></div>`??"Не вказано").join("")}function X(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function x(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const r=K(t),a=J(t),n=Q(t),i=W(t),s=X(t);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${a}"
              alt="${n}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${n}</h3>
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
      `}).join("")}async function Y(){const r="https://furniture-store-v2.b.goit.study"+"/api/categories",a=await y.get(r);return a.data.unshift({id:"all",name:"Всі товари"}),a.data}async function ee(e){const a="https://furniture-store-v2.b.goit.study"+"/api/furnitures",n={page:1,limit:8,...e};return(await y.get(a,{params:n})).data}async function te(e){const t="https://furniture-store-v2.b.goit.study",r=`/api/furnitures/${e}`,a=t+r;return(await y.get(a)).data}let L=null;function re(){const e=document.createElement("div");return e.className="loader-backdrop is-hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
    <div class="loader-modal" role="status" aria-live="polite">
      <div class="loader-spinner"></div>
      <p class="loader-text">Завантаження...</p>
    </div>
  `,document.body.append(e),e}function q(e="Завантаження..."){L||(L=re());const t=L.querySelector(".loader-text");t&&(t.textContent=e),L.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function E(){L&&(L.classList.add("is-hidden"),document.body.classList.remove("no-scroll"))}let c=null,C=null;const F={error:{title:"Помилка",icon:"✕"},success:{title:"Успішно",icon:"✓"},info:{title:"Інформація",icon:"i"}};function u(e="Щось пішло не так",t="error"){const r=F[t]?t:"error",{title:a,icon:n}=F[r];c&&(clearTimeout(C),$(c)),c=document.createElement("div"),c.className=`app-toast app-toast--${r}`,c.setAttribute("role","alert"),c.setAttribute("aria-live","assertive"),c.innerHTML=`
    <div class="app-toast__icon">${n}</div>
    <div class="app-toast__content">
      <p class="app-toast__title">${a}</p>
      <p class="app-toast__message">${e}</p>
    </div>
    <button class="app-toast__close" type="button" aria-label="Закрити повідомлення">
      ×
    </button>
  `,document.body.append(c),requestAnimationFrame(()=>{c.classList.add("is-visible")});const i=c.querySelector(".app-toast__close");i==null||i.addEventListener("click",()=>{clearTimeout(C),$(c),c=null}),C=setTimeout(()=>{c&&($(c),c=null)},4e3)}function $(e){e.classList.remove("is-visible"),e.classList.add("is-hiding"),setTimeout(()=>{e.remove()},300)}let g=1,_="",h=1,B=[];function oe(){var e;(e=o.loadMoreBtn)==null||e.classList.remove("is-hidden")}function S(){var e;(e=o.loadMoreBtn)==null||e.classList.add("is-hidden")}function ne(){o.loadMoreBtn&&(h<=1||g>=h?S():oe())}function ae(){return _?{category:_,page:g}:{page:g}}function ie(e){const t=Number(e==null?void 0:e.totalItems)||0,r=Number(e==null?void 0:e.limit)||1;h=Math.ceil(t/r),t===0&&(h=0)}async function O({append:e=!1}={}){try{q(e?"Завантажуємо ще...":"Завантаження меблів...");const t=await ee(ae()),r=Array.isArray(t==null?void 0:t.furnitures)?t.furnitures:[];if(ie(t),e?r.length>0&&o.furnitureContainer.insertAdjacentHTML("beforeend",x(r)):o.furnitureContainer.innerHTML=x(r),r.length===0){S(),u(e?"Більше товарів немає":_?"Товарів у цій категорії немає":"Товарів поки немає","info");return}ne()}catch(t){console.error("Помилка завантаження меблів:",t),e&&(g-=1),S(),u("Помилка завантаження товарів","error")}finally{E()}}function se(){B.forEach(e=>{e.addEventListener("click",async t=>{t.preventDefault(),B.forEach(r=>r.classList.remove("is-active")),e.classList.add("is-active"),_=e.dataset.categoryId||"",g=1,h=1,await O({append:!1})})})}function ce(){o.loadMoreBtn&&o.loadMoreBtn.addEventListener("click",async()=>{if(g>=h){S();return}g+=1,await O({append:!0})})}async function le(){if(o.categoriesContainer)try{q("Завантаження категорій...");const e=await Y();o.categoriesContainer.innerHTML=Z(e),B=document.querySelectorAll(".category-card"),se()}catch(e){console.error("Помилка завантаження категорій:",e),u("Не вдалося завантажити категорії","error")}finally{E()}}async function ue(){S(),await le(),o.furnitureContainer&&(g=1,_="",h=1,await O({append:!1})),ce()}const de="https://furniture-store-v2.b.goit.study/api/";async function pe(){return(await y.get(`${de}furnitures`,{params:{type:"popular",limit:10,page:1}})).data}function fe(e){const t=document.querySelector(".popular-list");t&&(t.innerHTML=e.map(r=>{var a;return`
    <li class="swiper-slide">
      <article class="product-card">
        <div class="product-card__image-wrap">
          <img src="${(a=r.images)==null?void 0:a[0]}" alt="${r.name}" loading="lazy" class="product-card__image"/>
        </div>

        <div class="product-card__content">
          <h3 class="product-card__title">${r.name}</h3>
          <div class="product-card__color">
            ${r.color.map(n=>`<div class="item-color" style="background-color:${n}"></div>`).join("")}
          </div>
          <p class="product-card__price">${r.price} грн</p>
          <button class="product-card__btn btn btn--secondary" type="button" data-id="${r._id}">Детальніше</button>
        </div>
      </article>
    </li>
  `}).join(""))}async function me(){q();try{const{furnitures:e}=await pe();if(!e||e.length===0){u("Не вдалося завантажити популярні товари");return}fe(e);const t=new T(".popular-swiper",{modules:[I,j],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots-popular",clickable:!0},navigation:{nextEl:".swiper-next-button-popular",prevEl:".swiper-prev-button-popular"}});document.querySelectorAll(".swiper-pagination-dots-popular, .swiper-next-button-popular, .swiper-prev-button-popular").forEach(a=>{a.style.display="flex"}),t.on("slideChange",()=>{const a=document.querySelector(".swiper-prev-button-popular"),n=document.querySelector(".swiper-next-button-popular");a.disabled=t.isBeginning,n.disabled=t.isEnd})}catch(e){console.error(e)}finally{E()}}function ge(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(r=>{r!==t&&(r.open=!1)})})})}y.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";y.defaults.params={limit:10,page:1};async function ye(){return(await y.get("feedbacks")).data}const P="./images/star-rating.icons.svg";function be(e){return Math.round(Number(e)*2)/2}function R(e){const t=be(e),a=[1,2,3,4,5].map(n=>t>=n?`<li><svg class="star"><use href="${P}#star-filled"></use></svg></li>`:t>=n-.5?`<li><svg class="star"><use href="${P}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${P}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${t} з 5">${a}</ul>`}function ve(e){const t=document.querySelector(".feedback-list");if(!t)return;const r=e.map(a=>{const{name:n,descr:i,rate:s}=a;return`<li class ="swiper-slide feedback-item">
    ${R(s)}
    <p class="feedback-comment">"${i}"</p>
    <p class="feedback-name">${n}</p></li>`}).join("");t.innerHTML=r}async function he(){q("Завантаження відгуків...");try{const{feedbacks:e}=await ye();if(!e||e.length===0){u("Не вдалося завантажити відгуки","error");return}ve(e);const t=new T(".feedback-swiper",{modules:[I,j],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(a=>{a.style.display="flex"}),t.on("slideChange",()=>{const a=document.querySelector(".swiper-prev-button"),n=document.querySelector(".swiper-next-button");a.disabled=t.isBeginning,n.disabled=t.isEnd})}catch(e){console.error("Помилка завантаження відгуків:",e),u("Не вдалося завантажити відгуки","error")}finally{E()}}function H(e){e&&(e.classList.remove("is-hidden"),A(),d.isOrderModalOpen=!0)}function M(e){e&&(e.classList.add("is-hidden"),w(),d.isOrderModalOpen=!1)}async function Le(e){try{const t=await te(e);if(!t||!o.furnitureModal){u("Не вдалося завантажити товар","error");return}d.selectedFurnitureId=t._id,d.selectedColor=t.color?t.color[0]:null;const r=o.furnitureModal.querySelector("[data-furniture-gallery]");r&&t.images&&t.images.length>0&&(r.innerHTML=t.images.map(m=>`
            <div class="furniture-modal__img-wrapper">
              <img src="${m}" alt="${t.name}" class="furniture-modal__img">
            </div>
          `).join(""));const a=o.furnitureModal.querySelector("[data-furniture-title]"),n=o.furnitureModal.querySelector("[data-furniture-category]"),i=o.furnitureModal.querySelector("[data-furniture-price]"),s=o.furnitureModal.querySelector("[data-furniture-rating]");s&&(s.innerHTML=R(t.rate));const l=o.furnitureModal.querySelector("[data-furniture-colors]");l&&(l.innerHTML=t.color.map((m,p)=>`
            <li class="color-item">
              <label class="color-label">
                <input
                  type="checkbox"
                  name="furniture-color"
                  value="${m}"
                  class="color-input"
                  ${p===0?"checked":""}>
                <span class="color-marker" style="background-color: ${m}"></span>
              </label>
            </li>
          `).join(""),l.onchange=m=>{const p=m.target;if(p.classList.contains("color-input")){if(!p.checked){p.checked=!0;return}l.querySelectorAll(".color-input").forEach(f=>{f.checked=f===p}),d.selectedColor=p.value}});const b=o.furnitureModal.querySelector("[data-furniture-description]"),v=o.furnitureModal.querySelector("[data-furniture-dimensions]");a&&(a.textContent=t.name),n&&(n.textContent=t.type),i&&(i.textContent=`${t.price} грн`),b&&(b.textContent=t.description),v&&(v.textContent=t.sizes),H(o.furnitureModal),A()}catch(t){console.error("Помилка завантаження товару:",t),u("Не вдалося завантажити товар","error")}}function Me(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),r=e.target.closest("[data-modal-close]"),a=e.target.hasAttribute("data-modal-backdrop"),n=e.target.closest("[data-open-order-modal]");t&&Le(t.dataset.id),(r||a)&&(M(o.furnitureModal),w()),n&&M(o.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!o.furnitureModal.classList.contains("is-hidden")&&(M(o.furnitureModal),w())})}const _e=y.create({baseURL:"https://furniture-store-v2.b.goit.study/api/",headers:{"Content-Type":"application/json"}});async function Se(e){return(await _e.post("orders",e)).data}function we(){var n;const e=o.orderForm.querySelector('[name="name"]'),t=o.orderForm.querySelector('[name="phone"]'),r=o.orderForm.querySelector("#name-error"),a=o.orderForm.querySelector("#phone-error");[e,t].forEach(i=>{i.addEventListener("input",()=>{const s=i.value.trim();if(i.name==="name"&&s&&/^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z\s]+$/.test(s)&&(i.classList.remove("input-error"),r.textContent="",r.classList.remove("active")),i.name==="phone"){const l=s.replace(/\D/g,"");/^\d{12}$/.test(l)&&(i.classList.remove("input-error"),a.textContent="",a.classList.remove("active"))}})}),document.addEventListener("click",i=>{const s=i.target.closest("[data-open-order-modal]"),l=i.target.closest("[data-modal-close]"),b=o.orderModal&&i.target===o.orderModal.querySelector("[data-modal-backdrop]");s&&H(o.orderModal),(l||b)&&M(o.orderModal)}),document.addEventListener("keydown",i=>{i.key==="Escape"&&M(o.orderModal)}),(n=o.orderForm)==null||n.addEventListener("submit",async i=>{i.preventDefault();const s=new FormData(i.currentTarget),l=s.get("phone"),b=l.replace(/\D/g,""),v=s.get("name");[e,t].forEach(f=>f.classList.remove("input-error")),[r,a].forEach(f=>{f.textContent="",f.classList.remove("active")});const m=/^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z\s]+$/;if(!v||!v.trim()||!m.test(v)){e.classList.add("input-error"),r.textContent="Тільки укр/англ букви",r.classList.add("active");return}if(!/^[\d\s]+$/.test(l)){t.classList.add("input-error"),a.textContent="Тільки цифри",a.classList.add("active");return}if(b.length!==12){t.classList.add("input-error"),a.textContent="Телефон має містити тільки 12 цифр",a.classList.add("active");return}if(!d.selectedFurnitureId||!d.selectedColor){u("Не обрано товар або колір","info");return}const p={name:v,phone:b,comment:s.get("comment")||"Без коментаря",modelId:d.selectedFurnitureId,color:d.selectedColor};try{const f=await Se(p);o.orderForm.reset(),u("Замовлення успішно надіслано","success"),M(o.orderModal)}catch{u("Помилка при відправці","error")}})}document.addEventListener("DOMContentLoaded",()=>{z(),ue(),ge(),he(),me(),Me(),we()});
//# sourceMappingURL=index.js.map
