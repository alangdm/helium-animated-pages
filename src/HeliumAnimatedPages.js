import { LitElement, html, css } from 'lit';
import { stringOrIntSerializer } from './serializers.js';

const _isString = next => {
  const index = parseInt(next, 10);
  return Number.isNaN(index);
};

/**
 * A light spiritual successor to neon-animated-pages using only css animations
 *
 * @element helium-animated-pages
 *
 * @slot - The slot for the pages to animate
 *
 * @fires helium-start - Fires when the page transition starts
 * @fires helium-end - Fires when the page transition ends
 *
 * @cssprop --helium-children-visible - Whether this component should be visible if it's a children of another `helium-animated-pages`.
 *
 * @prop {Boolean} isAnimating - This property will get the state of the animation. Whether it's currently in the middle of an animation or not.
 *
 * @typedef {{in: string, out: string}} AnimationRule - An animation rule with in and out classes to apply
 * @typedef {Object.<string, AnimationRule>} AnimationClasses - The ruleset of animations to apply
 */
export default class HeliumAnimatedPages extends LitElement {
  render() {
    return html` <slot></slot> `;
  }

  static get styles() {
    return [
      css`
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
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * This property is required for the animations to run, it maps which
       * animations to run depending on what the transition will be.
       *
       * If the property isn't set the transitions will run without animations.
       *
       * The properties of this object each represent a different transition rule.
       * The transition rules can be of one of the following types.
       * The rule types are listed in order of priority.
       * All the examples assume you have at least two pages identified respectively as `page1` and `page2`.
       * - `from_to`: The most specific kind of transition.
       *   It defines an animation which will run when both the newly selected
       *   page and the previously selected page match with the rule. For
       *   example: `page1_page2`.
       * - `_to `: This is a special subtype of the previous rule applied when there was no
       *   previously selected page. For example: `_page1`
       * - `*_to`: It defines an animation that will run whenever the newly selected page
       *   matches this rule. This rule will ignore the previously selected page.
       *   For example: `*_page2`
       * - `from_*`: It defines an animation that will run whenever the previously selected page
       *   matches this rule. This rule will ignore the newly selected page.
       *   For example: `page1_*`
       * - `default`: It defines an animation which will run when none of the
       *   other rules apply.
       *
       * Please bear in mind 'undefined' and 'null' are not valid identifiers.
       *
       * All transition rules must be an object with the following format:
       * ```javascript
       * {
       *   in: 'inbound_css_animation_class_name',
       *   out: 'outbound_css_animation_class_name'
       * }
       * ```
       * @type {AnimationClasses}
       * @attr
       */
      animationClasses: { type: Object },

      /**
       * If set, it will be the name of the attribute used to identify
       * the pages added inside the instance of `helium-animated-pages`.
       * Otherwise, the index of the children page will be used. Any page
       * without this attribute will be ignored. If two pages with
       * the same value for the attribute exist, only the first one will be selectable.
       * @type {string}
       * @attr
       */
      attrForSelected: { type: String },

      /**
       * The numerical index or the value of the attribute of the currently
       * selected node. It's only the index if `attrForSelected` isn't defined.
       * Modifying this property achieves the same results as invoking
       * the `select(next)` method.
       * Warning: using this property together with any of the selection
       * methods might cause state inconsistencies.
       * @type {string|number}
       * @attr
       */
      selected: { converter: stringOrIntSerializer },
    };
  }

  constructor() {
    super();
    this._inAnimation = this._inAnimation.bind(this);
    this._outAnimation = this._outAnimation.bind(this);
    this.attrForSelected = '';
    /** @type {AnimationClasses} */
    this.animationClasses = {};
  }

  get isAnimating() {
    return this._animating;
  }

  get selected() {
    return this._selected;
  }

  set selected(/** @type {string|number} */ next) {
    if (typeof next === 'undefined' || next === null || this._animating) {
      return;
    }

    this._inPage = _isString(next)
      ? this.querySelector(`[${this.attrForSelected}="${next}"]`)
      : this.children[next];
    this._outPage = this.selectedItem;

    // Do nothing if no page was found or the same page is being selected
    if (!this._inPage || this._inPage === this._outPage) return;

    const oldValue = this._selected;
    let prev = '';
    if (this._outPage) {
      if (this.attrForSelected) {
        prev = this._outPage.getAttribute(this.attrForSelected);
      } else {
        prev = Array.from(this.children).indexOf(this._outPage);
      }
    }

    this._selected = this.attrForSelected
      ? this._inPage.getAttribute(this.attrForSelected)
      : next;
    this._changeActive(this._selected, prev);
    this.requestUpdate('selected', oldValue);
  }

  /**
   * The currently selected item's DOM node.
   * @type {Element}
   * @readonly
   */
  get selectedItem() {
    if (this._selected || this._selected === 0) {
      const stringMode = _isString(this._selected);
      if (stringMode) {
        return this.querySelector(
          `[${this.attrForSelected}="${this._selected}"]`
        );
      }
      return this.children[this._selected];
    }
    return null;
  }

  /**
   * select - Makes a transition into the page identified with next.
   *
   * - If `next` is a string, the new page will be searched depending on
   *   `attrForSelected`.
   * - If next is a number or a string which can be parsed to an integer,
   *   the new page will be searched by index.
   *
   * It will do nothing if one of the following conditions applies:
   *
   * - No page is found corresponding to the identifier.
   * - An animation is running.
   * - The new page is the same as the previous page.
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
   * The first page will be selected if no page was selected or
   * the currently selected page is the last page.
   *
   */
  selectNext() {
    const children = Array.from(this.children);
    if (!children || children.length === 0) {
      return;
    }
    const { selectedItem } = this;
    const prevIndex = children.indexOf(selectedItem);
    const nextIndex = prevIndex + 1 >= children.length ? 0 : prevIndex + 1;
    this.selected = nextIndex;
  }

  /**
   * selectPrevious - Makes a transition to the page which is the previous sibling
   * of the currently selected page.
   *
   * The last page will be selected if no page was selected or
   * the currently selected page is the first page.
   *
   */
  selectPrevious() {
    const children = Array.from(this.children);
    if (!children || children.length === 0) {
      return;
    }
    const { selectedItem } = this;
    const prevIndex = children.indexOf(selectedItem);
    const nextIndex = prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1;
    this.selected = nextIndex;
  }

  /**
   *
   * @param {string|number} next
   * @param {string|number} prev
   */
  _changeActive(next, prev) {
    const startEvent = new CustomEvent('helium-start', {
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(startEvent);
    if (!this.animationClasses) {
      // this is a fallback just in case animationClasses wasn't set
      this._inPage.setAttribute('active', true);
      if (this._outPage) {
        this._outPage.removeAttribute('active');
      }
      const endEvent = new CustomEvent('helium-end', {
        composed: true,
        bubbles: true,
      });
      this.dispatchEvent(endEvent);
    } else {
      this._currentClasses = this._animationClasses(next, prev);
      this._beginAnimation();
    }
  }

  _beginAnimation() {
    this._animating = true;
    this._inPage.addEventListener('animationend', this._inAnimation, {
      once: true,
    });
    if (this._outPage) {
      this._outPage.addEventListener('animationend', this._outAnimation, {
        once: true,
      });
      this._outPage.classList.add(this._currentClasses.out);
    } else {
      this._outAnimationEnded = true;
    }
    this._inPage.classList.add(this._currentClasses.in);
    this._inPage.setAttribute('active', true);
  }

  /**
   *
   * @param {string|number} next
   * @param {string|number} prev
   */
  _animationClasses(next, prev) {
    const fullId = `${prev}_${next}`;
    const toId = `*_${next}`;
    const fromId = `${prev}_*`;
    if (fullId in this.animationClasses) {
      return this.animationClasses[fullId];
    }
    if (toId in this.animationClasses) {
      return this.animationClasses[toId];
    }
    if (fromId in this.animationClasses) {
      return this.animationClasses[fromId];
    }
    return this.animationClasses.default;
  }

  _inAnimation() {
    this._inAnimationEnded = true;
    this._onAnimationEnd();
  }

  _outAnimation() {
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
      const endEvent = new CustomEvent('helium-end', {
        composed: true,
        bubbles: true,
      });
      this.dispatchEvent(endEvent);
    }
  }
}
