(self.webpackJsonp=self.webpackJsonp||[]).push([[21],{164:function(e,t,n){"use strict";n.r(t);var s=n(11);const a=e=>{window.addEventListener("connection-status",t=>e.fireMessage({type:"connection-status",payload:{event:t.detail}}))},r=e=>window.addEventListener("haptic",t=>e.fireMessage({type:"haptic",payload:{hapticType:t.detail}}));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o="externalBus";class w{constructor(){i(this,"commands",{}),i(this,"cache",{}),i(this,"msgId",0)}attach(){a(this),r(this),window[o]=e=>this.receiveMessage(e)}sendMessage(e){const t=++this.msgId;return e.id=t,this.fireMessage(e),new Promise((e,n)=>{this.commands[t]={resolve:e,reject:n}})}fireMessage(e){e.id||(e.id=++this.msgId),this._sendExternal(e)}receiveMessage(e){const t=this.commands[e.id];t?"result"===e.type&&(e.success?t.resolve(e.result):t.reject(e.error)):console.warn("Received unknown msg ID",e.id)}_sendExternal(e){window.externalApp?window.externalApp.externalBus(JSON.stringify(e)):window.webkit.messageHandlers.externalBus.postMessage(e)}}n.d(t,"createExternalAuth",function(){return p});const c="externalAuthSetToken",l="externalAuthRevokeToken";if(!window.externalApp&&!window.webkit)throw new Error("External auth requires either externalApp or webkit defined on Window object.");class d extends s.a{constructor(e){var t,n,s;super({hassUrl:e,clientId:"",refresh_token:"",access_token:"",expires_in:0,expires:0}),s=void 0,(n="external")in(t=this)?Object.defineProperty(t,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[n]=s}async refreshAccessToken(){const e={callback:c},t=new Promise((e,t)=>{window[c]=(n,s)=>n?e(s):t(s)});await 0,window.externalApp?window.externalApp.getExternalAuth(JSON.stringify(e)):window.webkit.messageHandlers.getExternalAuth.postMessage(e);const n=await t;this.data.access_token=n.access_token,this.data.expires=1e3*n.expires_in+Date.now()}async revoke(){const e={callback:l},t=new Promise((e,t)=>{window[l]=(n,s)=>n?e(s):t(s)});await 0,window.externalApp?window.externalApp.revokeExternalAuth(JSON.stringify(e)):window.webkit.messageHandlers.revokeExternalAuth.postMessage(e),await t}}const p=e=>{const t=new d(e);return(window.externalApp&&window.externalApp.externalBus||window.webkit&&window.webkit.messageHandlers.externalBus)&&(t.external=new w,t.external.attach()),t}}}]);
//# sourceMappingURL=chunk.e385dce63b36783b2eeb.js.map