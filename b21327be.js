import{r as e,b as t,$ as n,w as r,s as i}from"./1e4b748c.js";let s;var o=e(s||(s=(e=>e)`
  :host {
    display: block;
    text-align: left;
    box-sizing: border-box;
    max-width: 800px;
    min-width: 360px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
    border: 1px solid var(--ave-border-color);
    border-radius: var(--ave-border-radius);

    --ave-primary-color: #01579b;
    --ave-secondary-color: rgba(0, 0, 0, 0.54);
    --ave-accent-color: #d63200;
    --ave-border-color: rgba(0, 0, 0, 0.12);
    --ave-border-radius: 4px;
    --ave-header-color: #fff;
    --ave-item-color: rgba(0, 0, 0, 0.87);
    --ave-label-color: #424242;
    --ave-link-color: #01579b;
    --ave-link-hover-color: #d63200;
    --ave-tab-indicator-size: 2px;
    --ave-tab-color: rgba(0, 0, 0, 0.54);
    --ave-monospace-font: Menlo, 'DejaVu Sans Mono', 'Liberation Mono', Consolas,
      'Courier New', monospace;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: var(--ave-header-background, var(--ave-primary-color));
    border-top-left-radius: var(--ave-border-radius);
    border-top-right-radius: var(--ave-border-radius);
  }

  nav {
    display: flex;
    align-items: center;
  }

  [part='header-title'] {
    color: var(--ave-header-color);
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='select-label'] {
    margin-left: 0.5rem;
  }

  [part='warning'] {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    header {
      flex-direction: column;
    }

    nav {
      margin-top: 0.5rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    :host {
      background: #fff;
      color: #000;
    }
  }
`));const a=2,l=e=>(...t)=>({_$litDirective$:e,values:t});class c{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const p=(e,t)=>{var n,r;const i=e._$AN;if(void 0===i)return!1;for(const e of i)null===(r=(n=e)._$AO)||void 0===r||r.call(n,t,!1),p(e,t);return!0},u=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},h=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),f(t)}};function d(e){void 0!==this._$AN?(u(this),this._$AM=e,h(this)):this._$AM=e}function m(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)p(r[e],!1),u(r[e]);else null!=r&&(p(r,!1),u(r));else p(this,e)}const f=e=>{var t,n,r,i;e.type==a&&(null!==(t=(r=e)._$AP)&&void 0!==t||(r._$AP=m),null!==(n=(i=e)._$AQ)&&void 0!==n||(i._$AQ=d))};class g extends c{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),h(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?null===(n=this.reconnected)||void 0===n||n.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(p(this,e),u(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class b{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class k{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Y=this.q=void 0}}const x=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then;const v=l(class extends g{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new b(this),this._$CK=new k}render(...e){var n;return null!==(n=e.find((e=>!x(e))))&&void 0!==n?n:t}update(e,n){const r=this._$Cyt;let i=r.length;this._$Cyt=n;const s=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<n.length&&!(e>this._$Cwt);e++){const t=n[e];if(!x(t))return this._$Cwt=e,t;e<i&&t===r[e]||(this._$Cwt=1073741823,i=0,Promise.resolve(t).then((async e=>{for(;o.get();)await o.get();const n=s.deref();if(void 0!==n){const r=n._$Cyt.indexOf(t);r>-1&&r<n._$Cwt&&(n._$Cwt=r,n.setValue(e))}})))}return t}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});function y(e){return!!e&&Array.isArray(e.modules)&&e.modules.some((e=>{var t,n;return(null===(t=e.exports)||void 0===t?void 0:t.some((e=>"custom-element-definition"===e.kind)))||(null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.customElement)))}))}const w=e=>"custom-element-definition"===e.kind,_=e=>!("private"===e.privacy||"protected"===e.privacy);function A(e){var t;return(null!==(t=e.modules)&&void 0!==t?t:[]).flatMap((e=>{var t,n;return null!==(t=null===(n=e.exports)||void 0===n?void 0:n.filter(w))&&void 0!==t?t:[]}))}function $(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}const T=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function S(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):T(e,t)}let E;const z=n(E||(E=(e=>e)`
  <div part="warning">No custom elements found in the JSON file.</div>
`)),N=e=>{class t extends e{constructor(){super(...arguments),this.jsonFetched=Promise.resolve(null)}willUpdate(){const{src:e}=this;this.manifest?y(this.manifest)?(this.lastSrc=void 0,this.jsonFetched=Promise.resolve(this.manifest)):console.error("No custom elements found in the `manifest` object."):e&&this.lastSrc!==e&&(this.lastSrc=e,this.jsonFetched=async function(e){try{const t=await fetch(e),n=await t.json();if(y(n))return n;throw new Error(`No element definitions found at ${e}`)}catch(e){return console.error(e),null}}(e))}}return $([S()],t.prototype,"src",void 0),$([S({attribute:!1})],t.prototype,"manifest",void 0),$([S()],t.prototype,"selected",void 0),t};function C(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce(((t,n,r)=>t+n+e[r+1]),e[0]),n}class R extends c{constructor(e){if(super(e),this.it=r,e.type!==a)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===r||null==e)return this.ft=void 0,this.it=e;if(e===t)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}R.directiveName="unsafeHTML",R.resultType=1;const L=l(R);function I(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let O={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const D=/[&<>"']/,M=/[&<>"']/g,P=/[<>"']|&(?!#?\w+;)/,U=/[<>"']|&(?!#?\w+;)/g,F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},j=e=>F[e];function H(e,t){if(t){if(D.test(e))return e.replace(M,j)}else if(P.test(e))return e.replace(U,j);return e}const q=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function B(e){return e.replace(q,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const G=/(^|[^\[])\^/g;function Z(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(G,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const Q=/[^\w:]/g,W=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Y(e,t,n){if(e){let e;try{e=decodeURIComponent(B(n)).replace(Q,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!W.test(n)&&(n=function(e,t){K[" "+e]||(V.test(e)?K[" "+e]=e+"/":K[" "+e]=re(e,"/",!0));const n=-1===(e=K[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(X,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(J,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}const K={},V=/^[^:]+:\/*[^/]*$/,X=/^([^:]+:)[\s\S]*$/,J=/^([^:]+:\/*[^/]*)[\s\S]*$/;const ee={exec:function(){}};function te(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function ne(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t;for(;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function re(e,t,n){const r=e.length;if(0===r)return"";let i=0;for(;i<r;){const s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}function ie(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function se(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function oe(e,t,n,r){const i=t.href,s=t.title?H(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:i,title:s,text:o,tokens:r.inlineTokens(o,[])};return r.state.inLink=!1,e}return{type:"image",raw:n,href:i,title:s,text:H(o)}}class ae{constructor(e){this.options=e||O}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:re(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=re(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,i,s,o,a,l,c,p,u,h,d,m=t[1].trim();const f=m.length>1,g={type:"list",raw:"",ordered:f,start:f?+m.slice(0,-1):"",loose:!1,items:[]};m=f?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=f?m:"[*+-]");const b=new RegExp(`^( {0,3}${m})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(d=!1,t=b.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],p=e.split("\n",1)[0],this.options.pedantic?(s=2,h=c.trimLeft()):(s=t[2].search(/[^ ]/),s=s>4?1:s,h=c.slice(s),s+=t[1].length),a=!1,!c&&/^ *$/.test(p)&&(n+=p+"\n",e=e.substring(p.length+1),d=!0),!d){const t=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(u=e.split("\n",1)[0],c=u,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c));){if(c.search(/[^ ]/)>=s||!c.trim())h+="\n"+c.slice(s);else{if(a)break;h+="\n"+c}a||c.trim()||(a=!0),n+=u+"\n",e=e.substring(u.length+1)}}g.loose||(l?g.loose=!0:/\n *\n *$/.test(n)&&(l=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(h),r&&(i="[ ] "!==r[0],h=h.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:n,task:!!r,checked:i,loose:!1,text:h}),g.raw+=n}g.items[g.items.length-1].raw=n.trimRight(),g.items[g.items.length-1].text=h.trimRight(),g.raw=g.raw.trimRight();const k=g.items.length;for(o=0;o<k;o++){this.lexer.state.top=!1,g.items[o].tokens=this.lexer.blockTokens(g.items[o].text,[]);const e=g.items[o].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let n=0;for(const e of t)if("\n"===e&&(n+=1),n>1)return!0;return!1}));!g.loose&&e.length&&t&&(g.loose=!0,g.items[o].loose=!0)}return g}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):H(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:ne(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,i,s,o=e.align.length;for(n=0;n<o;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(o=e.rows.length,n=0;n<o;n++)e.rows[n]=ne(e.rows[n],e.header.length).map((e=>({text:e})));for(o=e.header.length,r=0;r<o;r++)e.header[r].tokens=[],this.lexer.inlineTokens(e.header[r].text,e.header[r].tokens);for(o=e.rows.length,r=0;r<o;r++)for(s=e.rows[r],i=0;i<s.length;i++)s[i].tokens=[],this.lexer.inlineTokens(s[i].text,s[i].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:H(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):H(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=re(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),oe(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return oe(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const i=r[1]||r[2]||"";if(!i||i&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let i,s,o=n,a=0;const l="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=l.exec(t));){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(s=i.length,r[3]||r[4]){o+=s;continue}if((r[5]||r[6])&&n%3&&!((n+s)%3)){a+=s;continue}if(o-=s,o>0)continue;if(s=Math.min(s,s+o+a),Math.min(n,s)%2){const t=e.slice(1,n+r.index+s);return{type:"em",raw:e.slice(0,n+r.index+s+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,n+r.index+s-1);return{type:"strong",raw:e.slice(0,n+r.index+s+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=H(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=H(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=H(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=H(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=H(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):H(n[0]):n[0]:H(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const le={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:ee,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};le.def=Z(le.def).replace("label",le._label).replace("title",le._title).getRegex(),le.bullet=/(?:[*+-]|\d{1,9}[.)])/,le.listItemStart=Z(/^( *)(bull) */).replace("bull",le.bullet).getRegex(),le.list=Z(le.list).replace(/bull/g,le.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+le.def.source+")").getRegex(),le._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",le._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,le.html=Z(le.html,"i").replace("comment",le._comment).replace("tag",le._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),le.paragraph=Z(le._paragraph).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex(),le.blockquote=Z(le.blockquote).replace("paragraph",le.paragraph).getRegex(),le.normal=te({},le),le.gfm=te({},le.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),le.gfm.table=Z(le.gfm.table).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex(),le.gfm.paragraph=Z(le._paragraph).replace("hr",le.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",le.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",le._tag).getRegex(),le.pedantic=te({},le.normal,{html:Z("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",le._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ee,paragraph:Z(le.normal._paragraph).replace("hr",le.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",le.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const ce={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:ee,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:ee,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function pe(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ue(e){let t,n,r="";const i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}ce._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",ce.punctuation=Z(ce.punctuation).replace(/punctuation/g,ce._punctuation).getRegex(),ce.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,ce.escapedEmSt=/\\\*|\\_/g,ce._comment=Z(le._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),ce.emStrong.lDelim=Z(ce.emStrong.lDelim).replace(/punct/g,ce._punctuation).getRegex(),ce.emStrong.rDelimAst=Z(ce.emStrong.rDelimAst,"g").replace(/punct/g,ce._punctuation).getRegex(),ce.emStrong.rDelimUnd=Z(ce.emStrong.rDelimUnd,"g").replace(/punct/g,ce._punctuation).getRegex(),ce._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,ce._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,ce._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,ce.autolink=Z(ce.autolink).replace("scheme",ce._scheme).replace("email",ce._email).getRegex(),ce._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,ce.tag=Z(ce.tag).replace("comment",ce._comment).replace("attribute",ce._attribute).getRegex(),ce._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ce._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,ce._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,ce.link=Z(ce.link).replace("label",ce._label).replace("href",ce._href).replace("title",ce._title).getRegex(),ce.reflink=Z(ce.reflink).replace("label",ce._label).replace("ref",le._label).getRegex(),ce.nolink=Z(ce.nolink).replace("ref",le._label).getRegex(),ce.reflinkSearch=Z(ce.reflinkSearch,"g").replace("reflink",ce.reflink).replace("nolink",ce.nolink).getRegex(),ce.normal=te({},ce),ce.pedantic=te({},ce.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Z(/^!?\[(label)\]\((.*?)\)/).replace("label",ce._label).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ce._label).getRegex()}),ce.gfm=te({},ce.normal,{escape:Z(ce.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),ce.gfm.url=Z(ce.gfm.url,"i").replace("email",ce.gfm._extended_email).getRegex(),ce.breaks=te({},ce.gfm,{br:Z(ce.br).replace("{2,}","*").getRegex(),text:Z(ce.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class he{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||O,this.options.tokenizer=this.options.tokenizer||new ae,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:le.normal,inline:ce.normal};this.options.pedantic?(t.block=le.pedantic,t.inline=ce.pedantic):this.options.gfm&&(t.block=le.gfm,this.options.breaks?t.inline=ce.breaks:t.inline=ce.gfm),this.tokenizer.rules=t}static get rules(){return{block:le,inline:ce}}static lex(e,t){return new he(t).lex(e)}static lexInline(e,t){return new he(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,i,s;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i)))r=t[t.length-1],s&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),s=i.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,r,i,s,o,a,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,s.index)+"["+se("a",s[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,s.index)+"["+se("a",s[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,s.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,l,a))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,ue))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,ue))){if(i=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(i,pe))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),o=!0,r=t[t.length-1],r&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}class de{constructor(e){this.options=e||O}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+H(r,!0)+'">'+(n?e:H(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:H(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=Y(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+H(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=Y(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class me{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class fe{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class ge{constructor(e){this.options=e||O,this.options.renderer=this.options.renderer||new de,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new me,this.slugger=new fe}static parse(e,t){return new ge(t).parse(e)}static parseInline(e,t){return new ge(t).parseInline(e)}parse(e,t=!0){let n,r,i,s,o,a,l,c,p,u,h,d,m,f,g,b,k,x,v,y="";const w=e.length;for(n=0;n<w;n++)if(u=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(v=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==v||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))y+=v||"";else switch(u.type){case"space":continue;case"hr":y+=this.renderer.hr();continue;case"heading":y+=this.renderer.heading(this.parseInline(u.tokens),u.depth,B(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":y+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",s=u.header.length,r=0;r<s;r++)l+=this.renderer.tablecell(this.parseInline(u.header[r].tokens),{header:!0,align:u.align[r]});for(c+=this.renderer.tablerow(l),p="",s=u.rows.length,r=0;r<s;r++){for(a=u.rows[r],l="",o=a.length,i=0;i<o;i++)l+=this.renderer.tablecell(this.parseInline(a[i].tokens),{header:!1,align:u.align[i]});p+=this.renderer.tablerow(l)}y+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),y+=this.renderer.blockquote(p);continue;case"list":for(h=u.ordered,d=u.start,m=u.loose,s=u.items.length,p="",r=0;r<s;r++)g=u.items[r],b=g.checked,k=g.task,f="",g.task&&(x=this.renderer.checkbox(b),m?g.tokens.length>0&&"paragraph"===g.tokens[0].type?(g.tokens[0].text=x+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=x+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:x}):f+=x),f+=this.parse(g.tokens,m),p+=this.renderer.listitem(f,k,b);y+=this.renderer.list(p,h,d);continue;case"html":y+=this.renderer.html(u.text);continue;case"paragraph":y+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;n+1<w&&"text"===e[n+1].type;)u=e[++n],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);y+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return y}parseInline(e,t){t=t||this.renderer;let n,r,i,s="";const o=e.length;for(n=0;n<o;n++)if(r=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(i=this.options.extensions.renderers[r.type].call({parser:this},r),!1!==i||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))s+=i||"";else switch(r.type){case"escape":s+=t.text(r.text);break;case"html":s+=t.html(r.text);break;case"link":s+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":s+=t.image(r.href,r.title,r.text);break;case"strong":s+=t.strong(this.parseInline(r.tokens,t));break;case"em":s+=t.em(this.parseInline(r.tokens,t));break;case"codespan":s+=t.codespan(r.text);break;case"br":s+=t.br();break;case"del":s+=t.del(this.parseInline(r.tokens,t));break;case"text":s+=t.text(r.text);break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return s}}function be(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),ie(t=te({},be.defaults,t||{})),n){const r=t.highlight;let i;try{i=he.lex(e,t)}catch(e){return n(e)}const s=function(e){let s;if(!e)try{t.walkTokens&&be.walkTokens(i,t.walkTokens),s=ge.parse(i,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,s)};if(!r||r.length<3)return s();if(delete t.highlight,!i.length)return s();let o=0;return be.walkTokens(i,(function(e){"code"===e.type&&(o++,setTimeout((()=>{r(e.text,e.lang,(function(t,n){if(t)return s(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),o--,0===o&&s()}))}),0))})),void(0===o&&s())}try{const n=he.lex(e,t);return t.walkTokens&&be.walkTokens(n,t.walkTokens),ge.parse(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+H(e.message+"",!0)+"</pre>";throw e}}be.options=be.setOptions=function(e){var t;return te(be.defaults,e),t=be.defaults,O=t,be},be.getDefaults=I,be.defaults=O,be.use=function(...e){const t=te({},...e),n=be.defaults.extensions||{renderers:{},childTokens:{}};let r;e.forEach((e=>{if(e.extensions&&(r=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=n.renderers?n.renderers[e.name]:null;n.renderers[e.name]=t?function(...n){let r=e.renderer.apply(this,n);return!1===r&&(r=t.apply(this,n)),r}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");n[e.level]?n[e.level].unshift(e.tokenizer):n[e.level]=[e.tokenizer],e.start&&("block"===e.level?n.startBlock?n.startBlock.push(e.start):n.startBlock=[e.start]:"inline"===e.level&&(n.startInline?n.startInline.push(e.start):n.startInline=[e.start]))}e.childTokens&&(n.childTokens[e.name]=e.childTokens)}))),e.renderer){const n=be.defaults.renderer||new de;for(const t in e.renderer){const r=n[t];n[t]=(...i)=>{let s=e.renderer[t].apply(n,i);return!1===s&&(s=r.apply(n,i)),s}}t.renderer=n}if(e.tokenizer){const n=be.defaults.tokenizer||new ae;for(const t in e.tokenizer){const r=n[t];n[t]=(...i)=>{let s=e.tokenizer[t].apply(n,i);return!1===s&&(s=r.apply(n,i)),s}}t.tokenizer=n}if(e.walkTokens){const n=be.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),n&&n.call(this,t)}}r&&(t.extensions=n),be.setOptions(t)}))},be.walkTokens=function(e,t){for(const n of e)switch(t.call(be,n),n.type){case"table":for(const e of n.header)be.walkTokens(e.tokens,t);for(const e of n.rows)for(const n of e)be.walkTokens(n.tokens,t);break;case"list":be.walkTokens(n.items,t);break;default:be.defaults.extensions&&be.defaults.extensions.childTokens&&be.defaults.extensions.childTokens[n.type]?be.defaults.extensions.childTokens[n.type].forEach((function(e){be.walkTokens(n[e],t)})):n.tokens&&be.walkTokens(n.tokens,t)}},be.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");ie(t=te({},be.defaults,t||{}));try{const n=he.lexInline(e,t);return t.walkTokens&&be.walkTokens(n,t.walkTokens),ge.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+H(e.message+"",!0)+"</pre>";throw e}},be.Parser=ge,be.parser=ge.parse,be.Renderer=de,be.TextRenderer=me,be.Lexer=he,be.lexer=he.lex,be.Tokenizer=ae,be.Slugger=fe,be.parse=be,ge.parse,he.lex;var ke=Object.hasOwnProperty,xe=Object.setPrototypeOf,ve=Object.isFrozen,ye=Object.getPrototypeOf,we=Object.getOwnPropertyDescriptor,_e=Object.freeze,Ae=Object.seal,$e=Object.create,Te="undefined"!=typeof Reflect&&Reflect,Se=Te.apply,Ee=Te.construct;Se||(Se=function(e,t,n){return e.apply(t,n)}),_e||(_e=function(e){return e}),Ae||(Ae=function(e){return e}),Ee||(Ee=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var ze,Ne=Fe(Array.prototype.forEach),Ce=Fe(Array.prototype.pop),Re=Fe(Array.prototype.push),Le=Fe(String.prototype.toLowerCase),Ie=Fe(String.prototype.match),Oe=Fe(String.prototype.replace),De=Fe(String.prototype.indexOf),Me=Fe(String.prototype.trim),Pe=Fe(RegExp.prototype.test),Ue=(ze=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ee(ze,t)});function Fe(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Se(e,t,r)}}function je(e,t){xe&&xe(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var i=Le(r);i!==r&&(ve(t)||(t[n]=i),r=i)}e[r]=!0}return e}function He(e){var t=$e(null),n=void 0;for(n in e)Se(ke,e,[n])&&(t[n]=e[n]);return t}function qe(e,t){for(;null!==e;){var n=we(e,t);if(n){if(n.get)return Fe(n.get);if("function"==typeof n.value)return Fe(n.value)}e=ye(e)}return function(e){return console.warn("fallback value for",e),null}}var Be=_e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ge=_e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ze=_e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Qe=_e(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),We=_e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Ye=_e(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ke=_e(["#text"]),Ve=_e(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Xe=_e(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Je=_e(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),et=_e(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),tt=Ae(/\{\{[\s\S]*|[\s\S]*\}\}/gm),nt=Ae(/<%[\s\S]*|[\s\S]*%>/gm),rt=Ae(/^data-[\-\w.\u00B7-\uFFFF]/),it=Ae(/^aria-[\-\w]+$/),st=Ae(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ot=Ae(/^(?:\w+script|data):/i),at=Ae(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),lt=Ae(/^html$/i),ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function pt(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var ut=function(){return"undefined"==typeof window?null:window},ht=function(e,t){if("object"!==(void 0===e?"undefined":ct(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};var dt=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut(),n=function(t){return e(t)};if(n.version="2.3.6",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,i=t.document,s=t.DocumentFragment,o=t.HTMLTemplateElement,a=t.Node,l=t.Element,c=t.NodeFilter,p=t.NamedNodeMap,u=void 0===p?t.NamedNodeMap||t.MozNamedAttrMap:p,h=t.HTMLFormElement,d=t.DOMParser,m=t.trustedTypes,f=l.prototype,g=qe(f,"cloneNode"),b=qe(f,"nextSibling"),k=qe(f,"childNodes"),x=qe(f,"parentNode");if("function"==typeof o){var v=i.createElement("template");v.content&&v.content.ownerDocument&&(i=v.content.ownerDocument)}var y=ht(m,r),w=y?y.createHTML(""):"",_=i,A=_.implementation,$=_.createNodeIterator,T=_.createDocumentFragment,S=_.getElementsByTagName,E=r.importNode,z={};try{z=He(i).documentMode?i.documentMode:{}}catch(e){}var N={};n.isSupported="function"==typeof x&&A&&void 0!==A.createHTMLDocument&&9!==z;var C=tt,R=nt,L=rt,I=it,O=ot,D=at,M=st,P=null,U=je({},[].concat(pt(Be),pt(Ge),pt(Ze),pt(We),pt(Ke))),F=null,j=je({},[].concat(pt(Ve),pt(Xe),pt(Je),pt(et))),H=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),q=null,B=null,G=!0,Z=!0,Q=!1,W=!1,Y=!1,K=!1,V=!1,X=!1,J=!1,ee=!1,te=!0,ne=!0,re=!1,ie={},se=null,oe=je({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ae=null,le=je({},["audio","video","img","source","image","track"]),ce=null,pe=je({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ue="http://www.w3.org/1998/Math/MathML",he="http://www.w3.org/2000/svg",de="http://www.w3.org/1999/xhtml",me=de,fe=!1,ge=void 0,be=["application/xhtml+xml","text/html"],ke="text/html",xe=void 0,ve=null,ye=i.createElement("form"),we=function(e){return e instanceof RegExp||e instanceof Function},Ae=function(e){ve&&ve===e||(e&&"object"===(void 0===e?"undefined":ct(e))||(e={}),e=He(e),P="ALLOWED_TAGS"in e?je({},e.ALLOWED_TAGS):U,F="ALLOWED_ATTR"in e?je({},e.ALLOWED_ATTR):j,ce="ADD_URI_SAFE_ATTR"in e?je(He(pe),e.ADD_URI_SAFE_ATTR):pe,ae="ADD_DATA_URI_TAGS"in e?je(He(le),e.ADD_DATA_URI_TAGS):le,se="FORBID_CONTENTS"in e?je({},e.FORBID_CONTENTS):oe,q="FORBID_TAGS"in e?je({},e.FORBID_TAGS):{},B="FORBID_ATTR"in e?je({},e.FORBID_ATTR):{},ie="USE_PROFILES"in e&&e.USE_PROFILES,G=!1!==e.ALLOW_ARIA_ATTR,Z=!1!==e.ALLOW_DATA_ATTR,Q=e.ALLOW_UNKNOWN_PROTOCOLS||!1,W=e.SAFE_FOR_TEMPLATES||!1,Y=e.WHOLE_DOCUMENT||!1,X=e.RETURN_DOM||!1,J=e.RETURN_DOM_FRAGMENT||!1,ee=e.RETURN_TRUSTED_TYPE||!1,V=e.FORCE_BODY||!1,te=!1!==e.SANITIZE_DOM,ne=!1!==e.KEEP_CONTENT,re=e.IN_PLACE||!1,M=e.ALLOWED_URI_REGEXP||M,me=e.NAMESPACE||de,e.CUSTOM_ELEMENT_HANDLING&&we(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&we(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ge=ge=-1===be.indexOf(e.PARSER_MEDIA_TYPE)?ke:e.PARSER_MEDIA_TYPE,xe="application/xhtml+xml"===ge?function(e){return e}:Le,W&&(Z=!1),J&&(X=!0),ie&&(P=je({},[].concat(pt(Ke))),F=[],!0===ie.html&&(je(P,Be),je(F,Ve)),!0===ie.svg&&(je(P,Ge),je(F,Xe),je(F,et)),!0===ie.svgFilters&&(je(P,Ze),je(F,Xe),je(F,et)),!0===ie.mathMl&&(je(P,We),je(F,Je),je(F,et))),e.ADD_TAGS&&(P===U&&(P=He(P)),je(P,e.ADD_TAGS)),e.ADD_ATTR&&(F===j&&(F=He(F)),je(F,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&je(ce,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(se===oe&&(se=He(se)),je(se,e.FORBID_CONTENTS)),ne&&(P["#text"]=!0),Y&&je(P,["html","head","body"]),P.table&&(je(P,["tbody"]),delete q.tbody),_e&&_e(e),ve=e)},$e=je({},["mi","mo","mn","ms","mtext"]),Te=je({},["foreignobject","desc","title","annotation-xml"]),Se=je({},Ge);je(Se,Ze),je(Se,Qe);var Ee=je({},We);je(Ee,Ye);var ze=function(e){var t=x(e);t&&t.tagName||(t={namespaceURI:de,tagName:"template"});var n=Le(e.tagName),r=Le(t.tagName);if(e.namespaceURI===he)return t.namespaceURI===de?"svg"===n:t.namespaceURI===ue?"svg"===n&&("annotation-xml"===r||$e[r]):Boolean(Se[n]);if(e.namespaceURI===ue)return t.namespaceURI===de?"math"===n:t.namespaceURI===he?"math"===n&&Te[r]:Boolean(Ee[n]);if(e.namespaceURI===de){if(t.namespaceURI===he&&!Te[r])return!1;if(t.namespaceURI===ue&&!$e[r])return!1;var i=je({},["title","style","font","a","script"]);return!Ee[n]&&(i[n]||!Se[n])}return!1},Fe=function(e){Re(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=w}catch(t){e.remove()}}},dt=function(e,t){try{Re(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Re(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!F[e])if(X||J)try{Fe(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},mt=function(e){var t=void 0,n=void 0;if(V)e="<remove></remove>"+e;else{var r=Ie(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ge&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var s=y?y.createHTML(e):e;if(me===de)try{t=(new d).parseFromString(s,ge)}catch(e){}if(!t||!t.documentElement){t=A.createDocument(me,"template",null);try{t.documentElement.innerHTML=fe?"":s}catch(e){}}var o=t.body||t.documentElement;return e&&n&&o.insertBefore(i.createTextNode(n),o.childNodes[0]||null),me===de?S.call(t,Y?"html":"body")[0]:Y?t.documentElement:o},ft=function(e){return $.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},gt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},bt=function(e){return"object"===(void 0===a?"undefined":ct(a))?e instanceof a:e&&"object"===(void 0===e?"undefined":ct(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},kt=function(e,t,r){N[e]&&Ne(N[e],(function(e){e.call(n,t,r,ve)}))},xt=function(e){var t=void 0;if(kt("beforeSanitizeElements",e,null),gt(e))return Fe(e),!0;if(Ie(e.nodeName,/[\u0080-\uFFFF]/))return Fe(e),!0;var r=xe(e.nodeName);if(kt("uponSanitizeElement",e,{tagName:r,allowedTags:P}),!bt(e.firstElementChild)&&(!bt(e.content)||!bt(e.content.firstElementChild))&&Pe(/<[/\w]/g,e.innerHTML)&&Pe(/<[/\w]/g,e.textContent))return Fe(e),!0;if("select"===r&&Pe(/<template/i,e.innerHTML))return Fe(e),!0;if(!P[r]||q[r]){if(!q[r]&&yt(r)){if(H.tagNameCheck instanceof RegExp&&Pe(H.tagNameCheck,r))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(r))return!1}if(ne&&!se[r]){var i=x(e)||e.parentNode,s=k(e)||e.childNodes;if(s&&i)for(var o=s.length-1;o>=0;--o)i.insertBefore(g(s[o],!0),b(e))}return Fe(e),!0}return e instanceof l&&!ze(e)?(Fe(e),!0):"noscript"!==r&&"noembed"!==r||!Pe(/<\/no(script|embed)/i,e.innerHTML)?(W&&3===e.nodeType&&(t=e.textContent,t=Oe(t,C," "),t=Oe(t,R," "),e.textContent!==t&&(Re(n.removed,{element:e.cloneNode()}),e.textContent=t)),kt("afterSanitizeElements",e,null),!1):(Fe(e),!0)},vt=function(e,t,n){if(te&&("id"===t||"name"===t)&&(n in i||n in ye))return!1;if(Z&&!B[t]&&Pe(L,t));else if(G&&Pe(I,t));else if(!F[t]||B[t]){if(!(yt(e)&&(H.tagNameCheck instanceof RegExp&&Pe(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&Pe(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&Pe(H.tagNameCheck,n)||H.tagNameCheck instanceof Function&&H.tagNameCheck(n))))return!1}else if(ce[t]);else if(Pe(M,Oe(n,D,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==De(n,"data:")||!ae[e]){if(Q&&!Pe(O,Oe(n,D,"")));else if(n)return!1}else;return!0},yt=function(e){return e.indexOf("-")>0},wt=function(e){var t=void 0,r=void 0,i=void 0,s=void 0;kt("beforeSanitizeAttributes",e,null);var o=e.attributes;if(o){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:F};for(s=o.length;s--;){var l=t=o[s],c=l.name,p=l.namespaceURI;if(r=Me(t.value),i=xe(c),a.attrName=i,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,kt("uponSanitizeAttribute",e,a),r=a.attrValue,!a.forceKeepAttr&&(dt(c,e),a.keepAttr))if(Pe(/\/>/i,r))dt(c,e);else{W&&(r=Oe(r,C," "),r=Oe(r,R," "));var u=xe(e.nodeName);if(vt(u,i,r))try{p?e.setAttributeNS(p,c,r):e.setAttribute(c,r),Ce(n.removed)}catch(e){}}}kt("afterSanitizeAttributes",e,null)}},_t=function e(t){var n=void 0,r=ft(t);for(kt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)kt("uponSanitizeShadowNode",n,null),xt(n)||(n.content instanceof s&&e(n.content),wt(n));kt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,i){var o=void 0,l=void 0,c=void 0,p=void 0,u=void 0;if((fe=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!bt(e)){if("function"!=typeof e.toString)throw Ue("toString is not a function");if("string"!=typeof(e=e.toString()))throw Ue("dirty is not a string, aborting")}if(!n.isSupported){if("object"===ct(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(bt(e))return t.toStaticHTML(e.outerHTML)}return e}if(K||Ae(i),n.removed=[],"string"==typeof e&&(re=!1),re){if(e.nodeName){var h=xe(e.nodeName);if(!P[h]||q[h])throw Ue("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof a)1===(l=(o=mt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?o=l:o.appendChild(l);else{if(!X&&!W&&!Y&&-1===e.indexOf("<"))return y&&ee?y.createHTML(e):e;if(!(o=mt(e)))return X?null:ee?w:""}o&&V&&Fe(o.firstChild);for(var d=ft(re?e:o);c=d.nextNode();)3===c.nodeType&&c===p||xt(c)||(c.content instanceof s&&_t(c.content),wt(c),p=c);if(p=null,re)return e;if(X){if(J)for(u=T.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return F.shadowroot&&(u=E.call(r,u,!0)),u}var m=Y?o.outerHTML:o.innerHTML;return Y&&P["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&Pe(lt,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),W&&(m=Oe(m,C," "),m=Oe(m,R," ")),y&&ee?y.createHTML(m):m},n.setConfig=function(e){Ae(e),K=!0},n.clearConfig=function(){ve=null,K=!1},n.isValidAttribute=function(e,t,n){ve||Ae({});var r=xe(e),i=xe(t);return vt(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(N[e]=N[e]||[],Re(N[e],t))},n.removeHook=function(e){N[e]&&Ce(N[e])},n.removeHooks=function(e){N[e]&&(N[e]=[])},n.removeAllHooks=function(){N={}},n}();let mt,ft=e=>e;be.setOptions({headerIds:!1});const gt=e=>n(mt||(mt=ft`
    ${0}
  `),e?L(dt.sanitize(be(e)).replace(/<(h[1-6]|a|p|ul|ol|li|pre|code|strong|em|blockquote|del)(\s+href="[^"]+")*>/g,'<$1 part="md-$1"$2>')):r);function bt(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}let kt,xt=0;const vt=C(kt||(kt=(e=>e)`
  <style>
    :host {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      box-sizing: border-box;
      position: relative;
      max-width: 150px;
      overflow: hidden;
      min-height: 3rem;
      padding: 0 1rem;
      color: var(--ave-tab-color);
      font-size: 0.875rem;
      line-height: 1.2;
      font-weight: 500;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--ave-tab-indicator-size);
      background-color: var(--ave-primary-color);
      opacity: 0;
    }

    :host([selected]) {
      color: var(--ave-tab-selected-color, var(--ave-primary-color));
    }

    :host([selected])::before {
      opacity: 1;
    }

    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--ave-primary-color);
      opacity: 0;
      transition: opacity 0.1s linear;
    }

    :host(:hover)::after {
      opacity: 0.08;
    }

    :host([focus-ring])::after {
      opacity: 0.12;
    }

    :host([active])::after {
      opacity: 0.16;
    }

    @media (max-width: 600px) {
      :host {
        justify-content: center;
        text-align: center;
      }

      :host::before {
        top: auto;
        right: 0;
        width: 100%;
        height: var(--ave-tab-indicator-size);
      }
    }
  </style>
  <slot></slot>
`));class yt extends HTMLElement{constructor(){super(),this._mousedown=!1,this._selected=!1;this.attachShadow({mode:"open"}).appendChild(vt.content.cloneNode(!0)),this.addEventListener("focus",(()=>this._setFocused(!0)),!0),this.addEventListener("blur",(()=>{this._setFocused(!1),this._setActive(!1)}),!0),this.addEventListener("mousedown",(()=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)}))}get selected(){return this._selected}set selected(e){this._selected=e,this.setAttribute("aria-selected",String(e)),this.setAttribute("tabindex",e?"0":"-1"),this.toggleAttribute("selected",e)}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id="api-viewer-tab-"+xt++)}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}}customElements.define("api-viewer-tab",yt);let wt,_t=0;const At=C(wt||(wt=(e=>e)`
  <style>
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    }

    :host([hidden]) {
      display: none !important;
    }
  </style>
  <slot></slot>
`));class $t extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).appendChild(At.content.cloneNode(!0))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id="api-viewer-panel-"+_t++)}}customElements.define("api-viewer-panel",$t);let Tt;const St=C(Tt||(Tt=(e=>e)`
  <style>
    :host {
      display: flex;
      border-bottom-left-radius: var(--ave-border-radius);
      overflow: hidden;
    }

    @media (max-width: 600px) {
      :host {
        flex-direction: column;
      }

      .tabs {
        display: flex;
        flex-grow: 1;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  </style>
  <div class="tabs">
    <slot name="tab"></slot>
  </div>
  <slot name="panel"></slot>
`));class Et extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(St.content.cloneNode(!0));const t=e.querySelectorAll("slot");t[0].addEventListener("slotchange",(()=>this._linkPanels())),t[1].addEventListener("slotchange",(()=>this._linkPanels())),this.addEventListener("keydown",this.handleEvent),this.addEventListener("click",this.handleEvent)}connectedCallback(){this.setAttribute("role","tablist"),requestAnimationFrame((()=>{this._linkPanels()}))}_linkPanels(){const{tabs:e}=this;e.forEach((e=>{const t=e.nextElementSibling;e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)}));const t=e.find((e=>e.selected))||e[0];this._selectTab(t)}get tabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,t){const{tabs:n}=this,r=n.length;for(let i=0;"number"==typeof e&&i<r;i++,e+=t||1){e<0?e=r-1:e>=r&&(e=0);if(!n[e].hasAttribute("hidden"))return e}return-1}_prevTab(e){const t=this._getAvailableIndex(e.findIndex((e=>e.selected))-1,-1);return e[(t+e.length)%e.length]}_nextTab(e){const t=this._getAvailableIndex(e.findIndex((e=>e.selected))+1,1);return e[t%e.length]}reset(){this.tabs.forEach((e=>{e.selected=!1})),this.querySelectorAll("api-viewer-panel").forEach((e=>{e.hidden=!0}))}selectFirst(){const e=this._getAvailableIndex(0,1);this._selectTab(this.tabs[e%this.tabs.length])}_selectTab(e){this.reset();const t=e.getAttribute("aria-controls"),n=this.querySelector(`#${t}`);n&&(e.selected=!0,n.hidden=!1)}handleEvent(e){const{target:t}=e;if(t&&t instanceof yt){let n;if("keydown"===e.type){const{tabs:t}=this;switch(e.key){case"ArrowLeft":case"ArrowUp":n=this._prevTab(t);break;case"ArrowDown":case"ArrowRight":n=this._nextTab(t);break;case"Home":n=t[0];break;case"End":n=t[t.length-1];break;default:return}e.preventDefault()}else n=t;this._selectTab(n),n.focus()}}}customElements.define("api-viewer-tabs",Et);let zt,Nt,Ct,Rt,Lt,It,Ot,Dt,Mt,Pt,Ut,Ft,jt,Ht,qt,Bt,Gt=e=>e;const Zt=(e,t,i,s,o,a)=>n(zt||(zt=Gt`
    <div part="docs-item">
      <div part="docs-row">
        <div part="docs-column" class="column-name-${0}">
          <div part="docs-label">Name</div>
          <div part="docs-value" class="accent">${0}</div>
        </div>
        ${0}
        ${0}
      </div>
      <div ?hidden=${0}>
        <div part="docs-label">Description</div>
        <div part="docs-markdown">${0}</div>
      </div>
    </div>
  `),e,t,void 0===a?r:n(Nt||(Nt=Gt`
              <div part="docs-column">
                <div part="docs-label">Attribute</div>
                <div part="docs-value">${0}</div>
              </div>
            `),a),void 0===s&&void 0===o?r:n(Ct||(Ct=Gt`
              <div part="docs-column" class="column-type">
                <div part="docs-label">Type</div>
                <div part="docs-value">
                  ${0}
                  ${0}
                </div>
              </div>
            `),s||(Number.isNaN(Number(o))?typeof o:"number"),void 0===o?r:n(Rt||(Rt=Gt` = <span class="accent">${0}</span> `),o)),void 0===i,gt(i)),Qt=(e,t,r)=>{const i=0===t.length;return n(Lt||(Lt=Gt`
    <api-viewer-tab slot="tab" part="tab" ?hidden=${0}>
      ${0}
    </api-viewer-tab>
    <api-viewer-panel slot="panel" part="tab-panel" ?hidden=${0}>
      ${0}
    </api-viewer-panel>
  `),i,e,i,r)};class Wt extends i{constructor(){super(...arguments),this.name="",this.props=[],this.attrs=[],this.methods=[],this.slots=[],this.events=[],this.cssParts=[],this.cssProps=[]}createRenderRoot(){return this}render(){const{slots:e,props:t,attrs:r,methods:i,events:s,cssParts:o,cssProps:a}=this,l=[t,r,i,e,s,a,o].every((e=>0===e.length)),c=(r||[]).filter((e=>!t.some((t=>t.name===e.fieldName))));return l?n(Dt||(Dt=Gt`
          <div part="warning">
            The element &lt;${0}&gt; does not provide any documented
            API.
          </div>
        `),this.name):n(Mt||(Mt=Gt`
          <api-viewer-tabs>
            ${0}
            ${0}
            ${0}
            ${0}
            ${0}
            ${0}
            ${0}
          </api-viewer-tabs>
        `),Qt("Properties",t,n(Pt||(Pt=Gt`
                ${0}
              `),t.map((e=>{const{name:t,description:n,type:i}=e,s=(r||[]).find((e=>e.fieldName===t));return Zt("prop",t,n,null==i?void 0:i.text,e.default,null==s?void 0:s.name)})))),Qt("Attributes",c,n(Ut||(Ut=Gt`
                ${0}
              `),c.map((({name:e,description:t,type:n})=>Zt("attr",e,t,null==n?void 0:n.text))))),Qt("Methods",i,n(Ft||(Ft=Gt`
                ${0}
              `),i.map((e=>Zt("method",(e=>{var t,r;const i=e.parameters||[],s=(null===(t=e.return)||void 0===t||null===(r=t.type)||void 0===r?void 0:r.text)||"void";return n(It||(It=Gt`
    <span part="docs-method">
      ${0}(<span part="docs-method-params"
        >${0}</span
      >)</span
    ><span part="docs-method-type">: ${0}</span>
  `),e.name,i.map(((e,t)=>{var r;return n(Ot||(Ot=Gt`<span part="docs-param-name">${0}</span>:
              <span part="docs-param-type">${0}</span>${0}`),e.name,null===(r=e.type)||void 0===r?void 0:r.text,t===i.length-1?"":", ")})),s)})(e),e.description))))),Qt("Slots",e,n(jt||(jt=Gt`
                ${0}
              `),e.map((({name:e,description:t})=>Zt("slot",e,t))))),Qt("Events",s,n(Ht||(Ht=Gt`
                ${0}
              `),s.map((({name:e,description:t})=>Zt("event",e,t))))),Qt("CSS Custom Properties",a,n(qt||(qt=Gt`
                ${0}
              `),a.map((e=>{const{name:t,description:n}=e;return Zt("css",t,n,"","string"==typeof(r=e.default)&&r.startsWith("'")&&r.endsWith("'")?r.slice(1,r.length-1):r);var r})))),Qt("CSS Shadow Parts",o,n(Bt||(Bt=Gt`
                ${0}
              `),o.map((({name:e,description:t})=>Zt("part",e,t))))))}updated(e){if(e.has("name")&&e.get("name")){const e=this.renderRoot.querySelector("api-viewer-tabs");e&&e.selectFirst()}}}bt([S()],Wt.prototype,"name",void 0),bt([S({attribute:!1})],Wt.prototype,"props",void 0),bt([S({attribute:!1})],Wt.prototype,"attrs",void 0),bt([S({attribute:!1})],Wt.prototype,"methods",void 0),bt([S({attribute:!1})],Wt.prototype,"slots",void 0),bt([S({attribute:!1})],Wt.prototype,"events",void 0),bt([S({attribute:!1})],Wt.prototype,"cssParts",void 0),bt([S({attribute:!1})],Wt.prototype,"cssProps",void 0),customElements.define("api-docs-layout",Wt);let Yt,Kt,Vt,Xt=e=>e;async function Jt(e,t,r){var i,s,o,a,l;const c=await e;if(!y(c))return z;const p=A(c),u=((e,t)=>{var n,r,i,s,o,a,l,c;const p=A(e),u=t?p.findIndex((e=>(null==e?void 0:e.name)===t)):0,h=p[u];if(!h)return null;const{name:d,module:m}=h.declaration,f=m?null===(n=e.modules.find((e=>e.path===m.replace(/^\//,""))))||void 0===n||null===(r=n.declarations)||void 0===r?void 0:r.find((e=>e.name===d)):e.modules.flatMap((e=>e.declarations)).find((e=>(null==e?void 0:e.name)===d));if(!f||!f.customElement)throw new Error(`Could not find declaration for ${t}`);return{customElement:!0,name:h.name,description:null==f?void 0:f.description,slots:null!==(i=f.slots)&&void 0!==i?i:[],attributes:null!==(s=f.attributes)&&void 0!==s?s:[],members:null!==(o=f.members)&&void 0!==o?o:[],events:null!==(a=f.events)&&void 0!==a?a:[],cssParts:null!==(l=f.cssParts)&&void 0!==l?l:[],cssProperties:[...null!==(c=f.cssProperties)&&void 0!==c?c:[]].sort(((e,t)=>e.name>t.name?1:-1))}})(c,r),h=((e=[])=>e.filter((e=>"field"===e.kind&&_(e))))(u.members),d=((e=[])=>e.filter((e=>"method"===e.kind&&_(e))))(u.members);return n(Yt||(Yt=Xt`
    <header part="header">
      <div part="header-title">&lt;${0}&gt;</div>
      <nav>
        <label part="select-label">
          <select
            @change=${0}
            .value=${0}
            ?hidden=${0}
            part="select"
          >
            ${0}
          </select>
        </label>
      </nav>
    </header>
    <div ?hidden=${0} part="docs-description">
      ${0}
    </div>
    <api-docs-layout
      .name=${0}
      .props=${0}
      .attrs=${0}
      .methods=${0}
      .events=${0}
      .slots=${0}
      .cssParts=${0}
      .cssProps=${0}
      part="docs-container"
    ></api-docs-layout>
  `),u.name,t,r||"",1===p.length,p.map((e=>n(Kt||(Kt=Xt`<option value=${0}>${0}</option>`),e.name,e.name))),""===u.description,gt(u.description),u.name,h,null!==(i=u.attributes)&&void 0!==i?i:[],d,null!==(s=u.events)&&void 0!==s?s:[],null!==(o=u.slots)&&void 0!==o?o:[],null!==(a=u.cssParts)&&void 0!==a?a:[],null!==(l=u.cssProperties)&&void 0!==l?l:[])}class en extends(N(i)){render(){return n(Vt||(Vt=Xt`${0}`),v(Jt(this.jsonFetched,this._onSelect,this.selected)))}_onSelect(e){this.selected=e.target.value}}let tn;var nn=e(tn||(tn=(e=>e)`
  p,
  ul,
  ol {
    margin: 1rem 0;
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  a {
    color: var(--ave-link-color);
  }

  a:hover {
    color: var(--ave-link-hover-color);
  }

  pre {
    white-space: pre-wrap;
  }

  api-docs-layout {
    display: block;
  }

  [part='tab'][heading^='CSS'] {
    min-width: 120px;
    font-size: 0.8125rem;
  }

  [part='docs-item'] {
    display: block;
    padding: 0.5rem;
    color: var(--ave-item-color);
  }

  [part='docs-item']:not(:first-of-type) {
    border-top: solid 1px var(--ave-border-color);
  }

  [part='docs-description'] {
    display: block;
    padding: 0 1rem;
    border-bottom: solid 1px var(--ave-border-color);
  }

  [part='docs-row'] {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  [part='docs-column'] {
    box-sizing: border-box;
    flex-basis: 25%;
    padding-right: 0.5rem;
  }

  [part='docs-column']:only-child {
    flex-basis: 100%;
  }

  .column-name-css,
  .column-type {
    flex-basis: 50%;
  }

  [part='docs-label'] {
    color: var(--ave-label-color);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1rem;
  }

  [part='docs-value'] {
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='docs-markdown'] p,
  [part='docs-markdown'] ul,
  [part='docs-markdown'] ol {
    margin: 0.5rem 0;
  }

  [part$='params'] {
    color: var(--ave-item-color);
  }

  [part$='type'] {
    color: var(--ave-secondary-color);
  }

  .accent {
    color: var(--ave-accent-color);
  }

  @media (max-width: 480px) {
    .column-type {
      margin-top: 1rem;
    }

    .column-name-css,
    .column-type {
      flex-basis: 100%;
    }

    [part='tab'][heading^='CSS'] {
      max-width: 125px;
    }
  }
`));customElements.define("api-docs",class extends en{static get styles(){return[o,nn]}});
