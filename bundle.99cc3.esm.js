!function(e){function n(n){for(var t,r,l=n[0],_=n[1],u=0,c=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(t in _)Object.prototype.hasOwnProperty.call(_,t)&&(e[t]=_[t]);for(i&&i(n);c.length;)c.shift()()}function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={},o={0:0};t.e=function(e){var n=[],r=o[e];if(0!==r)if(r)n.push(r[2]);else{var l=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=l);var _,u=document.createElement("script");u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.src=function(e){return t.p+""+({2:"route-home"}[e]||e)+".chunk."+{2:"fca14"}[e]+".esm.js"}(e);var i=new Error;_=function(n){u.onerror=u.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",i.name="ChunkLoadError",i.type=r,i.request=l,t[1](i)}o[e]=void 0}};var c=setTimeout((function(){_({type:"timeout",target:u})}),12e4);u.onerror=u.onload=_,document.head.appendChild(u)}return Promise.all(n)},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/r2-calculator/",t.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],_=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var i=_;t(t.s="mdyV")}({GFNa:function(){},hosL:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function l(e,n,t){var r,o,l,u=arguments,i={};for(l in n)"key"==l?r=n[l]:"ref"==l?o=n[l]:i[l]=n[l];if(arguments.length>3)for(t=[t],l=3;l<arguments.length;l++)t.push(u[l]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return _(e,i,r,o,null)}function _(e,n,t,r,o){var l={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L.__v:o};return null!=L.vnode&&L.vnode(l),l}function u(){return{current:null}}function i(e){return e.children}function c(e,n){this.props=e,this.context=n}function s(e,n){if(null==n)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?s(e):null}function f(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return f(e)}}function a(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!p.__r++||N!==L.debounceRendering)&&((N=L.debounceRendering)||U)(p)}function p(){for(var e;p.__r=M.length;)e=M.sort((function(e,n){return e.__v.__b-n.__v.__b})),M=[],e.some((function(e){var n,t,o,l,_,u;e.__d&&(_=(l=(n=e).__v).__e,(u=n.__P)&&(t=[],(o=r({},l)).__v=l.__v+1,C(u,l,o,n.__n,void 0!==u.ownerSVGElement,null!=l.__h?[_]:null,t,null==_?s(l):_,l.__h),x(t,l),l.__e!=_&&f(l)))}))}function d(e,n,t,r,o,l,u,c,f,a){var p,d,v,m,g,b,k,x=r&&r.__k||I,P=x.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(m=t.__k[p]=null==(m=n[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?_(null,m,null,null,m):Array.isArray(m)?_(i,{children:m},null,null,null):m.__b>0?_(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(v=x[p])||v&&m.key==v.key&&m.type===v.type)x[p]=void 0;else for(d=0;d<P;d++){if((v=x[d])&&m.key==v.key&&m.type===v.type){x[d]=void 0;break}v=null}C(e,m,v=v||F,o,l,u,c,f,a),g=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&null!=m.__k&&m.__k===v.__k?m.__d=f=h(m,f,e):f=y(e,m,v,x,g,f),a||"option"!==t.type?"function"==typeof t.type&&(t.__d=f):e.value=""):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}for(t.__e=b,p=P;p--;)null!=x[p]&&("function"==typeof t.type&&null!=x[p].__e&&x[p].__e==t.__d&&(t.__d=s(r,p+1)),S(x[p],x[p]));if(k)for(p=0;p<k.length;p++)w(k[p],k[++p],k[++p])}function h(e,n,t){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,n="function"==typeof o.type?h(o,n,t):y(t,o,o,e.__k,o.__e,n));return n}function v(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,n)})):n.push(e)),n}function y(e,n,t,r,o,l){var _,u,i;if(void 0!==n.__d)_=n.__d,n.__d=void 0;else if(null==t||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),_=null;else{for(u=l,i=0;(u=u.nextSibling)&&i<r.length;i+=2)if(u==o)break e;e.insertBefore(o,l),_=l}return void 0!==_?_:o.nextSibling}function m(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||R.test(n)?t:t+"px"}function g(e,n,t,r,o){var l;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||m(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||m(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])l=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+l]=t,t?r||e.addEventListener(n,l?k:b,l):e.removeEventListener(n,l?k:b,l);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function b(e){this.l[e.type+!1](L.event?L.event(e):e)}function k(e){this.l[e.type+!0](L.event?L.event(e):e)}function C(e,n,t,o,l,_,u,s,f){var a,p,h,v,y,m,g,b,k,C,x,w=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(f=t.__h,s=n.__e=t.__e,n.__h=null,_=[s]),(a=L.__b)&&a(n);try{e:if("function"==typeof w){if(b=n.props,k=(a=w.contextType)&&o[a.__c],C=a?k?k.props.value:a.__:o,t.__c?g=(p=n.__c=t.__c).__=p.__E:("prototype"in w&&w.prototype.render?n.__c=p=new w(b,C):(n.__c=p=new c(b,C),p.constructor=w,p.render=A),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=w.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,w.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,h)null==w.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||n.__v===t.__v){p.props=b,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=C,p.props=b,p.state=p.__s,(a=L.__r)&&a(n),p.__d=!1,p.__v=n,p.__P=e,a=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),x=null!=a&&a.type===i&&null==a.key?a.props.children:a,d(e,Array.isArray(x)?x:[x],n,t,o,l,_,u,s,f),p.base=n.__e,n.__h=null,p.__h.length&&u.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==_&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=P(t.__e,n,t,o,l,_,u,f);(a=L.diffed)&&a(n)}catch(e){n.__v=null,(f||null!=_)&&(n.__e=s,n.__h=!!f,_[_.indexOf(s)]=null),L.__e(e,n,t)}}function x(e,n){L.__c&&L.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){L.__e(e,n.__v)}}))}function P(e,n,t,r,l,_,u,i){var c,s,f,a,p=t.props,h=n.props,v=n.type,y=0;if("svg"===v&&(l=!0),null!=_)for(;y<_.length;y++)if((c=_[y])&&(c===e||(v?c.localName==v:3==c.nodeType))){e=c,_[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),_=null,i=!1}if(null===v)p===h||i&&e.data===h||(e.data=h);else{if(_=_&&I.slice.call(e.childNodes),s=(p=t.props||F).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!i){if(null!=_)for(p={},a=0;a<e.attributes.length;a++)p[e.attributes[a].name]=e.attributes[a].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,r,o){var l;for(l in t)"children"===l||"key"===l||l in n||g(e,l,null,t[l],r);for(l in n)o&&"function"!=typeof n[l]||"children"===l||"key"===l||"value"===l||"checked"===l||t[l]===n[l]||g(e,l,n[l],t[l],r)}(e,h,p,l,i),f)n.__k=[];else if(y=n.props.children,d(e,Array.isArray(y)?y:[y],n,t,r,l&&"foreignObject"!==v,_,u,e.firstChild,i),null!=_)for(y=_.length;y--;)null!=_[y]&&o(_[y]);i||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y)&&g(e,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&g(e,"checked",y,p.checked,!1))}return e}function w(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){L.__e(e,t)}}function S(e,n,t){var r,l,_;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,n)),t||"function"==typeof e.type||(t=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&S(r[_],n,t);null!=l&&o(l)}function A(e,n,t){return this.constructor(e,t)}function E(e,n,t){var r,o,_;L.__&&L.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,_=[],C(n,e=(!r&&t||n).__k=l(i,null,[e]),o||F,F,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?I.slice.call(n.childNodes):null,_,!r&&t?t:o?o.__e:n.firstChild,r),x(_,e)}function O(e,n){E(e,n,O)}function T(e,n,t){var o,l,u,i=arguments,c=r({},e.props);for(u in n)"key"==u?o=n[u]:"ref"==u?l=n[u]:c[u]=n[u];if(arguments.length>3)for(t=[t],u=3;u<arguments.length;u++)t.push(i[u]);return null!=t&&(c.children=t),_(e.type,c,o||e.key,l||e.ref,null)}function D(e,n){var t={__c:n="__cC"+W++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(a)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"render",(function(){return E})),t.d(n,"hydrate",(function(){return O})),t.d(n,"createElement",(function(){return l})),t.d(n,"h",(function(){return l})),t.d(n,"Fragment",(function(){return i})),t.d(n,"createRef",(function(){return u})),t.d(n,"isValidElement",(function(){return j})),t.d(n,"Component",(function(){return c})),t.d(n,"cloneElement",(function(){return T})),t.d(n,"createContext",(function(){return D})),t.d(n,"toChildArray",(function(){return v})),t.d(n,"options",(function(){return L}));var L,j,M,U,N,W,F={},I=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L={__e:function(e,n){for(var t,r,o;n=n.__;)if((t=n.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(e)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),o=t.__d),o)return t.__E=t}catch(n){e=n}throw e},__v:0},j=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},t),this.props)),e&&r(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),a(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},c.prototype.render=i,M=[],U="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,W=0},mdyV:function(e,n,t){"use strict";t.r(n);var r=t("hosL");const{h:o,render:l,hydrate:_}=r,u=e=>e&&e.default?e.default:e,i=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(t.p+"sw-esm.js"),"function"==typeof u(t("qVkA"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let n=u(t("qVkA")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const s={preRenderData:r},f=r.url?i(r.url):"",a=_&&f===i(location.pathname);e=(a?_:l)(o(n,{CLI_DATA:s}),document.body,e)})()}},qVkA:function(e,n,t){"use strict";t.r(n);t("GFNa");var r=t("hosL");const o={};var l=function(e){function n(){r.Component.call(this),t||(this.componentWillMount=()=>{e(e=>{t=e&&e.default||e,this.setState({})})},this.shouldComponentUpdate=()=>null!=t),this.render=e=>{if(t)return Object(r.h)(t,e);const n=function e(n,t){if("string"==typeof n.type)return null;const r=n.__;if(!r)return;let o=r.__k;if(o){Array.isArray(o)||(o=[o]);let t=o.indexOf(n);-1===t&&(t=o.length);for(let n=t;n--;){const t=o[n],r=t&&t.__e||e(t,!0);if(r)return r}}return t?void 0:e(r)}(this.__v),l=n&&n.nextSibling||(this.__P||this._parentDom).firstChild;return l&&Object(r.h)(l.localName,{dangerouslySetInnerHTML:o})}}let t;return n.preload=e,(n.prototype=new r.Component).constructor=n,n}((function(e){t.e(2).then(function(){var n=t("FDtd");"function"==typeof e&&e(n)}.bind(null,t)).catch(t.oe)}));process;n.default=()=>Object(r.h)("div",{id:"preact_root"},Object(r.h)(l,null))}});
//# sourceMappingURL=bundle.99cc3.esm.js.map