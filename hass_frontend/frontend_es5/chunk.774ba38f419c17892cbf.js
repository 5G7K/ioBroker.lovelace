(self.webpackJsonp=self.webpackJsonp||[]).push([[27],{768:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(119),o=(n(105),n(149),n(158),n(175),n(190),n(197),n(293)),a=n(510),s=n(201),c=n(13),l=n(48),u=n(511),d=n(174),f=n(115);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){var e=x(["\n      .banner {\n        color: var(--primary-text-color);\n        background-color: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        padding: 16px 8px;\n        text-align: center;\n      }\n      h1 {\n        color: var(--primary-text-color);\n        font-size: 24px;\n        letter-spacing: -0.012em;\n        margin-bottom: 0;\n        padding: 0 8px;\n      }\n      .content {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 4px;\n      }\n      ha-card {\n        margin: 4px;\n        width: 100%;\n        max-width: 300px;\n      }\n      .card-content {\n        padding-bottom: 12px;\n      }\n      state-info {\n        cursor: pointer;\n      }\n      ha-switch {\n        padding: 8px 0;\n      }\n\n      @media all and (max-width: 450px) {\n        ha-card {\n          max-width: 100%;\n        }\n      }\n    "]);return h=function(){return e},e}function y(){var e=x(["\n                  <h1>\n                    ",'\n                  </h1>\n                  <div class="content">',"</div>\n                "]);return y=function(){return e},e}function m(){var e=x(["\n                  <h1>\n                    ",'\n                  </h1>\n                  <div class="content">',"</div>\n                "]);return m=function(){return e},e}function v(){var e=x(['\n                <div class="banner">\n                  ',"\n                </div>\n              "]);return v=function(){return e},e}function g(){var e=x(['\n                <paper-icon-button\n                  slot="toolbar-icon"\n                  icon="hass:tune"\n                  @click=',"\n                ></paper-icon-button>\n              "]);return g=function(){return e},e}function b(){var e=x(["\n            selected\n          "]);return b=function(){return e},e}function k(){var e=x(['\n      <hass-subpage header="','">\n        <span slot="toolbar-icon">\n          ',"","\n        </span>\n        ","\n        ","\n          ","\n          ","\n        </div>\n      </hass-subpage>\n    "]);return k=function(){return e},e}function w(){var e=x(["\n                  <ha-switch\n                    .entityId=","\n                    .checked=","\n                    @change=","\n                  >\n                    ","\n                  </ha-switch>\n                "]);return w=function(){return e},e}function _(){var e=x(['\n        <ha-card>\n          <div class="card-content">\n            <state-info\n              .hass=',"\n              .stateObj=","\n              secondary-line\n              @click=","\n            >\n              ","\n            </state-info>\n            <ha-switch\n              .entityId=","\n              .disabled=","\n              .checked=","\n              @change=","\n            >\n              ","\n            </ha-switch>\n            ","\n          </div>\n        </ha-card>\n      "]);return _=function(){return e},e}function E(){var e=x(["\n        <hass-loading-screen></hass-loading-screen>\n      "]);return E=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t,n=z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function C(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function A(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function D(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function z(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){return void 0===e.should_expose||e.should_expose};!function(e,t,n,r){var i=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(n){t.forEach(function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach(function(r){t.forEach(function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!P(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=z(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),n=D(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:n,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=D(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t(function(e){i.initializeInstanceElements(e,s.elements)},n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(A(o.descriptor)||A(i.descriptor)){if(P(o)||P(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(P(o)){if(P(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}C(o,i)}else t.push(o)}return t}(a.d.map(S)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([Object(r.d)("cloud-google-assistant")],function(e,t){var n=function(n){function r(){var t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return n=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?O(e):t}(this,(t=R(r)).call.apply(t,[this].concat(o))),e(O(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(r,t),r}();return{F:n,d:[{kind:"field",decorators:[Object(r.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"cloudStatus",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"narrow",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_entities",value:void 0},{kind:"field",decorators:[Object(r.f)()],key:"_entityConfigs",value:function(){return{}}},{kind:"field",key:"_popstateSyncAttached",value:function(){return!1}},{kind:"field",key:"_popstateReloadStatusAttached",value:function(){return!1}},{kind:"field",key:"_isInitialExposed",value:void 0},{kind:"field",key:"_getEntityFilterFunc",value:function(){return Object(i.a)(function(e){return Object(a.a)(e.include_domains,e.include_entities,e.exclude_domains,e.exclude_entities)})}},{kind:"method",key:"render",value:function(){var e=this;if(void 0===this._entities)return Object(r.e)(E());var t=Object(a.b)(this.cloudStatus.google_entities),n=this._getEntityFilterFunc(this.cloudStatus.google_entities),i=this._isInitialExposed||new Set,o=void 0===this._isInitialExposed,s=0,c=[],l=[];return this._entities.forEach(function(a){var u=e.hass.states[a.entity_id],d=e._entityConfigs[a.entity_id]||{},f=t?F(d):n(a.entity_id);f&&(s++,o&&i.add(a.entity_id)),(i.has(a.entity_id)?c:l).push(Object(r.e)(_(),e.hass,u,e._showMoreInfo,a.traits.map(function(e){return e.substr(e.lastIndexOf(".")+1)}).join(", "),a.entity_id,!t,f,e._exposeChanged,e.hass.localize("ui.panel.config.cloud.google.expose"),a.might_2fa?Object(r.e)(w(),a.entity_id,Boolean(d.disable_2fa),e._disable2FAChanged,e.hass.localize("ui.panel.config.cloud.google.disable_2FA")):""))}),o&&(this._isInitialExposed=i),Object(r.e)(k(),this.hass.localize("ui.panel.config.cloud.google.title"),s,this.narrow?"":Object(r.e)(b()),t?Object(r.e)(g(),this._openDomainToggler):"",t?"":Object(r.e)(v(),this.hass.localize("ui.panel.config.cloud.google.banner")),c.length>0?Object(r.e)(m(),this.hass.localize("ui.panel.config.cloud.google.exposed_entities"),c):"",l.length>0?Object(r.e)(y(),this.hass.localize("ui.panel.config.cloud.google.not_exposed_entities"),l):"")}},{kind:"method",key:"firstUpdated",value:function(e){T(R(n.prototype),"firstUpdated",this).call(this,e),this._fetchData()}},{kind:"method",key:"updated",value:function(e){T(R(n.prototype),"updated",this).call(this,e),e.has("cloudStatus")&&(this._entityConfigs=this.cloudStatus.prefs.google_entity_configs)}},{kind:"method",key:"_fetchData",value:function(){var e,t=this;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.hass.callWS({type:"cloud/google_assistant/entities"}));case 2:(e=n.sent).sort(function(e,n){var r=t.hass.states[e.entity_id],i=t.hass.states[n.entity_id];return Object(s.b)(r?Object(d.a)(r):e.entity_id,i?Object(d.a)(i):n.entity_id)}),this._entities=e;case 5:case"end":return n.stop()}},null,this)}},{kind:"method",key:"_showMoreInfo",value:function(e){var t=e.currentTarget.stateObj.entity_id;Object(c.a)(this,"hass-more-info",{entityId:t})}},{kind:"method",key:"_exposeChanged",value:function(e){var t,n;return regeneratorRuntime.async(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.currentTarget.entityId,n=e.target.checked,r.next=4,regeneratorRuntime.awrap(this._updateExposed(t,n));case 4:case"end":return r.stop()}},null,this)}},{kind:"method",key:"_updateExposed",value:function(e,t){var n;return regeneratorRuntime.async(function(r){for(;;)switch(r.prev=r.next){case 0:if(n=F(this._entityConfigs[e]||{}),t!==n){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,regeneratorRuntime.awrap(this._updateConfig(e,{should_expose:t}));case 5:this._ensureEntitySync();case 6:case"end":return r.stop()}},null,this)}},{kind:"method",key:"_disable2FAChanged",value:function(e){var t,n,r;return regeneratorRuntime.async(function(i){for(;;)switch(i.prev=i.next){case 0:if(t=e.currentTarget.entityId,n=e.target.checked,r=Boolean((this._entityConfigs[t]||{}).disable_2fa),n!==r){i.next=5;break}return i.abrupt("return");case 5:return i.next=7,regeneratorRuntime.awrap(this._updateConfig(t,{disable_2fa:n}));case 7:case"end":return i.stop()}},null,this)}},{kind:"method",key:"_updateConfig",value:function(e,t){var n;return regeneratorRuntime.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(Object(o.j)(this.hass,e,t));case 2:n=r.sent,this._entityConfigs=Object.assign({},this._entityConfigs,(s=n,(a=e)in(i={})?Object.defineProperty(i,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[a]=s,i)),this._ensureStatusReload();case 5:case"end":return r.stop()}var i,a,s},null,this)}},{kind:"method",key:"_openDomainToggler",value:function(){var e=this;Object(u.a)(this,{domains:this._entities.map(function(e){return Object(f.a)(e.entity_id)}).filter(function(e,t,n){return n.indexOf(e)===t}),toggleDomain:function(t,n){e._entities.forEach(function(r){Object(f.a)(r.entity_id)===t&&e._updateExposed(r.entity_id,n)})}})}},{kind:"method",key:"_ensureStatusReload",value:function(){if(!this._popstateReloadStatusAttached){this._popstateReloadStatusAttached=!0;var e=this.parentElement;window.addEventListener("popstate",function(){return Object(c.a)(e,"ha-refresh-cloud-status")},{once:!0})}}},{kind:"method",key:"_ensureEntitySync",value:function(){var e=this;if(!this._popstateSyncAttached){this._popstateSyncAttached=!0;var t=this.parentElement;window.addEventListener("popstate",function(){Object(l.a)(t,{message:e.hass.localize("ui.panel.config.cloud.googe.sync_to_google")}),Object(o.a)(e.hass)},{once:!0})}}},{kind:"get",static:!0,key:"styles",value:function(){return Object(r.c)(h())}}]}},r.a)}}]);
//# sourceMappingURL=chunk.774ba38f419c17892cbf.js.map