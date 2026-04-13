import{a as b,S as z,N as V,P as U}from"./assets/vendor-C6jGGvC7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const n={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),furniturePaginationWrap:document.querySelector("[data-furniture-pagination-wrap]"),furniturePagination:document.querySelector("[data-furniture-pagination]"),furniturePrevBtn:document.querySelector("[data-furniture-prev]"),furnitureNextBtn:document.querySelector("[data-furniture-next]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function j(){document.body.classList.add("no-scroll")}function E(){document.body.classList.remove("no-scroll")}const p={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function G(e){p.isMobileMenuOpen=e}function Y(){var e,t;n.mobileMenu&&(n.mobileMenu.classList.remove("is-hidden"),n.mobileMenu.classList.add("is-open"),(e=n.menuOpenBtn)==null||e.setAttribute("aria-expanded","true"),j(),G(!0),(t=n.menuOpenBtn)==null||t.classList.add("is-hidden"))}function P(){var e,t;n.mobileMenu&&(n.mobileMenu.classList.add("is-hidden"),n.mobileMenu.classList.remove("is-open"),(e=n.menuOpenBtn)==null||e.setAttribute("aria-expanded","false"),E(),G(!1),(t=n.menuOpenBtn)==null||t.classList.remove("is-hidden"))}function J(e){e.key==="Escape"&&P()}function Q(e){e.target===n.mobileMenuOverlay&&P()}function X(e){e.target.closest(".mobile-menu__link, .mobile-menu__cta")&&P()}function ee(){var e,t,r,i;(e=n.menuOpenBtn)==null||e.addEventListener("click",Y),(t=n.menuCloseBtn)==null||t.addEventListener("click",P),(r=n.mobileMenuOverlay)==null||r.addEventListener("click",Q),(i=n.mobileMenu)==null||i.addEventListener("click",X),document.addEventListener("keydown",J)}function te(e=[],t="Всі товари"){const r={"Всі товари":"./categories/categories_all.jpg","М'які меблі":"./categories/categories2.jpg","Шафи та системи зберігання":"./categories/categories3.jpg","Ліжка та матраци":"./categories/categories1.jpg",Столи:"./categories/categories4.jpg","Стільці та табурети":"./categories/categories12.jpg",Кухні:"./categories/categories11.jpg","Меблі для дитячої":"./categories/categories5.jpg","Меблі для офісу":"./categories/categories6.jpg","Меблі для передпокою":"./categories/categories7.jpg","Меблі для ванної кімнати":"./categories/categories8.jpg","Садові та вуличні меблі":"./categories/categories9.jpg","Декор та аксесуари":"./categories/categories10.jpg"};return!Array.isArray(e)||e.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`<div class="furniture__categories-list">
    ${e.map(i=>{const o=i.name??"Категорія",a=r[o]||"./categories/default.jpg";return`<button
          class="category-card ${t===o?"is-active":""}"
          type="button"
          data-category="${o==="Всі товари"?"":o}"
          data-category-id="${i._id||""}">
          
          <div class="category-card__image-wrap">
            <img
              class="category-card__image"
              src="${a}" 
              alt="${o}" 
              loading="lazy"
            />
          </div>

          <span class="category-card__title">${o}</span>
        </button>`}).join("")}
  </div>`}function re(e){return e._id??e.id??""}function ne(e){return Array.isArray(e.images)&&e.images.length>0?e.images[0]:e.image?e.image:e.img?e.img:"./images/furniture1.jpg"}function oe(e){return e.name??e.model??e.title??"Меблі"}function ae(e){let t;return Array.isArray(e.color)&&e.color.length>0?t=e.color:t=[e.color],t.map(r=>`<div class="item-color" style = "background-color:${r}"></div>`??"Не вказано").join("")}function ie(e){const t=e.price??e.currentPrice??0;return typeof t=="number"?`${t.toLocaleString("uk-UA")} грн`:`${t} грн`}function $(e=[]){return!Array.isArray(e)||e.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:e.map(t=>{const r=re(t),i=ne(t),o=oe(t),a=ae(t),s=ie(t);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${i}"
              alt="${o}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title" title="${o}">${o}</h3>
            <div class="product-card__color">
            ${a}
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
      `}).join("")}async function se(){const r="https://furniture-store-v2.b.goit.study"+"/api/categories",i=await b.get(r);return i.data.unshift({id:"all",name:"Всі товари"}),i.data}async function ce(e){const i="https://furniture-store-v2.b.goit.study"+"/api/furnitures",o={page:1,limit:8,...e};return(await b.get(i,{params:o})).data}async function ue(e){const t="https://furniture-store-v2.b.goit.study",r=`/api/furnitures/${e}`,i=t+r;return(await b.get(i)).data}let M=null;function le(){const e=document.createElement("div");return e.className="loader-backdrop is-hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
    <div class="loader-modal" role="status" aria-live="polite">
      <div class="loader-spinner"></div>
      <p class="loader-text">Завантаження...</p>
    </div>
  `,document.body.append(e),e}function C(e="Завантаження..."){M||(M=le());const t=M.querySelector(".loader-text");t&&(t.textContent=e),M.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function B(){M&&(M.classList.add("is-hidden"),document.body.classList.remove("no-scroll"))}let u=null,O=null;const D={error:{title:"Помилка",icon:"✕"},success:{title:"Успішно",icon:"✓"},info:{title:"Інформація",icon:"i"}};function d(e="Щось пішло не так",t="error"){const r=D[t]?t:"error",{title:i,icon:o}=D[r];u&&(clearTimeout(O),T(u)),u=document.createElement("div"),u.className=`app-toast app-toast--${r}`,u.setAttribute("role","alert"),u.setAttribute("aria-live","assertive"),u.innerHTML=`
    <div class="app-toast__icon">${o}</div>
    <div class="app-toast__content">
      <p class="app-toast__title">${i}</p>
      <p class="app-toast__message">${e}</p>
    </div>
    <button class="app-toast__close" type="button" aria-label="Закрити повідомлення">
      ×
    </button>
  `,document.body.append(u),requestAnimationFrame(()=>{u.classList.add("is-visible")});const a=u.querySelector(".app-toast__close");a==null||a.addEventListener("click",()=>{clearTimeout(O),T(u),u=null}),O=setTimeout(()=>{u&&(T(u),u=null)},4e3)}function T(e){e.classList.remove("is-visible"),e.classList.add("is-hiding"),setTimeout(()=>{e.remove()},300)}const de=768,fe=4,pe=8;let c=1,S="",l=1,I=[],F=_(),R=!1,H=null;function _(){return window.innerWidth<de?"mobile":"desktop"}function W(){return _()==="mobile"?fe:pe}function me(){var e;(e=n.loadMoreBtn)==null||e.classList.remove("is-hidden")}function q(){var e;(e=n.loadMoreBtn)==null||e.classList.add("is-hidden")}function ge(){var e;(e=n.furniturePaginationWrap)==null||e.classList.remove("is-hidden")}function N(){var e;(e=n.furniturePaginationWrap)==null||e.classList.add("is-hidden")}function ye(){const e={page:c,limit:W()};return S&&(e.category=S),e}function be(e){const t=Number(e==null?void 0:e.totalItems)||0,r=Number(e==null?void 0:e.limit)||W();l=t>0?Math.ceil(t/r):0}function ve(){n.furniturePrevBtn&&(n.furniturePrevBtn.disabled=c<=1),n.furnitureNextBtn&&(n.furnitureNextBtn.disabled=c>=l)}function he(){if(l<=1)return[];const e=[];for(let t=1;t<=l;t+=1){const r=t===1,i=t===l,o=Math.abs(t-c)<=1,a=c<=3&&t<=3,s=c>=l-2&&t>=l-2;r||i||o||a||s?e.push(t):e[e.length-1]!=="..."&&e.push("...")}return e}function Le(){if(!n.furniturePagination)return;const e=he();n.furniturePagination.innerHTML=e.map(t=>{if(t==="...")return'<span class="furniture-pagination__ellipsis">...</span>';const r=t===c;return`
        <button
          class="furniture-pagination__page ${r?"is-active":""}"
          type="button"
          data-page="${t}"
          aria-label="Сторінка ${t}"
          ${r?'aria-current="page"':""}
        >
          ${t}
        </button>
      `}).join("")}function x(){if(_()==="mobile"){N(),l<=1||c>=l?q():me();return}if(q(),l<=1){N();return}ge(),ve(),Le()}function k(){const e=n.furnitureContainer,t=e==null?void 0:e.querySelector(".product-card"),r=document.querySelector(".header"),i=t||e;if(!i)return;const o=r?r.offsetHeight:0,a=i.getBoundingClientRect().top+window.pageYOffset-o-24;window.scrollTo({top:a,behavior:"smooth"})}async function L({append:e=!1}={}){if(n.furnitureContainer)try{C(e?"Завантажуємо ще...":"Завантаження меблів...");const t=await ce(ye()),r=Array.isArray(t==null?void 0:t.furnitures)?t.furnitures:[];if(be(t),e?r.length>0&&n.furnitureContainer.insertAdjacentHTML("beforeend",$(r)):n.furnitureContainer.innerHTML=$(r),r.length===0){e?d("Більше товарів немає","info"):(n.furnitureContainer.innerHTML=$([]),d(S?"Товарів у цій категорії немає":"Товарів поки немає","info")),x();return}x()}catch(t){console.error("Помилка завантаження меблів:",t),e&&c>1&&(c-=1),x(),d("Помилка завантаження товарів","error")}finally{B()}}function Me(){I.forEach(e=>{e.addEventListener("click",async t=>{t.preventDefault(),I.forEach(r=>r.classList.remove("is-active")),e.classList.add("is-active"),S=e.dataset.categoryId||"",c=1,await L({append:!1}),k()})})}function we(){n.loadMoreBtn&&n.loadMoreBtn.addEventListener("click",async()=>{if(c>=l){q();return}c+=1,await L({append:!0})})}function Se(){var e,t,r;(e=n.furniturePrevBtn)==null||e.addEventListener("click",async()=>{c<=1||(c-=1,await L({append:!1}),k())}),(t=n.furnitureNextBtn)==null||t.addEventListener("click",async()=>{c>=l||(c+=1,await L({append:!1}),k())}),(r=n.furniturePagination)==null||r.addEventListener("click",async i=>{const o=i.target.closest("[data-page]");if(!o)return;const a=Number(o.dataset.page);!a||a===c||(c=a,await L({append:!1}),k())})}function _e(){window.addEventListener("resize",()=>{clearTimeout(H),H=setTimeout(async()=>{const e=_();e!==F&&(F=e,c=1,await L({append:!1}))},200)})}function ke(){R||(we(),Se(),_e(),R=!0)}async function Ee(){if(n.categoriesContainer)try{C("Завантаження категорій...");const e=await se();n.categoriesContainer.innerHTML=te(e,"Всі товари"),I=n.categoriesContainer.querySelectorAll(".category-card"),Me()}catch(e){console.error("Помилка завантаження категорій:",e),d("Не вдалося завантажити категорії","error")}finally{B()}}async function qe(){q(),N(),ke(),await Ee(),c=1,S="",l=1,F=_(),await L({append:!1})}const Pe="https://furniture-store-v2.b.goit.study/api/";async function Ce(){return(await b.get(`${Pe}furnitures`,{params:{type:"popular",limit:10,page:1}})).data}function Be(e){const t=document.querySelector(".popular-list");t&&(t.innerHTML=e.map(r=>{var i;return`
    <li class="swiper-slide">
      <article class="product-card">
        <div class="product-card__image-wrap">
          <img src="${(i=r.images)==null?void 0:i[0]}" alt="${r.name}" loading="lazy" class="product-card__image"/>
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
  `}).join(""))}async function $e(){C();try{const{furnitures:e}=await Ce();if(!e||e.length===0){d("Не вдалося завантажити популярні товари","error");return}Be(e);const t=new z(".popular-swiper",{modules:[V,U],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots-popular",clickable:!0},navigation:{nextEl:".swiper-next-button-popular",prevEl:".swiper-prev-button-popular"}});document.querySelectorAll(".swiper-pagination-dots-popular, .swiper-next-button-popular, .swiper-prev-button-popular").forEach(s=>{s.style.display="flex"});const i=document.querySelector(".swiper-prev-button-popular"),o=document.querySelector(".swiper-next-button-popular"),a=()=>{i&&(i.disabled=t.isBeginning),o&&(o.disabled=t.isEnd)};a(),t.on("slideChange",a),t.on("breakpoint",a),t.on("resize",a)}catch(e){console.error(e),d("Не вдалося завантажити популярні товари","error")}finally{B()}}function Oe(){const e=document.querySelectorAll(".faq__item");e.forEach(t=>{t.addEventListener("toggle",()=>{t.open&&e.forEach(r=>{r!==t&&(r.open=!1)})})})}b.defaults.baseURL="https://furniture-store-v2.b.goit.study/api/";b.defaults.params={limit:10,page:1};async function Te(){return(await b.get("feedbacks")).data}const A="./images/star-rating.icons.svg";function xe(e){return Math.round(Number(e)*2)/2}function K(e){const t=xe(e),i=[1,2,3,4,5].map(o=>t>=o?`<li><svg class="star"><use href="${A}#star-filled"></use></svg></li>`:t>=o-.5?`<li><svg class="star"><use href="${A}#star-half"></use></svg></li>`:`<li><svg class="star"><use href="${A}#star-empty"></use></svg></li>`).join("");return`<ul class="star-container" aria-label="Рейтинг ${t} з 5">${i}</ul>`}function Ae(e){const t=document.querySelector(".feedback-list");if(!t)return;const r=e.map(i=>{const{name:o,descr:a,rate:s}=i;return`<li class ="swiper-slide feedback-item">
    ${K(s)}
    <p class="feedback-comment">"${a}"</p>
    <p class="feedback-name">${o}</p></li>`}).join("");t.innerHTML=r}async function Ie(){C("Завантаження відгуків...");try{const{feedbacks:e}=await Te();if(!e||e.length===0){d("Не вдалося завантажити відгуки","error");return}Ae(e);const t=new z(".feedback-swiper",{modules:[V,U],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:24,centeredSlides:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,centeredSlides:!1},1440:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1}},pagination:{el:".swiper-pagination-dots",clickable:!0},navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"}});document.querySelectorAll(".swiper-pagination-dots, .swiper-next-button, .swiper-prev-button").forEach(i=>{i.style.display="flex"}),t.on("slideChange",()=>{const i=document.querySelector(".swiper-prev-button"),o=document.querySelector(".swiper-next-button");i.disabled=t.isBeginning,o.disabled=t.isEnd})}catch{d("Не вдалося завантажити відгуки","error")}finally{B()}}function Z(e){e&&(e.classList.remove("is-hidden"),j(),p.isOrderModalOpen=!0)}function w(e){e&&(e.classList.add("is-hidden"),E(),p.isOrderModalOpen=!1)}async function Fe(e){try{const t=await ue(e);if(!t||!n.furnitureModal){d("Не вдалося завантажити товар","error");return}p.selectedFurnitureId=t._id,p.selectedColor=t.color?t.color[0]:null;const r=n.furnitureModal.querySelector("[data-furniture-gallery]");r&&t.images&&t.images.length>0&&(r.innerHTML=t.images.map(y=>`
            <div class="furniture-modal__img-wrapper">
              <img src="${y}" alt="${t.name}" class="furniture-modal__img">
            </div>
          `).join(""));const i=n.furnitureModal.querySelector("[data-furniture-title]"),o=n.furnitureModal.querySelector("[data-furniture-category]"),a=n.furnitureModal.querySelector("[data-furniture-price]"),s=n.furnitureModal.querySelector("[data-furniture-rating]");s&&(s.innerHTML=K(t.rate));const f=n.furnitureModal.querySelector("[data-furniture-colors]");f&&(f.innerHTML=t.color.map((y,m)=>`
            <li class="color-item">
              <label class="color-label">
                <input
                  type="checkbox"
                  name="furniture-color"
                  value="${y}"
                  class="color-input"
                  ${m===0?"checked":""}>
                <span class="color-marker" style="background-color: ${y}"></span>
              </label>
            </li>
          `).join(""),f.onchange=y=>{const m=y.target;if(m.classList.contains("color-input")){if(!m.checked){m.checked=!0;return}f.querySelectorAll(".color-input").forEach(g=>{g.checked=g===m}),p.selectedColor=m.value}});const v=n.furnitureModal.querySelector("[data-furniture-description]"),h=n.furnitureModal.querySelector("[data-furniture-dimensions]");i&&(i.textContent=t.name),o&&(o.textContent=t.type),a&&(a.textContent=`${t.price} грн`),v&&(v.textContent=t.description),h&&(h.textContent=t.sizes),Z(n.furnitureModal),j()}catch(t){console.error("Помилка завантаження товару:",t),d("Не вдалося завантажити товар","error")}}function Ne(){document.addEventListener("click",e=>{const t=e.target.closest("[data-id]"),r=e.target.closest("[data-modal-close]"),i=e.target.hasAttribute("data-modal-backdrop"),o=e.target.closest("[data-open-order-modal]");t&&Fe(t.dataset.id),(r||i)&&(w(n.furnitureModal),E()),o&&w(n.furnitureModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!n.furnitureModal.classList.contains("is-hidden")&&(w(n.furnitureModal),E())})}const je=b.create({baseURL:"https://furniture-store-v2.b.goit.study/api/",headers:{"Content-Type":"application/json"}});async function De(e){return(await je.post("orders",e)).data}function Re(){var o;const e=n.orderForm.querySelector('[name="name"]'),t=n.orderForm.querySelector('[name="phone"]'),r=n.orderForm.querySelector("#name-error"),i=n.orderForm.querySelector("#phone-error");[e,t].forEach(a=>{a.addEventListener("input",()=>{const s=a.value.trim();if(a.name==="name"&&s&&/^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z\s]+$/.test(s)&&(a.classList.remove("input-error"),r.textContent="",r.classList.remove("active")),a.name==="phone"){const f=s.replace(/\D/g,"");/^\d{12}$/.test(f)&&(a.classList.remove("input-error"),i.textContent="",i.classList.remove("active"))}})}),document.addEventListener("click",a=>{const s=a.target.closest("[data-open-order-modal]"),f=a.target.closest("[data-modal-close]"),v=n.orderModal&&a.target===n.orderModal.querySelector("[data-modal-backdrop]");s&&Z(n.orderModal),(f||v)&&w(n.orderModal)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&w(n.orderModal)}),(o=n.orderForm)==null||o.addEventListener("submit",async a=>{a.preventDefault();const s=new FormData(a.currentTarget),f=s.get("phone"),v=f.replace(/\D/g,""),h=s.get("name");[e,t].forEach(g=>g.classList.remove("input-error")),[r,i].forEach(g=>{g.textContent="",g.classList.remove("active")});const y=/^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z\s]+$/;if(!h||!h.trim()||!y.test(h)){e.classList.add("input-error"),r.textContent="Тільки укр/англ букви",r.classList.add("active");return}if(!/^[\d\s]+$/.test(f)){t.classList.add("input-error"),i.textContent="Тільки цифри",i.classList.add("active");return}if(v.length!==12){t.classList.add("input-error"),i.textContent="Телефон має містити тільки 12 цифр",i.classList.add("active");return}if(!p.selectedFurnitureId||!p.selectedColor){d("Не обрано товар або колір","info");return}const m={name:h,phone:v,comment:s.get("comment")||"Без коментаря",modelId:p.selectedFurnitureId,color:p.selectedColor};try{const g=await De(m);n.orderForm.reset(),d("Замовлення успішно надіслано","success"),w(n.orderModal)}catch{d("Помилка при відправці","error")}})}document.addEventListener("DOMContentLoaded",()=>{ee(),qe(),Oe(),Ie(),$e(),Ne(),Re()});
//# sourceMappingURL=index.js.map
