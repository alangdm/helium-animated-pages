const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class o{constructor(t,o){if(o!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const i=new Map,a=t=>{let a=i.get(t);return void 0===a&&i.set(t,a=new o(t,e)),a},s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,a)=>e+(t=>{if(t instanceof o)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1]),t[0]);return a(i)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>a("string"==typeof t?t:t+""))(e)})(t):t;var r,l,d,h;const m={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},c=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this.Πp(o,e);void 0!==i&&(this.Πm.set(i,o),t.push(i))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const a=this[t];this[e]=i,this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static"Πp"(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{t?e.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style");o.textContent=t.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,o){this.K(t,o)}"Πj"(t,e,o=p){var i,a;const s=this.constructor.Πp(t,o);if(void 0!==s&&!0===o.reflect){const n=(null!==(a=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==a?a:m.toAttribute)(e,o.type);this.Πh=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this.Πh=null}}K(t,e){var o,i,a;const s=this.constructor,n=s.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=s.getPropertyOptions(n),r=t.converter,l=null!==(a=null!==(i=null===(o=r)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof r?r:null)&&void 0!==a?a:m.fromAttribute;this.Πh=n,this[n]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===o.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const o=this.L;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(o)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var f,g,v,y;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null===(l=(r=globalThis).reactiveElementPlatformSupport)||void 0===l||l.call(r,{ReactiveElement:u}),(null!==(d=(h=globalThis).reactiveElementVersions)&&void 0!==d?d:h.reactiveElementVersions=[]).push("1.0.0-rc.2");const b=globalThis.trustedTypes,x=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,S="?"+C,_=`<${S}>`,w=document,T=(t="")=>w.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,O=/>/g,$=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,F=/'/g,P=/"/g,L=/^(?:script|style|textarea)$/i,N=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),H=new WeakMap,U=w.createTreeWalker(w,129,null,!1);class E{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let a=0,s=0;const n=t.length-1,r=this.parts,[l,d]=((t,e)=>{const o=t.length-1,i=[];let a,s=2===e?"<svg>":"",n=I;for(let e=0;e<o;e++){const o=t[e];let r,l,d=-1,h=0;for(;h<o.length&&(n.lastIndex=h,l=n.exec(o),null!==l);)h=n.lastIndex,n===I?"!--"===l[1]?n=R:void 0!==l[1]?n=O:void 0!==l[2]?(L.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=$):void 0!==l[3]&&(n=$):n===$?">"===l[0]?(n=null!=a?a:I,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?$:'"'===l[3]?P:F):n===P||n===F?n=$:n===R||n===O?n=I:(n=$,a=void 0);const m=n===$&&t[e+1].startsWith("/>")?" ":"";s+=n===I?o+_:d>=0?(i.push(r),o.slice(0,d)+"$lit$"+o.slice(d)+C+m):o+C+(-2===d?(i.push(void 0),e):m)}const r=s+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==x?x.createHTML(r):r,i]})(t,e);if(this.el=E.createElement(l,o),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=U.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(C)){const o=d[s++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(C),e=/([.?@])?(.*)/.exec(o);r.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?M:"@"===e[1]?W:D})}else r.push({type:6,index:a})}for(const e of t)i.removeAttribute(e)}if(L.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],T()),U.nextNode(),r.push({type:2,index:++a});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===S)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)r.push({type:7,index:a}),t+=C.length-1}a++}}static createElement(t,e){const o=w.createElement("template");return o.innerHTML=t,o}}function X(t,e,o=t,i){var a,s,n,r;if(e===N)return e;let l=void 0!==i?null===(a=o.Σi)||void 0===a?void 0:a[i]:o.Σo;const d=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l.O)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l.T(t,o,i)),void 0!==i?(null!==(n=(r=o).Σi)&&void 0!==n?n:r.Σi=[])[i]=l:o.Σo=l),void 0!==l&&(e=X(t,l.S(t,e.values),l,i)),e}class Y{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:o},parts:i}=this.D,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(o,!0);U.currentNode=a;let s=U.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new z(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new j(s,this,t)),this.l.push(e),l=i[++r]}n!==(null==l?void 0:l.index)&&(s=U.nextNode(),n++)}return a}v(t){let e=0;for(const o of this.l)void 0!==o&&(void 0!==o.strings?(o.I(t,o,e),e+=o.strings.length-2):o.I(t[e])),e++}}class z{constructor(t,e,o,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=o,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=X(this,t,e),k(t)?t===B||null==t||""===t?(this.H!==B&&this.R(),this.H=B):t!==this.H&&t!==N&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(w.createTextNode(t)),this.H=t}_(t){var e;const{values:o,_$litType$:i}=t,a="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=E.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===a)this.H.v(o);else{const t=new Y(a,this),e=t.u(this.options);t.v(o),this.$(e),this.H=t}}C(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new E(t)),e}g(t){A(this.H)||(this.H=[],this.R());const e=this.H;let o,i=0;for(const a of t)i===e.length?e.push(o=new z(this.k(T()),this.k(T()),this,this.options)):o=e[i],o.I(a),i++;i<e.length&&(this.R(o&&o.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var o;for(null===(o=this.P)||void 0===o||o.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class D{constructor(t,e,o,i,a){this.type=1,this.H=B,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this.H=Array(o.length-1).fill(B),this.strings=o):this.H=B}get tagName(){return this.element.tagName}I(t,e=this,o,i){const a=this.strings;let s=!1;if(void 0===a)t=X(this,t,e,0),s=!k(t)||t!==this.H&&t!==N,s&&(this.H=t);else{const i=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=X(this,i[o+n],e,n),r===N&&(r=this.H[n]),s||(s=!k(r)||r!==this.H[n]),r===B?t=B:t!==B&&(t+=(null!=r?r:"")+a[n+1]),this.H[n]=r}s&&!i&&this.W(t)}W(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends D{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===B?void 0:t}}class M extends D{constructor(){super(...arguments),this.type=4}W(t){t&&t!==B?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class W extends D{constructor(){super(...arguments),this.type=5}I(t,e=this){var o;if((t=null!==(o=X(this,t,e,0))&&void 0!==o?o:B)===N)return;const i=this.H,a=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==B&&(i===B||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,o;"function"==typeof this.H?this.H.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this.H.handleEvent(t)}}class j{constructor(t,e,o){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=o}I(t){X(this,t)}}var V,q,J,K;null===(g=(f=globalThis).litHtmlPlatformSupport)||void 0===g||g.call(f,E,z),(null!==(v=(y=globalThis).litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.0.0-rc.3");const G=globalThis.trustedTypes,Q=G?G.createPolicy("lit-html",{createHTML:t=>t}):void 0,tt=`lit$${(Math.random()+"").slice(9)}$`,et="?"+tt,ot=`<${et}>`,it=document,at=(t="")=>it.createComment(t),st=t=>null===t||"object"!=typeof t&&"function"!=typeof t,nt=Array.isArray,rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,dt=/>/g,ht=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,mt=/'/g,ct=/"/g,pt=/^(?:script|style|textarea)$/i,ut=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),ft=Symbol.for("lit-noChange"),gt=Symbol.for("lit-nothing"),vt=new WeakMap,yt=it.createTreeWalker(it,129,null,!1),bt=(t,e)=>{const o=t.length-1,i=[];let a,s=2===e?"<svg>":"",n=rt;for(let e=0;e<o;e++){const o=t[e];let r,l,d=-1,h=0;for(;h<o.length&&(n.lastIndex=h,l=n.exec(o),null!==l);)h=n.lastIndex,n===rt?"!--"===l[1]?n=lt:void 0!==l[1]?n=dt:void 0!==l[2]?(pt.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=ht):void 0!==l[3]&&(n=ht):n===ht?">"===l[0]?(n=null!=a?a:rt,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?ht:'"'===l[3]?ct:mt):n===ct||n===mt?n=ht:n===lt||n===dt?n=rt:(n=ht,a=void 0);const m=n===ht&&t[e+1].startsWith("/>")?" ":"";s+=n===rt?o+ot:d>=0?(i.push(r),o.slice(0,d)+"$lit$"+o.slice(d)+tt+m):o+tt+(-2===d?(i.push(void 0),e):m)}const r=s+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==Q?Q.createHTML(r):r,i]};class xt{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let a=0,s=0;const n=t.length-1,r=this.parts,[l,d]=bt(t,e);if(this.el=xt.createElement(l,o),yt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=yt.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(tt)){const o=d[s++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(tt),e=/([.?@])?(.*)/.exec(o);r.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?Tt:"?"===e[1]?kt:"@"===e[1]?At:wt})}else r.push({type:6,index:a})}for(const e of t)i.removeAttribute(e)}if(pt.test(i.tagName)){const t=i.textContent.split(tt),e=t.length-1;if(e>0){i.textContent=G?G.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],at()),yt.nextNode(),r.push({type:2,index:++a});i.append(t[e],at())}}}else if(8===i.nodeType)if(i.data===et)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(tt,t+1));)r.push({type:7,index:a}),t+=tt.length-1}a++}}static createElement(t,e){const o=it.createElement("template");return o.innerHTML=t,o}}function Ct(t,e,o=t,i){var a,s,n,r;if(e===ft)return e;let l=void 0!==i?null===(a=o.Σi)||void 0===a?void 0:a[i]:o.Σo;const d=st(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l.O)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l.T(t,o,i)),void 0!==i?(null!==(n=(r=o).Σi)&&void 0!==n?n:r.Σi=[])[i]=l:o.Σo=l),void 0!==l&&(e=Ct(t,l.S(t,e.values),l,i)),e}class St{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:o},parts:i}=this.D,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:it).importNode(o,!0);yt.currentNode=a;let s=yt.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new _t(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new It(s,this,t)),this.l.push(e),l=i[++r]}n!==(null==l?void 0:l.index)&&(s=yt.nextNode(),n++)}return a}v(t){let e=0;for(const o of this.l)void 0!==o&&(void 0!==o.strings?(o.I(t,o,e),e+=o.strings.length-2):o.I(t[e])),e++}}class _t{constructor(t,e,o,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=o,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=Ct(this,t,e),st(t)?t===gt||null==t||""===t?(this.H!==gt&&this.R(),this.H=gt):t!==this.H&&t!==ft&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return nt(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(it.createTextNode(t)),this.H=t}_(t){var e;const{values:o,_$litType$:i}=t,a="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=xt.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===a)this.H.v(o);else{const t=new St(a,this),e=t.u(this.options);t.v(o),this.$(e),this.H=t}}C(t){let e=vt.get(t.strings);return void 0===e&&vt.set(t.strings,e=new xt(t)),e}g(t){nt(this.H)||(this.H=[],this.R());const e=this.H;let o,i=0;for(const a of t)i===e.length?e.push(o=new _t(this.k(at()),this.k(at()),this,this.options)):o=e[i],o.I(a),i++;i<e.length&&(this.R(o&&o.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var o;for(null===(o=this.P)||void 0===o||o.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class wt{constructor(t,e,o,i,a){this.type=1,this.H=gt,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this.H=Array(o.length-1).fill(gt),this.strings=o):this.H=gt}get tagName(){return this.element.tagName}I(t,e=this,o,i){const a=this.strings;let s=!1;if(void 0===a)t=Ct(this,t,e,0),s=!st(t)||t!==this.H&&t!==ft,s&&(this.H=t);else{const i=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=Ct(this,i[o+n],e,n),r===ft&&(r=this.H[n]),s||(s=!st(r)||r!==this.H[n]),r===gt?t=gt:t!==gt&&(t+=(null!=r?r:"")+a[n+1]),this.H[n]=r}s&&!i&&this.W(t)}W(t){t===gt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Tt extends wt{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===gt?void 0:t}}class kt extends wt{constructor(){super(...arguments),this.type=4}W(t){t&&t!==gt?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class At extends wt{constructor(){super(...arguments),this.type=5}I(t,e=this){var o;if((t=null!==(o=Ct(this,t,e,0))&&void 0!==o?o:gt)===ft)return;const i=this.H,a=t===gt&&i!==gt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==gt&&(i===gt||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,o;"function"==typeof this.H?this.H.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this.H.handleEvent(t)}}class It{constructor(t,e,o){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=o}I(t){Ct(this,t)}}var Rt,Ot,$t,Ft,Pt,Lt;null===(q=(V=globalThis).litHtmlPlatformSupport)||void 0===q||q.call(V,xt,_t),(null!==(J=(K=globalThis).litHtmlVersions)&&void 0!==J?J:K.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(Rt=(Lt=globalThis).litElementVersions)&&void 0!==Rt?Rt:Lt.litElementVersions=[]).push("3.0.0-rc.2");class Nt extends u{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();super.update(t),this.Φt=((t,e,o)=>{var i,a;const s=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let n=s._$litPart$;if(void 0===n){const t=null!==(a=null==o?void 0:o.renderBefore)&&void 0!==a?a:null;s._$litPart$=n=new _t(e.insertBefore(at(),t),t,void 0,o)}return n.I(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return ft}}Nt.finalized=!0,Nt._$litElement$=!0,null===($t=(Ot=globalThis).litElementHydrateSupport)||void 0===$t||$t.call(Ot,{LitElement:Nt}),null===(Pt=(Ft=globalThis).litElementPlatformSupport)||void 0===Pt||Pt.call(Ft,{LitElement:Nt});class Bt extends Nt{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}let Ht;const Ut=s(Ht||(Ht=(t=>t)`
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
`)),Et={fromAttribute(t){if(!t)return;const e=t.trim();if(""===e||"undefined"===e||"null"===e)return;const o=parseInt(e,10);return Number.isNaN(o)?t:o},toAttribute:t=>void 0!==t?`${t}`:null};let Xt,Yt,zt=t=>t;const Dt=t=>{const e=parseInt(t,10);return Number.isNaN(e)};customElements.define("helium-animated-pages",class extends Nt{render(){return ut(Xt||(Xt=zt` <slot></slot> `))}static get styles(){return[s(Yt||(Yt=zt`
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
      `))]}static get properties(){return{animationClasses:{type:Object},attrForSelected:{type:String},selected:{converter:Et}}}constructor(){super(),this._inAnimation=this._inAnimation.bind(this),this._outAnimation=this._outAnimation.bind(this),this.attrForSelected="",this.animationClasses={}}get isAnimating(){return this._animating}get selected(){return this._selected}set selected(t){if(null==t||this._animating)return;if(this._inPage=Dt(t)?this.querySelector(`[${this.attrForSelected}="${t}"]`):this.children[t],this._outPage=this.selectedItem,!this._inPage||this._inPage===this._outPage)return;const e=this._selected;let o="";this._outPage&&(o=this.attrForSelected?this._outPage.getAttribute(this.attrForSelected):Array.from(this.children).indexOf(this._outPage)),this._selected=this.attrForSelected?this._inPage.getAttribute(this.attrForSelected):t,this._changeActive(this._selected,o),this.requestUpdate("selected",e)}get selectedItem(){if(this._selected||0===this._selected){return Dt(this._selected)?this.querySelector(`[${this.attrForSelected}="${this._selected}"]`):this.children[this._selected]}return null}select(t){this.selected=t}selectNext(){const t=Array.from(this.children);if(!t||0===t.length)return;const{selectedItem:e}=this,o=t.indexOf(e),i=o+1>=t.length?0:o+1;this.selected=i}selectPrevious(){const t=Array.from(this.children);if(!t||0===t.length)return;const{selectedItem:e}=this,o=t.indexOf(e),i=o-1<0?t.length-1:o-1;this.selected=i}_changeActive(t,e){const o=new CustomEvent("helium-start",{composed:!0,bubbles:!0});if(this.dispatchEvent(o),this.animationClasses)this._currentClasses=this._animationClasses(t,e),this._beginAnimation();else{this._inPage.setAttribute("active",!0),this._outPage&&this._outPage.removeAttribute("active");const t=new CustomEvent("helium-end",{composed:!0,bubbles:!0});this.dispatchEvent(t)}}_beginAnimation(){this._animating=!0,this._inPage.addEventListener("animationend",this._inAnimation,{once:!0}),this._outPage?(this._outPage.addEventListener("animationend",this._outAnimation,{once:!0}),this._outPage.classList.add(this._currentClasses.out)):this._outAnimationEnded=!0,this._inPage.classList.add(this._currentClasses.in),this._inPage.setAttribute("active",!0)}_animationClasses(t,e){const o=`${e}_${t}`,i=`*_${t}`,a=`${e}_*`;return o in this.animationClasses?this.animationClasses[o]:i in this.animationClasses?this.animationClasses[i]:a in this.animationClasses?this.animationClasses[a]:this.animationClasses.default}_inAnimation(){this._inAnimationEnded=!0,this._onAnimationEnd()}_outAnimation(){this._outAnimationEnded=!0,this._onAnimationEnd()}_onAnimationEnd(){if(this._inAnimationEnded&&this._outAnimationEnded){this._inAnimationEnded=!1,this._outAnimationEnded=!1,this._animating=!1,this._inPage.classList.remove(this._currentClasses.in),this._outPage&&(this._outPage.removeAttribute("active"),this._outPage.classList.remove(this._currentClasses.out)),this._inPage=null,this._outPage=null,this._currentClasses=null;const t=new CustomEvent("helium-end",{composed:!0,bubbles:!0});this.dispatchEvent(t)}}});let Zt,Mt,Wt,jt,Vt,qt,Jt,Kt,Gt=t=>t;const Qt=s(Zt||(Zt=Gt`
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
`)),te=s(Mt||(Mt=Gt`
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
`));s(Wt||(Wt=Gt`
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
`)),s(jt||(jt=Gt`
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
`));const ee=s(Vt||(Vt=Gt`
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
`)),oe=s(qt||(qt=Gt`
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
`));s(Jt||(Jt=Gt`
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
`)),s(Kt||(Kt=Gt`
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
`));let ie,ae,se,ne,re,le,de,he,me=t=>t;const ce=s(ie||(ie=me`
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
`)),pe=s(ae||(ae=me`
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
`));s(se||(se=me`
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
`)),s(ne||(ne=me`
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
`));const ue=s(re||(re=me`
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
`)),fe=s(le||(le=me`
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
`));s(de||(de=me`
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
`)),s(he||(he=me`
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
`));let ge,ve,ye=t=>t;const be=s(ge||(ge=ye`
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
`)),xe=s(ve||(ve=ye`
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
`));let Ce,Se,_e,we,Te,ke,Ae,Ie,Re=t=>t;s(Ce||(Ce=Re`
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
`)),s(Se||(Se=Re`
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
`)),s(_e||(_e=Re`
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
`)),s(we||(we=Re`
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
`)),s(Te||(Te=Re`
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
`)),s(ke||(ke=Re`
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
`)),s(Ae||(Ae=Re`
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
`)),s(Ie||(Ie=Re`
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
`));let Oe,$e,Fe,Pe,Le,Ne,Be,He,Ue=t=>t;s(Oe||(Oe=Ue`
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
`)),s($e||($e=Ue`
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
`)),s(Fe||(Fe=Ue`
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
`)),s(Pe||(Pe=Ue`
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
`)),s(Le||(Le=Ue`
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
`)),s(Ne||(Ne=Ue`
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
`)),s(Be||(Be=Ue`
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
`)),s(He||(He=Ue`
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
`));let Ee,Xe,Ye,ze,De,Ze,Me,We,je,Ve,qe,Je,Ke,Ge,Qe,to,eo=t=>t;s(Ee||(Ee=eo`
  .page-moveFromLeft {
    animation: moveFromLeft 0.6s ease both;
  }
  @keyframes moveFromLeft {
    from {
      transform: translateX(-100%);
    }
  }
`)),s(Xe||(Xe=eo`
  .page-moveFromRight {
    animation: moveFromRight 0.6s ease both;
  }
  @keyframes moveFromRight {
    from {
      transform: translateX(100%);
    }
  }
`)),s(Ye||(Ye=eo`
  .page-moveFromTop {
    animation: moveFromTop 0.6s ease both;
  }
  @keyframes moveFromTop {
    from {
      transform: translateY(-100%);
    }
  }
`)),s(ze||(ze=eo`
  .page-moveFromBottom {
    animation: moveFromBottom 0.6s ease both;
  }
  @keyframes moveFromBottom {
    from {
      transform: translateY(100%);
    }
  }
`)),s(De||(De=eo`
  .page-moveFromLeftFade {
    animation: moveFromLeftFade 0.6s ease both;
  }
  @keyframes moveFromLeftFade {
    from {
      opacity: 0.3;
      transform: translateX(-100%);
    }
  }
`)),s(Ze||(Ze=eo`
  .page-moveFromRightFade {
    animation: moveFromRightFade 0.6s ease both;
  }
  @keyframes moveFromRightFade {
    from {
      opacity: 0.3;
      transform: translateX(100%);
    }
  }
`)),s(Me||(Me=eo`
  .page-moveFromTopFade {
    animation: moveFromTopFade 0.6s ease both;
  }
  @keyframes moveFromTopFade {
    from {
      opacity: 0.3;
      transform: translateY(-100%);
    }
  }
`)),s(We||(We=eo`
  .page-moveFromBottomFade {
    animation: moveFromBottomFade 0.6s ease both;
  }
  @keyframes moveFromBottomFade {
    from {
      opacity: 0.3;
      transform: translateY(100%);
    }
  }
`)),s(je||(je=eo`
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
`)),s(Ve||(Ve=eo`
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
`)),s(qe||(qe=eo`
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
`)),s(Je||(Je=eo`
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
`)),s(Ke||(Ke=eo`
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
`)),s(Ge||(Ge=eo`
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
`)),s(Qe||(Qe=eo`
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
`)),s(to||(to=eo`
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
`));let oo,io,ao,so,no,ro,lo,ho,mo=t=>t;s(oo||(oo=mo`
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
`)),s(io||(io=mo`
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
`)),s(ao||(ao=mo`
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
`)),s(so||(so=mo`
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
`)),s(no||(no=mo`
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
`)),s(ro||(ro=mo`
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
`)),s(lo||(lo=mo`
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
`)),s(ho||(ho=mo`
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
`));let co,po,uo,fo,go,vo,yo,bo,xo=t=>t;s(co||(co=xo`
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
`)),s(po||(po=xo`
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
`)),s(uo||(uo=xo`
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
`)),s(fo||(fo=xo`
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
`)),s(go||(go=xo`
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
`)),s(vo||(vo=xo`
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
`)),s(yo||(yo=xo`
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
`)),s(bo||(bo=xo`
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
`));let Co,So,_o,wo,To,ko,Ao,Io=t=>t;s(Co||(Co=Io`
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
`)),s(So||(So=Io`
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
`)),s(_o||(_o=Io`
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
`)),s(wo||(wo=Io`
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
`)),s(To||(To=Io`
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
`)),s(ko||(ko=Io`
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
`)),s(Ao||(Ao=Io`
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
`));let Ro,Oo,$o,Fo,Po,Lo,No=t=>t;s(Ro||(Ro=No`
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
`)),s(Oo||(Oo=No`
  .page-scaleUpDown {
    animation: scaleUpDown 0.5s ease both;
  }
  @keyframes scaleUpDown {
    from {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`)),s($o||($o=No`
  .page-scaleUpCenter {
    animation: scaleUpCenter 0.4s ease-out both;
  }
  @keyframes scaleUpCenter {
    from {
      opacity: 0;
      transform: scale(0.7);
    }
  }
`)),s(Fo||(Fo=No`
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
`)),s(Po||(Po=No`
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
`)),s(Lo||(Lo=No`
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
`));let Bo,Ho,Uo=t=>t;s(Bo||(Bo=Uo`
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
`)),s(Ho||(Ho=Uo`
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
`));let Eo,Xo,Yo=t=>t;s(Eo||(Eo=Yo`
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
`)),s(Xo||(Xo=Yo`
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
`));let zo,Do,Zo=t=>t;window.customElements.define("settings-demo",class extends Bt{render(){return ut(zo||(zo=Zo`
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
    `),this._selectNoAttr,this._selectNoAttr,this._noAttrAnimationClasses,this._noAttrCode,JSON.stringify(this._noAttrAnimationClasses,null,2),this._selectAttr,this._selectAttr,this._attrAnimationClasses,this._attrCode,JSON.stringify(this._attrAnimationClasses,null,2))}static get properties(){return{_attrAnimationClasses:{type:Object},_noAttrAnimationClasses:{type:Object}}}static get styles(){return[Ut,be,xe,Qt,te,ee,oe,ce,pe,ue,fe,s(Do||(Do=Zo`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `))]}_selectNoAttr(t){const e=this.shadowRoot.querySelector("#noAttr"),{action:o}=t.target.dataset;this._select(e,o)}_selectAttr(t){const e=this.shadowRoot.querySelector("#attr"),{action:o}=t.target.dataset;this._select(e,o)}_select(t,e){"next"===e?t.selectNext():"previous"===e&&t.selectPrevious()}constructor(){super(),this._noAttrAnimationClasses={"0_1":{in:"page-rotateCubeLeftIn",out:"page-rotateCubeLeftOut"},"2_1":{in:"page-rotateCubeRightIn",out:"page-rotateCubeRightOut"},"*_0":{in:"page-rotateCubeRightIn",out:"page-rotateCubeRightOut"},"*_2":{in:"page-rotateCubeLeftIn",out:"page-rotateCubeLeftOut"},_0:{in:"page-fadeIn",out:"page-fadeOut"},_2:{in:"page-fadeIn",out:"page-fadeOut"},default:{in:"page-fadeIn",out:"page-fadeOut"}},this._attrAnimationClasses={first_second:{in:"page-rotateCarouselLeftIn",out:"page-rotateCarouselLeftOut"},third_second:{in:"page-rotateCarouselRightIn",out:"page-rotateCarouselRightOut"},"*_first":{in:"page-rotateCarouselRightIn",out:"page-rotateCarouselRightOut"},"*_third":{in:"page-rotateCarouselLeftIn",out:"page-rotateCarouselLeftOut"},_first:{in:"page-fadeIn",out:"page-fadeOut"},_third:{in:"page-fadeIn",out:"page-fadeOut"},default:{in:"page-fadeIn",out:"page-fadeOut"}},this._noAttrCode='\n<helium-animated-pages\n  .animationClasses="${this._noAttrAnimationClasses}"\n>\n  <div>Slide index: 0</div>\n  <div>Slide index: 1</div>\n  <div>Slide index: 2</div>\n</helium-animated-pages>'.trim(),this._attrCode='\n<helium-animated-pages\n  attrForSelected="name"\n  .animationClasses="${this._attrAnimationClasses}"\n>\n  <div name="first">First Slide</div>\n  <div name="second">Second Slide</div>\n  <div name="third">Third Slide</div>\n</helium-animated-pages>'.trim()}});let Mo,Wo,jo=t=>t;window.customElements.define("property-demo",class extends Bt{render(){return ut(Mo||(Mo=jo`
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
    `),this._indexChanged,this._selectedIndex,this._propAnimationClasses,this._toggleDisabledIndex,this._toggleDisabledIndex,this._indexDemoCode,this._nameChanged,this._selectedName,this._propAnimationClasses,this._nameDemoCode,JSON.stringify(this._propAnimationClasses,null,2))}static get properties(){return{_selectedIndex:{type:Number},_selectedName:{type:String},_propAnimationClasses:{type:Object}}}static get styles(){return[Ut,be,xe,s(Wo||(Wo=jo`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `))]}constructor(){super(),this._propAnimationClasses={default:{in:"page-fadeIn",out:"page-fadeOut"}},this._indexDemoCode='\n<helium-animated-pages\n  selected="${this._selectedIndex}"\n  .animationClasses="${this._propAnimationClasses}"\n  @helium-start="${this._toggleDisabledIndex}"\n  @helium-end="${this._toggleDisabledIndex}"\n>\n  <div>Slide index: 0</div>\n  <div>Slide index: 1</div>\n  <div>Slide index: 2</div>\n</helium-animated-pages>'.trim(),this._nameDemoCode='\n<helium-animated-pages\n  attrForSelected="name"\n  selected="${this._selectedName}"\n  .animationClasses="${this._propAnimationClasses}"\n>\n  <div name="first">First Slide</div>\n  <div name="second">Second Slide</div>\n  <div name="third">Third Slide</div>\n</helium-animated-pages>'.trim()}_indexChanged(t){t.target.value&&(this._selectedIndex=parseInt(t.target.value,10))}_toggleDisabledIndex(){const t=this.shadowRoot.querySelector("#select-index");t.disabled=!t.disabled}_nameChanged(t){t.target.value&&(this._selectedName=t.target.value)}});let Vo,qo,Jo=t=>t;window.customElements.define("demo-element",class extends Nt{render(){return ut(Vo||(Vo=Jo`
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
    `),this._selectMainPage,this._mainAnimationClasses)}static get properties(){return{_mainAnimationClasses:{type:Object}}}static get styles(){return[Ut,be,xe,s(qo||(qo=Jo`
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
