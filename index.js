(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const r={body:document.body,burger:document.querySelector(".burger"),mobileMenu:document.querySelector("[data-menu]"),mobileMenuClose:document.querySelector(".mobile-menu__close"),mobileMenuLinks:document.querySelectorAll(".mobile-menu__link"),categoriesList:document.querySelector("[data-categories]"),furnitureList:document.querySelector("[data-furniture-list]"),loadMoreBtn:document.querySelector("[data-load-more]"),feedbackList:document.querySelector("[data-feedback-list]"),furnitureModal:document.querySelector("[data-furniture-modal]"),furnitureModalContent:document.querySelector("[data-furniture-modal-content]"),orderModal:document.querySelector("[data-order-modal]"),orderForm:document.querySelector("[data-order-form]")};function L(){document.body.classList.add("is-locked")}function h(){document.body.classList.remove("is-locked")}function M(){var n,a,o,i;const t=()=>{var c,l;(c=r.mobileMenu)==null||c.classList.remove("is-hidden"),(l=r.burger)==null||l.setAttribute("aria-expanded","true"),L()},e=()=>{var c,l;(c=r.mobileMenu)==null||c.classList.add("is-hidden"),(l=r.burger)==null||l.setAttribute("aria-expanded","false"),h()};(n=r.burger)==null||n.addEventListener("click",t),(a=r.mobileMenuClose)==null||a.addEventListener("click",e),(o=r.mobileMenu)==null||o.addEventListener("click",c=>{c.target===r.mobileMenu&&e()}),(i=r.mobileMenuLinks)==null||i.forEach(c=>c.addEventListener("click",e)),document.addEventListener("keydown",c=>{c.key==="Escape"&&e()})}const p=["all","sofas","chairs","tables","beds"],y=Array.from({length:12},(t,e)=>({id:e+1,name:`Модель ${e+1}`,category:p[e%(p.length-1)+1],color:["Горіх","Бежевий","Графіт"][e%3],price:`${12e3+e*850} грн`,rating:(4+e%10/10).toFixed(1),description:"Комфортні сучасні меблі для щоденного використання.",sizes:"180 x 90 x 85 см",colors:["Бежевий","Графіт","Коричневий"]}));async function _(){return Promise.resolve(p)}async function k({category:t="all",page:e=1,limit:n=8}={}){const a=t==="all"?y:y.filter(c=>c.category===t),o=(e-1)*n,i=o+n;return Promise.resolve({items:a.slice(o,i),total:a.length})}async function E(t){const e=y.find(n=>String(n.id)===String(t));return Promise.resolve(e)}function S(t=[]){return t.map(e=>`
        <li>
          <button class="category-btn ${e==="all"?"is-active":""}" type="button" data-category="${e}">
            ${e}
          </button>
        </li>
      `).join("")}function b(t=[]){return t.map(e=>`
        <li>
          <article class="furniture-card">
            <div class="furniture-card__image">Furniture image</div>
            <div class="furniture-card__body">
              <h3 class="furniture-card__title">${e.name}</h3>
              <p class="furniture-card__meta">Категорія: ${e.category}</p>
              <p class="furniture-card__meta">Колір: ${e.color}</p>
              <p class="furniture-card__price">${e.price}</p>
              <div class="furniture-card__actions">
                <button class="btn btn--primary" type="button" data-furniture-id="${e.id}">
                  Детальніше
                </button>
              </div>
            </div>
          </article>
        </li>
      `).join("")}const s={categories:[],furniture:[],feedbacks:[],activeCategory:"all",page:1,limit:8,selectedFurnitureId:null,selectedColor:null};let u=null;function $(t="Завантаження..."){u||(u=document.createElement("div"),u.className="loader",document.body.append(u)),u.textContent=t,u.classList.remove("is-hidden")}function F(){u&&u.classList.add("is-hidden")}let d=null;function g(t="Щось пішло не так"){d&&d.remove(),d=document.createElement("div"),d.className="toast",d.textContent=t,document.body.append(d),setTimeout(()=>{d==null||d.remove(),d=null},2500)}async function q(){const t=await _();s.categories=t,r.categoriesList.innerHTML=S(t)}async function m({append:t=!1}={}){var e,n;$();try{const{items:a,total:o}=await k({category:s.activeCategory,page:s.page,limit:s.limit});r.furnitureList.innerHTML=t?r.furnitureList.innerHTML+b(a):b(a),s.page*s.limit>=o?(e=r.loadMoreBtn)==null||e.classList.add("is-hidden"):(n=r.loadMoreBtn)==null||n.classList.remove("is-hidden")}catch{g("Не вдалося завантажити меблі")}finally{F()}}async function w(){var t;!r.categoriesList||!r.furnitureList||(await q(),await m(),r.categoriesList.addEventListener("click",async e=>{const n=e.target.closest("[data-category]");n&&(s.activeCategory=n.dataset.category,s.page=1,r.categoriesList.querySelectorAll(".category-btn").forEach(a=>a.classList.toggle("is-active",a===n)),await m())}),(t=r.loadMoreBtn)==null||t.addEventListener("click",async()=>{s.page+=1,await m({append:!0})}))}function C(){const t=document.querySelectorAll(".faq__item");t.forEach(e=>{e.addEventListener("toggle",()=>{e.open&&t.forEach(n=>{n!==e&&(n.open=!1)})})})}const A=Array.from({length:6},(t,e)=>({id:e+1,author:["Ірина","Олександр","Марія","Тетяна","Андрій","Світлана"][e],rating:4+(e%2?.5:0),text:"Дуже сподобалась якість меблів, сервіс і швидка доставка. Будемо замовляти ще."}));async function I(){return Promise.resolve(A)}function O(t=5){const e=Math.round(Number(t));return`<div class="stars" aria-label="Рейтинг ${e} з 5">${"★".repeat(e)}${"☆".repeat(5-e)}</div>`}function B(t=[]){return t.map(e=>`
        <li>
          <article class="feedback-card">
            <div class="feedback-card__body">
              <p class="feedback-card__author">${e.author}</p>
              ${O(e.rating)}
              <p class="feedback-card__text">${e.text}</p>
            </div>
          </article>
        </li>
      `).join("")}async function P(){if(r.feedbackList)try{const t=await I();r.feedbackList.innerHTML=B(t)}catch{g("Не вдалося завантажити відгуки")}}function v(t){t&&(t.classList.remove("is-hidden"),L())}function f(t){t&&(t.classList.add("is-hidden"),h())}async function T(t){const e=await E(t);!e||!r.furnitureModalContent||(s.selectedFurnitureId=e.id,s.selectedColor=e.colors[0]??null,r.furnitureModalContent.innerHTML=`
    <h2 class="modal__title">${e.name}</h2>
    <p class="furniture-card__meta">Категорія: ${e.category}</p>
    <p class="furniture-card__meta">Опис: ${e.description}</p>
    <p class="furniture-card__meta">Розміри: ${e.sizes}</p>
    <p class="furniture-card__price">${e.price}</p>
    <p class="furniture-card__meta">Доступні кольори: ${e.colors.join(", ")}</p>
    <button class="btn btn--primary" type="button" data-open-order-modal>
      Перейти до замовлення
    </button>
  `,v(r.furnitureModal))}function H(){document.addEventListener("click",t=>{const e=t.target.closest("[data-furniture-id]"),n=t.target.closest("[data-close-furniture-modal]");e&&T(e.dataset.furnitureId),n&&f(r.furnitureModal)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&f(r.furnitureModal)})}async function N(t){return console.log("Order payload:",t),Promise.resolve({success:!0,message:"Замовлення успішно надіслано"})}function D(){var t;document.addEventListener("click",e=>{const n=e.target.closest("[data-open-order-modal]"),a=e.target.closest("[data-close-order-modal]");n&&v(r.orderModal),a&&f(r.orderModal)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&f(r.orderModal)}),(t=r.orderForm)==null||t.addEventListener("submit",async e=>{e.preventDefault();const n=new FormData(e.currentTarget),a={name:n.get("name"),phone:n.get("phone"),comment:n.get("comment"),furnitureId:s.selectedFurnitureId,color:s.selectedColor};await N(a),g("Замовлення успішно надіслано"),e.currentTarget.reset(),f(r.orderModal)})}function j(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",n=>{const a=e.getAttribute("href");if(!a||a==="#")return;const o=document.querySelector(a);o&&(n.preventDefault(),o.scrollIntoView({behavior:"smooth",block:"start"}))})})}function x(){M(),w(),C(),P(),H(),D(),j()}document.addEventListener("DOMContentLoaded",x);
//# sourceMappingURL=index.js.map
