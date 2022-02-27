import{s as t,r as e,$ as o}from"./1e4b748c.js";class a extends t{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}let i;const r=e(i||(i=(t=>t)`
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
`)),n={fromAttribute(t){if(!t)return;const e=t.trim();if(""===e||"undefined"===e||"null"===e)return;const o=parseInt(e,10);return Number.isNaN(o)?t:o},toAttribute:t=>void 0!==t?`${t}`:null};let s,m,l=t=>t;const d=t=>{const e=parseInt(t,10);return Number.isNaN(e)};customElements.define("helium-animated-pages",class extends t{render(){return o(s||(s=l` <slot></slot> `))}static get styles(){return[e(m||(m=l`
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
      `))]}static get properties(){return{animationClasses:{type:Object},attrForSelected:{type:String},selected:{converter:n}}}constructor(){super(),this._inAnimation=this._inAnimation.bind(this),this._outAnimation=this._outAnimation.bind(this),this.attrForSelected="",this.animationClasses={}}get isAnimating(){return this._animating}get selected(){return this._selected}set selected(t){if(null==t||this._animating)return;if(this._inPage=d(t)?this.querySelector(`[${this.attrForSelected}="${t}"]`):this.children[t],this._outPage=this.selectedItem,!this._inPage||this._inPage===this._outPage)return;const e=this._selected;let o="";this._outPage&&(o=this.attrForSelected?this._outPage.getAttribute(this.attrForSelected):Array.from(this.children).indexOf(this._outPage)),this._selected=this.attrForSelected?this._inPage.getAttribute(this.attrForSelected):t,this._changeActive(this._selected,o),this.requestUpdate("selected",e)}get selectedItem(){if(this._selected||0===this._selected){return d(this._selected)?this.querySelector(`[${this.attrForSelected}="${this._selected}"]`):this.children[this._selected]}return null}select(t){this.selected=t}selectNext(){const t=Array.from(this.children);if(!t||0===t.length)return;const{selectedItem:e}=this,o=t.indexOf(e),a=o+1>=t.length?0:o+1;this.selected=a}selectPrevious(){const t=Array.from(this.children);if(!t||0===t.length)return;const{selectedItem:e}=this,o=t.indexOf(e),a=o-1<0?t.length-1:o-1;this.selected=a}_changeActive(t,e){const o=new CustomEvent("helium-start",{composed:!0,bubbles:!0});if(this.dispatchEvent(o),this.animationClasses)this._currentClasses=this._animationClasses(t,e),this._beginAnimation();else{this._inPage.setAttribute("active",!0),this._outPage&&this._outPage.removeAttribute("active");const t=new CustomEvent("helium-end",{composed:!0,bubbles:!0});this.dispatchEvent(t)}}_beginAnimation(){this._animating=!0,this._inPage.addEventListener("animationend",this._inAnimation,{once:!0}),this._outPage?(this._outPage.addEventListener("animationend",this._outAnimation,{once:!0}),this._outPage.classList.add(this._currentClasses.out)):this._outAnimationEnded=!0,this._inPage.classList.add(this._currentClasses.in),this._inPage.setAttribute("active",!0)}_animationClasses(t,e){const o=`${e}_${t}`,a=`*_${t}`,i=`${e}_*`;return o in this.animationClasses?this.animationClasses[o]:a in this.animationClasses?this.animationClasses[a]:i in this.animationClasses?this.animationClasses[i]:this.animationClasses.default}_inAnimation(){this._inAnimationEnded=!0,this._onAnimationEnd()}_outAnimation(){this._outAnimationEnded=!0,this._onAnimationEnd()}_onAnimationEnd(){if(this._inAnimationEnded&&this._outAnimationEnded){this._inAnimationEnded=!1,this._outAnimationEnded=!1,this._animating=!1,this._inPage.classList.remove(this._currentClasses.in),this._outPage&&(this._outPage.removeAttribute("active"),this._outPage.classList.remove(this._currentClasses.out)),this._inPage=null,this._outPage=null,this._currentClasses=null;const t=new CustomEvent("helium-end",{composed:!0,bubbles:!0});this.dispatchEvent(t)}}});let p,c,h,f,g,u,y,b,v=t=>t;const C=e(p||(p=v`
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
`)),_=e(c||(c=v`
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
`));e(h||(h=v`
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
`)),e(f||(f=v`
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
`));const x=e(g||(g=v`
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
`)),k=e(u||(u=v`
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
`));e(y||(y=v`
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
`)),e(b||(b=v`
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
`));let F,S,I,T,R,O,w,A,L=t=>t;const X=e(F||(F=L`
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
`)),Y=e(S||(S=L`
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
`));e(I||(I=L`
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
`)),e(T||(T=L`
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
`));const P=e(R||(R=L`
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
`)),B=e(O||(O=L`
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
`));e(w||(w=L`
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
`)),e(A||(A=L`
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
`));let $,Z,N=t=>t;const U=e($||($=N`
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
`)),D=e(Z||(Z=N`
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
`));let z,E,j,q,M,H,J,W,G=t=>t;e(z||(z=G`
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
`)),e(E||(E=G`
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
`)),e(j||(j=G`
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
`)),e(q||(q=G`
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
`)),e(M||(M=G`
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
`)),e(H||(H=G`
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
`)),e(J||(J=G`
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
`)),e(W||(W=G`
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
`));let V,K,Q,tt,et,ot,at,it,rt=t=>t;e(V||(V=rt`
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
`)),e(K||(K=rt`
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
`)),e(Q||(Q=rt`
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
`)),e(tt||(tt=rt`
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
`)),e(et||(et=rt`
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
`)),e(ot||(ot=rt`
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
`)),e(at||(at=rt`
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
`)),e(it||(it=rt`
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
`));let nt,st,mt,lt,dt,pt,ct,ht,ft,gt,ut,yt,bt,vt,Ct,_t,xt=t=>t;e(nt||(nt=xt`
  .page-moveFromLeft {
    animation: moveFromLeft 0.6s ease both;
  }
  @keyframes moveFromLeft {
    from {
      transform: translateX(-100%);
    }
  }
`)),e(st||(st=xt`
  .page-moveFromRight {
    animation: moveFromRight 0.6s ease both;
  }
  @keyframes moveFromRight {
    from {
      transform: translateX(100%);
    }
  }
`)),e(mt||(mt=xt`
  .page-moveFromTop {
    animation: moveFromTop 0.6s ease both;
  }
  @keyframes moveFromTop {
    from {
      transform: translateY(-100%);
    }
  }
`)),e(lt||(lt=xt`
  .page-moveFromBottom {
    animation: moveFromBottom 0.6s ease both;
  }
  @keyframes moveFromBottom {
    from {
      transform: translateY(100%);
    }
  }
`)),e(dt||(dt=xt`
  .page-moveFromLeftFade {
    animation: moveFromLeftFade 0.6s ease both;
  }
  @keyframes moveFromLeftFade {
    from {
      opacity: 0.3;
      transform: translateX(-100%);
    }
  }
`)),e(pt||(pt=xt`
  .page-moveFromRightFade {
    animation: moveFromRightFade 0.6s ease both;
  }
  @keyframes moveFromRightFade {
    from {
      opacity: 0.3;
      transform: translateX(100%);
    }
  }
`)),e(ct||(ct=xt`
  .page-moveFromTopFade {
    animation: moveFromTopFade 0.6s ease both;
  }
  @keyframes moveFromTopFade {
    from {
      opacity: 0.3;
      transform: translateY(-100%);
    }
  }
`)),e(ht||(ht=xt`
  .page-moveFromBottomFade {
    animation: moveFromBottomFade 0.6s ease both;
  }
  @keyframes moveFromBottomFade {
    from {
      opacity: 0.3;
      transform: translateY(100%);
    }
  }
`)),e(ft||(ft=xt`
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
`)),e(gt||(gt=xt`
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
`)),e(ut||(ut=xt`
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
`)),e(yt||(yt=xt`
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
`)),e(bt||(bt=xt`
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
`)),e(vt||(vt=xt`
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
`)),e(Ct||(Ct=xt`
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
`)),e(_t||(_t=xt`
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
`));let kt,Ft,St,It,Tt,Rt,Ot,wt,At=t=>t;e(kt||(kt=At`
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
`)),e(Ft||(Ft=At`
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
`)),e(St||(St=At`
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
`)),e(It||(It=At`
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
`)),e(Tt||(Tt=At`
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
`)),e(Rt||(Rt=At`
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
`)),e(Ot||(Ot=At`
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
`)),e(wt||(wt=At`
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
`));let Lt,Xt,Yt,Pt,Bt,$t,Zt,Nt,Ut=t=>t;e(Lt||(Lt=Ut`
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
`)),e(Xt||(Xt=Ut`
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
`)),e(Yt||(Yt=Ut`
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
`)),e(Pt||(Pt=Ut`
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
`)),e(Bt||(Bt=Ut`
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
`)),e($t||($t=Ut`
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
`)),e(Zt||(Zt=Ut`
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
`)),e(Nt||(Nt=Ut`
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
`));let Dt,zt,Et,jt,qt,Mt,Ht,Jt=t=>t;e(Dt||(Dt=Jt`
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
`)),e(zt||(zt=Jt`
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
`)),e(Et||(Et=Jt`
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
`)),e(jt||(jt=Jt`
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
`)),e(qt||(qt=Jt`
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
`)),e(Mt||(Mt=Jt`
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
`)),e(Ht||(Ht=Jt`
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
`));let Wt,Gt,Vt,Kt,Qt,te,ee=t=>t;e(Wt||(Wt=ee`
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
`)),e(Gt||(Gt=ee`
  .page-scaleUpDown {
    animation: scaleUpDown 0.5s ease both;
  }
  @keyframes scaleUpDown {
    from {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`)),e(Vt||(Vt=ee`
  .page-scaleUpCenter {
    animation: scaleUpCenter 0.4s ease-out both;
  }
  @keyframes scaleUpCenter {
    from {
      opacity: 0;
      transform: scale(0.7);
    }
  }
`)),e(Kt||(Kt=ee`
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
`)),e(Qt||(Qt=ee`
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
`)),e(te||(te=ee`
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
`));let oe,ae,ie=t=>t;e(oe||(oe=ie`
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
`)),e(ae||(ae=ie`
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
`));let re,ne,se=t=>t;e(re||(re=se`
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
`)),e(ne||(ne=se`
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
`));let me,le,de=t=>t;window.customElements.define("settings-demo",class extends a{render(){return o(me||(me=de`
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
    `),this._selectNoAttr,this._selectNoAttr,this._noAttrAnimationClasses,this._noAttrCode,JSON.stringify(this._noAttrAnimationClasses,null,2),this._selectAttr,this._selectAttr,this._attrAnimationClasses,this._attrCode,JSON.stringify(this._attrAnimationClasses,null,2))}static get properties(){return{_attrAnimationClasses:{state:!0},_noAttrAnimationClasses:{state:!0}}}static get styles(){return[r,U,D,C,_,x,k,X,Y,P,B,e(le||(le=de`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `))]}_selectNoAttr(t){const e=this.shadowRoot.querySelector("#noAttr"),{action:o}=t.target.dataset;this._select(e,o)}_selectAttr(t){const e=this.shadowRoot.querySelector("#attr"),{action:o}=t.target.dataset;this._select(e,o)}_select(t,e){"next"===e?t.selectNext():"previous"===e&&t.selectPrevious()}constructor(){super(),this._noAttrAnimationClasses={"0_1":{in:"page-rotateCubeLeftIn",out:"page-rotateCubeLeftOut"},"2_1":{in:"page-rotateCubeRightIn",out:"page-rotateCubeRightOut"},"*_0":{in:"page-rotateCubeRightIn",out:"page-rotateCubeRightOut"},"*_2":{in:"page-rotateCubeLeftIn",out:"page-rotateCubeLeftOut"},_0:{in:"page-fadeIn",out:"page-fadeOut"},_2:{in:"page-fadeIn",out:"page-fadeOut"},default:{in:"page-fadeIn",out:"page-fadeOut"}},this._attrAnimationClasses={first_second:{in:"page-rotateCarouselLeftIn",out:"page-rotateCarouselLeftOut"},third_second:{in:"page-rotateCarouselRightIn",out:"page-rotateCarouselRightOut"},"*_first":{in:"page-rotateCarouselRightIn",out:"page-rotateCarouselRightOut"},"*_third":{in:"page-rotateCarouselLeftIn",out:"page-rotateCarouselLeftOut"},_first:{in:"page-fadeIn",out:"page-fadeOut"},_third:{in:"page-fadeIn",out:"page-fadeOut"},default:{in:"page-fadeIn",out:"page-fadeOut"}},this._noAttrCode='\n<helium-animated-pages\n  .animationClasses="${this._noAttrAnimationClasses}"\n>\n  <div>Slide index: 0</div>\n  <div>Slide index: 1</div>\n  <div>Slide index: 2</div>\n</helium-animated-pages>'.trim(),this._attrCode='\n<helium-animated-pages\n  attrForSelected="name"\n  .animationClasses="${this._attrAnimationClasses}"\n>\n  <div name="first">First Slide</div>\n  <div name="second">Second Slide</div>\n  <div name="third">Third Slide</div>\n</helium-animated-pages>'.trim()}});let pe,ce,he=t=>t;window.customElements.define("property-demo",class extends a{render(){return o(pe||(pe=he`
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
    `),this._indexChanged,this._selectedIndex,this._propAnimationClasses,this._toggleDisabledIndex,this._toggleDisabledIndex,this._indexDemoCode,this._nameChanged,this._selectedName,this._propAnimationClasses,this._nameDemoCode,JSON.stringify(this._propAnimationClasses,null,2))}static get properties(){return{_selectedIndex:{state:!0},_selectedName:{state:!0},_propAnimationClasses:{state:!0}}}static get styles(){return[r,U,D,e(ce||(ce=he`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `))]}constructor(){super(),this._propAnimationClasses={default:{in:"page-fadeIn",out:"page-fadeOut"}},this._indexDemoCode='\n<helium-animated-pages\n  selected="${this._selectedIndex}"\n  .animationClasses="${this._propAnimationClasses}"\n  @helium-start="${this._toggleDisabledIndex}"\n  @helium-end="${this._toggleDisabledIndex}"\n>\n  <div>Slide index: 0</div>\n  <div>Slide index: 1</div>\n  <div>Slide index: 2</div>\n</helium-animated-pages>'.trim(),this._nameDemoCode='\n<helium-animated-pages\n  attrForSelected="name"\n  selected="${this._selectedName}"\n  .animationClasses="${this._propAnimationClasses}"\n>\n  <div name="first">First Slide</div>\n  <div name="second">Second Slide</div>\n  <div name="third">Third Slide</div>\n</helium-animated-pages>'.trim()}_indexChanged(t){t.target.value&&(this._selectedIndex=parseInt(t.target.value,10))}_toggleDisabledIndex(){const t=this.shadowRoot.querySelector("#select-index");t.disabled=!t.disabled}_nameChanged(t){t.target.value&&(this._selectedName=t.target.value)}});let fe,ge,ue=t=>t;window.customElements.define("demo-element",class extends t{render(){return o(fe||(fe=ue`
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
    `),this._selectMainPage,this._mainAnimationClasses)}static get properties(){return{_mainAnimationClasses:{state:!0}}}static get styles(){return[r,U,D,e(ge||(ge=ue`
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
