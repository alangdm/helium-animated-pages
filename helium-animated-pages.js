import { LitElement, html } from '@polymer/lit-element';

class HeliumAnimatedPages extends LitElement {
  _render(props) {
    return html `
      <style>
        :host {
          position: absolute;
        	width: 100%;
        	height: 100%;
        	perspective: var(--helium-animation-perspective, 1200px);
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
          visibility: var(--helium-children-visible, visible);
        }
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      animationClasses: Object,
      attrForSelected: String,
      _selected: String,
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

  get isAnimating() {
    return this._animating;
  }

  get selected() {
    return this._selected;
  }

  set selected(next) {
    if (!this.animationClasses) {
      throw new Error('animationClasses must be defined');
    }
    // Do nothing if the animation is running
    if (this._animating) return;

    const stringMode = this._isStringMode(next);
    if (stringMode && !this.attrForSelected) {
      throw new Error('attrForSelected must be defined if next is a string');
    }

    this._inPage = stringMode ?
      this.querySelector(`[${this.attrForSelected}="${next}"]`) :
      this.children[next];
    this._outPage = this.selectedItem;

    if (!this._inPage) {
      const msg = stringMode ?
        `No page found with ${this.attrForSelected}="${next}"` :
        `No page found with index ${next}`;
      throw new Error(msg);
    }

    // Do nothing if the same page is being selected
    if (this._inPage === this._outPage) return;

    const prev = this._outPage && stringMode ?
      this._outPage.getAttribute(this.attrForSelected) :
      this._outPage ? Array.from(this.children).indexOf(this._outPage) :
      '';

    this._selected = this.attrForSelected ?
      this._inPage.getAttribute(this.attrForSelected) :
      next;
    this._currentClasses = this._animationClasses(next, prev);
    this._beginAnimation();
  }

  get selectedItem() {
    if(this._selected || this._selected === 0) {
      return this.attrForSelected ?
        this.querySelector(`[${this.attrForSelected}="${this._selected}"]`) :
        this.children[this._selected];
    }
    return null;
  }

  select(next) {
    this.selected = next;
  }

  selectNext() {
    const children = Array.from(this.children);
    if (!children || children.length === 0) {
      throw new Error('This component has no children to animate');
    }
    const selectedItem = this.selectedItem;
    let prevIndex = children.indexOf(selectedItem);
    let nextIndex = prevIndex + 1 >= children.length ? 0 : prevIndex + 1;
    this.selected = nextIndex;
  }

  selectPrevious() {
    const children = Array.from(this.children);
    if (!children || children.length === 0) {
      throw new Error('This component has no children to animate');
    }
    const selectedItem = this.selectedItem;
    let prevIndex = children.indexOf(selectedItem);
    let nextIndex = prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1;
    this.selected = nextIndex;
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
    const fullId = `${prev}_${next}`;
    const toId = `*_${next}`;
    const fromId = `${prev}_*`;
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

  _isStringMode(next) {
    const type = typeof next;
    switch (type) {
      case 'string':
        return true
        break;
      case 'number':
        if (next >= 0 && Number.isInteger(next)) {
          return false;
        }
      default:
        throw new Error('next must be a string or a positive integer');
    }
  }
}
window.customElements.define('helium-animated-pages', HeliumAnimatedPages);
