module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="qVkA")}({"7Qst":function(t,e,n){"use strict";function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return{enumerable:!0,value:t}}function c(t){return{enumerable:!0,writable:!0,value:t}}n.d(e,"c",(function(){return m})),n.d(e,"e",(function(){return E})),n.d(e,"d",(function(){return M})),n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return w}));var a={},u=function(){return!0},_=function(){return{}},l=function(t){return t},f=function(t,e,n,r){return t.apply(n,r)&&e.apply(n,r)},s=function(t,e,n,r){var o=r[0],i=r[1];return e.call(n,t.call(n,o,i),i)},p=function(t,e){return Object.freeze(Object.create(t,e))};function h(t,e,n){return t.reduce((function(t,e){return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return n(t,e,this,o)}}),e)}function b(t){return p(this,{fn:i(t)})}var d={},m=b.bind(d),v={};b.bind(v);function O(t,e){return e.filter((function(e){return t.isPrototypeOf(e)}))}function y(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var c=h(O(v,r).map((function(t){return t.fn})),u,f),a=h(O(d,r).map((function(t){return t.fn})),l,s);return p(this,{from:i(t),to:i(e),guards:i(c),reducers:i(a)})}var g={},j={},E=y.bind(g);y.bind(j,null);function C(t,e,n){return D(e,t,n,this.immediates)||t}function P(t){for(var e,n=new Map,o=r(t);!(e=o()).done;){var i=e.value;n.has(i.from)||n.set(i.from,[]),n.get(i.from).push(i)}return n}var k={enter:l};function M(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=O(g,e),o=O(j,e),c={final:i(0===e.length),transitions:i(P(r))};return o.length&&(c.immediates=i(o),c.enter=i(C)),p(k,c)}var A={get state(){return{name:this.current,value:this.states[this.current]}}};function x(t,e,n){return void 0===n&&(n=_),"string"!=typeof t&&(n=e||_,e=t,t=Object.keys(e)[0]),a._create&&a._create(t,e),p(A,{context:i(n),current:i(t),states:i(e)})}function D(t,e,n,o){for(var c,a=t.context,u=r(o);!(c=u()).done;){var _=c.value,l=_.to,f=_.guards,s=_.reducers;if(f(a,n)){t.context=s.call(t,a,n);var h=e.original||e,b=p(h,{current:i(l),original:{value:h}});return b.state.value.enter(b,t,n)}}}var U={send:function(t){this.machine=function(t,e){var n=e.type||e,r=t.machine,o=r.state.value;return o.transitions.has(n)&&D(t,r,e,o.transitions.get(n))||r}(this,t),this.onChange(this)}};function w(t,e,n,r){var o=Object.create(U,{machine:c(t),context:c(t.context(n,r)),onChange:i(e)});return o.send=o.send.bind(o),o.machine=o.machine.state.value.enter(o.machine,o,r),o}},"9jVJ":function(module,__webpack_exports__,__webpack_require__){"use strict";var robot3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7Qst");function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach((function(e){_defineProperty(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var acuBuf=function(t,e){return _objectSpread(_objectSpread({},t),{},{buf:(t.buf+e.value).slice(0,10)})},AC=function(){return{buf:"",ans:0,op:""}},C=function(t){return _objectSpread(_objectSpread({},t),{},{buf:""})},machine=Object(robot3__WEBPACK_IMPORTED_MODULE_0__.a)("normal",{normal:Object(robot3__WEBPACK_IMPORTED_MODULE_0__.d)(Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("NUM","normal",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(acuBuf)),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("OP","accu",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)((function(t,e){return _objectSpread(_objectSpread({},t),{},{buf:"",op:e.value,ans:parseFloat(""==t.buf?"0":t.buf)})}))),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("AC","normal",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(AC)),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("C","normal",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(C))),accu:Object(robot3__WEBPACK_IMPORTED_MODULE_0__.d)(Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("NUM","accu",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(acuBuf)),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("OP","accu",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)((function(ctx,ev){return _objectSpread(_objectSpread({},ctx),{},{buf:"",op:ev.value,ans:eval(ctx.ans+ctx.op+parseFloat(ctx.buf))})}))),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("EVAL","result",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)((function(ctx,ev){var v=eval(ctx.ans+ctx.op+parseFloat(ctx.buf));return _objectSpread(_objectSpread({},ctx),{},{buf:v,ans:v,op:""})}))),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("AC","normal",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(AC)),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("C","accu",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(C))),result:Object(robot3__WEBPACK_IMPORTED_MODULE_0__.d)(Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("NUM","normal",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(acuBuf)),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("OP","accu",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)((function(t,e){return _objectSpread(_objectSpread({},t),{},{buf:"",op:e.value})}))),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("AC","normal",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(AC)),Object(robot3__WEBPACK_IMPORTED_MODULE_0__.e)("C","result",Object(robot3__WEBPACK_IMPORTED_MODULE_0__.c)(C)))},(function(t){return t}));__webpack_exports__.a=machine},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return p})),n.d(e,"getCurrentUrl",(function(){return b})),n.d(e,"route",(function(){return d})),n.d(e,"Router",(function(){return E})),n.d(e,"Route",(function(){return P})),n.d(e,"Link",(function(){return C})),n.d(e,"exec",(function(){return c}));var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function c(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,c=t.match(i),a={};if(c&&c[1])for(var u=c[1].split("&"),l=0;l<u.length;l++){var f=u[l].split("=");a[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=_(t.replace(i,"")),e=_(e||"");for(var s=Math.max(t.length,e.length),p=0;p<s;p++)if(e[p]&&":"===e[p].charAt(0)){var h=e[p].replace(/(^:|[+*?]+$)/g,""),b=(e[p].match(/[+*?]+$/)||o)[0]||"",d=~b.indexOf("+"),m=~b.indexOf("*"),v=t[p]||"";if(!v&&!m&&(b.indexOf("?")<0||d)){r=!1;break}if(a[h]=decodeURIComponent(v),d||m){a[h]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&a}function a(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,_(e).map(l).join(""));var e}(t),t.props}function _(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var f=null,s=[],p=[],h={};function b(){var t;return""+((t=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:h).pathname||"")+(t.search||"")}function d(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=s.length;e--;)if(s[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),f&&f[e]?f[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),m(t)}function m(t){for(var e=!1,n=0;n<s.length;n++)!0===s[n].routeTo(t)&&(e=!0);for(var r=p.length;r--;)p[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return d(e)}}function O(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return v(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(v(e))return y(t)}}while(e=e.parentNode)}}var j=!1;var E=function(t){function e(e){t.call(this,e),e.history&&(f=e.history),this.state={url:e.url||b()},j||("function"==typeof addEventListener&&(f||addEventListener("popstate",(function(){m(b())})),addEventListener("click",g)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){s.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;f&&(this.unlisten=f.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),s.splice(s.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(a).map((function(t){var o=c(e,t.props.path,t.props);if(o){if(!1!==n){var a={url:e,matches:o};return i(a,o),delete a.ref,delete a.key,Object(r.cloneElement)(t,a)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,c=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),a=c[0]||null,u=this.previousUrl;return i!==u&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:u,active:c,current:a})),a},e}(r.Component),C=function(t){return Object(r.createElement)("a",i({onClick:O},t))},P=function(t){return Object(r.createElement)(t.component,t)};E.subscribers=p,E.getCurrentUrl=b,E.route=d,E.Router=E,E.Route=P,E.Link=C,E.exec=c,e.default=E},"ox/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n("HteQ"),i=n("Y3FI");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=e.Match=function(t){function e(){var n,r;c(this,e);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=a(this,t.call.apply(t,[this].concat(i))),r.update=function(t){r.nextUrl=t,r.setState({})},a(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){i.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,i.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,i.exec)(n,t.path,{})})},e}(o.Component),_=function(t){var e=t.activeClassName,n=t.path,c=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,o.h)(u,{path:n||c.href},(function(t){var n=t.matches;return(0,o.h)(i.Link,r({},c,{class:[c.class||c.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=_,e.default=u,u.Link=_},qVkA:function(t,e,n){"use strict";n.r(e);n("GFNa");var r,o,i,c=n("HteQ"),a=n("Y3FI"),u=0,_=[],l=c.options.__b,f=c.options.__r,s=c.options.diffed,p=c.options.__c,h=c.options.unmount;function b(t,e){c.options.__h&&c.options.__h(o,t,u||e),u=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function d(t){return u=1,m(C,t)}function m(t,e,n){var i=b(r++,2);return i.t=t,i.__c||(i.__=[n?n(e):C(void 0,e),function(t){var e=i.t(i.__[0],t);i.__[0]!==e&&(i.__=[e,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}function v(t,e){var n=b(r++,3);!c.options.__s&&E(n.__H,e)&&(n.__=t,n.__H=e,o.__H.__h.push(n))}function O(){_.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(e){t.__H.__h=[],c.options.__e(e,t.__v)}})),_=[]}c.options.__b=function(t){o=null,l&&l(t)},c.options.__r=function(t){f&&f(t),r=0;var e=(o=t.__c).__H;e&&(e.__h.forEach(g),e.__h.forEach(j),e.__h=[])},c.options.diffed=function(t){s&&s(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==_.push(e)&&i===c.options.requestAnimationFrame||((i=c.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),y&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);y&&(e=requestAnimationFrame(n))})(O)),o=void 0},c.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(g),t.__h=t.__h.filter((function(t){return!t.__||j(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],c.options.__e(n,t.__v)}})),p&&p(t,e)},c.options.unmount=function(t){h&&h(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(g)}catch(t){c.options.__e(t,e.__v)}};var y="function"==typeof requestAnimationFrame;function g(t){var e=o;"function"==typeof t.__c&&t.__c(),o=e}function j(t){var e=o;t.__c=t.__(),o=e}function E(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function C(t,e){return"function"==typeof e?e(t):e}function P(t,e){for(var n in e)t[n]=e[n];return t}function k(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}function M(t){this.props=t}(M.prototype=new c.Component).isPureReactComponent=!0,M.prototype.shouldComponentUpdate=function(t,e){return k(this.props,t)||k(this.state,e)};var A=c.options.__b;c.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),A&&A(t)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var x=function(t,e){return null==t?null:Object(c.toChildArray)(Object(c.toChildArray)(t).map(e))},D=(c.toChildArray,c.options.__e);c.options.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e);D(t,e,n)};var U=c.options.unmount;function w(){this.__u=0,this.t=null,this.__b=null}function R(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function N(){this.u=null,this.o=null}c.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&!0===t.__h&&(t.type=null),U&&U(t)},(w.prototype=new c.Component).__c=function(t,e){var n=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=R(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(a):a())};n.__R=c;var a=function(){if(!--r.__u){if(r.state.__e){var t=r.state.__e;r.__v.__k[0]=function t(e,n,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)})),e.__c&&e.__c.__P===n&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}(t,t.__c.__P,t.__c.__O)}var e;for(r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()}},u=!0===e.__h;r.__u++||u||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(c,c)},w.prototype.componentWillUnmount=function(){this.t=[]},w.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,n,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),e.__c.__H=null),null!=(e=P({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)}))),e}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__e&&Object(c.createElement)(c.Fragment,null,t.fallback);return o&&(o.__h=null),[Object(c.createElement)(c.Fragment,null,e.__e?null:t.children),o]};var L=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(N.prototype=new c.Component).__e=function(t){var e=this,n=R(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),L(e,t,r)):o()};n?n(i):i()}},N.prototype.render=function(t){this.u=null,this.o=new Map;var e=Object(c.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},N.prototype.componentDidUpdate=N.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,n){L(t,n,e)}))};var S="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,T=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,I=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(t)};c.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(c.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var K=c.options.event;function B(){}function W(){return this.cancelBubble}function F(){return this.defaultPrevented}c.options.event=function(t){return K&&(t=K(t)),t.persist=B,t.isPropagationStopped=W,t.isDefaultPrevented=F,t.nativeEvent=t};var H={configurable:!0,get:function(){return this.class}},V=c.options.vnode;c.options.vnode=function(t){var e=t.type,n=t.props,r=n;if("string"==typeof e){for(var o in r={},n){var i=n[o];"value"===o&&"defaultValue"in n&&null==i||("defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!I(n.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():T.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(c.toChildArray)(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=Object(c.toChildArray)(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),t.props=r}e&&n.class!=n.className&&(H.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",H)),t.$$typeof=S,V&&V(t)};var $=c.options.__r;c.options.__r=function(t){$&&$(t),t.__c};"object"==typeof performance&&"function"==typeof performance.now&&performance.now.bind(performance);c.Fragment,c.createElement,c.createContext,c.createRef,c.Fragment,c.Component,c.Fragment;var q=n("7Qst"),Q=Object.create,z=Object.freeze;function G(t){return{enumerable:!0,value:t}}function Y(t){return z(Q(t.machine.state,{context:G(t.context||{}),service:G(t)}))}var J,Z,X=(J=v,Z=d,function(t,e){var n=Z(t),r=n[0],o=n[1],i=Z(_),c=i[0],a=i[1],u=!0;function _(t,n){var o=t||r;return Object(q.b)(o,(function(t){u&&s(Y(t.child||t))}),n||e)}var l=Z(Y(c)),f=l[0],s=l[1];return J((function(){if(r!==t){o(t);var n=_(t,e);a(n),s(Y(n))}return function(){u=!1}}),[t]),[f,c.send,c]}),tt=n("9jVJ");function et(){return(et=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var nt=function(t){var e=t.className,n=void 0===e?"":e,r=t.keyName,o=t.preset,i={default:"bg-white text-gray-800",primary:"bg-principal text-white",back:"bg-gray-800 text-white"}[(void 0===o?"default":o)||"default"];return Object(c.h)("button",et({},t,{className:"w-full h-full text-2xl "+i+" "+n,name:r}),r)},rt=function(){var t=X(tt.a,{buf:"",ans:0,op:""}),e=t[0],n=t[1],r=function(t){console.log("num pressed:",t.target.name),n({type:"NUM",value:t.target.name})},o=function(t){console.log("op pressed:",t.target.name),n({type:"OP",value:t.target.name})};return console.log(e),Object(c.h)("div",{className:"w-full h-full flex flex-col "},Object(c.h)("div",{className:"w-full h-44 md:h-56 lg:h-64 p-2 bg-gray-900 text-white text-right text-7xl md:text-8xl break-words"},""!=e.context.buf?parseFloat(e.context.buf).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:5}):"0"),Object(c.h)("div",{className:"keypad flex-grow grid grid-cols-4",style:{gridGap:"1px"}},Object(c.h)(nt,{keyName:"AC",onClick:function(t){console.log("AC"),n("AC")}}),Object(c.h)(nt,{keyName:"C",onClick:function(t){console.log("C"),n("C")}}),Object(c.h)(nt,{keyName:"/",preset:"primary",onClick:o}),Object(c.h)(nt,{keyName:"x",preset:"primary",onClick:o}),Object(c.h)(nt,{keyName:"7",onClick:r}),Object(c.h)(nt,{keyName:"8",onClick:r}),Object(c.h)(nt,{keyName:"9",onClick:r}),Object(c.h)(nt,{keyName:"+",preset:"primary",onClick:o}),Object(c.h)(nt,{keyName:"4",onClick:r}),Object(c.h)(nt,{keyName:"5",onClick:r}),Object(c.h)(nt,{keyName:"6",onClick:r}),Object(c.h)(nt,{keyName:"-",preset:"primary",onClick:o}),Object(c.h)(nt,{keyName:"1",onClick:r}),Object(c.h)(nt,{keyName:"2",onClick:r}),Object(c.h)(nt,{keyName:"3",onClick:r}),Object(c.h)(nt,{keyName:"=",className:"row-span-2",preset:"primary",onClick:function(t){console.log("EVAL"),n("EVAL")}}),Object(c.h)(nt,{keyName:"0",className:"col-span-2",onClick:r}),Object(c.h)(nt,{keyName:".",onClick:r})))},ot=function(){var t=d(!1),e=t[0],n=t[1];return Object(c.h)("div",{className:"flex relative"},Object(c.h)("div",{className:"w-full h-screen lg:w-2/3 lg:p-4 lg:max-w-2xl"},Object(c.h)(rt,null)),Object(c.h)("div",{className:" lg:block p-4 bg-white fixed lg:static z-10 "+(e?"":"hidden")},Object(c.h)("button",{onClick:function(){return n(!1)},className:"absolute top-0 right-0 m-2 text-lg lg:hidden"},"x"),Object(c.h)("h1",{className:"text-4xl mb-4"},"Calculadora:"),Object(c.h)("p",{className:""},"Calculadora con las funciones básicas como suma, resta, multiplicación y división."),Object(c.h)("p",{className:"mt-2"},"por ",Object(c.h)("b",null,"Sebastian Tabares"))),Object(c.h)("button",{onClick:function(){return n(!0)},className:"p-2 m-2 absolute top-o left-0 bg-principal rounded-full lg:hidden"}," INFO"))},it=n("ox/y"),ct=function(){return Object(c.h)("div",null,Object(c.h)("h1",null,"Error 404"),Object(c.h)("p",null,"That page doesn't exist."),Object(c.h)(it.Link,{href:"/"},Object(c.h)("h4",null,"Back to Home")))},at=function(){return Object(c.h)("div",{id:"preact_root"},Object(c.h)(a.Router,null,Object(c.h)(a.Route,{path:"/",component:ot}),Object(c.h)(ct,{default:!0})))};e.default=at}});
//# sourceMappingURL=ssr-bundle.js.map