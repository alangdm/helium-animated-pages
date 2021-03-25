var t,e;const o=`lit$${(Math.random()+"").slice(9)}$`,i="?"+o,a=`<${i}>`,s=document,n=(t="")=>s.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,l=Array.isArray,h=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d=/-->/g,m=/>/g,c=/>|[ 	\n\r](?:([^\0-- "'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,p=/'/g,u=/"/g,f=/^(?:script|style|textarea)$/i,g=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),y=new Map,b=s.createTreeWalker(s,133,null,!1),C=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",l=h;for(let e=0;e<i;e++){const i=t[e];let v,y,b=-1,C=0;for(;C<i.length&&(l.lastIndex=C,y=l.exec(i),null!==y);){var g;C=l.lastIndex,l===h?"!--"===y[1]?l=d:void 0!==y[1]?l=m:void 0!==y[2]?(f.test(y[2])&&(n=RegExp("</"+y[2],"g")),l=c):void 0!==y[3]&&(l=c):l===c?">"===y[0]?(l=null!=(g=n)?g:h,b=-1):void 0===y[1]?b=-2:(b=l.lastIndex-y[2].length,v=y[1],l=void 0===y[3]?c:'"'===y[3]?u:p):l===u||l===p?l=c:l===d||l===m?l=h:(l=c,n=void 0)}const x=l===c&&t[e+1].startsWith("/>")?" ":"";r+=l===h?i+a:b>=0?(s.push(v),i.slice(0,b)+"$lit$"+i.slice(b)+o+x):i+o+(-2===b?(s.push(void 0),e):x)}return[r+(t[i]||"<?>")+(2===e?"</svg>":""),s]};class x{constructor({strings:t,_$litType$:e},a){let s;this.o=[],this.C=a;let r=0,l=0,h=0;const d=t.length-1,[m,c]=C(t,e);if(this.B=this.A(m),b.currentNode=this.B.content,2===e){const t=this.B.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=b.nextNode())&&l<d;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(o)){const i=c[h++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(o),e=/([.?@])?(.*)/.exec(i);this.o.push({h:1,l:r,u:e[2],v:t,p:"."===e[1]?L:"?"===e[1]?k:"@"===e[1]?A:T}),l+=t.length-1}else this.o.push({h:6,l:r})}for(const e of t)s.removeAttribute(e)}if(f.test(s.tagName)){const t=s.textContent.split(o),e=t.length-1;if(e>0){s.textContent="";for(let o=0;o<e;o++)s.append(t[o]||n()),this.o.push({h:2,l:++r}),l++;s.append(t[e]||n())}}}else if(8===s.nodeType)if(s.data===i)l++,this.o.push({h:2,l:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(o,t+1));)this.o.push({h:7,l:r}),l++,t+=o.length-1}r++}}A(t){const e=s.createElement("template");return e.innerHTML=t,e}}function S(t,e,o=t,i){var a,s,n,l,h;if(e===g)return e;let d=void 0!==i?null==(a=o.Σ_)?void 0:a[i]:o.Σm;const m=r(e)?void 0:e._$litDirective$;return(null==(s=d)?void 0:s.constructor)!==m&&(null!=(n=d)&&null!=n.S&&n.S(!1),d=void 0===m?void 0:new m({...t,$:t,Q:o,g:i}),void 0!==i?(null!=(l=(h=o).Σ_)?l:h.Σ_=[])[i]=d:o.Σm=d),void 0!==d&&(e=S(t,d.W(t,e.values),d,i)),e}class _{constructor(t,e){this.o=[],this.R=void 0,this.G=t,this.Q=e}k(t){const{B:{content:e},o:o}=this.G,i=s.importNode(e,!0);b.currentNode=i;let a=b.nextNode(),n=0,r=0,l=o[0];for(;void 0!==l&&null!==a;){if(n===l.l){let e;2===l.h?e=new w(a,a.nextSibling,this,t):1===l.h?e=new l.p(a,l.u,l.v,this,t):6===l.h&&(e=new O(a,this,t)),this.o.push(e),l=o[++r]}void 0!==l&&n!==l.l&&(a=b.nextNode(),n++)}return i}j(t){let e=0;for(const o of this.o)void 0!==o&&(void 0!==o.strings?(o.M(t,o,e),e+=o.strings.length-2):o.M(t[e])),e++}}class w{constructor(t,e,o,i){this.type=2,this.R=void 0,this.D=t,this.E=e,this.Q=o,this.options=i}setConnected(t){var e;null==(e=this.T)||e.call(this,t)}get parentNode(){return this.D.parentNode}M(t,e=this){t=S(this,t,e),r(t)?t===v||null==t||""===t?(this.L!==v&&this.V(),this.L=v):t!==this.L&&t!==g&&this.Y(t):void 0!==t._$litType$?this.q(t):void 0!==t.nodeType?this.X(t):(t=>l(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.tt(t):this.Y(t)}it(t,e=this.E){return this.D.parentNode.insertBefore(t,e)}X(t){this.L!==t&&(this.V(),this.L=this.it(t))}Y(t){const e=this.D.nextSibling;null!==e&&3===e.nodeType&&(null===this.E?null===e.nextSibling:e===this.E.previousSibling)?e.data=t:this.X(s.createTextNode(t)),this.L=t}q(t){var e;const{values:o,strings:i}=t,a=this.F(i,t);if((null==(e=this.L)?void 0:e.G)===a)this.L.j(o);else{const t=new _(a,this),e=t.k(this.options);t.j(o),this.X(e),this.L=t}}F(t,e){let o=y.get(t);return void 0===o&&y.set(t,o=new x(e)),o}tt(t){l(this.L)||(this.L=[],this.V());const e=this.L;let o,i=0;for(const a of t)i===e.length?e.push(o=new w(this.it(n()),this.it(n()),this,this.options)):o=e[i],o.M(a),i++;i<e.length&&(this.V(o&&o.E.nextSibling,i),e.length=i)}V(t=this.D.nextSibling,e){for(null==(o=this.T)||o.call(this,!1,!0,e);t&&t!==this.E;){var o;const e=t.nextSibling;t.remove(),t=e}}}class T{constructor(t,e,o,i,a){this.type=1,this.L=v,this.R=void 0,this.st=void 0,this.element=t,this.name=e,this.Q=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this.L=Array(o.length-1).fill(v),this.strings=o):this.L=v}get tagName(){return this.element.tagName}M(t,e=this,o,i){const a=this.strings;let s=!1;if(void 0===a)t=S(this,t,e,0),s=!r(t)||t!==this.L&&t!==g,s&&(this.L=t);else{const i=t;let l,h;for(t=a[0],l=0;l<a.length-1;l++){var n;h=S(this,i[o+l],e,l),h===g&&(h=this.L[l]),s||(s=!r(h)||h!==this.L[l]),h===v?t=v:t!==v&&(t+=(null!=(n=h)?n:"")+a[l+1]),this.L[l]=h}}s&&!i&&this.nt(t)}nt(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends T{constructor(){super(...arguments),this.type=3}nt(t){this.element[this.name]=t===v?void 0:t}}class k extends T{constructor(){super(...arguments),this.type=4}nt(t){t&&t!==v?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class A extends T{constructor(){super(...arguments),this.type=5}M(t,e=this){var o;if((t=null!=(o=S(this,t,e,0))?o:v)===g)return;const i=this.L,a=t===v&&i!==v||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==v&&(i===v||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this.L=t}handleEvent(t){var e,o;"function"==typeof this.L?this.L.call(null!=(e=null==(o=this.options)?void 0:o.host)?e:this.element,t):this.L.handleEvent(t)}}class O{constructor(t,e,o){this.element=t,this.type=6,this.R=void 0,this.st=void 0,this.Q=e,this.options=o}M(t){S(this,t)}}null!=globalThis.litHtmlPlatformSupport&&globalThis.litHtmlPlatformSupport(x,w),(null!=(t=(e=globalThis).litHtmlVersions)?t:e.litHtmlVersions=[]).push("2.0.0-pre.6");const R=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol();class F{constructor(t,e){if(e!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return R&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const P=new Map,$=(t,...e)=>{const o=e.reduce(((e,o,i)=>e+(t=>{if(t instanceof F)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]);let i=P.get(o);return void 0===i&&P.set(o,i=new F(o,I)),i},B=R?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new F(t+"",I))(e)})(t):t;var E,X;window.JSCompiler_renameProperty=(t,e)=>t;const Y={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},N=(t,e)=>e!==t&&(e==e||t==t),U={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:N};class D extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πh=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πl=null,this.u()}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this.Πp(o,e);void 0!==i&&(this.Πm.set(i,o),t.push(i))})),t}static createProperty(t,e=U){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const a=this[t];this[e]=i,this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||U}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(B(t))}else void 0!==t&&e.push(B(t));return e}static"Πp"(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){this.Πv=new Promise((t=>this.enableUpdating=t)),this.P=new Map,this.Πg(),this.requestUpdate()}addController(t){var e;(null!=(e=this.Π_)?e:this.Π_=[]).push(t),this.isConnected&&(null==t.hostConnected||t.hostConnected())}removeController(t){var e;null==(e=this.Π_)||e.splice(this.Π_.indexOf(t)>>>0,1)}"Πg"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{R?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style");o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.hasUpdated||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null!=(t=this.Π_)&&t.forEach((t=>null==t.hostConnected?void 0:t.hostConnected())),this.Πh&&(this.Πh(),this.Πo=this.Πh=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null!=(t=this.Π_)&&t.forEach((t=>null==t.hostDisconnected?void 0:t.hostDisconnected())),this.Πo=new Promise((t=>this.Πh=t))}attributeChangedCallback(t,e,o){this.O(t,o)}"Πj"(t,e,o=U){const i=this.constructor.Πp(t,o);if(void 0!==i&&!0===o.reflect){var a,s;const n=(null!=(a=null==(s=o.converter)?void 0:s.toAttribute)?a:Y.toAttribute)(e,o.type);this.Πl=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this.Πl=null}}O(t,e){const o=this.constructor,i=o.Πm.get(t);if(void 0!==i&&this.Πl!==i){var a,s;const t=o.getPropertyOptions(i),n=t.converter,r=null!=(a=null!=(s=null==n?void 0:n.fromAttribute)?s:"function"==typeof n?n:null)?a:Y.fromAttribute;this.Πl=i,this[i]=r(e,t.type),this.Πl=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||N)(this[t],e)?(this.P.has(t)||this.P.set(t,e),!0===o.reflect&&this.Πl!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this.Πv=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πv;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let t=!1;const e=this.P;try{var o;t=this.shouldUpdate(e),t?(this.willUpdate(e),null!=(o=this.Π_)&&o.forEach((t=>null==t.hostUpdate?void 0:t.hostUpdate())),this.update(e)):this.Π$()}catch(e){throw t=!1,this.Π$(),e}t&&this.H(e)}willUpdate(t){}H(t){var e;this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),null!=(e=this.Π_)&&e.forEach((t=>null==t.hostUpdated?void 0:t.hostUpdated())),this.updated(t)}"Π$"(){this.P=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πv}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var z,Z;D.finalized=!0,D.shadowRootOptions={mode:"open"},null!=globalThis.reactiveElementPlatformSupport&&globalThis.reactiveElementPlatformSupport({ReactiveElement:D}),(null!=(E=(X=globalThis).reactiveElementVersions)?E:X.reactiveElementVersions=[]).push("1.0.0-pre.2");const M=`lit$${(Math.random()+"").slice(9)}$`,j="?"+M,V=`<${j}>`,H=document,q=(t="")=>H.createComment(t),W=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Q=Array.isArray,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,K=/>/g,tt=/>|[ 	\n\r](?:([^\0-- "'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,et=/'/g,ot=/"/g,it=/^(?:script|style|textarea)$/i,at=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),st=Symbol.for("lit-noChange"),nt=Symbol.for("lit-nothing"),rt=new Map,lt=H.createTreeWalker(H,133,null,!1);class ht{constructor({strings:t,_$litType$:e},o){let i;this.o=[],this.C=o;let a=0,s=0,n=0;const r=t.length-1,[l,h]=((t,e)=>{const o=t.length-1,i=[];let a,s=2===e?"<svg>":"",n=J;for(let e=0;e<o;e++){const o=t[e];let l,h,d=-1,m=0;for(;m<o.length&&(n.lastIndex=m,h=n.exec(o),null!==h);){var r;m=n.lastIndex,n===J?"!--"===h[1]?n=G:void 0!==h[1]?n=K:void 0!==h[2]?(it.test(h[2])&&(a=RegExp("</"+h[2],"g")),n=tt):void 0!==h[3]&&(n=tt):n===tt?">"===h[0]?(n=null!=(r=a)?r:J,d=-1):void 0===h[1]?d=-2:(d=n.lastIndex-h[2].length,l=h[1],n=void 0===h[3]?tt:'"'===h[3]?ot:et):n===ot||n===et?n=tt:n===G||n===K?n=J:(n=tt,a=void 0)}const c=n===tt&&t[e+1].startsWith("/>")?" ":"";s+=n===J?o+V:d>=0?(i.push(l),o.slice(0,d)+"$lit$"+o.slice(d)+M+c):o+M+(-2===d?(i.push(void 0),e):c)}return[s+(t[o]||"<?>")+(2===e?"</svg>":""),i]})(t,e);if(this.B=this.A(l),lt.currentNode=this.B.content,2===e){const t=this.B.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=lt.nextNode())&&s<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(M)){const o=h[n++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(M),e=/([.?@])?(.*)/.exec(o);this.o.push({h:1,l:a,u:e[2],v:t,p:"."===e[1]?ut:"?"===e[1]?ft:"@"===e[1]?gt:pt}),s+=t.length-1}else this.o.push({h:6,l:a})}for(const e of t)i.removeAttribute(e)}if(it.test(i.tagName)){const t=i.textContent.split(M),e=t.length-1;if(e>0){i.textContent="";for(let o=0;o<e;o++)i.append(t[o]||q()),this.o.push({h:2,l:++a}),s++;i.append(t[e]||q())}}}else if(8===i.nodeType)if(i.data===j)s++,this.o.push({h:2,l:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(M,t+1));)this.o.push({h:7,l:a}),s++,t+=M.length-1}a++}}A(t){const e=H.createElement("template");return e.innerHTML=t,e}}function dt(t,e,o=t,i){var a,s,n,r,l;if(e===st)return e;let h=void 0!==i?null==(a=o.Σ_)?void 0:a[i]:o.Σm;const d=W(e)?void 0:e._$litDirective$;return(null==(s=h)?void 0:s.constructor)!==d&&(null!=(n=h)&&null!=n.S&&n.S(!1),h=void 0===d?void 0:new d({...t,$:t,Q:o,g:i}),void 0!==i?(null!=(r=(l=o).Σ_)?r:l.Σ_=[])[i]=h:o.Σm=h),void 0!==h&&(e=dt(t,h.W(t,e.values),h,i)),e}class mt{constructor(t,e){this.o=[],this.R=void 0,this.G=t,this.Q=e}k(t){const{B:{content:e},o:o}=this.G,i=H.importNode(e,!0);lt.currentNode=i;let a=lt.nextNode(),s=0,n=0,r=o[0];for(;void 0!==r&&null!==a;){if(s===r.l){let e;2===r.h?e=new ct(a,a.nextSibling,this,t):1===r.h?e=new r.p(a,r.u,r.v,this,t):6===r.h&&(e=new vt(a,this,t)),this.o.push(e),r=o[++n]}void 0!==r&&s!==r.l&&(a=lt.nextNode(),s++)}return i}j(t){let e=0;for(const o of this.o)void 0!==o&&(void 0!==o.strings?(o.M(t,o,e),e+=o.strings.length-2):o.M(t[e])),e++}}class ct{constructor(t,e,o,i){this.type=2,this.R=void 0,this.D=t,this.E=e,this.Q=o,this.options=i}setConnected(t){var e;null==(e=this.T)||e.call(this,t)}get parentNode(){return this.D.parentNode}M(t,e=this){t=dt(this,t,e),W(t)?t===nt||null==t||""===t?(this.L!==nt&&this.V(),this.L=nt):t!==this.L&&t!==st&&this.Y(t):void 0!==t._$litType$?this.q(t):void 0!==t.nodeType?this.X(t):(t=>Q(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.tt(t):this.Y(t)}it(t,e=this.E){return this.D.parentNode.insertBefore(t,e)}X(t){this.L!==t&&(this.V(),this.L=this.it(t))}Y(t){const e=this.D.nextSibling;null!==e&&3===e.nodeType&&(null===this.E?null===e.nextSibling:e===this.E.previousSibling)?e.data=t:this.X(H.createTextNode(t)),this.L=t}q(t){var e;const{values:o,strings:i}=t,a=this.F(i,t);if((null==(e=this.L)?void 0:e.G)===a)this.L.j(o);else{const t=new mt(a,this),e=t.k(this.options);t.j(o),this.X(e),this.L=t}}F(t,e){let o=rt.get(t);return void 0===o&&rt.set(t,o=new ht(e)),o}tt(t){Q(this.L)||(this.L=[],this.V());const e=this.L;let o,i=0;for(const a of t)i===e.length?e.push(o=new ct(this.it(q()),this.it(q()),this,this.options)):o=e[i],o.M(a),i++;i<e.length&&(this.V(o&&o.E.nextSibling,i),e.length=i)}V(t=this.D.nextSibling,e){for(null==(o=this.T)||o.call(this,!1,!0,e);t&&t!==this.E;){var o;const e=t.nextSibling;t.remove(),t=e}}}class pt{constructor(t,e,o,i,a){this.type=1,this.L=nt,this.R=void 0,this.st=void 0,this.element=t,this.name=e,this.Q=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this.L=Array(o.length-1).fill(nt),this.strings=o):this.L=nt}get tagName(){return this.element.tagName}M(t,e=this,o,i){const a=this.strings;let s=!1;if(void 0===a)t=dt(this,t,e,0),s=!W(t)||t!==this.L&&t!==st,s&&(this.L=t);else{const i=t;let r,l;for(t=a[0],r=0;r<a.length-1;r++){var n;l=dt(this,i[o+r],e,r),l===st&&(l=this.L[r]),s||(s=!W(l)||l!==this.L[r]),l===nt?t=nt:t!==nt&&(t+=(null!=(n=l)?n:"")+a[r+1]),this.L[r]=l}}s&&!i&&this.nt(t)}nt(t){t===nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ut extends pt{constructor(){super(...arguments),this.type=3}nt(t){this.element[this.name]=t===nt?void 0:t}}class ft extends pt{constructor(){super(...arguments),this.type=4}nt(t){t&&t!==nt?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class gt extends pt{constructor(){super(...arguments),this.type=5}M(t,e=this){var o;if((t=null!=(o=dt(this,t,e,0))?o:nt)===st)return;const i=this.L,a=t===nt&&i!==nt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==nt&&(i===nt||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this.L=t}handleEvent(t){var e,o;"function"==typeof this.L?this.L.call(null!=(e=null==(o=this.options)?void 0:o.host)?e:this.element,t):this.L.handleEvent(t)}}class vt{constructor(t,e,o){this.element=t,this.type=6,this.R=void 0,this.st=void 0,this.Q=e,this.options=o}M(t){dt(this,t)}}var yt,bt;null!=globalThis.litHtmlPlatformSupport&&globalThis.litHtmlPlatformSupport(ht,ct),(null!=(z=(Z=globalThis).litHtmlVersions)?z:Z.litHtmlVersions=[]).push("2.0.0-pre.6"),(null!=(yt=(bt=globalThis).litElementVersions)?yt:bt.litElementVersions=[]).push("3.0.0-pre.3");class Ct extends D{constructor(){super(...arguments),this.I={host:this},this.Φo=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return null!=(t=this.I).renderBefore||(t.renderBefore=e.firstChild),e}update(t){const e=this.render();super.update(t),this.Φo=((t,e,o)=>{var i;const a=null!=(i=null==o?void 0:o.renderBefore)?i:e;let s=a.t;if(void 0===s){var n;const t=null!=(n=null==o?void 0:o.renderBefore)?n:null;a.t=s=new ct(e.insertBefore(q(),t),t,void 0,o)}return s.M(t),s})(e,this.renderRoot,this.I)}connectedCallback(){var t;super.connectedCallback(),null==(t=this.Φo)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.Φo)||t.setConnected(!1)}render(){return st}}Ct.finalized=!0,null!=globalThis.litElementHydrateSupport&&globalThis.litElementHydrateSupport({LitElement:Ct}),null==globalThis.litElementPlatformSupport||globalThis.litElementPlatformSupport({LitElement:Ct});class xt extends Ct{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}let St;const _t=$(St||(St=(t=>t)`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  select,
  input {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: #ffffff;
    color: var(--main-text-color);
    border: 1px solid var(--primary-color);
    border-radius: var(--border-radius);
    padding: 0.5rem 0.25rem;
    font-family: inherit;
  }

  select:focus,
  input:focus {
    outline: none;
    box-shadow: 0px 1px 1px 1px var(--primary-color);
  }

  label {
    color: var(--secondary-text-color);
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  p,
  pre {
    width: min(100%, 120ch);
  }

  code,
  pre {
    font-family: var(--monospace-font);
    overflow: scroll;
  }

  pre {
    background: var(--code-background);
    color: var(--code-color);
    padding: 0.5rem;
  }

  p a,
  p a:visited,
  p a:hover {
    color: var(--accent-color);
  }

  .sample-pages > * {
    padding: 0.75rem;
    border: 1px solid var(--primary-color);
    border-radius: var(--border-radius);
  }

  .sample-pages > *:nth-child(odd) {
    background: var(--primary-color);
    color: var(--primary-contrast-color);
  }
  .sample-pages > *:nth-child(even) {
    background: var(--primary-contrast-color);
    color: var(--primary-color);
  }
`)),wt={fromAttribute(t){if(!t)return;const e=t.trim();if(""===e||"undefined"===e||"null"===e)return;const o=parseInt(e,10);return Number.isNaN(o)?t:o},toAttribute:t=>void 0!==t?`${t}`:null};let Tt,Lt,kt=t=>t;const At=t=>{const e=parseInt(t,10);return Number.isNaN(e)};customElements.define("helium-animated-pages",class extends Ct{render(){return at(Tt||(Tt=kt` <slot></slot> `))}static get styles(){return[$(Lt||(Lt=kt`
        :host {
          position: absolute;
          width: 100%;
          height: 100%;
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        ::slotted(*) {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          visibility: var(--helium-children-visible, visible);
          will-change: visibility;
          overflow: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        ::slotted(:not([active])) {
          visibility: hidden;
          --helium-children-visible: hidden;
          z-index: -1;
        }
      `))]}static get properties(){return{animationClasses:{type:Object},attrForSelected:{type:String},selected:{converter:wt}}}constructor(){super(),this._inAnimation=this._inAnimation.bind(this),this._outAnimation=this._outAnimation.bind(this),this.attrForSelected="",this.animationClasses={}}get isAnimating(){return this._animating}get selected(){return this._selected}set selected(t){if(null==t||this._animating)return;if(this._inPage=At(t)?this.querySelector(`[${this.attrForSelected}="${t}"]`):this.children[t],this._outPage=this.selectedItem,!this._inPage||this._inPage===this._outPage)return;const e=this._selected;let o="";this._outPage&&(o=this.attrForSelected?this._outPage.getAttribute(this.attrForSelected):Array.from(this.children).indexOf(this._outPage)),this._selected=this.attrForSelected?this._inPage.getAttribute(this.attrForSelected):t,this._changeActive(this._selected,o),this.requestUpdate("selected",e)}get selectedItem(){if(this._selected||0===this._selected){return At(this._selected)?this.querySelector(`[${this.attrForSelected}="${this._selected}"]`):this.children[this._selected]}return null}select(t){this.selected=t}selectNext(){const t=Array.from(this.children);if(!t||0===t.length)return;const{selectedItem:e}=this,o=t.indexOf(e),i=o+1>=t.length?0:o+1;this.selected=i}selectPrevious(){const t=Array.from(this.children);if(!t||0===t.length)return;const{selectedItem:e}=this,o=t.indexOf(e),i=o-1<0?t.length-1:o-1;this.selected=i}_changeActive(t,e){const o=new CustomEvent("helium-start",{composed:!0,bubbles:!0});if(this.dispatchEvent(o),this.animationClasses)this._currentClasses=this._animationClasses(t,e),this._beginAnimation();else{this._inPage.setAttribute("active",!0),this._outPage&&this._outPage.removeAttribute("active");const t=new CustomEvent("helium-end",{composed:!0,bubbles:!0});this.dispatchEvent(t)}}_beginAnimation(){this._animating=!0,this._inPage.addEventListener("animationend",this._inAnimation,{once:!0}),this._outPage?(this._outPage.addEventListener("animationend",this._outAnimation,{once:!0}),this._outPage.classList.add(this._currentClasses.out)):this._outAnimationEnded=!0,this._inPage.classList.add(this._currentClasses.in),this._inPage.setAttribute("active",!0)}_animationClasses(t,e){const o=`${e}_${t}`,i=`*_${t}`,a=`${e}_*`;return o in this.animationClasses?this.animationClasses[o]:i in this.animationClasses?this.animationClasses[i]:a in this.animationClasses?this.animationClasses[a]:this.animationClasses.default}_inAnimation(){this._inAnimationEnded=!0,this._onAnimationEnd()}_outAnimation(){this._outAnimationEnded=!0,this._onAnimationEnd()}_onAnimationEnd(){if(this._inAnimationEnded&&this._outAnimationEnded){this._inAnimationEnded=!1,this._outAnimationEnded=!1,this._animating=!1,this._inPage.classList.remove(this._currentClasses.in),this._outPage&&(this._outPage.removeAttribute("active"),this._outPage.classList.remove(this._currentClasses.out)),this._inPage=null,this._outPage=null,this._currentClasses=null;const t=new CustomEvent("helium-end",{composed:!0,bubbles:!0});this.dispatchEvent(t)}}});let Ot,Rt,It,Ft,Pt,$t,Bt,Et,Xt=t=>t;const Yt=$(Ot||(Ot=Xt`
  .page-rotateCarouselLeftIn {
    transform-origin: 0% 50%;
    animation: rotateCarouselLeftIn 0.8s both ease;
  }
  @keyframes rotateCarouselLeftIn {
    from {
      opacity: 0.3;
      transform: translateX(200%) scale(0.4) rotateY(65deg);
    }
  }
`)),Nt=$(Rt||(Rt=Xt`
  .page-rotateCarouselRightIn {
    transform-origin: 100% 50%;
    animation: rotateCarouselRightIn 0.8s both ease;
  }
  @keyframes rotateCarouselRightIn {
    from {
      opacity: 0.3;
      transform: translateX(-200%) scale(0.4) rotateY(-65deg);
    }
  }
`));$(It||(It=Xt`
  .page-rotateCarouselTopIn {
    transform-origin: 50% 0%;
    animation: rotateCarouselTopIn 0.8s both ease;
  }
  @keyframes rotateCarouselTopIn {
    from {
      opacity: 0.3;
      transform: translateY(200%) scale(0.4) rotateX(-65deg);
    }
  }
`)),$(Ft||(Ft=Xt`
  .page-rotateCarouselBottomIn {
    transform-origin: 50% 100%;
    animation: rotateCarouselBottomIn 0.8s both ease;
  }
  @keyframes rotateCarouselBottomIn {
    from {
      opacity: 0.3;
      transform: translateY(-200%) scale(0.4) rotateX(65deg);
    }
  }
`));const Ut=$(Pt||(Pt=Xt`
  .page-rotateCarouselLeftOut {
    transform-origin: 100% 50%;
    animation: rotateCarouselLeftOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateCarouselLeftOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(-150%) scale(0.4) rotateY(-65deg);
    }
  }
`)),Dt=$($t||($t=Xt`
  .page-rotateCarouselRightOut {
    transform-origin: 0% 50%;
    animation: rotateCarouselRightOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateCarouselRightOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(200%) scale(0.4) rotateY(65deg);
    }
  }
`));$(Bt||(Bt=Xt`
  .page-rotateCarouselTopOut {
    transform-origin: 50% 100%;
    animation: rotateCarouselTopOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateCarouselTopOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(-200%) scale(0.4) rotateX(65deg);
    }
  }
`)),$(Et||(Et=Xt`
  .page-rotateCarouselBottomOut {
    transform-origin: 50% 0%;
    animation: rotateCarouselBottomOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateCarouselBottomOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(200%) scale(0.4) rotateX(-65deg);
    }
  }
`));let zt,Zt,Mt,jt,Vt,Ht,qt,Wt,Qt=t=>t;const Jt=$(zt||(zt=Qt`
  .page-rotateCubeLeftIn {
    transform-origin: 0% 50%;
    animation: rotateCubeLeftIn 0.6s both ease-in;
  }
  @keyframes rotateCubeLeftIn {
    0% {
      opacity: 0.3;
      transform: translateX(100%) rotateY(90deg);
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateX(50%) translateZ(-200px) rotateY(45deg);
    }
  }
`)),Gt=$(Zt||(Zt=Qt`
  .page-rotateCubeRightIn {
    transform-origin: 100% 50%;
    animation: rotateCubeRightIn 0.6s both ease-in;
  }
  @keyframes rotateCubeRightIn {
    0% {
      opacity: 0.3;
      transform: translateX(-100%) rotateY(-90deg);
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    }
  }
`));$(Mt||(Mt=Qt`
  .page-rotateCubeTopIn {
    transform-origin: 50% 0%;
    animation: rotateCubeTopIn 0.6s both ease-in;
  }
  @keyframes rotateCubeTopIn {
    0% {
      opacity: 0.3;
      transform: translateY(100%) rotateX(-90deg);
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateY(50%) translateZ(-200px) rotateX(-45deg);
    }
  }
`)),$(jt||(jt=Qt`
  .page-rotateCubeBottomIn {
    transform-origin: 50% 100%;
    animation: rotateCubeBottomIn 0.6s both ease-in;
  }
  @keyframes rotateCubeBottomIn {
    0% {
      opacity: 0.3;
      transform: translateY(-100%) rotateX(90deg);
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateY(-50%) translateZ(-200px) rotateX(45deg);
    }
  }
`));const Kt=$(Vt||(Vt=Qt`
  .page-rotateCubeLeftOut {
    transform-origin: 100% 50%;
    animation: rotateCubeLeftOut 0.6s both ease-in;
    z-index: 999;
  }
  @keyframes rotateCubeLeftOut {
    0% {
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    }
    100% {
      opacity: 0.3;
      transform: translateX(-100%) rotateY(-90deg);
    }
  }
`)),te=$(Ht||(Ht=Qt`
  .page-rotateCubeRightOut {
    transform-origin: 0% 50%;
    animation: rotateCubeRightOut 0.6s both ease-in;
    z-index: 999;
  }
  @keyframes rotateCubeRightOut {
    0% {
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateX(50%) translateZ(-200px) rotateY(45deg);
    }
    100% {
      opacity: 0.3;
      transform: translateX(100%) rotateY(90deg);
    }
  }
`));$(qt||(qt=Qt`
  .page-rotateCubeTopOut {
    transform-origin: 50% 100%;
    animation: rotateCubeTopOut 0.6s both ease-in;
    z-index: 999;
  }
  @keyframes rotateCubeTopOut {
    0% {
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateY(-50%) translateZ(-200px) rotateX(45deg);
    }
    100% {
      opacity: 0.3;
      transform: translateY(-100%) rotateX(90deg);
    }
  }
`)),$(Wt||(Wt=Qt`
  .page-rotateCubeBottomOut {
    transform-origin: 50% 0%;
    animation: rotateCubeBottomOut 0.6s both ease-in;
    z-index: 999;
  }
  @keyframes rotateCubeBottomOut {
    0% {
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateY(50%) translateZ(-200px) rotateX(-45deg);
    }
    100% {
      opacity: 0.3;
      transform: translateY(100%) rotateX(-90deg);
    }
  }
`));let ee,oe,ie=t=>t;const ae=$(ee||(ee=ie`
  .page-fadeIn {
    animation: fadeIn 0.7s ease both;
  }
  @keyframes fadeIn {
    from {
      opacity: 0.3;
    }
    to {
    }
  }
`)),se=$(oe||(oe=ie`
  .page-fadeOut {
    animation: fadeOut 0.7s ease both;
    z-index: -1;
  }
  @keyframes fadeOut {
    from {
    }
    to {
      opacity: 0;
    }
  }
`));let ne,re,le,he,de,me,ce,pe,ue=t=>t;$(ne||(ne=ue`
  .page-flipInLeft {
    transform-origin: 50% 50%;
    animation: flipInLeft 0.5s both ease-out;
  }
  @keyframes flipInLeft {
    from {
      transform: translateZ(-1000px) rotateY(-90deg);
      opacity: 0.2;
    }
  }
`)),$(re||(re=ue`
  .page-flipInRight {
    transform-origin: 50% 50%;
    animation: flipInRight 0.5s both ease-out;
  }
  @keyframes flipInRight {
    from {
      transform: translateZ(-1000px) rotateY(90deg);
      opacity: 0.2;
    }
  }
`)),$(le||(le=ue`
  .page-flipInTop {
    transform-origin: 50% 50%;
    animation: flipInTop 0.5s both ease-out;
  }
  @keyframes flipInTop {
    from {
      transform: translateZ(-1000px) rotateX(90deg);
      opacity: 0.2;
    }
  }
`)),$(he||(he=ue`
  .page-flipInBottom {
    transform-origin: 50% 50%;
    animation: flipInBottom 0.5s both ease-out;
  }
  @keyframes flipInBottom {
    from {
      transform: translateZ(-1000px) rotateX(-90deg);
      opacity: 0.2;
    }
  }
`)),$(de||(de=ue`
  .page-flipOutLeft {
    transform-origin: 50% 50%;
    animation: flipOutLeft 0.5s both ease-in;
  }
  @keyframes flipOutLeft {
    from {
    }
    to {
      transform: translateZ(-1000px) rotateY(-90deg);
      opacity: 0.2;
    }
  }
`)),$(me||(me=ue`
  .page-flipOutRight {
    transform-origin: 50% 50%;
    animation: flipOutRight 0.5s both ease-in;
  }
  @keyframes flipOutRight {
    from {
    }
    to {
      transform: translateZ(-1000px) rotateY(90deg);
      opacity: 0.2;
    }
  }
`)),$(ce||(ce=ue`
  .page-flipOutTop {
    transform-origin: 50% 50%;
    animation: flipOutTop 0.5s both ease-in;
  }
  @keyframes flipOutTop {
    from {
    }
    to {
      transform: translateZ(-1000px) rotateX(90deg);
      opacity: 0.2;
    }
  }
`)),$(pe||(pe=ue`
  .page-flipOutBottom {
    transform-origin: 50% 50%;
    animation: flipOutBottom 0.5s both ease-in;
  }
  @keyframes flipOutBottom {
    from {
    }
    to {
      transform: translateZ(-1000px) rotateX(-90deg);
      opacity: 0.2;
    }
  }
`));let fe,ge,ve,ye,be,Ce,xe,Se,_e=t=>t;$(fe||(fe=_e`
  .page-rotateUnfoldLeft {
    transform-origin: 100% 50%;
    animation: rotateUnfoldLeft 0.7s both ease;
  }
  @keyframes rotateUnfoldLeft {
    from {
      opacity: 0;
      transform: translateX(-100%) rotateY(-90deg);
    }
  }
`)),$(ge||(ge=_e`
  .page-rotateUnfoldRight {
    transform-origin: 0% 50%;
    animation: rotateUnfoldRight 0.7s both ease;
  }
  @keyframes rotateUnfoldRight {
    from {
      opacity: 0;
      transform: translateX(100%) rotateY(90deg);
    }
  }
`)),$(ve||(ve=_e`
  .page-rotateUnfoldTop {
    transform-origin: 50% 100%;
    animation: rotateUnfoldTop 0.7s both ease;
  }
  @keyframes rotateUnfoldTop {
    from {
      opacity: 0;
      transform: translateY(-100%) rotateX(90deg);
    }
  }
`)),$(ye||(ye=_e`
  .page-rotateUnfoldBottom {
    transform-origin: 50% 0%;
    animation: rotateUnfoldBottom 0.7s both ease;
  }
  @keyframes rotateUnfoldBottom {
    from {
      opacity: 0;
      transform: translateY(100%) rotateX(-90deg);
    }
  }
`)),$(be||(be=_e`
  .page-rotateFoldLeft {
    transform-origin: 100% 50%;
    animation: rotateFoldLeft 0.7s both ease;
  }
  @keyframes rotateFoldLeft {
    from {
    }
    to {
      opacity: 0;
      transform: translateX(-100%) rotateY(-90deg);
    }
  }
`)),$(Ce||(Ce=_e`
  .page-rotateFoldRight {
    transform-origin: 0% 50%;
    animation: rotateFoldRight 0.7s both ease;
  }
  @keyframes rotateFoldRight {
    from {
    }
    to {
      opacity: 0;
      transform: translateX(100%) rotateY(90deg);
    }
  }
`)),$(xe||(xe=_e`
  .page-rotateFoldTop {
    transform-origin: 50% 100%;
    animation: rotateFoldTop 0.7s both ease;
  }
  @keyframes rotateFoldTop {
    from {
    }
    to {
      opacity: 0;
      transform: translateY(-100%) rotateX(90deg);
    }
  }
`)),$(Se||(Se=_e`
  .page-rotateFoldBottom {
    transform-origin: 50% 0%;
    animation: rotateFoldBottom 0.7s both ease;
  }
  @keyframes rotateFoldBottom {
    from {
    }
    to {
      opacity: 0;
      transform: translateY(100%) rotateX(-90deg);
    }
  }
`));let we,Te,Le,ke,Ae,Oe,Re,Ie,Fe,Pe,$e,Be,Ee,Xe,Ye,Ne,Ue=t=>t;$(we||(we=Ue`
  .page-moveFromLeft {
    animation: moveFromLeft 0.6s ease both;
  }
  @keyframes moveFromLeft {
    from {
      transform: translateX(-100%);
    }
  }
`)),$(Te||(Te=Ue`
  .page-moveFromRight {
    animation: moveFromRight 0.6s ease both;
  }
  @keyframes moveFromRight {
    from {
      transform: translateX(100%);
    }
  }
`)),$(Le||(Le=Ue`
  .page-moveFromTop {
    animation: moveFromTop 0.6s ease both;
  }
  @keyframes moveFromTop {
    from {
      transform: translateY(-100%);
    }
  }
`)),$(ke||(ke=Ue`
  .page-moveFromBottom {
    animation: moveFromBottom 0.6s ease both;
  }
  @keyframes moveFromBottom {
    from {
      transform: translateY(100%);
    }
  }
`)),$(Ae||(Ae=Ue`
  .page-moveFromLeftFade {
    animation: moveFromLeftFade 0.6s ease both;
  }
  @keyframes moveFromLeftFade {
    from {
      opacity: 0.3;
      transform: translateX(-100%);
    }
  }
`)),$(Oe||(Oe=Ue`
  .page-moveFromRightFade {
    animation: moveFromRightFade 0.6s ease both;
  }
  @keyframes moveFromRightFade {
    from {
      opacity: 0.3;
      transform: translateX(100%);
    }
  }
`)),$(Re||(Re=Ue`
  .page-moveFromTopFade {
    animation: moveFromTopFade 0.6s ease both;
  }
  @keyframes moveFromTopFade {
    from {
      opacity: 0.3;
      transform: translateY(-100%);
    }
  }
`)),$(Ie||(Ie=Ue`
  .page-moveFromBottomFade {
    animation: moveFromBottomFade 0.6s ease both;
  }
  @keyframes moveFromBottomFade {
    from {
      opacity: 0.3;
      transform: translateY(100%);
    }
  }
`)),$(Fe||(Fe=Ue`
  .page-moveToLeft {
    animation: moveToLeft 0.7s ease both;
  }
  @keyframes moveToLeft {
    from {
    }
    to {
      transform: translateX(-100%);
    }
  }
`)),$(Pe||(Pe=Ue`
  .page-moveToRight {
    animation: moveToRight 0.7s ease both;
  }
  @keyframes moveToRight {
    from {
    }
    to {
      transform: translateX(100%);
    }
  }
`)),$($e||($e=Ue`
  .page-moveToTop {
    animation: moveToTop 0.6s ease both;
  }
  @keyframes moveToTop {
    from {
    }
    to {
      transform: translateY(-100%);
    }
  }
`)),$(Be||(Be=Ue`
  .page-moveToBottom {
    animation: moveToBottom 0.6s ease both;
  }
  @keyframes moveToBottom {
    from {
    }
    to {
      transform: translateY(100%);
    }
  }
`)),$(Ee||(Ee=Ue`
  .page-moveToLeftFade {
    animation: moveToLeftFade 0.7s ease both;
  }
  @keyframes moveToLeftFade {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(-100%);
    }
  }
`)),$(Xe||(Xe=Ue`
  .page-moveToRightFade {
    animation: moveToRightFade 0.7s ease both;
  }
  @keyframes moveToRightFade {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(100%);
    }
  }
`)),$(Ye||(Ye=Ue`
  .page-moveToTopFade {
    animation: moveToTopFade 0.6s ease both;
  }
  @keyframes moveToTopFade {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(-100%);
    }
  }
`)),$(Ne||(Ne=Ue`
  .page-moveToBottomFade {
    animation: moveToBottomFade 0.6s ease both;
  }
  @keyframes moveToBottomFade {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(100%);
    }
  }
`));let De,ze,Ze,Me,je,Ve,He,qe,We=t=>t;$(De||(De=We`
  .page-rotatePullLeft {
    transform-origin: 0% 50%;
    animation: rotatePullLeft 0.5s both ease;
  }
  @keyframes rotatePullLeft {
    from {
      opacity: 0;
      transform: rotateY(90deg);
    }
  }
`)),$(ze||(ze=We`
  .page-rotatePullRight {
    transform-origin: 100% 50%;
    animation: rotatePullRight 0.5s both ease;
  }
  @keyframes rotatePullRight {
    from {
      opacity: 0;
      transform: rotateY(-90deg);
    }
  }
`)),$(Ze||(Ze=We`
  .page-rotatePullTop {
    transform-origin: 50% 0%;
    animation: rotatePullTop 0.5s both ease;
  }
  @keyframes rotatePullTop {
    from {
      opacity: 0;
      transform: rotateX(-90deg);
    }
  }
`)),$(Me||(Me=We`
  .page-rotatePullBottom {
    transform-origin: 50% 100%;
    animation: rotatePullBottom 0.5s both ease;
  }
  @keyframes rotatePullBottom {
    from {
      opacity: 0;
      transform: rotateX(90deg);
    }
  }
`)),$(je||(je=We`
  .page-rotatePushLeft {
    transform-origin: 0% 50%;
    animation: rotatePushLeft 0.8s both ease;
  }
  @keyframes rotatePushLeft {
    from {
    }
    to {
      opacity: 0;
      transform: rotateY(90deg);
    }
  }
`)),$(Ve||(Ve=We`
  .page-rotatePushRight {
    transform-origin: 100% 50%;
    animation: rotatePushRight 0.8s both ease;
  }
  @keyframes rotatePushRight {
    from {
    }
    to {
      opacity: 0;
      transform: rotateY(-90deg);
    }
  }
`)),$(He||(He=We`
  .page-rotatePushTop {
    transform-origin: 50% 0%;
    animation: rotatePushTop 0.8s both ease;
  }
  @keyframes rotatePushTop {
    from {
    }
    to {
      opacity: 0;
      transform: rotateX(-90deg);
    }
  }
`)),$(qe||(qe=We`
  .page-rotatePushBottom {
    transform-origin: 50% 100%;
    animation: rotatePushBottom 0.8s both ease;
  }
  @keyframes rotatePushBottom {
    from {
    }
    to {
      opacity: 0;
      transform: rotateX(90deg);
    }
  }
`));let Qe,Je,Ge,Ke,to,eo,oo,io,ao=t=>t;$(Qe||(Qe=ao`
  .page-rotateRoomLeftIn {
    transform-origin: 0% 50%;
    animation: rotateRoomLeftIn 0.8s both ease;
  }
  @keyframes rotateRoomLeftIn {
    from {
      opacity: 0.3;
      transform: translateX(100%) rotateY(-90deg);
    }
  }
`)),$(Je||(Je=ao`
  .page-rotateRoomRightIn {
    transform-origin: 100% 50%;
    animation: rotateRoomRightIn 0.8s both ease;
  }
  @keyframes rotateRoomRightIn {
    from {
      opacity: 0.3;
      transform: translateX(-100%) rotateY(90deg);
    }
  }
`)),$(Ge||(Ge=ao`
  .page-rotateRoomTopIn {
    transform-origin: 50% 0%;
    animation: rotateRoomTopIn 0.8s both ease;
  }
  @keyframes rotateRoomTopIn {
    from {
      opacity: 0.3;
      transform: translateY(100%) rotateX(90deg);
    }
  }
`)),$(Ke||(Ke=ao`
  .page-rotateRoomBottomIn {
    transform-origin: 50% 100%;
    animation: rotateRoomBottomIn 0.8s both ease;
  }
  @keyframes rotateRoomBottomIn {
    from {
      opacity: 0.3;
      transform: translateY(-100%) rotateX(-90deg);
    }
  }
`)),$(to||(to=ao`
  .page-rotateRoomLeftOut {
    transform-origin: 100% 50%;
    animation: rotateRoomLeftOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateRoomLeftOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(-100%) rotateY(90deg);
    }
  }
`)),$(eo||(eo=ao`
  .page-rotateRoomRightOut {
    transform-origin: 0% 50%;
    animation: rotateRoomRightOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateRoomRightOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(100%) rotateY(-90deg);
    }
  }
`)),$(oo||(oo=ao`
  .page-rotateRoomTopOut {
    transform-origin: 50% 100%;
    animation: rotateRoomTopOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateRoomTopOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(-100%) rotateX(-90deg);
    }
  }
`)),$(io||(io=ao`
  .page-rotateRoomBottomOut {
    transform-origin: 50% 0%;
    animation: rotateRoomBottomOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateRoomBottomOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(100%) rotateX(90deg);
    }
  }
`));let so,no,ro,lo,ho,mo,co,po=t=>t;$(so||(so=po`
  .page-rotateInNewspaper {
    transform-origin: 50% 50%;
    animation: rotateInNewspaper 0.5s both ease-out;
  }
  @keyframes rotateInNewspaper {
    from {
      transform: translateZ(-3000px) rotateZ(-360deg);
      opacity: 0;
    }
  }
`)),$(no||(no=po`
  .page-rotateRightSideFirst {
    transform-origin: 0% 50%;
    animation: rotateRightSideFirst 0.8s both ease-in;
    z-index: -1;
  }
  @keyframes rotateRightSideFirst {
    0% {
    }
    40% {
      transform: rotateY(15deg);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    100% {
      transform: scale(0.8) translateZ(-200px);
      opacity: 0;
    }
  }
`)),$(ro||(ro=po`
  .page-rotateLeftSideFirst {
    transform-origin: 100% 50%;
    animation: rotateLeftSideFirst 0.8s both ease-in;
    z-index: -1;
  }
  @keyframes rotateLeftSideFirst {
    0% {
    }
    40% {
      transform: rotateY(-15deg);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    100% {
      transform: scale(0.8) translateZ(-200px);
      opacity: 0;
    }
  }
`)),$(lo||(lo=po`
  .page-rotateTopSideFirst {
    transform-origin: 50% 100%;
    animation: rotateTopSideFirst 0.8s both ease-in;
    z-index: -1;
  }
  @keyframes rotateTopSideFirst {
    0% {
    }
    40% {
      transform: rotateX(15deg);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    100% {
      transform: scale(0.8) translateZ(-200px);
      opacity: 0;
    }
  }
`)),$(ho||(ho=po`
  .page-rotateBottomSideFirst {
    transform-origin: 50% 0%;
    animation: rotateBottomSideFirst 0.8s both ease-in;
    z-index: -1;
  }
  @keyframes rotateBottomSideFirst {
    0% {
    }
    40% {
      transform: rotateX(-15deg);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    100% {
      transform: scale(0.8) translateZ(-200px);
      opacity: 0;
    }
  }
`)),$(mo||(mo=po`
  .page-rotateFall {
    transform-origin: 0% 0%;
    animation: rotateFall 1s both ease-in;
    z-index: 999;
  }
  @keyframes rotateFall {
    0% {
      transform: rotateZ(0deg);
    }
    20% {
      transform: rotateZ(10deg);
      animation-timing-function: ease-out;
    }
    40% {
      transform: rotateZ(17deg);
    }
    60% {
      transform: rotateZ(16deg);
    }
    100% {
      transform: translateY(100%) rotateZ(17deg);
    }
  }
`)),$(co||(co=po`
  .page-rotateOutNewspaper {
    transform-origin: 50% 50%;
    animation: rotateOutNewspaper 0.5s both ease-in;
  }
  @keyframes rotateOutNewspaper {
    from {
    }
    to {
      transform: translateZ(-3000px) rotateZ(360deg);
      opacity: 0;
    }
  }
`));let uo,fo,go,vo,yo,bo,Co=t=>t;$(uo||(uo=Co`
  .page-scaleUp {
    animation: scaleUp 0.7s ease both;
    z-index: -1;
  }
  @keyframes scaleUp {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`)),$(fo||(fo=Co`
  .page-scaleUpDown {
    animation: scaleUpDown 0.5s ease both;
  }
  @keyframes scaleUpDown {
    from {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`)),$(go||(go=Co`
  .page-scaleUpCenter {
    animation: scaleUpCenter 0.4s ease-out both;
  }
  @keyframes scaleUpCenter {
    from {
      opacity: 0;
      transform: scale(0.7);
    }
  }
`)),$(vo||(vo=Co`
  .page-scaleDown {
    animation: scaleDown 0.7s ease both;
    z-index: -1;
  }
  @keyframes scaleDown {
    from {
    }
    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`)),$(yo||(yo=Co`
  .page-scaleDownUp {
    animation: scaleDownUp 0.5s ease both;
  }
  @keyframes scaleDownUp {
    from {
    }
    to {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`)),$(bo||(bo=Co`
  .page-scaleDownCenter {
    animation: scaleDownCenter 0.4s ease-in both;
  }
  @keyframes scaleDownCenter {
    from {
    }
    to {
      opacity: 0;
      transform: scale(0.7);
    }
  }
`));let xo,So,_o=t=>t;$(xo||(xo=_o`
  .page-rotateSidesIn {
    transform-origin: 150% 50%;
    animation: rotateSidesIn 0.5s both ease-out;
  }
  @keyframes rotateSidesIn {
    from {
      opacity: 0;
      transform: translateZ(-500px) rotateY(-90deg);
    }
  }
`)),$(So||(So=_o`
  .page-rotateSidesOut {
    transform-origin: -50% 50%;
    animation: rotateSidesOut 0.5s both ease-in;
  }
  @keyframes rotateSidesOut {
    from {
    }
    to {
      opacity: 0;
      transform: translateZ(-500px) rotateY(90deg);
    }
  }
`));let wo,To,Lo=t=>t;$(wo||(wo=Lo`
  .page-rotateSlideIn {
    animation: rotateSlideIn 1s both ease;
  }
  @keyframes rotateSlideIn {
    0%,
    25% {
      opacity: 0.5;
      transform: translateZ(-500px) translateX(200%);
    }
    75% {
      opacity: 0.5;
      transform: translateZ(-500px);
    }
    100% {
      opacity: 1;
      transform: translateZ(0) translateX(0);
    }
  }
`)),$(To||(To=Lo`
  .page-rotateSlideOut {
    animation: rotateSlideOut 1s both ease;
  }
  @keyframes rotateSlideOut {
    0% {
    }
    25% {
      opacity: 0.5;
      transform: translateZ(-500px);
    }
    75% {
      opacity: 0.5;
      transform: translateZ(-500px) translateX(-200%);
    }
    100% {
      opacity: 0.5;
      transform: translateZ(-500px) translateX(-200%);
    }
  }
`));let ko,Ao,Oo=t=>t;window.customElements.define("settings-demo",class extends xt{render(){return at(ko||(ko=Oo`
      <section>
        <h2>Animation Settings Demo</h2>
        <p>
          One of the most powerful features of this component is the flexibility
          you get when defining how the pages should be animated.
        </p>
        <p>
          This is all achieved using the <code>animationClasses</code> property.
          This property is an object in which the keys represent a transition
          between pages.
        </p>
        <p>
          Check the <a href="./index.html">Docs</a> for a more detailed
          explanation about the structure of the
          <code>animationClasses</code> object.
        </p>
        <p>
          Now, you might feel that the structure is complicated. But it gives
          you full control on how page transitions animate.
        </p>
        <p>
          Here are a couple of examples that should help show how to take
          advantage of this feature:
        </p>
      </section>
      <section>
        <h3>Without using <code>attrForSelected</code></h3>
        <button data-action="previous" @click="${0}">
          Previous
        </button>
        <button data-action="next" @click="${0}">Next</button>
      </section>
      <section class="container">
        <helium-animated-pages
          class="sample-pages"
          id="noAttr"
          .animationClasses="${0}"
        >
          <div>Slide index: 0</div>
          <div>Slide index: 1</div>
          <div>Slide index: 2</div>
        </helium-animated-pages>
      </section>
      <section>
        Code for the previous example:
        <pre><code>${0}</code></pre>
        Code for the <code>animationClasses</code> applied on it:
        <pre><code>${0}</code></pre>
      </section>
      <section>
        <p>
          As you can see, when you don't define an
          <code>attrForSelected</code> the identifiers for each slide become
          their indexes. So, you have to be mindful of the order in this case.
        </p>
        <p>
          But through this configuration we can create the illusion of the
          children being part of a cube that rotates depending on which
          transition is being done.
        </p>
      </section>
      <section>
        <h3>Using <code>attrForSelected</code></h3>
        <button data-action="previous" @click="${0}">
          Previous
        </button>
        <button data-action="next" @click="${0}">Next</button>
      </section>
      <section class="container">
        <helium-animated-pages
          class="sample-pages"
          id="attr"
          attrForSelected="name"
          .animationClasses="${0}"
        >
          <div name="first">First Slide</div>
          <div name="second">Second Slide</div>
          <div name="third">Third Slide</div>
        </helium-animated-pages>
      </section>
      <section>
        Code for the previous example:
        <pre><code>${0}</code></pre>
        Code for the <code>animationClasses</code> applied on it:
        <pre><code>${0}</code></pre>
      </section>
      <section>
        <p>
          As you can see, when you define
          <code>attrForSelected</code> the identifiers for each slide become the
          value of the attribute. So, the order is not that important in this
          case.
        </p>
        <p>
          It's just as powerful as the index version in terms of customization.
          The <code>animationClasses</code> achieve the same effect as the
          previous ones just with different animations.
        </p>
      </section>
      <section>
        <h3>Where to define the actual classes</h3>
        <p>
          This whole component depends on the CSS classes with the animations
          actually existing.
        </p>
        <p>
          In case you were wondering where the classes should be defined, the
          answer is easy: define them in the context that has
          <code>&lt;helium-animated-pages&gt;</code> as its child.
        </p>
        <p>
          For example, if your pages are on the HTML document directly, define
          your animation classes on a global stylesheet.
        </p>
        <p>
          And if your pages are inside a Web Component using Shadow DOM then
          define your classes in the CSS for that component.
        </p>
      </section>
    `),this._selectNoAttr,this._selectNoAttr,this._noAttrAnimationClasses,this._noAttrCode,JSON.stringify(this._noAttrAnimationClasses,null,2),this._selectAttr,this._selectAttr,this._attrAnimationClasses,this._attrCode,JSON.stringify(this._attrAnimationClasses,null,2))}static get properties(){return{_attrAnimationClasses:{type:Object},_noAttrAnimationClasses:{type:Object}}}static get styles(){return[_t,ae,se,Yt,Nt,Ut,Dt,Jt,Gt,Kt,te,$(Ao||(Ao=Oo`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `))]}_selectNoAttr(t){const e=this.shadowRoot.querySelector("#noAttr"),{action:o}=t.target.dataset;this._select(e,o)}_selectAttr(t){const e=this.shadowRoot.querySelector("#attr"),{action:o}=t.target.dataset;this._select(e,o)}_select(t,e){"next"===e?t.selectNext():"previous"===e&&t.selectPrevious()}constructor(){super(),this._noAttrAnimationClasses={"0_1":{in:"page-rotateCubeLeftIn",out:"page-rotateCubeLeftOut"},"2_1":{in:"page-rotateCubeRightIn",out:"page-rotateCubeRightOut"},"*_0":{in:"page-rotateCubeRightIn",out:"page-rotateCubeRightOut"},"*_2":{in:"page-rotateCubeLeftIn",out:"page-rotateCubeLeftOut"},_0:{in:"page-fadeIn",out:"page-fadeOut"},_2:{in:"page-fadeIn",out:"page-fadeOut"},default:{in:"page-fadeIn",out:"page-fadeOut"}},this._attrAnimationClasses={first_second:{in:"page-rotateCarouselLeftIn",out:"page-rotateCarouselLeftOut"},third_second:{in:"page-rotateCarouselRightIn",out:"page-rotateCarouselRightOut"},"*_first":{in:"page-rotateCarouselRightIn",out:"page-rotateCarouselRightOut"},"*_third":{in:"page-rotateCarouselLeftIn",out:"page-rotateCarouselLeftOut"},_first:{in:"page-fadeIn",out:"page-fadeOut"},_third:{in:"page-fadeIn",out:"page-fadeOut"},default:{in:"page-fadeIn",out:"page-fadeOut"}},this._noAttrCode='\n<helium-animated-pages\n  .animationClasses="${this._noAttrAnimationClasses}"\n>\n  <div>Slide index: 0</div>\n  <div>Slide index: 1</div>\n  <div>Slide index: 2</div>\n</helium-animated-pages>'.trim(),this._attrCode='\n<helium-animated-pages\n  attrForSelected="name"\n  .animationClasses="${this._attrAnimationClasses}"\n>\n  <div name="first">First Slide</div>\n  <div name="second">Second Slide</div>\n  <div name="third">Third Slide</div>\n</helium-animated-pages>'.trim()}});let Ro,Io,Fo=t=>t;window.customElements.define("property-demo",class extends xt{render(){return at(Ro||(Ro=Fo`
      <section>
        <h2>Selected Property Demo</h2>
        <p>
          These demos use the <code>selected</code> property to change which
          slide is shown.
        </p>
        <p>
          This is the recommended way of using this component. Just update
          <code>selected</code> either as an attribute or as a property and
          you're done!
        </p>
        <h3>Without Using attrForSelected</h3>
        <p>
          If you don't use the <code>attrForSelected</code> property you can set
          the numerical index of which element you wish to show.
        </p>
        <p>
          Note that we're using the <code>helium-start</code> and
          <code>helium-end</code> events to disable the input changing the
          slides while the animation is running
        </p>
        <p>
          <label for="select-index">Slide Index:</label>
          <input
            type="number"
            id="select-index"
            min="0"
            max="2"
            placeholder="0"
            @change=${0}
          />
        </p>
      </section>
      <section class="container">
        <helium-animated-pages
          class="sample-pages"
          selected="${0}"
          .animationClasses="${0}"
          @helium-start="${0}"
          @helium-end="${0}"
        >
          <div>Slide index: 0</div>
          <div>Slide index: 1</div>
          <div>Slide index: 2</div>
        </helium-animated-pages>
      </section>
      <section>
        Code for the previous example:
        <pre><code>${0}</code></pre>
      </section>
      <section>
        <h3>Using attrForSelected</h3>
        <p>
          If you use <code>attrForSelected</code> you'll be able to set which of
          the animated pages attributes this component should check to identify
          each page.
        </p>
        <p>
          By doing this the value of <code>selected</code> may now be a string.
          And the children whose attribute value corresponds to the value of
          <code>selected</code> will become active.
        </p>
        <p>
          <label for="select-name">Select Slide with <code>name</code>:</label>
          <select id="select-name" @blur=${0}>
            <option value="">Select name...</option>
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="third">third</option>
          </select>
        </p>
      </section>
      <section class="container">
        <helium-animated-pages
          class="sample-pages"
          attrForSelected="name"
          selected="${0}"
          .animationClasses="${0}"
        >
          <div name="first">First Slide</div>
          <div name="second">Second Slide</div>
          <div name="third">Third Slide</div>
        </helium-animated-pages>
      </section>
      <section>
        Code for the previous example:
        <pre><code>${0}</code></pre>
      </section>
      <section>
        <h3>animationClasses</h3>
        <p>
          The code for the <code>animationClasses</code> in this two demos is
          the simplest version. It only sets the default animation for every
          single transition.
        </p>
        <pre><code>${0}</code></pre>
      </section>
      <section>
        <h3>Changing slides with methods</h3>
        <p>
          This component exposes 3 methods for selecting slides other than using
          the <code>selected</code> property.
        </p>
        <p>
          They are <code>select(next)</code>, <code>selectPrevious()</code>, and
          <code>selectNext()</code>.
        </p>
        <p>
          However, using these methods is not really recommended as they can
          cause problems if you're also modifying the
          <code>selected</code> property.
        </p>
      </section>
    `),this._indexChanged,this._selectedIndex,this._propAnimationClasses,this._toggleDisabledIndex,this._toggleDisabledIndex,this._indexDemoCode,this._nameChanged,this._selectedName,this._propAnimationClasses,this._nameDemoCode,JSON.stringify(this._propAnimationClasses,null,2))}static get properties(){return{_selectedIndex:{type:Number},_selectedName:{type:String},_propAnimationClasses:{type:Object}}}static get styles(){return[_t,ae,se,$(Io||(Io=Fo`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `))]}constructor(){super(),this._propAnimationClasses={default:{in:"page-fadeIn",out:"page-fadeOut"}},this._indexDemoCode='\n<helium-animated-pages\n  selected="${this._selectedIndex}"\n  .animationClasses="${this._propAnimationClasses}"\n  @helium-start="${this._toggleDisabledIndex}"\n  @helium-end="${this._toggleDisabledIndex}"\n>\n  <div>Slide index: 0</div>\n  <div>Slide index: 1</div>\n  <div>Slide index: 2</div>\n</helium-animated-pages>'.trim(),this._nameDemoCode='\n<helium-animated-pages\n  attrForSelected="name"\n  selected="${this._selectedName}"\n  .animationClasses="${this._propAnimationClasses}"\n>\n  <div name="first">First Slide</div>\n  <div name="second">Second Slide</div>\n  <div name="third">Third Slide</div>\n</helium-animated-pages>'.trim()}_indexChanged(t){t.target.value&&(this._selectedIndex=parseInt(t.target.value,10))}_toggleDisabledIndex(){const t=this.shadowRoot.querySelector("#select-index");t.disabled=!t.disabled}_nameChanged(t){t.target.value&&(this._selectedName=t.target.value)}});let Po,$o,Bo=t=>t;window.customElements.define("demo-element",class extends Ct{render(){return at(Po||(Po=Bo`
      <header>
        <div class="tag-name">&lt;helium-animated-pages&gt;</div>
        <a href="./index.html">Docs</a>
        <a class="demo" href="https://github.com/alangdm/helium-animated-pages"
          >Github</a
        >
      </header>
      <section class="sub-header">
        <label for="page-select">Select a Demo</label>
        <select id="page-select" @blur="${0}">
          <option value="">Select Demo...</option>
          <option value="property">Using the 'selected' property</option>
          <option value="settings">Customizing the animations</option>
        </select>
      </section>
      <helium-animated-pages
        id="main"
        attrForSelected="name"
        .animationClasses="${0}"
      >
        <settings-demo name="settings"></settings-demo>
        <property-demo name="property"></property-demo>
      </helium-animated-pages>
    `),this._selectMainPage,this._mainAnimationClasses)}static get properties(){return{_mainAnimationClasses:{type:Object}}}static get styles(){return[_t,ae,se,$($o||($o=Bo`
        :host {
          --primary-color: #01579b;
          --primary-contrast-color: #ffffff;
          --accent-color: #d63200;
          --main-text-color: #212121;
          --secondary-text-color: #424242;
          --monospace-font: Menlo, 'DejaVu Sans Mono', 'Liberation Mono',
            Consolas, 'Courier New', monospace;
          --border-radius: 4px;
          --code-background: #1e1e1e;
          --code-color: #dcdcaa;
        }
        /* Header */
        header {
          display: grid;
          grid-template-columns: 1fr auto auto;
          border-top-left-radius: var(--border-radius);
          border-top-right-radius: var(--border-radius);
          padding: 0.75rem;
          background: var(--primary-color);
        }
        .tag-name {
          color: var(--primary-contrast-color);
          font-family: var(--monospace-font);
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
        header a {
          color: var(--primary-contrast-color);
          font-size: 0.875rem;
          line-height: 1.5rem;
          margin: 0px 0.75rem 0px 0.25rem;
        }
        /* sub header */
        .sub-header {
          padding: 1rem;
        }
        helium-animated-pages {
          height: calc(100% - 8rem);
        }
        helium-animated-pages > * {
          overflow-y: scroll;
        }
      `))]}constructor(){super(),this._mainAnimationClasses={default:{in:"page-fadeIn",out:"page-fadeOut"}}}_selectMainPage(t){t.target.value&&(this.shadowRoot.querySelector("#main").selected=t.target.value)}});
