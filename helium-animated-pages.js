import { LitElement, html } from '@polymer/lit-element';

class HeliumAnimatedPages extends LitElement {
  _render(props) {
    return html `
      <style>
        :host {
          position: absolute;
        	width: 100%;
        	height: 100%;
        	perspective: var(--animation-perspective, 1200px);
        	transform-style: preserve-3d;
        }
        ::slotted(*) {
          width: 100%;
        	height: 100%;
        	position: absolute;
        	top: 0;
        	left: 0;
        	visibility: hidden;
        	overflow: hidden;
        	backface-visibility: hidden;
        	transform: translate3d(0, 0, 0);
        }
        ::slotted([active]) {
          visibility: visible;
        }
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      animationClasses: Object,
      attrForSelected: String,
      _animationEvent: String,
      _animating: Boolean,
      _inAnimationEnded: Boolean,
      _outAnimationEnded: Boolean,
      _inPage: Object,
      _outPage: Object,
      _inAnimationBound: Object,
      _outAnimationBound: Object,
      _currentClasses: Object,
    };
  }

  constructor() {
    super();
    const animations = {
      "animation": "animationend",
      "OAnimation": "oAnimationEnd",
      "MozAnimation": "animationend",
      "WebkitAnimation": "webkitAnimationEnd",
    };
    for (const a in animations) {
      if (this.style[a] !== undefined) {
        this._animationEvent = animations[a];
        break;
      }
    }
    this._inAnimationBound = this._inAnimation.bind(this);
    this._outAnimationBound = this._outAnimation.bind(this);
  }

  _shouldRender(props, changedProps, old) {
    return props.animationClasses && props.attrForSelected;
  }

  isAnimating() {
    return this._animating;
  }

  select(next) {
    if (!this.animationClasses || !this.attrForSelected) {
      throw new Error('animationClasses and attrForSelected must be defined');
    }

    // Do nothing if the animation is running
    if (this._animating) return;

    this._inPage = this.querySelector(`[${this.attrForSelected}=${next}]`);
    this._outPage = this.querySelector(`[active]`);

    if(!this._inPage) {
      throw new Error(`No page found with ${this.attrForSelected}=${next}`);
    }

    // Do nothing if the same page is being selected
    if(this._inPage === this._outPage) return;

    const prev = this._outPage ? this._outPage.getAttribute(this.attrForSelected) : '';
    this._currentClasses = this._animationClasses(next, prev);
    this._beginAnimation();
  }

  _beginAnimation() {
    this._animating = true;
    this._inPage.addEventListener(this._animationEvent, this._inAnimationBound);
    if (this._outPage) {
      this._outPage.addEventListener(this._animationEvent, this._outAnimationBound);
      this._outPage.classList.add(this._currentClasses.out);
    } else {
      this._outAnimationEnded = true;
    }
    this._inPage.classList.add(this._currentClasses.in);
    this._inPage.setAttribute('active', true);
  }

  _animationClasses(next, prev) {
    const fullId = `${next}_${prev}`;
    const toId = `_${prev}`;
    const fromId = `${next}_`;
    if (fullId in this.animationClasses) {
      return this.animationClasses[fullId];
    } else if (toId in this.animationClasses) {
      return this.animationClasses[toId];
    } else if (fromId in this.animationClasses) {
      return this.animationClasses[fromId];
    } else {
      return this.animationClasses.default;
    }
  }

  _inAnimation(e) {
    this._inPage.removeEventListener(this._animationEvent, this._inAnimationBound);
    this._inAnimationEnded = true;
    this._onAnimationEnd();
  }

  _outAnimation(e) {
    this._outPage.removeEventListener(this._animationEvent, this._outAnimationBound);
    this._outAnimationEnded = true;
    this._onAnimationEnd();
  }

  _onAnimationEnd() {
    if (this._inAnimationEnded && this._outAnimationEnded) {
      this._inAnimationEnded = false;
      this._outAnimationEnded = false;
      this._animating = false;
      this._inPage.classList.remove(this._currentClasses.in);
      if (this._outPage) {
        this._outPage.removeAttribute('active');
        this._outPage.classList.remove(this._currentClasses.out);
      }
      this._inPage = null;
      this._outPage = null;
      this._currentClasses = null;
    }
  }
}
window.customElements.define('helium-animated-pages', HeliumAnimatedPages);
