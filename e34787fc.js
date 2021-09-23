const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new Map;class i{constructor(t,o){if(this._$cssResult$=!0,o!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=o.get(this.cssText);return t&&void 0===e&&(o.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=(t,...o)=>{const a=1===t.length?t[0]:o.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new i(a,e)},s=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let o="";for(const e of t.cssRules)o+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(o)})(t):t;var n,r;const l={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:d};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Eh(o,e);void 0!==i&&(this._$Eu.set(i,o),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const a=this[t];this[e]=i,this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{t?e.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$Eg(t,e,o=h){var i,a;const s=this.constructor._$Eh(t,o);if(void 0!==s&&!0===o.reflect){const n=(null!==(a=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==a?a:l.toAttribute)(e,o.type);this._$Ei=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Ei=null}}_$AK(t,e){var o,i,a;const s=this.constructor,n=s._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=s.getPropertyOptions(n),r=t.converter,d=null!==(a=null!==(i=null===(o=r)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof r?r:null)&&void 0!==a?a:l.fromAttribute;this._$Ei=n,this[n]=d(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}var c,p;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(n=globalThis.reactiveElementPolyfillSupport)||void 0===n||n.call(globalThis,{ReactiveElement:m}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.0.0");const u=globalThis.trustedTypes,f=u?u.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,v="?"+g,y=`<${v}>`,_=document,$=(t="")=>_.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,S=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,w=/'/g,k=/"/g,I=/^(?:script|style|textarea)$/i,R=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),E=new WeakMap,F=_.createTreeWalker(_,129,null,!1);class P{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let a=0,s=0;const n=t.length-1,r=this.parts,[l,d]=((t,e)=>{const o=t.length-1,i=[];let a,s=2===e?"<svg>":"",n=C;for(let e=0;e<o;e++){const o=t[e];let r,l,d=-1,h=0;for(;h<o.length&&(n.lastIndex=h,l=n.exec(o),null!==l);)h=n.lastIndex,n===C?"!--"===l[1]?n=x:void 0!==l[1]?n=S:void 0!==l[2]?(I.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=T):void 0!==l[3]&&(n=T):n===T?">"===l[0]?(n=null!=a?a:C,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?T:'"'===l[3]?k:w):n===k||n===w?n=T:n===x||n===S?n=C:(n=T,a=void 0);const m=n===T&&t[e+1].startsWith("/>")?" ":"";s+=n===C?o+y:d>=0?(i.push(r),o.slice(0,d)+"$lit$"+o.slice(d)+g+m):o+g+(-2===d?(i.push(void 0),e):m)}const r=s+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==f?f.createHTML(r):r,i]})(t,e);if(this.el=P.createElement(l,o),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=F.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const o=d[s++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(o);r.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?X:"@"===e[1]?Y:B})}else r.push({type:6,index:a})}for(const e of t)i.removeAttribute(e)}if(I.test(i.tagName)){const t=i.textContent.split(g),e=t.length-1;if(e>0){i.textContent=u?u.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],$()),F.nextNode(),r.push({type:2,index:++a});i.append(t[e],$())}}}else if(8===i.nodeType)if(i.data===v)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(g,t+1));)r.push({type:7,index:a}),t+=g.length-1}a++}}static createElement(t,e){const o=_.createElement("template");return o.innerHTML=t,o}}function L(t,e,o=t,i){var a,s,n,r;if(e===R)return e;let l=void 0!==i?null===(a=o._$Cl)||void 0===a?void 0:a[i]:o._$Cu;const d=b(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,o,i)),void 0!==i?(null!==(n=(r=o)._$Cl)&&void 0!==n?n:r._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,i)),e}class N{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(o,!0);F.currentNode=a;let s=F.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new U(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new M(s,this,t)),this.v.push(e),l=i[++r]}n!==(null==l?void 0:l.index)&&(s=F.nextNode(),n++)}return a}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class U{constructor(t,e,o,i){var a;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=null===(a=null==i?void 0:i.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),b(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==R&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==O&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=P.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(o);else{const t=new N(a,this),e=t.p(this.options);t.m(o),this.S(e),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new P(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const a of t)i===e.length?e.push(o=new U(this.A($()),this.A($()),this,this.options)):o=e[i],o._$AI(a),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,o,i,a){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const a=this.strings;let s=!1;if(void 0===a)t=L(this,t,e,0),s=!b(t)||t!==this._$AH&&t!==R,s&&(this._$AH=t);else{const i=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=L(this,i[o+n],e,n),r===R&&(r=this._$AH[n]),s||(s=!b(r)||r!==this._$AH[n]),r===O?t=O:t!==O&&(t+=(null!=r?r:"")+a[n+1]),this._$AH[n]=r}s&&!i&&this.k(t)}k(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===O?void 0:t}}class X extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==O?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends B{constructor(t,e,o,i,a){super(t,e,o,i,a),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=L(this,t,e,0))&&void 0!==o?o:O)===R)return;const i=this._$AH,a=t===O&&i!==O||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==O&&(i===O||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class M{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}var D,z;null===(c=globalThis.litHtmlPolyfillSupport)||void 0===c||c.call(globalThis,P,U),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.0");const Z=globalThis.trustedTypes,j=Z?Z.createPolicy("lit-html",{createHTML:t=>t}):void 0,W=`lit$${(Math.random()+"").slice(9)}$`,q="?"+W,V=`<${q}>`,J=document,K=(t="")=>J.createComment(t),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Q=Array.isArray,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,ot=/>/g,it=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,at=/'/g,st=/"/g,nt=/^(?:script|style|textarea)$/i,rt=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),lt=Symbol.for("lit-noChange"),dt=Symbol.for("lit-nothing"),ht=new WeakMap,mt=J.createTreeWalker(J,129,null,!1),ct=(t,e)=>{const o=t.length-1,i=[];let a,s=2===e?"<svg>":"",n=tt;for(let e=0;e<o;e++){const o=t[e];let r,l,d=-1,h=0;for(;h<o.length&&(n.lastIndex=h,l=n.exec(o),null!==l);)h=n.lastIndex,n===tt?"!--"===l[1]?n=et:void 0!==l[1]?n=ot:void 0!==l[2]?(nt.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=it):void 0!==l[3]&&(n=it):n===it?">"===l[0]?(n=null!=a?a:tt,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?it:'"'===l[3]?st:at):n===st||n===at?n=it:n===et||n===ot?n=tt:(n=it,a=void 0);const m=n===it&&t[e+1].startsWith("/>")?" ":"";s+=n===tt?o+V:d>=0?(i.push(r),o.slice(0,d)+"$lit$"+o.slice(d)+W+m):o+W+(-2===d?(i.push(void 0),e):m)}const r=s+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==j?j.createHTML(r):r,i]};class pt{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let a=0,s=0;const n=t.length-1,r=this.parts,[l,d]=ct(t,e);if(this.el=pt.createElement(l,o),mt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=mt.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(W)){const o=d[s++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(W),e=/([.?@])?(.*)/.exec(o);r.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?yt:"?"===e[1]?_t:"@"===e[1]?$t:vt})}else r.push({type:6,index:a})}for(const e of t)i.removeAttribute(e)}if(nt.test(i.tagName)){const t=i.textContent.split(W),e=t.length-1;if(e>0){i.textContent=Z?Z.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],K()),mt.nextNode(),r.push({type:2,index:++a});i.append(t[e],K())}}}else if(8===i.nodeType)if(i.data===q)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(W,t+1));)r.push({type:7,index:a}),t+=W.length-1}a++}}static createElement(t,e){const o=J.createElement("template");return o.innerHTML=t,o}}function ut(t,e,o=t,i){var a,s,n,r;if(e===lt)return e;let l=void 0!==i?null===(a=o._$Cl)||void 0===a?void 0:a[i]:o._$Cu;const d=G(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,o,i)),void 0!==i?(null!==(n=(r=o)._$Cl)&&void 0!==n?n:r._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(e=ut(t,l._$AS(t,e.values),l,i)),e}class ft{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:J).importNode(o,!0);mt.currentNode=a;let s=mt.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new gt(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new bt(s,this,t)),this.v.push(e),l=i[++r]}n!==(null==l?void 0:l.index)&&(s=mt.nextNode(),n++)}return a}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class gt{constructor(t,e,o,i){var a;this.type=2,this._$AH=dt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=null===(a=null==i?void 0:i.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ut(this,t,e),G(t)?t===dt||null==t||""===t?(this._$AH!==dt&&this._$AR(),this._$AH=dt):t!==this._$AH&&t!==lt&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return Q(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==dt&&G(this._$AH)?this._$AA.nextSibling.data=t:this.S(J.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=pt.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(o);else{const t=new ft(a,this),e=t.p(this.options);t.m(o),this.S(e),this._$AH=t}}_$AC(t){let e=ht.get(t.strings);return void 0===e&&ht.set(t.strings,e=new pt(t)),e}M(t){Q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const a of t)i===e.length?e.push(o=new gt(this.A(K()),this.A(K()),this,this.options)):o=e[i],o._$AI(a),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class vt{constructor(t,e,o,i,a){this.type=1,this._$AH=dt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=dt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const a=this.strings;let s=!1;if(void 0===a)t=ut(this,t,e,0),s=!G(t)||t!==this._$AH&&t!==lt,s&&(this._$AH=t);else{const i=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=ut(this,i[o+n],e,n),r===lt&&(r=this._$AH[n]),s||(s=!G(r)||r!==this._$AH[n]),r===dt?t=dt:t!==dt&&(t+=(null!=r?r:"")+a[n+1]),this._$AH[n]=r}s&&!i&&this.k(t)}k(t){t===dt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class yt extends vt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===dt?void 0:t}}class _t extends vt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==dt?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class $t extends vt{constructor(t,e,o,i,a){super(t,e,o,i,a),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=ut(this,t,e,0))&&void 0!==o?o:dt)===lt)return;const i=this._$AH,a=t===dt&&i!==dt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==dt&&(i===dt||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class bt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ut(this,t)}}var At,Ct,xt;null===(D=globalThis.litHtmlPolyfillSupport)||void 0===D||D.call(globalThis,pt,gt),(null!==(z=globalThis.litHtmlVersions)&&void 0!==z?z:globalThis.litHtmlVersions=[]).push("2.0.0");class St extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var i,a;const s=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let n=s._$litPart$;if(void 0===n){const t=null!==(a=null==o?void 0:o.renderBefore)&&void 0!==a?a:null;s._$litPart$=n=new gt(e.insertBefore(K(),t),t,void 0,null!=o?o:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return lt}}St.finalized=!0,St._$litElement$=!0,null===(At=globalThis.litElementHydrateSupport)||void 0===At||At.call(globalThis,{LitElement:St}),null===(Ct=globalThis.litElementPolyfillSupport)||void 0===Ct||Ct.call(globalThis,{LitElement:St}),(null!==(xt=globalThis.litElementVersions)&&void 0!==xt?xt:globalThis.litElementVersions=[]).push("3.0.0");class Tt extends St{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}let wt;const kt=a(wt||(wt=(t=>t)`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  select,
  input,
  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: #ffffff;
    height: 40px;
    color: var(--main-text-color);
    border: 1px solid var(--primary-color);
    border-radius: var(--border-radius);
    padding: 0.5rem 0.25rem;
    font-family: inherit;
  }

  button {
    color: var(--primary-color);
    padding: 0.5rem;
    font-weight: bold;
  }

  select:focus,
  input:focus,
  button:focus {
    outline: none;
    box-shadow: 0px 1px 1px 1px var(--primary-color);
  }

  button:hover,
  button:active {
    background-color: var(--primary-color);
    color: var(--primary-contrast-color);
  }

  button:active {
    filter: opacity(0.8);
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
    padding: 1rem;
  }

  p a,
  p a:visited,
  p a:hover {
    color: var(--accent-color);
  }

  .container {
    margin-bottom: 0.5rem;
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
`)),It={fromAttribute(t){if(!t)return;const e=t.trim();if(""===e||"undefined"===e||"null"===e)return;const o=parseInt(e,10);return Number.isNaN(o)?t:o},toAttribute:t=>void 0!==t?`${t}`:null};let Rt,Ot,Et=t=>t;const Ft=t=>{const e=parseInt(t,10);return Number.isNaN(e)};customElements.define("helium-animated-pages",class extends St{render(){return rt(Rt||(Rt=Et` <slot></slot> `))}static get styles(){return[a(Ot||(Ot=Et`
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
      `))]}static get properties(){return{animationClasses:{type:Object},attrForSelected:{type:String},selected:{converter:It}}}constructor(){super(),this._inAnimation=this._inAnimation.bind(this),this._outAnimation=this._outAnimation.bind(this),this.attrForSelected="",this.animationClasses={}}get isAnimating(){return this._animating}get selected(){return this._selected}set selected(t){if(null==t||this._animating)return;if(this._inPage=Ft(t)?this.querySelector(`[${this.attrForSelected}="${t}"]`):this.children[t],this._outPage=this.selectedItem,!this._inPage||this._inPage===this._outPage)return;const e=this._selected;let o="";this._outPage&&(o=this.attrForSelected?this._outPage.getAttribute(this.attrForSelected):Array.from(this.children).indexOf(this._outPage)),this._selected=this.attrForSelected?this._inPage.getAttribute(this.attrForSelected):t,this._changeActive(this._selected,o),this.requestUpdate("selected",e)}get selectedItem(){if(this._selected||0===this._selected){return Ft(this._selected)?this.querySelector(`[${this.attrForSelected}="${this._selected}"]`):this.children[this._selected]}return null}select(t){this.selected=t}selectNext(){const t=Array.from(this.children);if(!t||0===t.length)return;const{selectedItem:e}=this,o=t.indexOf(e),i=o+1>=t.length?0:o+1;this.selected=i}selectPrevious(){const t=Array.from(this.children);if(!t||0===t.length)return;const{selectedItem:e}=this,o=t.indexOf(e),i=o-1<0?t.length-1:o-1;this.selected=i}_changeActive(t,e){const o=new CustomEvent("helium-start",{composed:!0,bubbles:!0});if(this.dispatchEvent(o),this.animationClasses)this._currentClasses=this._animationClasses(t,e),this._beginAnimation();else{this._inPage.setAttribute("active",!0),this._outPage&&this._outPage.removeAttribute("active");const t=new CustomEvent("helium-end",{composed:!0,bubbles:!0});this.dispatchEvent(t)}}_beginAnimation(){this._animating=!0,this._inPage.addEventListener("animationend",this._inAnimation,{once:!0}),this._outPage?(this._outPage.addEventListener("animationend",this._outAnimation,{once:!0}),this._outPage.classList.add(this._currentClasses.out)):this._outAnimationEnded=!0,this._inPage.classList.add(this._currentClasses.in),this._inPage.setAttribute("active",!0)}_animationClasses(t,e){const o=`${e}_${t}`,i=`*_${t}`,a=`${e}_*`;return o in this.animationClasses?this.animationClasses[o]:i in this.animationClasses?this.animationClasses[i]:a in this.animationClasses?this.animationClasses[a]:this.animationClasses.default}_inAnimation(){this._inAnimationEnded=!0,this._onAnimationEnd()}_outAnimation(){this._outAnimationEnded=!0,this._onAnimationEnd()}_onAnimationEnd(){if(this._inAnimationEnded&&this._outAnimationEnded){this._inAnimationEnded=!1,this._outAnimationEnded=!1,this._animating=!1,this._inPage.classList.remove(this._currentClasses.in),this._outPage&&(this._outPage.removeAttribute("active"),this._outPage.classList.remove(this._currentClasses.out)),this._inPage=null,this._outPage=null,this._currentClasses=null;const t=new CustomEvent("helium-end",{composed:!0,bubbles:!0});this.dispatchEvent(t)}}});let Pt,Lt,Nt,Ut,Bt,Ht,Xt,Yt,Mt=t=>t;const Dt=a(Pt||(Pt=Mt`
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
`)),zt=a(Lt||(Lt=Mt`
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
`));a(Nt||(Nt=Mt`
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
`)),a(Ut||(Ut=Mt`
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
`));const Zt=a(Bt||(Bt=Mt`
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
`)),jt=a(Ht||(Ht=Mt`
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
`));a(Xt||(Xt=Mt`
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
`)),a(Yt||(Yt=Mt`
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
`));let Wt,qt,Vt,Jt,Kt,Gt,Qt,te,ee=t=>t;const oe=a(Wt||(Wt=ee`
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
`)),ie=a(qt||(qt=ee`
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
`));a(Vt||(Vt=ee`
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
`)),a(Jt||(Jt=ee`
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
`));const ae=a(Kt||(Kt=ee`
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
`)),se=a(Gt||(Gt=ee`
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
`));a(Qt||(Qt=ee`
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
`)),a(te||(te=ee`
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
`));let ne,re,le=t=>t;const de=a(ne||(ne=le`
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
`)),he=a(re||(re=le`
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
`));let me,ce,pe,ue,fe,ge,ve,ye,_e=t=>t;a(me||(me=_e`
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
`)),a(ce||(ce=_e`
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
`)),a(pe||(pe=_e`
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
`)),a(ue||(ue=_e`
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
`)),a(fe||(fe=_e`
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
`)),a(ge||(ge=_e`
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
`)),a(ve||(ve=_e`
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
`)),a(ye||(ye=_e`
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
`));let $e,be,Ae,Ce,xe,Se,Te,we,ke=t=>t;a($e||($e=ke`
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
`)),a(be||(be=ke`
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
`)),a(Ae||(Ae=ke`
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
`)),a(Ce||(Ce=ke`
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
`)),a(xe||(xe=ke`
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
`)),a(Se||(Se=ke`
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
`)),a(Te||(Te=ke`
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
`)),a(we||(we=ke`
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
`));let Ie,Re,Oe,Ee,Fe,Pe,Le,Ne,Ue,Be,He,Xe,Ye,Me,De,ze,Ze=t=>t;a(Ie||(Ie=Ze`
  .page-moveFromLeft {
    animation: moveFromLeft 0.6s ease both;
  }
  @keyframes moveFromLeft {
    from {
      transform: translateX(-100%);
    }
  }
`)),a(Re||(Re=Ze`
  .page-moveFromRight {
    animation: moveFromRight 0.6s ease both;
  }
  @keyframes moveFromRight {
    from {
      transform: translateX(100%);
    }
  }
`)),a(Oe||(Oe=Ze`
  .page-moveFromTop {
    animation: moveFromTop 0.6s ease both;
  }
  @keyframes moveFromTop {
    from {
      transform: translateY(-100%);
    }
  }
`)),a(Ee||(Ee=Ze`
  .page-moveFromBottom {
    animation: moveFromBottom 0.6s ease both;
  }
  @keyframes moveFromBottom {
    from {
      transform: translateY(100%);
    }
  }
`)),a(Fe||(Fe=Ze`
  .page-moveFromLeftFade {
    animation: moveFromLeftFade 0.6s ease both;
  }
  @keyframes moveFromLeftFade {
    from {
      opacity: 0.3;
      transform: translateX(-100%);
    }
  }
`)),a(Pe||(Pe=Ze`
  .page-moveFromRightFade {
    animation: moveFromRightFade 0.6s ease both;
  }
  @keyframes moveFromRightFade {
    from {
      opacity: 0.3;
      transform: translateX(100%);
    }
  }
`)),a(Le||(Le=Ze`
  .page-moveFromTopFade {
    animation: moveFromTopFade 0.6s ease both;
  }
  @keyframes moveFromTopFade {
    from {
      opacity: 0.3;
      transform: translateY(-100%);
    }
  }
`)),a(Ne||(Ne=Ze`
  .page-moveFromBottomFade {
    animation: moveFromBottomFade 0.6s ease both;
  }
  @keyframes moveFromBottomFade {
    from {
      opacity: 0.3;
      transform: translateY(100%);
    }
  }
`)),a(Ue||(Ue=Ze`
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
`)),a(Be||(Be=Ze`
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
`)),a(He||(He=Ze`
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
`)),a(Xe||(Xe=Ze`
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
`)),a(Ye||(Ye=Ze`
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
`)),a(Me||(Me=Ze`
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
`)),a(De||(De=Ze`
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
`)),a(ze||(ze=Ze`
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
`));let je,We,qe,Ve,Je,Ke,Ge,Qe,to=t=>t;a(je||(je=to`
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
`)),a(We||(We=to`
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
`)),a(qe||(qe=to`
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
`)),a(Ve||(Ve=to`
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
`)),a(Je||(Je=to`
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
`)),a(Ke||(Ke=to`
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
`)),a(Ge||(Ge=to`
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
`)),a(Qe||(Qe=to`
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
`));let eo,oo,io,ao,so,no,ro,lo,ho=t=>t;a(eo||(eo=ho`
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
`)),a(oo||(oo=ho`
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
`)),a(io||(io=ho`
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
`)),a(ao||(ao=ho`
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
`)),a(so||(so=ho`
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
`)),a(no||(no=ho`
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
`)),a(ro||(ro=ho`
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
`)),a(lo||(lo=ho`
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
`));let mo,co,po,uo,fo,go,vo,yo=t=>t;a(mo||(mo=yo`
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
`)),a(co||(co=yo`
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
`)),a(po||(po=yo`
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
`)),a(uo||(uo=yo`
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
`)),a(fo||(fo=yo`
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
`)),a(go||(go=yo`
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
`)),a(vo||(vo=yo`
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
`));let _o,$o,bo,Ao,Co,xo,So=t=>t;a(_o||(_o=So`
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
`)),a($o||($o=So`
  .page-scaleUpDown {
    animation: scaleUpDown 0.5s ease both;
  }
  @keyframes scaleUpDown {
    from {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`)),a(bo||(bo=So`
  .page-scaleUpCenter {
    animation: scaleUpCenter 0.4s ease-out both;
  }
  @keyframes scaleUpCenter {
    from {
      opacity: 0;
      transform: scale(0.7);
    }
  }
`)),a(Ao||(Ao=So`
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
`)),a(Co||(Co=So`
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
`)),a(xo||(xo=So`
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
`));let To,wo,ko=t=>t;a(To||(To=ko`
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
`)),a(wo||(wo=ko`
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
`));let Io,Ro,Oo=t=>t;a(Io||(Io=Oo`
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
`)),a(Ro||(Ro=Oo`
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
`));let Eo,Fo,Po=t=>t;window.customElements.define("settings-demo",class extends Tt{render(){return rt(Eo||(Eo=Po`
      <section>
        <h1>Animation Settings Demo</h1>
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
        <h2>Without using <code>attrForSelected</code></h2>
        <p>
          <button data-action="previous" @click="${0}">
            Previous
          </button>
          <button data-action="next" @click="${0}">
            Next
          </button>
        </p>
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
        <h2>Using <code>attrForSelected</code></h2>
        <p>
          <button data-action="previous" @click="${0}">
            Previous
          </button>
          <button data-action="next" @click="${0}">Next</button>
        </p>
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
        <h2>Where to define the actual classes</h2>
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
    `),this._selectNoAttr,this._selectNoAttr,this._noAttrAnimationClasses,this._noAttrCode,JSON.stringify(this._noAttrAnimationClasses,null,2),this._selectAttr,this._selectAttr,this._attrAnimationClasses,this._attrCode,JSON.stringify(this._attrAnimationClasses,null,2))}static get properties(){return{_attrAnimationClasses:{state:!0},_noAttrAnimationClasses:{state:!0}}}static get styles(){return[kt,de,he,Dt,zt,Zt,jt,oe,ie,ae,se,a(Fo||(Fo=Po`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `))]}_selectNoAttr(t){const e=this.shadowRoot.querySelector("#noAttr"),{action:o}=t.target.dataset;this._select(e,o)}_selectAttr(t){const e=this.shadowRoot.querySelector("#attr"),{action:o}=t.target.dataset;this._select(e,o)}_select(t,e){"next"===e?t.selectNext():"previous"===e&&t.selectPrevious()}constructor(){super(),this._noAttrAnimationClasses={"0_1":{in:"page-rotateCubeLeftIn",out:"page-rotateCubeLeftOut"},"2_1":{in:"page-rotateCubeRightIn",out:"page-rotateCubeRightOut"},"*_0":{in:"page-rotateCubeRightIn",out:"page-rotateCubeRightOut"},"*_2":{in:"page-rotateCubeLeftIn",out:"page-rotateCubeLeftOut"},_0:{in:"page-fadeIn",out:"page-fadeOut"},_2:{in:"page-fadeIn",out:"page-fadeOut"},default:{in:"page-fadeIn",out:"page-fadeOut"}},this._attrAnimationClasses={first_second:{in:"page-rotateCarouselLeftIn",out:"page-rotateCarouselLeftOut"},third_second:{in:"page-rotateCarouselRightIn",out:"page-rotateCarouselRightOut"},"*_first":{in:"page-rotateCarouselRightIn",out:"page-rotateCarouselRightOut"},"*_third":{in:"page-rotateCarouselLeftIn",out:"page-rotateCarouselLeftOut"},_first:{in:"page-fadeIn",out:"page-fadeOut"},_third:{in:"page-fadeIn",out:"page-fadeOut"},default:{in:"page-fadeIn",out:"page-fadeOut"}},this._noAttrCode='\n<helium-animated-pages\n  .animationClasses="${this._noAttrAnimationClasses}"\n>\n  <div>Slide index: 0</div>\n  <div>Slide index: 1</div>\n  <div>Slide index: 2</div>\n</helium-animated-pages>'.trim(),this._attrCode='\n<helium-animated-pages\n  attrForSelected="name"\n  .animationClasses="${this._attrAnimationClasses}"\n>\n  <div name="first">First Slide</div>\n  <div name="second">Second Slide</div>\n  <div name="third">Third Slide</div>\n</helium-animated-pages>'.trim()}});let Lo,No,Uo=t=>t;window.customElements.define("property-demo",class extends Tt{render(){return rt(Lo||(Lo=Uo`
      <section>
        <h1>Selected Property Demo</h1>
        <p>
          These demos use the <code>selected</code> property to change which
          slide is shown.
        </p>
        <p>
          This is the recommended way of using this component. Just update
          <code>selected</code> either as an attribute or as a property and
          you're done!
        </p>
        <h2>Without Using attrForSelected</h2>
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
        <h2>Using attrForSelected</h2>
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
        <h2>animationClasses</h2>
        <p>
          The code for the <code>animationClasses</code> in this two demos is
          the simplest version. It only sets the default animation for every
          single transition.
        </p>
        <pre><code>${0}</code></pre>
      </section>
      <section>
        <h2>Changing slides with methods</h2>
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
    `),this._indexChanged,this._selectedIndex,this._propAnimationClasses,this._toggleDisabledIndex,this._toggleDisabledIndex,this._indexDemoCode,this._nameChanged,this._selectedName,this._propAnimationClasses,this._nameDemoCode,JSON.stringify(this._propAnimationClasses,null,2))}static get properties(){return{_selectedIndex:{state:!0},_selectedName:{state:!0},_propAnimationClasses:{state:!0}}}static get styles(){return[kt,de,he,a(No||(No=Uo`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `))]}constructor(){super(),this._propAnimationClasses={default:{in:"page-fadeIn",out:"page-fadeOut"}},this._indexDemoCode='\n<helium-animated-pages\n  selected="${this._selectedIndex}"\n  .animationClasses="${this._propAnimationClasses}"\n  @helium-start="${this._toggleDisabledIndex}"\n  @helium-end="${this._toggleDisabledIndex}"\n>\n  <div>Slide index: 0</div>\n  <div>Slide index: 1</div>\n  <div>Slide index: 2</div>\n</helium-animated-pages>'.trim(),this._nameDemoCode='\n<helium-animated-pages\n  attrForSelected="name"\n  selected="${this._selectedName}"\n  .animationClasses="${this._propAnimationClasses}"\n>\n  <div name="first">First Slide</div>\n  <div name="second">Second Slide</div>\n  <div name="third">Third Slide</div>\n</helium-animated-pages>'.trim()}_indexChanged(t){t.target.value&&(this._selectedIndex=parseInt(t.target.value,10))}_toggleDisabledIndex(){const t=this.shadowRoot.querySelector("#select-index");t.disabled=!t.disabled}_nameChanged(t){t.target.value&&(this._selectedName=t.target.value)}});let Bo,Ho,Xo=t=>t;window.customElements.define("demo-element",class extends St{render(){return rt(Bo||(Bo=Xo`
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
    `),this._selectMainPage,this._mainAnimationClasses)}static get properties(){return{_mainAnimationClasses:{state:!0}}}static get styles(){return[kt,de,he,a(Ho||(Ho=Xo`
        :host {
          --primary-color: #138472;
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
