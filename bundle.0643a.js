!function(t){function e(e){for(var n,r,i=e[0],u=e[1],l=0,a=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&a.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);a.length;)a.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0};n.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=function(t){return n.p+""+({2:"route-home",3:"route-notfound"}[t]||t)+".chunk."+{2:"da53e",3:"65ecf"}[t]+".js"}(t);var c=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(a);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}o[t]=void 0}};var a=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/r2-calculator/",n.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;n(n.s="mdyV")}({GFNa:function(){},KyR8:function(t,e,n){"use strict";var r=n("ensb");e.a=Object(r.a)((function(t){n.e(2).then(function(){var e=n("FDtd");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}))},R8iU:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var u=i>=0?arguments[i]:t.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(e=u+"/"+e,o="/"===u.charAt(0))}return(o?"/":"")+(e=n(r(e.split("/"),(function(t){return!!t})),!o).join("/"))||"."},e.normalize=function(t){var i=e.isAbsolute(t),u="/"===o(t,-1);return(t=n(r(t.split("/"),(function(t){return!!t})),!i).join("/"))||i||(t="."),t&&u&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),u=Math.min(o.length,i.length),l=u,c=0;c<u;c++)if(o[c]!==i[c]){l=c;break}var a=[];for(c=l;c<o.length;c++)a.push("..");return(a=a.concat(i.slice(l))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,i=t.length-1;i>=1;--i)if(47===(e=t.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!=typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,i=0,u=t.length-1;u>=0;--u){var l=t.charCodeAt(u);if(47!==l)-1===r&&(o=!1,r=u+1),46===l?-1===e?e=u:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){n=u+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("b8mS"))},VVEx:function(t,e,n){"use strict";var r=n("ensb");e.a=Object(r.a)((function(t){n.e(3).then(function(){var e=n("3LGf");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}))},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var f=c[a].split("=");u[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var s=Math.max(t.length,e.length),_=0;_<s;_++)if(e[_]&&":"===e[_].charAt(0)){var p=e[_].replace(/(^:|[+*?]+$)/g,""),d=(e[_].match(/[+*?]+$/)||y)[0]||"",h=~d.indexOf("+"),v=~d.indexOf("*"),m=t[_]||"";if(!m&&!v&&(d.indexOf("?")<0||h)){r=!1;break}if(u[p]=decodeURIComponent(m),h||v){u[p]=t.slice(_).map(decodeURIComponent).join("/");break}}else if(e[_]!==t[_]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(c).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function a(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=g.length;e--;)if(g[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),s(t)}function s(t){for(var e=!1,n=0;n<g.length;n++)!0===g[n].routeTo(t)&&(e=!0);for(var r=b.length;r--;)b[r](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return _(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function h(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(_(e))return d(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return b})),n.d(e,"getCurrentUrl",(function(){return a})),n.d(e,"route",(function(){return f})),n.d(e,"Router",(function(){return x})),n.d(e,"Route",(function(){return w})),n.d(e,"Link",(function(){return A})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,g=[],b=[],k={},C=!1,x=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||a()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){s(a())})),addEventListener("click",h)),C=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){g.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component),A=function(t){return Object(v.createElement)("a",r({onClick:p},t))},w=function(t){return Object(v.createElement)(t.component,t)};x.subscribers=b,x.getCurrentUrl=a,x.route=f,x.Router=x,x.Route=w,x.Link=A,x.exec=o,e.default=x},b8mS:function(t,e,n){var r,o;e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(){throw new Error("No such module. (Possibly not yet loaded)")},o="/",e.cwd=function(){return o},e.chdir=function(t){r||(r=n("R8iU")),o=r.resolve(t,o)},e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},dmYQ:function(t,e,n){"use strict";(function(t){var r=n("hosL"),o=n("Y3FI"),i=n("KyR8"),u=n("VVEx"),l=t?"r2-calculator":"";e.a=function(){return Object(r.h)("div",{id:"preact_root"},Object(r.h)(o.Router,null,Object(r.h)(o.Route,{path:l+"/",component:i.a}),Object(r.h)(u.a,{default:!0})))}}).call(this,n("b8mS"))},ensb:function(t,e,n){"use strict";function r(t){function e(){var e=this;o.Component.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(o.h)(n,t);var r=function t(e,n){if("string"==typeof e.type)return null;var r=e.__;if(r){var o=r.__k;if(o){Array.isArray(o)||(o=[o]);var i=o.indexOf(e);-1===i&&(i=o.length);for(var u=i;u--;){var l=o[u],c=l&&l.__e||t(l,!0);if(c)return c}}return n?void 0:t(r)}}(e.__v),u=r&&r.nextSibling||(e.__P||e._parentDom).firstChild;return u&&Object(o.h)(u.localName,{dangerouslySetInnerHTML:i})}}var n;return e.preload=t,(e.prototype=new o.Component).constructor=e,e}n.d(e,"a",(function(){return r}));var o=n("hosL"),i={}},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l=arguments,c={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:c[i]=e[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);if(null!=n&&(c.children=n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===c[i]&&(c[i]=t.defaultProps[i]);return u(t,c,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++T.__v:o};return null!=T.vnode&&T.vnode(i),i}function l(){return{current:null}}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function f(t,e){if(null==e)return t.__?f(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?f(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function _(t){(!t.__d&&(t.__d=!0)&&R.push(t)&&!p.__r++||D!==T.debounceRendering)&&((D=T.debounceRendering)||M)(p)}function p(){for(var t;p.__r=R.length;)t=R.sort((function(t,e){return t.__v.__b-e.__v.__b})),R=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?f(i):u,i.__h),x(n,i),i.__e!=u&&s(i)))}))}function d(t,e,n,r,o,i,l,a,s,_){var p,d,v,m,g,b,k,x=r&&r.__k||W,A=x.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(m=n.__k[p]=null==(m=e[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=x[p])||v&&m.key==v.key&&m.type===v.type)x[p]=void 0;else for(d=0;d<A;d++){if((v=x[d])&&m.key==v.key&&m.type===v.type){x[d]=void 0;break}v=null}C(t,m,v=v||N,o,i,l,a,s,_),g=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&null!=m.__k&&m.__k===v.__k?m.__d=s=h(m,s,t):s=y(t,m,v,x,g,s),_||"option"!==n.type?"function"==typeof n.type&&(n.__d=s):t.value=""):s&&v.__e==s&&s.parentNode!=t&&(s=f(v))}for(n.__e=b,p=A;p--;)null!=x[p]&&("function"==typeof n.type&&null!=x[p].__e&&x[p].__e==n.__d&&(n.__d=f(r,p+1)),O(x[p],x[p]));if(k)for(p=0;p<k.length;p++)w(k[p],k[++p],k[++p])}function h(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,e="function"==typeof o.type?h(o,e,n):y(n,o,o,t.__k,o.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function y(t,e,n,r,o,i){var u,l,c;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||F.test(e)?n:n+"px"}function g(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:b,i):t.removeEventListener(e,i?k:b,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function b(t){this.l[t.type+!1](T.event?T.event(t):t)}function k(t){this.l[t.type+!0](T.event?T.event(t):t)}function C(t,e,n,o,i,u,l,f,s){var _,p,h,v,y,m,g,b,k,C,x,w=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,f=e.__e=n.__e,e.__h=null,u=[f]),(_=T.__b)&&_(e);try{t:if("function"==typeof w){if(b=e.props,k=(_=w.contextType)&&o[_.__c],C=_?k?k.props.value:_.__:o,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in w&&w.prototype.render?e.__c=p=new w(b,C):(e.__c=p=new a(b,C),p.constructor=w,p.render=j),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=w.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,w.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,h)null==w.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||e.__v===n.__v){p.props=b,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=C,p.props=b,p.state=p.__s,(_=T.__r)&&_(e),p.__d=!1,p.__v=e,p.__P=t,_=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),x=null!=_&&_.type===c&&null==_.key?_.props.children:_,d(t,Array.isArray(x)?x:[x],e,n,o,i,u,l,f,s),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=A(n.__e,e,n,o,i,u,l,s);(_=T.diffed)&&_(e)}catch(t){e.__v=null,(s||null!=u)&&(e.__e=f,e.__h=!!s,u[u.indexOf(f)]=null),T.__e(t,e,n)}}function x(t,e){T.__c&&T.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){T.__e(t,e.__v)}}))}function A(t,e,n,r,i,u,l,c){var a,f,s,_,p=n.props,h=e.props,v=e.type,y=0;if("svg"===v&&(i=!0),null!=u)for(;y<u.length;y++)if((a=u[y])&&(a===t||(v?a.localName==v:3==a.nodeType))){t=a,u[y]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),u=null,c=!1}if(null===v)p===h||c&&t.data===h||(t.data=h);else{if(u=u&&W.slice.call(t.childNodes),f=(p=n.props||N).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!c){if(null!=u)for(p={},_=0;_<t.attributes.length;_++)p[t.attributes[_].name]=t.attributes[_].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)}(t,h,p,i,c),s)e.__k=[];else if(y=e.props.children,d(t,Array.isArray(y)?y:[y],e,n,r,i&&"foreignObject"!==v,u,l,t.firstChild,c),null!=u)for(y=u.length;y--;)null!=u[y]&&o(u[y]);c||("value"in h&&void 0!==(y=h.value)&&(y!==t.value||"progress"===v&&!y)&&g(t,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==t.checked&&g(t,"checked",y,p.checked,!1))}return t}function w(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){T.__e(t,n)}}function O(t,e,n){var r,i,u;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||w(r,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(u=0;u<r.length;u++)r[u]&&O(r[u],e,n);null!=i&&o(i)}function j(t,e,n){return this.constructor(t,n)}function P(t,e,n){var r,o,u;T.__&&T.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],C(e,t=(!r&&n||e).__k=i(c,null,[t]),o||N,N,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?W.slice.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),x(u,t)}function S(t,e){P(t,e,S)}function U(t,e,n){var o,i,l,c=arguments,a=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:a[l]=e[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(c[l]);return null!=n&&(a.children=n),u(t.type,a,o||t.key,i||t.ref,null)}function E(t,e){var n={__c:e="__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(_)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return P})),n.d(e,"hydrate",(function(){return S})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return c})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return L})),n.d(e,"Component",(function(){return a})),n.d(e,"cloneElement",(function(){return U})),n.d(e,"createContext",(function(){return E})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return T}));var T,L,R,M,D,I,N={},W=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t},__v:0},L=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),_(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},a.prototype.render=c,R=[],M="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,I=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=r.hydrate,l=function(t){return t&&t.default?t.default:t},c=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof l(n("qVkA"))){var a=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("qVkA")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var f={preRenderData:e},s=e.url?c(e.url):"",_=u&&s===c(location.pathname);a=(_?u:i)(o(t,{CLI_DATA:f}),document.body,a)}()}},qVkA:function(t,e,n){"use strict";n.r(e);n("GFNa");var r=n("dmYQ");e.default=r.a}});
//# sourceMappingURL=bundle.0643a.js.map