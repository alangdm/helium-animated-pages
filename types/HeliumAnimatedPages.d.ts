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
    static get styles(): import("lit").CSSResultGroup[];
    static get properties(): {
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
        animationClasses: AnimationClasses;
        /**
         * If set, it will be the name of the attribute used to identify
         * the pages added inside the instance of `helium-animated-pages`.
         * Otherwise, the index of the children page will be used. Any page
         * without this attribute will be ignored. If two pages with
         * the same value for the attribute exist, only the first one will be selectable.
         * @type {string}
         * @attr
         */
        attrForSelected: string;
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
        selected: string | number;
    };
    _inAnimation(): void;
    _outAnimation(): void;
    attrForSelected: string;
    /** @type {AnimationClasses} */
    animationClasses: AnimationClasses;
    get isAnimating(): boolean;
    set selected(arg: string | number);
    get selected(): string | number;
    _inPage: any;
    _outPage: Element;
    _selected: any;
    /**
     * The currently selected item's DOM node.
     * @type {Element}
     * @readonly
     */
    readonly get selectedItem(): Element;
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
    select(next: string | number): void;
    /**
     * selectNext - Makes a transition to the page which is the next sibling of
     * the currently selected page.
     *
     * The first page will be selected if no page was selected or
     * the currently selected page is the last page.
     *
     */
    selectNext(): void;
    /**
     * selectPrevious - Makes a transition to the page which is the previous sibling
     * of the currently selected page.
     *
     * The last page will be selected if no page was selected or
     * the currently selected page is the first page.
     *
     */
    selectPrevious(): void;
    /**
     *
     * @param {string|number} next
     * @param {string|number} prev
     */
    _changeActive(next: string | number, prev: string | number): void;
    _currentClasses: AnimationRule;
    _beginAnimation(): void;
    _animating: boolean;
    _outAnimationEnded: boolean;
    /**
     *
     * @param {string|number} next
     * @param {string|number} prev
     */
    _animationClasses(next: string | number, prev: string | number): AnimationRule;
    _inAnimationEnded: boolean;
    _onAnimationEnd(): void;
}
/**
 * - An animation rule with in and out classes to apply
 */
export type AnimationRule = {
    in: string;
    out: string;
};
/**
 * - The ruleset of animations to apply
 */
export type AnimationClasses = {
    [x: string]: AnimationRule;
};
import { LitElement } from "lit-element/lit-element";
