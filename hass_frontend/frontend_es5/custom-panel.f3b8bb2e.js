!function(e){function n(n){for(var t,o,u=n[0],c=n[1],i=0,l=[];i<u.length;i++)o=u[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(a&&a(n);l.length;)l.shift()()}var t={},r={34:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=u);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+"chunk."+{29:"e84d934aad1862d4da61",77:"cf5000bdd51b462452ec",78:"a3899f8c0f1a4997bd83",132:"216c8320005a66af3bae"}[e]+".js"}(e);var a=new Error;c=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",a.name="ChunkLoadError",a.type=o,a.request=u,t[1](a)}r[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:i})},12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/frontend_es5/",o.oe=function(e){throw console.error(e),e};var u=self.webpackJsonp=self.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var a=c;o(o.s=173)}({13:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(e,n,t,r){r=r||{},t=null==t?{}:t;var o=new Event(n,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return o.detail=t,e.dispatchEvent(o),o}},139:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(90);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],r=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={},c=function(e){if(e.html_url){var n=[t.e(77).then(t.bind(null,175))];return e.embed_iframe||n.push(Promise.all([t.e(132),t.e(78)]).then(t.bind(null,136))),Promise.all(n).then(function(n){return(0,o(n,1)[0].importHrefPromise)(e.html_url)})}return e.js_url?(e.js_url in u||(u[e.js_url]=Object(r.b)(e.js_url)),u[e.js_url]):e.module_url?Object(r.c)(e.module_url):Promise.reject("No valid url found in panel config.")}},140:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(e){var n="html_url"in e?"ha-panel-".concat(e.name):e.name;return document.createElement(n)}},141:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(e,n){"setProperties"in e?e.setProperties(n):Object.keys(n).forEach(function(t){e[t]=n[t]})}},173:function(e,n,t){"use strict";t.r(n);var r,o,u=t(90),c=t(139),i=t(140),a=t(141),l=t(13),s="customElements"in window&&"content"in document.createElement("template");function d(e){o&&Object(a.a)(o,e)}function f(e,n){var t=document.createElement("style");t.innerHTML="body{margin:0}",document.head.appendChild(t);var a=e.config._panel_custom,f=Promise.resolve();s||(f=f.then(function(){return Object(u.b)("".concat(/static/,"polyfills/webcomponents-bundle.js"))})),(f=f.then(function(){return window.loadES5Adapter()})).then(function(){return Object(c.a)(a)}).then(function(){return r||Promise.resolve()}).then(function(){(o=Object(i.a)(a)).addEventListener("hass-toggle-menu",function(e){window.parent.customPanel&&Object(l.a)(window.parent.customPanel,e.type,e.detail)}),window.addEventListener("location-changed",function(e){window.parent.customPanel&&window.parent.customPanel.navigate(window.location.pathname,!!e.detail&&e.detail.replace)}),d(Object.assign({panel:e},n)),document.body.appendChild(o)},function(n){console.error(n,e),alert("Unable to load the panel source: ".concat(n,"."))})}window.loadES5Adapter=function(){return r||(r=Promise.all([Object(u.b)("".concat(/static/,"polyfills/custom-elements-es5-adapter.js")).catch(),t.e(29).then(t.bind(null,167))])),r},document.addEventListener("DOMContentLoaded",function(){return window.parent.customPanel.registerIframe(f,d)},{once:!0})},90:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return u}),t.d(n,"c",function(){return c});var r=function(e,n,t){return new Promise(function(r,o){var u=document.createElement(e),c="src",i="body";switch(u.onload=function(){return r(n)},u.onerror=function(){return o(n)},e){case"script":u.async=!0,t&&(u.type=t);break;case"link":u.type="text/css",u.rel="stylesheet",c="href",i="head"}u[c]=n,document[i].appendChild(u)})},o=function(e){return r("link",e)},u=function(e){return r("script",e)},c=function(e){return r("script",e,"module")}}});
//# sourceMappingURL=custom-panel.f3b8bb2e.js.map