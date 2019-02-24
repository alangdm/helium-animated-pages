import { LitElement, html, css } from 'lit-element';
import { stringOrIntSerializer } from './serializers.js';

/**
 * A light spiritual succesor to neon-animated-pages using only css animations
 *
 * @customElement
 * @polymer
 * @extends LitElement
 */
class HeliumAnimatedPages extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }

  static get styles() {
    return [
      css`
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
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * This property is required for the animations to run, it maps which
       * animations to run depending on what the transition will be.
       *
       * If it's not set the transitions will run without animations.
       *
       * The properties of this object each represent a different transition
       * rule, the transition rules can be of one of the following types (in
       * order of priority, all the examples asume you have at least two pages
       * which identify respectively as `page1` and `page2`):
       * - `from_to`: The most specific kind of transition.
       *   It defines an animation which will run when both the newly selected
       *   page and the previously selected page match with the rule. For
       *   example: `page1_page2`.
       * - `_to ` is a special subtype of this rule when there was no
       *   previously selected page. For example: `_page1`
       * - `*_to`: It defines an animation which will run when only the newly
       *   selected page matches this rule. For example: `*_page2`
       * - `from_*`: It defines an animation which will run when only the
       *   previously selected page matches this rule. For example: `page1_*`
       * - `default`: It defines an animation which will run when none of the
       *   other rules apply.
       *
       * Please bear in mind 'undefined' and 'null' are not valid identifiers.
       *
       * Any transition rule should be an object with this format:
       * ```javascript
       * {
       *   in: 'inbound_css_animation_class_name',
       *   out: 'outbound_css_animation_class_name'
       * }
       * ```
       */
      animationClasses: { type: Object },
      /**
       * If set, it will be the name of the attribute used to identify
       * different pages added inside the instance of `helium-animated-pages`
       * (otherwise a the index of the children page will be used). Any page
       * without this attribute will be ignored and if two pages are found with
       * the same value for the attribute only the first one will be selectable.
       * @default 'name'
       */
      attrForSelected: { type: String },
      /**
       * The index or value of the attribute of the currently
       * selected node, it's only the index if `attrForSelected` isn't defined.
       * Modifying this property achieves the same results as invoking
       * the `select(next)` method.
       * Just be warned, if you use this property with a downwards only binding and
       * also try to use any of the selection methods you might get state
       * inconsistencies.
       */
      selected: { converter: stringOrIntSerializer },
    };
  }

  constructor() {
    super();
    const animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd',
    };
    for (const a in animations) {
      if (this.style[a] !== undefined) {
        this._animationEvent = animations[a];
        break;
      }
    }
    this._inAnimation = this._inAnimation.bind(this);
    this._outAnimation = this._outAnimation.bind(this);
    this.attrForSelected = 'name';
  }

  /**
   * This property will get the state of the animation,
   * whether it's currently in the middle of an animation or not.
   * @readonly
   */
  get isAnimating() {
    return this._animating;
  }

  get selected() {
    return this._selected;
  }

  set selected(next) {
    if (typeof next === 'undefined' || next === null || this._animating) {
      return;
    }

    const stringMode = this._isStringMode(next);

    this._inPage = stringMode
      ? this.querySelector(`[${this.attrForSelected}="${next}"]`)
      : this.children[next];
    this._outPage = this.selectedItem;

    // Do nothing if no page was found or the same page is being selected
    if (!this._inPage || this._inPage === this._outPage) return;

    const oldValue = this._selected;
    let prev = '';
    if (this._outPage) {
      if (stringMode) {
        prev = this._outPage.getAttribute(this.attrForSelected);
      } else {
        prev = Array.from(this.children).indexOf(this._outPage);
      }
    }

    this._selected = stringMode
      ? this._inPage.getAttribute(this.attrForSelected)
      : next;
    this._changeActive(next, prev);
    this.requestUpdate('selected', oldValue);
  }
  /**
   * The currently selected item's DOM node.
   * @readonly
   */
  get selectedItem() {
    if (this._selected || this._selected === 0) {
      const stringMode = this._isStringMode(this._selected);
      return stringMode
        ? this.querySelector(`[${this.attrForSelected}="${this._selected}"]`)
        : this.children[this._selected];
    }
    return null;
  }

  /**
   * select - Makes a transition into the page identified with next.
   *
   * - If `next` is a string the new page will be searched depending on
   *   `attrForSelected`.
   * - If next is a number or a string which can be parsed to an integer
   *   the new page will be searched by index.
   *
   * If no page is found corresponding to the identifier, an animation is
   * running, or the new page is the same as the previous page it will do
   * nothing.
   *
   * @param  {string|number} next next page index or attribute value
   */
  select(next) {
    this.selected = next;
  }

  /**
   * selectNext - Makes a transition to the page which is the next sibling of
   * the currently selected page.
   *
   * If the current page is undefined or is the last children the first
   * children will be selected.
   *
   * If there are no children, an animation is running, or the new page is the
   * same as the previous page it will do nothing.
   */
  selectNext() {
    const children = Array.from(this.children);
    if (!children || children.length === 0) {
      return;
    }
    const selectedItem = this.selectedItem;
    let prevIndex = children.indexOf(selectedItem);
    let nextIndex = prevIndex + 1 >= children.length ? 0 : prevIndex + 1;
    this.selected = nextIndex;
  }

  /**
   * selectPrevious - Makes a transition to the page which is the previous sibling
   * of the currently selected page.
   *
   * If the current page is undefined or is the first children the last
   * children will be selected.
   *
   * If there are no children, an animation is running, or the new page is the
   * same as the previous page it will do nothing.
   */
  selectPrevious() {
    const children = Array.from(this.children);
    if (!children || children.length === 0) {
      return;
    }
    const selectedItem = this.selectedItem;
    let prevIndex = children.indexOf(selectedItem);
    let nextIndex = prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1;
    this.selected = nextIndex;
  }

  _changeActive(next, prev) {
    if (!this.animationClasses) {
      // this is a fallback just in case animationClasses wasn't set
      this._inPage.setAttribute('active', true);
      if (this._outPage) {
        this._outPage.removeAttribute('active');
      }
    } else {
      this._currentClasses = this._animationClasses(next, prev);
      this._beginAnimation();
    }
  }

  _beginAnimation() {
    this._animating = true;
    this._inPage.addEventListener(this._animationEvent, this._inAnimation);
    if (this._outPage) {
      this._outPage.addEventListener(this._animationEvent, this._outAnimation);
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

  _inAnimation() {
    this._inPage.removeEventListener(this._animationEvent, this._inAnimation);
    this._inAnimationEnded = true;
    this._onAnimationEnd();
  }

  _outAnimation() {
    this._outPage.removeEventListener(this._animationEvent, this._outAnimation);
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
    const index = parseInt(next);
    return isNaN(index);
  }
}
window.customElements.define('helium-animated-pages', HeliumAnimatedPages);
