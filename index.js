(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const t={body:document.body,menuOpenBtn:document.querySelector("[data-menu-open]"),menuCloseBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuOverlay:document.querySelector("[data-menu-overlay]"),categoriesContainer:document.querySelector("[data-categories-container]"),furnitureContainer:document.querySelector("[data-furniture-container]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackContainer:document.querySelector("[data-feedback-container]"),feedbackPrevBtn:document.querySelector("[data-feedback-prev]"),feedbackNextBtn:document.querySelector("[data-feedback-next]"),feedbackPagination:document.querySelector("[data-feedback-pagination]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalBackdrop:document.querySelector("[data-furniture-modal] [data-modal-backdrop]"),furnitureModalCloseBtn:document.querySelector("[data-furniture-modal] [data-modal-close]"),furnitureGallery:document.querySelector("[data-furniture-gallery]"),furnitureCategory:document.querySelector("[data-furniture-category]"),furnitureTitle:document.querySelector("[data-furniture-title]"),furniturePrice:document.querySelector("[data-furniture-price]"),furnitureRating:document.querySelector("[data-furniture-rating]"),furnitureColors:document.querySelector("[data-furniture-colors]"),furnitureDescription:document.querySelector("[data-furniture-description]"),furnitureDimensions:document.querySelector("[data-furniture-dimensions]"),openOrderModalBtn:document.querySelector("[data-open-order-modal]"),orderModal:document.querySelector("[data-order-modal]"),orderModalBackdrop:document.querySelector("[data-order-modal] [data-modal-backdrop]"),orderModalCloseBtn:document.querySelector("[data-order-modal] [data-modal-close]"),orderForm:document.querySelector("[data-order-form]")};function y(){document.body.classList.add("is-locked")}function g(){document.body.classList.remove("is-locked")}function h(){var a,n,o,i;const r=()=>{var c,s;(c=t.mobileMenu)==null||c.classList.remove("is-hidden"),(s=t.burger)==null||s.setAttribute("aria-expanded","true"),y()},e=()=>{var c,s;(c=t.mobileMenu)==null||c.classList.add("is-hidden"),(s=t.burger)==null||s.setAttribute("aria-expanded","false"),g()};(a=t.burger)==null||a.addEventListener("click",r),(n=t.mobileMenuClose)==null||n.addEventListener("click",e),(o=t.mobileMenu)==null||o.addEventListener("click",c=>{c.target===t.mobileMenu&&e()}),(i=t.mobileMenuLinks)==null||i.forEach(c=>c.addEventListener("click",e)),document.addEventListener("keydown",c=>{c.key==="Escape"&&e()})}function v(r=[],e="Усі"){return!Array.isArray(r)||r.length===0?'<p class="furniture__empty">Категорії не знайдено.</p>':`
    <div class="furniture__categories-list">
      ${r.map(a=>{const n=a.name??"Категорія",o=a.image??"./categories/categories_all.jpg";return`
            <button
              class="category-card ${e===n?"is-active":""}"
              type="button"
              data-category="${n==="Усі"?"":n}"
            >
              <div class="category-card__image-wrap">
                <img
                  class="category-card__image"
                  src="${o}"
                  alt="${n}"
                  loading="lazy"
                />
              </div>
              <span class="category-card__title">${n}</span>
            </button>
          `}).join("")}
    </div>
  `}function L(r){return r._id??r.id??""}function C(r){return Array.isArray(r.images)&&r.images.length>0?r.images[0]:r.image?r.image:r.img?r.img:"./images/furniture1.jpg"}function j(r){return r.name??r.model??r.title??"Меблі"}function $(r){return Array.isArray(r.colors)&&r.colors.length>0?r.colors[0]:r.color??"Не вказано"}function F(r){const e=r.price??r.currentPrice??0;return typeof e=="number"?`${e.toLocaleString("uk-UA")} грн`:`${e} грн`}function A(r=[]){return!Array.isArray(r)||r.length===0?`
      <p class="furniture__empty">
        За вашим запитом меблів не знайдено.
      </p>
    `:r.map(e=>{const a=L(e),n=C(e),o=j(e),i=$(e),c=F(e);return`
        <article class="product-card">
          <div class="product-card__image-wrap">
            <img
              class="product-card__image"
              src="${n}"
              alt="${o}"
              loading="lazy"
            />
          </div>

          <div class="product-card__content">
            <h3 class="product-card__title">${o}</h3>
            <p class="product-card__color">Колір: ${i}</p>
            <p class="product-card__price">${c}</p>

            <button
              class="product-card__btn btn btn--primary"
              type="button"
              data-furniture-details
              data-id="${a}"
            >
              Детальніше
            </button>
          </div>
        </article>
      `}).join("")}const E=[{name:"Всі товари",image:"./categories/categories_all.jpg"},{name:"Мякі меблі",image:"./categories/categories1.jpg"},{name:"Шафи та системи зберігання",image:"./categories/categories2.jpg"},{name:"Ліжка та матраци",image:"./categories/categories3.jpg"},{name:"Столи",image:"./categories/categories4.jpg"},{name:"Стільці та табурети",image:"./categories/categories5.jpg"},{name:"Кухні",image:"./categories/categories6.jpg"},{name:"Меблі для дитячої",image:"./categories/categories7.jpg"},{name:"Меблі для офісу",image:"./categories/categories8.jpg"},{name:"Меблі для передпокою",image:"./categories/categories9.jpg"},{name:"Меблі для ванної кімнати",image:"./categories/categories10.jpg"},{name:"Садові та вуличні меблі",image:"./categories/categories11.jpg"},{name:"Декор та аксесуари",image:"./categories/categories12.jpg"}],O=[{_id:"1",name:"Сучасний диван",price:12500,colors:["Бежевий"],images:["./images/furniture1.jpg"]},{_id:"2",name:"Деревʼяний стілець",price:3200,colors:["Горіх"],images:["./images/furniture2.jpg"]},{_id:"3",name:"Журнальний столик",price:5400,colors:["Дуб"],images:["./images/furniture3.jpg"]},{_id:"4",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture4.jpg"]},{_id:"5",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture5.jpg"]},{_id:"6",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture6.jpg"]},{_id:"7",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture7.jpg"]},{_id:"8",name:"М’яке ліжко",price:18900,colors:["Сірий"],images:["./images/furniture8.jpg"]}];function B(){t.categoriesContainer&&(t.categoriesContainer.innerHTML=v(E)),t.furnitureContainer&&(t.furnitureContainer.innerHTML=A(O))}function w(){const r=document.querySelectorAll(".faq__item");r.forEach(e=>{e.addEventListener("toggle",()=>{e.open&&r.forEach(a=>{a!==e&&(a.open=!1)})})})}const I=Array.from({length:6},(r,e)=>({id:e+1,author:["Ірина","Олександр","Марія","Тетяна","Андрій","Світлана"][e],rating:4+(e%2?.5:0),text:"Дуже сподобалась якість меблів, сервіс і швидка доставка. Будемо замовляти ще."}));async function P(){return Promise.resolve(I)}function D(r=5){const e=Math.round(Number(r));return`<div class="stars" aria-label="Рейтинг ${e} з 5">${"★".repeat(e)}${"☆".repeat(5-e)}</div>`}function T(r=[]){return r.map(e=>`
        <li>
          <article class="feedback-card">
            <div class="feedback-card__body">
              <p class="feedback-card__author">${e.author}</p>
              ${D(e.rating)}
              <p class="feedback-card__text">${e.text}</p>
            </div>
          </article>
        </li>
      `).join("")}let u=null;function m(r="Щось пішло не так"){u&&u.remove(),u=document.createElement("div"),u.className="toast",u.textContent=r,document.body.append(u),setTimeout(()=>{u==null||u.remove(),u=null},2500)}async function x(){if(t.feedbackList)try{const r=await P();t.feedbackList.innerHTML=T(r)}catch{m("Не вдалося завантажити відгуки")}}const _=["all","sofas","chairs","tables","beds"],H=Array.from({length:12},(r,e)=>({id:e+1,name:`Модель ${e+1}`,category:_[e%(_.length-1)+1],color:["Горіх","Бежевий","Графіт"][e%3],price:`${12e3+e*850} грн`,rating:(4+e%10/10).toFixed(1),description:"Комфортні сучасні меблі для щоденного використання.",sizes:"180 x 90 x 85 см",colors:["Бежевий","Графіт","Коричневий"]}));async function N(r){const e=H.find(a=>String(a.id)===String(r));return Promise.resolve(e)}const f={currentCategory:"",page:1,limit:8,totalItems:0,categories:[],furnitureItems:[],feedbackItems:[],selectedFurnitureId:null,selectedFurnitureData:null,selectedColor:null,isMobileMenuOpen:!1,isFurnitureModalOpen:!1,isOrderModalOpen:!1};function k(r){r&&(r.classList.remove("is-hidden"),y())}function d(r){r&&(r.classList.add("is-hidden"),g())}async function z(r){const e=await N(r);if(!e||!t.furnitureModal)return;f.selectedFurnitureId=e._id,f.selectedColor=e.color?e.color[0]:null;const a=t.furnitureModal.querySelector("[data-furniture-gallery]");a&&e.images&&e.images.length>0&&(a.innerHTML=e.images.map(p=>`
      <div class="furniture-modal__img-wrapper">
        <img src="${p}" alt="${e.name}" class="furniture-modal__img">
      </div>
    `).join(""));const n=t.furnitureModal.querySelector("[data-furniture-title]"),o=t.furnitureModal.querySelector("[data-furniture-category]"),i=t.furnitureModal.querySelector("[data-furniture-price]"),c=t.furnitureModal.querySelector("[data-furniture-rating]"),s=t.furnitureModal.querySelector("[data-furniture-colors]");if(s){const p=["#000000","#757575","#D3D3D3"],S=Array.isArray(e.color)&&e.color.length>0?e.color:p;s.innerHTML=S.map((l,q)=>`
        <li class="color-item">
          <label class="color-label">
            <input
              type="radio"
              name="furniture-color"
              value="${l}"
              class="color-input"
              ${q===0?"checked":""}>
            <span class="color-marker" style="background-color: ${l}"></span>
          </label>
        </li>
      `).join(""),s.onchange=l=>{l.target.classList.contains("color-input")&&(f.selectedColor=l.target.value)}}const b=t.furnitureModal.querySelector("[data-furniture-description]"),M=t.furnitureModal.querySelector("[data-furniture-dimensions]");a&&(a.textContent=e.images),n&&(n.textContent=e.name),o&&(o.textContent=e.category.name),i&&(i.textContent=`${e.price} грн`),c&&(c.textContent=e.rate),b&&(b.textContent=e.description),M&&(M.textContent=e.sizes),k(t.furnitureModal),y()}function G(){document.addEventListener("click",r=>{const e=r.target.closest("[data-id]"),a=r.target.closest("[data-modal-close]"),n=r.target.hasAttribute("data-modal-backdrop"),o=r.target.closest("[data-open-order-modal]");e&&z(e.dataset.id),(a||n)&&(d(t.furnitureModal),g()),o&&d(t.furnitureModal)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(d(t.furnitureModal),g())})}async function K(r){return console.log("Order payload:",r),Promise.resolve({success:!0,message:"Замовлення успішно надіслано"})}function R(){var r;document.addEventListener("click",e=>{const a=e.target.closest("[data-open-order-modal]"),n=e.target.closest("[data-close-order-modal]"),o=t.orderModal&&e.target===t.orderModal.querySelector("[data-modal-backdrop]");a&&k(t.orderModal),(n||o)&&d(t.orderModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&d(t.orderModal)}),(r=t.orderForm)==null||r.addEventListener("submit",async e=>{e.preventDefault();const a=new FormData(e.currentTarget),n={name:a.get("name"),phone:a.get("phone"),comment:a.get("comment"),furnitureId:f.selectedFurnitureId,color:f.selectedColor};if(!n.name||!n.phone){m("Заповни обовʼязкові поля: імʼя та телефон");return}if(!n.furnitureId||!n.color){m("Не обрано товар або колір");return}try{await K(n),m("Замовлення успішно надіслано"),e.currentTarget.reset(),d(t.orderModal)}catch{m("Помилка при відправці")}})}document.addEventListener("DOMContentLoaded",()=>{h(),B(),w(),x(),G(),R()});
//# sourceMappingURL=index.js.map
