(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();var Le=/([:*])(\w+)/g,Ae="([^/]+)",Oe=/\*/g,we="?(?:.*)",Se=/\/\?/g,Re="/?([^/]+|)",ke="(?:/^|^)",$e="";function ee(e){return e===void 0&&(e="/"),q()?location.pathname+location.search+location.hash:e}function f(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function w(e){return typeof e=="string"}function He(e){return typeof e=="function"}function S(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Ce(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(i,a,n){return i===null&&(i={}),i[t[n]]=decodeURIComponent(a),i},null)}function R(e){var t=f(e).split(/\?(.*)?$/);return[f(t[0]),t.slice(1).join("")]}function M(e){for(var t={},i=e.split("&"),a=0;a<i.length;a++){var n=i[a].split("=");if(n[0]!==""){var o=decodeURIComponent(n[0]);t[o]?(Array.isArray(t[o])||(t[o]=[t[o]]),t[o].push(decodeURIComponent(n[1]||""))):t[o]=decodeURIComponent(n[1]||"")}}return t}function te(e,t){var i=R(f(e.currentLocationPath)),a=i[0],n=i[1],o=n===""?null:M(n),l=[],v;if(w(t.path)){if(v=ke+f(t.path).replace(Le,function(b,_,E){return l.push(E),Ae}).replace(Oe,we).replace(Se,Re)+"$",f(t.path)===""&&f(a)==="")return{url:a,queryString:n,hashString:S(e.to),route:t,data:null,params:o}}else v=t.path;var p=new RegExp(v,$e),h=a.match(p);if(h){var y=w(t.path)?Ce(h,l):h.groups?h.groups:h.slice(1);return{url:f(a.replace(new RegExp("^"+e.instance.root),"")),queryString:n,hashString:S(e.to),route:t,data:y,params:o}}return!1}function ie(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function P(e,t){return typeof e[t]>"u"||e[t]===!0}function Fe(e){if(!e)return{};var t=e.split(","),i={},a;return t.forEach(function(n){var o=n.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":i.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":a||(a={}),a.strategy=o[1];break;case"resolveOptionsHash":a||(a={}),a.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":i[o[0]]=o[1]==="true";break}}),a&&(i.resolveOptions=a),i}function q(){return typeof window<"u"}function Te(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(i){return i}).forEach(function(i){["before","after","already","leave"].forEach(function(a){i[a]&&(t[a]||(t[a]=[]),t[a].push(i[a]))})}),t}function m(e,t,i){var a=t||{},n=0;(function o(){if(!e[n]){i&&i(a);return}Array.isArray(e[n])?(e.splice.apply(e,[n,1].concat(e[n][0](a)?e[n][1]:e[n][2])),o()):e[n](a,function(l){typeof l>"u"||l===!0?(n+=1,o()):i&&i(a)})})()}m.if=function(e,t,i){return Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]),[e,t,i]};function Y(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=ee(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function C(e,t){for(var i=0;i<e.instance.routes.length;i++){var a=e.instance.routes[i],n=te(e,a);if(n&&(e.matches||(e.matches=[]),e.matches.push(n),e.resolveOptions.strategy==="ONE")){t();return}}t()}function Ie(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function Be(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var X=q(),Ne=ie();function Me(e,t){if(P(e.navigateOptions,"updateBrowserURL")){var i=("/"+e.to).replace(/\/\//g,"/"),a=X&&e.resolveOptions&&e.resolveOptions.hash===!0;Ne?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",a?"#"+i:i),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!a){var n=location.hash;location.hash="",location.hash=n}e.instance.__freezeListening=!1},1))):X&&(window.location.href=e.to)}t()}function ae(e,t){var i=e.instance;if(!i.lastResolved()){t();return}m(i.lastResolved().map(function(a){return function(n,o){if(!a.route.hooks||!a.route.hooks.leave){o();return}var l=!1,v=e.instance.matchLocation(a.route.path,e.currentLocationPath,!1);if(a.route.path!=="*")l=!v;else{var p=e.matches?e.matches.find(function(h){return a.route.path===h.route.path}):!1;l=!p}if(P(e.navigateOptions,"callHooks")&&l){m(a.route.hooks.leave.map(function(h){return function(y,b){return h(function(_){_===!1?e.instance.__markAsClean(e):b()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return t()})}function qe(e,t){e.match.route.hooks&&e.match.route.hooks.before&&P(e.navigateOptions,"callHooks")?m(e.match.route.hooks.before.map(function(i){return function(n,o){return i(function(l){l===!1?e.instance.__markAsClean(e):o()},e.match)}}).concat([function(){return t()}])):t()}function Ue(e,t){P(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function je(e,t){e.match.route.hooks&&e.match.route.hooks.after&&P(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(i){return i(e.match)}),t()}function De(e,t){var i=e.instance.lastResolved();if(i&&i[0]&&i[0].route===e.match.route&&i[0].url===e.match.url&&i[0].queryString===e.match.queryString){i.forEach(function(a){a.route.hooks&&a.route.hooks.already&&P(e.navigateOptions,"callHooks")&&a.route.hooks.already.forEach(function(n){return n(e.match)})}),t(!1);return}t()}function Ge(e,t){var i=e.instance._notFoundRoute;if(i){e.notFoundHandled=!0;var a=R(e.currentLocationPath),n=a[0],o=a[1],l=S(e.to);i.path=f(n);var v={url:i.path,queryString:o,hashString:l,data:null,route:i,params:o!==""?M(o):null};e.matches=[v],e.match=v}t()}function Qe(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function We(e,t){e.instance._setCurrent(null),t()}function se(e,t){P(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var ne=[De,qe,Ue,je],V=[ae,Ge,m.if(function(e){var t=e.notFoundHandled;return t},ne.concat([se]),[Qe,We])];function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},T.apply(this,arguments)}function K(e,t){var i=0;function a(){if(i===e.matches.length){se(e,t);return}m(ne,T({},e,{match:e.matches[i]}),function(){i+=1,a()})}ae(e,a)}function F(e){e.instance.__markAsClean(e)}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},I.apply(this,arguments)}var J="[data-navigo]";function ze(e,t){var i=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:J},a=this,n="/",o=null,l=[],v=!1,p,h=ie(),y=q();e?n=f(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function b(s){return s.indexOf("#")>=0&&(i.hash===!0?s=s.split("#")[1]||"/":s=s.split("#")[0]),s}function _(s){return f(n+"/"+f(s))}function E(s,r,c,d){return s=w(s)?_(s):s,{name:d||f(String(s)),path:s,handler:r,hooks:Te(c)}}function re(s,r,c){var d=this;return typeof s=="object"&&!(s instanceof RegExp)?(Object.keys(s).forEach(function(u){if(typeof s[u]=="function")d.on(u,s[u]);else{var g=s[u],L=g.uses,Pe=g.as,Ee=g.hooks;l.push(E(u,L,[p,Ee],Pe))}}),this):(typeof s=="function"&&(c=r,r=s,s=n),l.push(E(s,r,[p,c])),this)}function j(s,r){if(a.__dirty){a.__waiting.push(function(){return a.resolve(s,r)});return}else a.__dirty=!0;s=s?f(n)+"/"+f(s):void 0;var c={instance:a,to:s,currentLocationPath:s,navigateOptions:{},resolveOptions:I({},i,r)};return m([Y,C,m.if(function(d){var u=d.matches;return u&&u.length>0},K,V)],c,F),c.matches?c.matches:!1}function D(s,r){if(a.__dirty){a.__waiting.push(function(){return a.navigate(s,r)});return}else a.__dirty=!0;s=f(n)+"/"+f(s);var c={instance:a,to:s,navigateOptions:r||{},resolveOptions:r&&r.resolveOptions?r.resolveOptions:i,currentLocationPath:b(s)};m([Ie,Be,C,m.if(function(d){var u=d.matches;return u&&u.length>0},K,V),Me,F],c,F)}function oe(s,r,c){var d=Q(s,r);return d!==null?(D(d.replace(new RegExp("^/?"+n),""),c),!0):!1}function ce(s){return this.routes=l=l.filter(function(r){return w(s)?f(r.path)!==f(s):He(s)?s!==r.handler:String(r.path)!==String(s)}),this}function le(){h&&(this.__popstateListener=function(){a.__freezeListening||j()},window.addEventListener("popstate",this.__popstateListener))}function ue(){this.routes=l=[],h&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=v=!0}function de(s,r){return a._notFoundRoute=E("*",s,[p,r],"__NOT_FOUND__"),this}function G(){if(y)return fe().forEach(function(s){if(s.getAttribute("data-navigo")==="false"||s.getAttribute("target")==="_blank"){s.hasListenerAttached&&s.removeEventListener("click",s.navigoHandler);return}s.hasListenerAttached||(s.hasListenerAttached=!0,s.navigoHandler=function(r){if((r.ctrlKey||r.metaKey)&&r.target.tagName.toLowerCase()==="a")return!1;var c=s.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var d=new URL(c);c=d.pathname+d.search}catch{}var u=Fe(s.getAttribute("data-navigo-options"));v||(r.preventDefault(),r.stopPropagation(),a.navigate(f(c),u))},s.addEventListener("click",s.navigoHandler))}),a}function fe(){return y?[].slice.call(document.querySelectorAll(i.linksSelector||J)):[]}function he(s){return"/"+n+"/"+f(s)}function ve(s){return p=s,this}function pe(){return o}function Q(s,r,c){var d=l.find(function(L){return L.name===s}),u=null;if(d){if(u=d.path,r)for(var g in r)u=u.replace(":"+g,r[g]);u=u.match(/^\//)?u:"/"+u}return u&&c&&!c.includeRoot&&(u=u.replace(new RegExp("^/"+n),"")),u}function ge(s){return s.getAttribute("href")}function W(s){var r=R(f(s)),c=r[0],d=r[1],u=d===""?null:M(d),g=S(s),L=E(c,function(){},[p],c);return{url:c,queryString:d,hashString:g,route:L,data:null,params:u}}function me(){return W(f(ee(n)).replace(new RegExp("^"+n),""))}function ye(s){var r={instance:a,currentLocationPath:s,to:s,navigateOptions:{},resolveOptions:i};return C(r,function(){}),r.matches?r.matches:!1}function be(s,r,c){typeof r<"u"&&(typeof c>"u"||c)&&(r=_(r));var d={instance:a,to:r,currentLocationPath:r};Y(d,function(){}),typeof s=="string"&&(s=typeof c>"u"||c?_(s):s);var u=te(d,{name:String(s),path:s,handler:function(){},hooks:{}});return u||!1}function O(s,r,c){return typeof r=="string"&&(r=z(r)),r?(r.hooks[s]||(r.hooks[s]=[]),r.hooks[s].push(c),function(){r.hooks[s]=r.hooks[s].filter(function(d){return d!==c})}):(console.warn("Route doesn't exists: "+r),function(){})}function z(s){return typeof s=="string"?l.find(function(r){return r.name===_(s)}):l.find(function(r){return r.handler===s})}function _e(s){s.instance.__dirty=!1,s.instance.__waiting.length>0&&s.instance.__waiting.shift()()}this.root=n,this.routes=l,this.destroyed=v,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=_e,this.on=re,this.off=ce,this.resolve=j,this.navigate=D,this.navigateByName=oe,this.destroy=ue,this.notFound=de,this.updatePageLinks=G,this.link=he,this.hooks=ve,this.extractGETParameters=function(s){return R(b(s))},this.lastResolved=pe,this.generate=Q,this.getLinkPath=ge,this.match=ye,this.matchLocation=be,this.getCurrentLocation=me,this.addBeforeHook=O.bind(this,"before"),this.addAfterHook=O.bind(this,"after"),this.addAlreadyHook=O.bind(this,"already"),this.addLeaveHook=O.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=W,this._clean=f,this._checkForAHash=b,this._setCurrent=function(s){return o=a.current=s},le.call(this),G.call(this)}function k(){return`
        <header>
            <div class="top-nav">
              <h1><a href="/">SHOP.CO</a></h1>
             <div class="bottom-nav">
                  <a href="/"><i class="fas fa-shopping-cart"></i></a>
                  <a href="/user"><i class="fas fa-user"></i></a>
             </div>
            </div>
        </header>
    `}function $(){return`
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
                <div class="footer-badge"><img src="../src/assets/BadgeVisa.png" alt="Visa"></div>
                <div class="footer-badge"><img src="../src/assets/BadgeMaster.png" alt="Mastercard"></div>
                <div class="footer-badge"><img src="../src/assets/BadgePayPal-2.png" alt="PayPal"></div>
                <div class="footer-badge"><img src="../src/assets/BadgeApplePay.png" alt="Apple Pay"></div>
                <div class="footer-badge"><img src="../src/assets/BadgeGooglePay.png" alt="Google Pay"></div>
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
                    <img src="src/assets/hero-image.png" alt="hero image">
                </div>
            </div>
            <div class="hero-brands">
            <div class="brand-list">
            <div class="brand-item">
                <img src="src/assets/versage.svg" alt="versage">
            </div>
            <div class="brand-item">
                <img src="src/assets/calvinklein.svg" alt="versace">
            </div>
            <div class="brand-item">
                <img src="src/assets/gucci.svg" alt="gucci">
            </div>
            <div class="brand-item">
                <img src="src/assets/prada.svg" alt="valentino">
            </div>
            <div class="brand-item">
                <img src="src/assets/zara.svg" alt="chanel">
            </div>
            </div>
            </div>
        </section>
    `}function H(){return`
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
        ${k()}
        ${Ye()}
        <section class="categories">
            <h1>Categories</h1>
            <div class="category-template scroller">
                ${t}
            </div>
        </section>
        ${H()}
        ${$()}
    `}const Je="https://dummyjson.com/products";async function Ze(e){const t=await fetch(`${Je}/category/${e}`);if(!t.ok)throw new Error("Failed to fetch products by category");return t.json().then(i=>i.products)}function B(e){const t=Math.round(e*2)/2;let i="";for(let a=1;a<=5;a++)a<=t?i+='<i class="fa-solid fa-star"></i>':a-.5===t?i+='<i class="fa-solid fa-star-half-stroke"></i>':i+='<i class="fa-regular fa-star"></i>';return{starsHtml:i,roundedRating:t}}const N=e=>e.map(t=>`
        <div class="product-card">
            <a href="/product/${t.id}" data-navigo>
                <div class="product-image"><img src="${t.thumbnail}" alt="${t.title}"></div>
                <h3>${t.title}</h3>
            </a>
            <div class="rating">
                ${B(t.rating).starsHtml}
                <span>${B(t.rating).roundedRating}/</span><span class="gray">5</span>
            </div>
            <div class="price">
                <h3>$${Math.round(t.price*(1-t.discountPercentage/100))}</h3>
                <h3 class="discount gray">$${Math.round(t.price)}</h3>
                <h3 class="discount-percentage">${Math.round(t.discountPercentage)}%</h3>
            </div>
        </div>
    `).join(""),xe=(e,t,i,a)=>e.filter(n=>{const o=t.length===0||t.includes(n.brand),l=n.price>=i&&n.price<=a;return o&&l}),et=(e,t)=>e.sort((i,a)=>t==="ascending"?i.price-a.price:a.price-i.price),tt=e=>{const t=e.map(i=>i.brand);return Array.from(new Set(t))},it=e=>{const t=document.querySelector(".filters_sort_options");t&&e.forEach(i=>{const a=document.createElement("input");a.type="checkbox",a.id=i,a.name="brand",a.value=i;const n=document.createElement("label");n.className="filters_options_types",n.htmlFor=i,n.textContent=i,t.appendChild(a),t.appendChild(n)})},at=e=>{const t=document.getElementById("board-filters"),i=tt(e);it(i),t.addEventListener("submit",n=>{var b;n.preventDefault();const o=Array.from(t.querySelectorAll('input[name="brand"]:checked')).map(_=>_.value),l=parseFloat(t.querySelector('input[name="min-price"]').value)||0,v=parseFloat(t.querySelector('input[name="max-price"]').value)||3e3,p=((b=t.querySelector('input[name="sort"]:checked'))==null?void 0:b.value)||"ascending";let h=xe(e,o,l,v);h=et(h,p);const y=document.querySelector(".products-list");y&&(h.length===0?y.innerHTML='<h2 style="text-align: center;">No products found</h2>':y.innerHTML=N(h))});const a=t.querySelector("#filter-reset");a&&a.addEventListener("click",n=>{n.preventDefault(),t.reset();const o=document.querySelector(".products-list");o&&(o.innerHTML=N(e))})},st=()=>`
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
`;async function nt(e){const t=await Ze(e),i=`
        ${k()}
        <section>
            <div class="route-line"><span class="line"></span></div>
            <nav class="breadcrumbs">
                <a class="gray" href="/" data-navigo>Home</a><span class="gray nav-margin"> > </span> ${e}
            </nav>
            <div class="products-container">
                <div class="filter">
                    ${st()}
                </div>
                <div class="products">
                    <div class="products-header"><h2>${e}</h2></div>
                    <div class="products-list scroller">
                        ${N(t)}
                    </div>
                    <div class="route-line categories"><span class="line"></span></div>
                </div>
            </div>
        </section>
        ${H()}
        ${$()}
    `;return setTimeout(()=>at(t),0),i}const rt="https://dummyjson.com/products";async function ot(e){const t=await fetch(`${rt}/${e}`);if(!t.ok)throw new Error("Failed to fetch product");return t.json()}let Z=!1;function ct(){if(Z)return;Z=!0;const e=()=>{const a=document.querySelector(".quantity h3");if(a){let n=parseInt(a.textContent||"0",10);n++,a.textContent=n.toString()}},t=()=>{const a=document.querySelector(".quantity h3");if(a){let n=parseInt(a.textContent||"0",10);n>1&&(n--,a.textContent=n.toString())}},i=a=>{const n=a.target;n.matches(".fa-plus")?e():n.matches(".fa-minus")&&t()};document.addEventListener("click",i)}function x(e){return`
        <div class="product-image-column">
            ${e.images.map((i,a)=>`
        <div class="product-images">
            <img src="${i}" alt="${e.title}">
        </div>
    `).join("")}
        </div>
        <div class="product-image-overview">
            <img src="${e.images[0]}" alt="${e.title}" id="mainImage">
        </div>
    `}async function lt(e){const t=await ot(e),{starsHtml:i,roundedRating:a}=B(t.rating);return ct(),x(t),`
        ${k()}
        <section>
            <div class="route-line"><span class="line"></span></div>
            <nav class="breadcrumbs">
                <a class="gray" href="/" data-navigo>Home</a> <span class="gray nav-margin"> > </span>  
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
                        <span>${a}/5</span>
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
        ${H()}
        ${$()}
    `}function ut(){return Promise.resolve(`
        <div class="not-found">
            <h1 class="not-found-title">Oops!</h1>
            <h2 class="not-found-sub">404 – Page Not Found</h2>
            <p class="not-found-description">The page you are looking for does not exist.</p>
            <button onclick="window.location.href = '/';" class="button">Go Home</button>
        </div>
    `)}function dt(){return new Promise(e=>{e(`
        ${k()}
        <section>
            <div class="route-line"><span class="line"></span></div>
            <div class="log-in">
                <h1 class="log-in-title">Log In</h1>
                <form class="log-in-form">
                    <div class="form-input">
                        <label class="form-label" for="username">Username</label>
                        <input class="form-input" type="text" id="username" name="username" placeholder="Username">
                    </div>
                    <div class="form-input">
                        <label class="form-label" for="password">Password</label>
                        <input class="form-input" type="password" id="password" name="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <button class="button">Log In</button>
                    </div>
                </form>
            </div>
        </section>
        ${H()}
        ${$()}
    `)})}const U=new ze("/");function A(e){e.then(t=>{document.querySelector("#app").innerHTML=t,U.updatePageLinks()})}U.on("/",()=>A(Ke())).on("/category/:categoryName",e=>{var i;const t=(i=e==null?void 0:e.data)==null?void 0:i.categoryName;A(nt(t))}).on("/product/:productId",e=>{var i;const t=(i=e==null?void 0:e.data)==null?void 0:i.productId;A(lt(t))}).on("/user",()=>A(dt())).notFound(()=>A(ut())).resolve();U.resolve();
