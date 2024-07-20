(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var Le=/([:*])(\w+)/g,Ae="([^/]+)",Oe=/\*/g,Se="?(?:.*)",we=/\/\?/g,Re="/?([^/]+|)",ke="(?:/^|^)",$e="";function ee(e){return e===void 0&&(e="/"),M()?location.pathname+location.search+location.hash:e}function f(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function k(e){return typeof e=="string"}function Fe(e){return typeof e=="function"}function $(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function He(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(i,n,r){return i===null&&(i={}),i[t[r]]=decodeURIComponent(n),i},null)}function F(e){var t=f(e).split(/\?(.*)?$/);return[f(t[0]),t.slice(1).join("")]}function N(e){for(var t={},i=e.split("&"),n=0;n<i.length;n++){var r=i[n].split("=");if(r[0]!==""){var o=decodeURIComponent(r[0]);t[o]?(Array.isArray(t[o])||(t[o]=[t[o]]),t[o].push(decodeURIComponent(r[1]||""))):t[o]=decodeURIComponent(r[1]||"")}}return t}function te(e,t){var i=F(f(e.currentLocationPath)),n=i[0],r=i[1],o=r===""?null:N(r),l=[],v;if(k(t.path)){if(v=ke+f(t.path).replace(Le,function(b,_,E){return l.push(E),Ae}).replace(Oe,Se).replace(we,Re)+"$",f(t.path)===""&&f(n)==="")return{url:n,queryString:r,hashString:$(e.to),route:t,data:null,params:o}}else v=t.path;var p=new RegExp(v,$e),h=n.match(p);if(h){var y=k(t.path)?He(h,l):h.groups?h.groups:h.slice(1);return{url:f(n.replace(new RegExp("^"+e.instance.root),"")),queryString:r,hashString:$(e.to),route:t,data:y,params:o}}return!1}function ie(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function P(e,t){return typeof e[t]>"u"||e[t]===!0}function Ce(e){if(!e)return{};var t=e.split(","),i={},n;return t.forEach(function(r){var o=r.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":i.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=o[1];break;case"resolveOptionsHash":n||(n={}),n.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":i[o[0]]=o[1]==="true";break}}),n&&(i.resolveOptions=n),i}function M(){return typeof window<"u"}function Te(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(i){return i}).forEach(function(i){["before","after","already","leave"].forEach(function(n){i[n]&&(t[n]||(t[n]=[]),t[n].push(i[n]))})}),t}function m(e,t,i){var n=t||{},r=0;(function o(){if(!e[r]){i&&i(n);return}Array.isArray(e[r])?(e.splice.apply(e,[r,1].concat(e[r][0](n)?e[r][1]:e[r][2])),o()):e[r](n,function(l){typeof l>"u"||l===!0?(r+=1,o()):i&&i(n)})})()}m.if=function(e,t,i){return Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]),[e,t,i]};function Y(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=ee(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function H(e,t){for(var i=0;i<e.instance.routes.length;i++){var n=e.instance.routes[i],r=te(e,n);if(r&&(e.matches||(e.matches=[]),e.matches.push(r),e.resolveOptions.strategy==="ONE")){t();return}}t()}function Ie(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function qe(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var X=M(),Be=ie();function Ne(e,t){if(P(e.navigateOptions,"updateBrowserURL")){var i=("/"+e.to).replace(/\/\//g,"/"),n=X&&e.resolveOptions&&e.resolveOptions.hash===!0;Be?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",n?"#"+i:i),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!n){var r=location.hash;location.hash="",location.hash=r}e.instance.__freezeListening=!1},1))):X&&(window.location.href=e.to)}t()}function ne(e,t){var i=e.instance;if(!i.lastResolved()){t();return}m(i.lastResolved().map(function(n){return function(r,o){if(!n.route.hooks||!n.route.hooks.leave){o();return}var l=!1,v=e.instance.matchLocation(n.route.path,e.currentLocationPath,!1);if(n.route.path!=="*")l=!v;else{var p=e.matches?e.matches.find(function(h){return n.route.path===h.route.path}):!1;l=!p}if(P(e.navigateOptions,"callHooks")&&l){m(n.route.hooks.leave.map(function(h){return function(y,b){return h(function(_){_===!1?e.instance.__markAsClean(e):b()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return t()})}function Me(e,t){e.match.route.hooks&&e.match.route.hooks.before&&P(e.navigateOptions,"callHooks")?m(e.match.route.hooks.before.map(function(i){return function(r,o){return i(function(l){l===!1?e.instance.__markAsClean(e):o()},e.match)}}).concat([function(){return t()}])):t()}function Ue(e,t){P(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function je(e,t){e.match.route.hooks&&e.match.route.hooks.after&&P(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(i){return i(e.match)}),t()}function De(e,t){var i=e.instance.lastResolved();if(i&&i[0]&&i[0].route===e.match.route&&i[0].url===e.match.url&&i[0].queryString===e.match.queryString){i.forEach(function(n){n.route.hooks&&n.route.hooks.already&&P(e.navigateOptions,"callHooks")&&n.route.hooks.already.forEach(function(r){return r(e.match)})}),t(!1);return}t()}function Ge(e,t){var i=e.instance._notFoundRoute;if(i){e.notFoundHandled=!0;var n=F(e.currentLocationPath),r=n[0],o=n[1],l=$(e.to);i.path=f(r);var v={url:i.path,queryString:o,hashString:l,data:null,route:i,params:o!==""?N(o):null};e.matches=[v],e.match=v}t()}function Qe(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function We(e,t){e.instance._setCurrent(null),t()}function se(e,t){P(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var re=[De,Me,Ue,je],V=[ne,Ge,m.if(function(e){var t=e.notFoundHandled;return t},re.concat([se]),[Qe,We])];function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},T.apply(this,arguments)}function K(e,t){var i=0;function n(){if(i===e.matches.length){se(e,t);return}m(re,T({},e,{match:e.matches[i]}),function(){i+=1,n()})}ne(e,n)}function C(e){e.instance.__markAsClean(e)}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},I.apply(this,arguments)}var J="[data-navigo]";function ze(e,t){var i=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:J},n=this,r="/",o=null,l=[],v=!1,p,h=ie(),y=M();e?r=f(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function b(s){return s.indexOf("#")>=0&&(i.hash===!0?s=s.split("#")[1]||"/":s=s.split("#")[0]),s}function _(s){return f(r+"/"+f(s))}function E(s,a,c,d){return s=k(s)?_(s):s,{name:d||f(String(s)),path:s,handler:a,hooks:Te(c)}}function ae(s,a,c){var d=this;return typeof s=="object"&&!(s instanceof RegExp)?(Object.keys(s).forEach(function(u){if(typeof s[u]=="function")d.on(u,s[u]);else{var g=s[u],A=g.uses,Pe=g.as,Ee=g.hooks;l.push(E(u,A,[p,Ee],Pe))}}),this):(typeof s=="function"&&(c=a,a=s,s=r),l.push(E(s,a,[p,c])),this)}function j(s,a){if(n.__dirty){n.__waiting.push(function(){return n.resolve(s,a)});return}else n.__dirty=!0;s=s?f(r)+"/"+f(s):void 0;var c={instance:n,to:s,currentLocationPath:s,navigateOptions:{},resolveOptions:I({},i,a)};return m([Y,H,m.if(function(d){var u=d.matches;return u&&u.length>0},K,V)],c,C),c.matches?c.matches:!1}function D(s,a){if(n.__dirty){n.__waiting.push(function(){return n.navigate(s,a)});return}else n.__dirty=!0;s=f(r)+"/"+f(s);var c={instance:n,to:s,navigateOptions:a||{},resolveOptions:a&&a.resolveOptions?a.resolveOptions:i,currentLocationPath:b(s)};m([Ie,qe,H,m.if(function(d){var u=d.matches;return u&&u.length>0},K,V),Ne,C],c,C)}function oe(s,a,c){var d=Q(s,a);return d!==null?(D(d.replace(new RegExp("^/?"+r),""),c),!0):!1}function ce(s){return this.routes=l=l.filter(function(a){return k(s)?f(a.path)!==f(s):Fe(s)?s!==a.handler:String(a.path)!==String(s)}),this}function le(){h&&(this.__popstateListener=function(){n.__freezeListening||j()},window.addEventListener("popstate",this.__popstateListener))}function ue(){this.routes=l=[],h&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=v=!0}function de(s,a){return n._notFoundRoute=E("*",s,[p,a],"__NOT_FOUND__"),this}function G(){if(y)return fe().forEach(function(s){if(s.getAttribute("data-navigo")==="false"||s.getAttribute("target")==="_blank"){s.hasListenerAttached&&s.removeEventListener("click",s.navigoHandler);return}s.hasListenerAttached||(s.hasListenerAttached=!0,s.navigoHandler=function(a){if((a.ctrlKey||a.metaKey)&&a.target.tagName.toLowerCase()==="a")return!1;var c=s.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var d=new URL(c);c=d.pathname+d.search}catch{}var u=Ce(s.getAttribute("data-navigo-options"));v||(a.preventDefault(),a.stopPropagation(),n.navigate(f(c),u))},s.addEventListener("click",s.navigoHandler))}),n}function fe(){return y?[].slice.call(document.querySelectorAll(i.linksSelector||J)):[]}function he(s){return"/"+r+"/"+f(s)}function ve(s){return p=s,this}function pe(){return o}function Q(s,a,c){var d=l.find(function(A){return A.name===s}),u=null;if(d){if(u=d.path,a)for(var g in a)u=u.replace(":"+g,a[g]);u=u.match(/^\//)?u:"/"+u}return u&&c&&!c.includeRoot&&(u=u.replace(new RegExp("^/"+r),"")),u}function ge(s){return s.getAttribute("href")}function W(s){var a=F(f(s)),c=a[0],d=a[1],u=d===""?null:N(d),g=$(s),A=E(c,function(){},[p],c);return{url:c,queryString:d,hashString:g,route:A,data:null,params:u}}function me(){return W(f(ee(r)).replace(new RegExp("^"+r),""))}function ye(s){var a={instance:n,currentLocationPath:s,to:s,navigateOptions:{},resolveOptions:i};return H(a,function(){}),a.matches?a.matches:!1}function be(s,a,c){typeof a<"u"&&(typeof c>"u"||c)&&(a=_(a));var d={instance:n,to:a,currentLocationPath:a};Y(d,function(){}),typeof s=="string"&&(s=typeof c>"u"||c?_(s):s);var u=te(d,{name:String(s),path:s,handler:function(){},hooks:{}});return u||!1}function R(s,a,c){return typeof a=="string"&&(a=z(a)),a?(a.hooks[s]||(a.hooks[s]=[]),a.hooks[s].push(c),function(){a.hooks[s]=a.hooks[s].filter(function(d){return d!==c})}):(console.warn("Route doesn't exists: "+a),function(){})}function z(s){return typeof s=="string"?l.find(function(a){return a.name===_(s)}):l.find(function(a){return a.handler===s})}function _e(s){s.instance.__dirty=!1,s.instance.__waiting.length>0&&s.instance.__waiting.shift()()}this.root=r,this.routes=l,this.destroyed=v,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=_e,this.on=ae,this.off=ce,this.resolve=j,this.navigate=D,this.navigateByName=oe,this.destroy=ue,this.notFound=de,this.updatePageLinks=G,this.link=he,this.hooks=ve,this.extractGETParameters=function(s){return F(b(s))},this.lastResolved=pe,this.generate=Q,this.getLinkPath=ge,this.match=ye,this.matchLocation=be,this.getCurrentLocation=me,this.addBeforeHook=R.bind(this,"before"),this.addAfterHook=R.bind(this,"after"),this.addAlreadyHook=R.bind(this,"already"),this.addLeaveHook=R.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=W,this._clean=f,this._checkForAHash=b,this._setCurrent=function(s){return o=n.current=s},le.call(this),G.call(this)}function O(){return`
        <header>
            <div class="top-nav">
              <h1><a href="/dist">SHOP.CO</a></h1>
             <div class="bottom-nav">
                  <a href="/"><i class="fas fa-shopping-cart"></i></a>
                  <a href="/login"><i class="fas fa-user"></i></a>
             </div>
            </div>
        </header>
    `}function S(){return`
        <footer>
        <div class="footer-container">
            <div class="footer-section footer-brand">
                <h1>SHOP.CO</h1>
                <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>HELP</h2>
                <ul>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>FAQ</h2>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Manage Deliveries</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Payments</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>RESOURCES</h2>
                <ul>
                    <li><a href="#">Free eBooks</a></li>
                     <li><a href="#">Development Tutorial</a></li>
                    <li><a href="#">How to - Blog</a></li>
                    <li><a href="#">YouTube Playlist</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
        <span class="line"></span>
        <div class="footer-bottom-content">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div class="payment-icons">
                <div class="footer-badge"><img src="../../../../src/assets/BadgeVisa.png" alt="Visa"></div>
                <div class="footer-badge"><img src="../../../../src/assets/BadgeMaster.png" alt="Mastercard"></div>
                <div class="footer-badge"><img src="../../../../src/assets/BadgePayPal-2.png" alt="PayPal"></div>
                <div class="footer-badge"><img src="../../../../src/assets/BadgeApplePay.png" alt="Apple Pay"></div>
                <div class="footer-badge"><img src="../../../../src/assets/BadgeGooglePay.png" alt="Google Pay"></div>
            </div>
        </div>
        </div>
    </footer>
    `}function Ye(){return`
        <section class="hero">
            <div class="hero-template">
                <div class="hero-text">
                    <div class="hero-title">
                    <h1>FIND </h1><h1 class="hero-title-highlight">ANYTHING</h1><h1> THAT MATCHES YOUR STYLE</h1>
                    <p class="hero-description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</p>
                    <button class="button">Shop Now</button>
                    </div>
                    <div class="hero-subtitle">
                        <div class="subtitle-item">
                         <h2>200+</h2>
                         <p>International Brands</p>
                        </div>
                        <span class="subtitle-line"></span>
                        <div class="subtitle-item">
                         <h2>2,000+</h2>
                         <p>High-Quality Products</p>
                        </div>
                        <span class="subtitle-line"></span>
                        <div class="subtitle-item">
                         <h2>30,000+</h2>
                         <p>Happy Customers</p>
                    </div>
                </div>
                </div>
                <div class="hero-image">
                    <img src="../../src/assets/hero-image.png" alt="hero image">
                </div>
            </div>
            <div class="hero-brands">
            <div class="brand-list">
            <div class="brand-item">
                <img src="../../src/assets/versage.svg" alt="versage">
            </div>
            <div class="brand-item">
                <img src="../../src/assets/calvinklein.svg" alt="versace">
            </div>
            <div class="brand-item">
                <img src="../../src/assets/gucci.svg" alt="gucci">
            </div>
            <div class="brand-item">
                <img src="../../src/assets/prada.svg" alt="valentino">
            </div>
            <div class="brand-item">
                <img src="../../src/assets/zara.svg" alt="chanel">
            </div>
            </div>
            </div>
        </section>
    `}function w(){return`
        <section class="form-component">
            <div class="form-template">
                <div class="form-title">
                    <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                </div>
            <form class="form">
                <div class="form-input">
                    <label for="email"><i class="fa-solid fa-envelope"></i></label>
                    <input type="text" id="email" name="email" placeholder="Enter your email address">
                </div>
                <button class="subscribe-button" type="submit">Subscribe to Newsletter</button>
            </form>
                </div>

        </section>
    `}const Xe="https://dummyjson.com/products";async function Ve(){const e=await fetch(`${Xe}/categories`);if(!e.ok)throw new Error("Failed to fetch categories");return e.json()}async function Ke(){const t=(await Ve()).map(i=>`
        <div class="category">
            <a href="/category/${i.slug}" data-navigo>${i.name}</a>
        </div>
    `).join("");return`
        ${O()}
        ${Ye()}
        <section class="categories">
            <h1>Categories</h1>
            <div class="category-template scroller">
                ${t}
            </div>
        </section>
        ${w()}
        ${S()}
    `}const Je="https://dummyjson.com/products";async function Ze(e){const t=await fetch(`${Je}/category/${e}`);if(!t.ok)throw new Error("Failed to fetch products by category");return t.json().then(i=>i.products)}function q(e){const t=Math.round(e*2)/2;let i="";for(let n=1;n<=5;n++)n<=t?i+='<i class="fa-solid fa-star"></i>':n-.5===t?i+='<i class="fa-solid fa-star-half-stroke"></i>':i+='<i class="fa-regular fa-star"></i>';return{starsHtml:i,roundedRating:t}}const B=e=>e.map(t=>`
        <div class="product-card">
            <a href="/product/${t.id}" data-navigo>
                <div class="product-image"><img src="${t.thumbnail}" alt="${t.title}"></div>
                <h3>${t.title}</h3>
            </a>
            <div class="rating">
                ${q(t.rating).starsHtml}
                <span>${q(t.rating).roundedRating}/</span><span class="gray">5</span>
            </div>
            <div class="price">
                <h3>$${Math.round(t.price*(1-t.discountPercentage/100))}</h3>
                <h3 class="discount gray">$${Math.round(t.price)}</h3>
                <h3 class="discount-percentage">${Math.round(t.discountPercentage)}%</h3>
            </div>
        </div>
    `).join(""),xe=(e,t,i,n)=>e.filter(r=>{const o=t.length===0||t.includes(r.brand),l=r.price>=i&&r.price<=n;return o&&l}),et=(e,t)=>e.sort((i,n)=>t==="ascending"?i.price-n.price:n.price-i.price),tt=e=>{const t=e.map(i=>i.brand);return Array.from(new Set(t))},it=e=>{const t=document.querySelector(".filters_sort_options");t&&e.forEach(i=>{const n=document.createElement("input");n.type="checkbox",n.id=i,n.name="brand",n.value=i;const r=document.createElement("label");r.className="filters_options_types",r.htmlFor=i,r.textContent=i,t.appendChild(n),t.appendChild(r)})},nt=e=>{const t=document.getElementById("board-filters"),i=tt(e);it(i),t.addEventListener("submit",r=>{var b;r.preventDefault();const o=Array.from(t.querySelectorAll('input[name="brand"]:checked')).map(_=>_.value),l=parseFloat(t.querySelector('input[name="min-price"]').value)||0,v=parseFloat(t.querySelector('input[name="max-price"]').value)||3e3,p=((b=t.querySelector('input[name="sort"]:checked'))==null?void 0:b.value)||"ascending";let h=xe(e,o,l,v);h=et(h,p);const y=document.querySelector(".products-list");y&&(h.length===0?y.innerHTML='<h2 style="text-align: center;">No products found</h2>':y.innerHTML=B(h))});const n=t.querySelector("#filter-reset");n&&n.addEventListener("click",r=>{r.preventDefault(),t.reset();const o=document.querySelector(".products-list");o&&(o.innerHTML=B(e))})},st=()=>`
    <form class="filters" id="board-filters">
        <div class="filters_header">
            <div class="body-1 font-700">Filters</div>
            <i class="fas fa-sliders" id="filter-close"></i>
        </div>
        <div class="route-line description"><span class="line"></span></div>
        <div class="filters_options">
            <div class="body-1 font-700">Brands</div>
            <div class="filters_sort_options">
            </div>
                   <div class="route-line description"><span class="line"></span></div>
        <div class="filters_sort">
            <div class="body-1 font-700">Sort by Price</div>
            <div class="filters_sort_options">
                <input type="radio" id="sort-ascending" name="sort" value="ascending" checked>
                <label class="filters_options_types" for="sort-ascending">Ascending</label>
                <input type="radio" id="sort-descending" name="sort" value="descending">
                <label class="filters_options_types" for="sort-descending">Descending</label>
            </div>
        </div>
        </div>
        <div class="route-line description"><span class="line"></span></div>
        <div class="filters_slider">
            <div class="body-1 font-700">Price</div>
            <div class="range-input">
                <label><input type="number" name="min-price" min="0" max="3000" value="0"></label>
                <span><i style="max-width: 11px; padding: 0 8px; font-size: 0.8em;" class="fa-solid fa-play"></i></span>
                <label><input type="number" name="max-price" min="0" max="3000" value="3000"></label>
            </div>
        </div>
        <div class="filters_buttons">
            <input class="button" type="submit" theme="dark" id="filter-apply" value="Apply Filter" />
            <input class="button-gray" type="button" theme="gray" id="filter-reset" value="Reset Filter" />
        </div>
    </form>
`;async function rt(e){const t=await Ze(e),i=`
        ${O()}
        <section>
            <div class="route-line"><span class="line"></span></div>
            <nav class="breadcrumbs">
                <a class="gray" href="/dist" data-navigo>Home</a><span class="gray nav-margin"> > </span> ${e}
            </nav>
            <div class="products-container">
                <div class="filter">
                    ${st()}
                </div>
                <div class="products">
                    <div class="products-header"><h2>${e}</h2></div>
                    <div class="products-list scroller">
                        ${B(t)}
                    </div>
                    <div class="route-line categories"><span class="line"></span></div>
                </div>
            </div>
        </section>
        ${w()}
        ${S()}
    `;return setTimeout(()=>nt(t),0),i}const at="https://dummyjson.com/products";async function ot(e){const t=await fetch(`${at}/${e}`);if(!t.ok)throw new Error("Failed to fetch product");return t.json()}let Z=!1;function ct(){if(Z)return;Z=!0;const e=()=>{const n=document.querySelector(".quantity h3");if(n){let r=parseInt(n.textContent||"0",10);r++,n.textContent=r.toString()}},t=()=>{const n=document.querySelector(".quantity h3");if(n){let r=parseInt(n.textContent||"0",10);r>1&&(r--,n.textContent=r.toString())}},i=n=>{const r=n.target;r.matches(".fa-plus")?e():r.matches(".fa-minus")&&t()};document.addEventListener("click",i)}function x(e){return`
        <div class="product-image-column">
            ${e.images.map((i,n)=>`
        <div class="product-images">
            <img src="${i}" alt="${e.title}">
        </div>
    `).join("")}
        </div>
        <div class="product-image-overview">
            <img src="${e.images[0]}" alt="${e.title}" id="mainImage">
        </div>
    `}async function lt(e){const t=await ot(e),{starsHtml:i,roundedRating:n}=q(t.rating);return ct(),x(t),`
        ${O()}
        <section>
            <div class="route-line"><span class="line"></span></div>
            <nav class="breadcrumbs">
                <a class="gray" href="/dist" data-navigo>Home</a> <span class="gray nav-margin"> > </span>  
                <a class="gray" href="/category/${t.category}" data-navigo>${t.category}</a> <span class="gray nav-margin"> > </span> 
                ${t.title}
            </nav>
            <div class="product-detail">
               ${x(t)}
               <div class="product-info">
                    <div class="product-header">
                    <h1 class="product-h1">${t.title}</h1>
                      <div class="rating">
                        ${i}
                        <span>${n}/5</span>
                      </div>
                        <div class="price">
                            <h3>$${Math.round(t.price*(1-t.discountPercentage/100))}</h3>
                            <h3 class="discount gray>">$${Math.round(t.price)}</h3>
                            <h3 class="discount-percentage">${Math.round(t.discountPercentage)}%</h3>
                        </div>
                      </div>
                      <div class="product-description">
                        <p>${t.description}</p>
                      </div>
                      <div class="route-line description"><span class="line"></span></div>
                      <div class="item-description">
                        <h3 class="gray">Brand</h2>
                        <h2 class="product-h2">${t.brand}</h3>
                      </div>
                        <div class="route-line description"><span class="line"></span></div>
                      <div class="item-description">
                        <h3 class="gray">In Stock</h3>
                        <h2 class="product-h2">${t.stock} items in stock</h2>
                     </div>
                        <div class="route-line description"><span class="line"></span></div>
                      <div class="product-buttons">
                        <div class="quantity">
                          <i class="fa-solid fa-minus"></i>
                          <h3>1</h3>
                          <i class="fa-solid fa-plus"></i>
                        </div>
                        <button class="button cart">Add to cart</button>  
               </div>
            </div>
        </section>
        ${w()}
        ${S()}
    `}function ut(){return Promise.resolve(`
        <div class="not-found">
            <h1 class="not-found-title">Oops!</h1>
            <h2 class="not-found-sub">404 – Page Not Found</h2>
            <p class="not-found-description">The page you are looking for does not exist.</p>
            <button onclick="window.location.href = '/dist';" class="button">Go Home</button>
        </div>
    `)}function dt(){return`<section>
<div class="route-line"><span class="line"></span></div>
<div class="log-in">
  <h1 class="log-in-title">Log In</h1>
      <form id="loginForm" class="log-in-form">
      <div class="form-input">
          <input type="email" id="loginEmail" placeholder="Email" required />
          <input type="password" id="loginPassword" placeholder="Password" required />
      </div>
      <div class="form-group">
          <button type="submit" class="button">Log In</button>
      </div>
      </form>
</div>
</section>`}function ft(){return new Promise(e=>{e(`
        ${O()}
        ${dt()}
        ${w()}
        ${S()}
      `)})}function ht(){return new Promise(e=>{e(`
        ${O()}
        <section>
          <div class="route-line"><span class="line"></span></div>
          <div class="log-in">
            <h1 class="log-in-title">Sing Up</h1>
                <form id="loginForm" class="log-in-form">
                <div class="form-input">
                    <input type="email" id="registerEmail" placeholder="Email" required />
                    <input type="password" id="registerPassword" placeholder="Password" required />
                </div>
                <div class="form-group">
                    <button type="submit" class="button">Register</button>
                </div>
                </form>
          </div>
        </section>
        ${w()}
        ${S()}
      `)})}const U=new ze("/");function L(e){e.then(t=>{document.querySelector("#app").innerHTML=t,U.updatePageLinks()})}U.on("dist",()=>L(Ke())).on("/category/:categoryName",e=>{var i;const t=(i=e==null?void 0:e.data)==null?void 0:i.categoryName;L(rt(t))}).on("/product/:productId",e=>{var i;const t=(i=e==null?void 0:e.data)==null?void 0:i.productId;L(lt(t))}).on("login",()=>L(ft())).on("singup",()=>L(ht())).notFound(()=>L(ut())).resolve();U.resolve();
