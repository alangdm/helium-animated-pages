import { html, css } from 'lit';
import { PageViewElement } from './page-view-element.js';
import { sharedStyles } from './shared-styles.js';
import '../../helium-animated-pages.js';
import {
  FadeIn,
  FadeOut,
  RotateCarouselLeftIn,
  RotateCarouselRightIn,
  RotateCarouselLeftOut,
  RotateCarouselRightOut,
  RotateCubeLeftIn,
  RotateCubeRightIn,
  RotateCubeLeftOut,
  RotateCubeRightOut,
} from '../../sample-animations/index.js';

class SettingsDemo extends PageViewElement {
  render() {
    return html`
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
          <button data-action="previous" @click="${this._selectNoAttr}">
            Previous
          </button>
          <button data-action="next" @click="${this._selectNoAttr}">
            Next
          </button>
        </p>
      </section>
      <section class="container">
        <helium-animated-pages
          class="sample-pages"
          id="noAttr"
          .animationClasses="${this._noAttrAnimationClasses}"
        >
          <div>Slide index: 0</div>
          <div>Slide index: 1</div>
          <div>Slide index: 2</div>
        </helium-animated-pages>
      </section>
      <section>
        Code for the previous example:
        <pre><code>${this._noAttrCode}</code></pre>
        Code for the <code>animationClasses</code> applied on it:
        <pre><code>${JSON.stringify(
          this._noAttrAnimationClasses,
          null,
          2
        )}</code></pre>
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
          <button data-action="previous" @click="${this._selectAttr}">
            Previous
          </button>
          <button data-action="next" @click="${this._selectAttr}">Next</button>
        </p>
      </section>
      <section class="container">
        <helium-animated-pages
          class="sample-pages"
          id="attr"
          attrForSelected="name"
          .animationClasses="${this._attrAnimationClasses}"
        >
          <div name="first">First Slide</div>
          <div name="second">Second Slide</div>
          <div name="third">Third Slide</div>
        </helium-animated-pages>
      </section>
      <section>
        Code for the previous example:
        <pre><code>${this._attrCode}</code></pre>
        Code for the <code>animationClasses</code> applied on it:
        <pre><code>${JSON.stringify(
          this._attrAnimationClasses,
          null,
          2
        )}</code></pre>
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
    `;
  }

  static get properties() {
    return {
      _attrAnimationClasses: { state: true },
      _noAttrAnimationClasses: { state: true },
    };
  }

  static get styles() {
    return [
      sharedStyles,
      FadeIn,
      FadeOut,
      RotateCarouselLeftIn,
      RotateCarouselRightIn,
      RotateCarouselLeftOut,
      RotateCarouselRightOut,
      RotateCubeLeftIn,
      RotateCubeRightIn,
      RotateCubeLeftOut,
      RotateCubeRightOut,
      css`
        :host {
          padding: 0 1rem;
        }
        section.container {
          width: 200px;
          height: 50px;
          position: relative;
        }
      `,
    ];
  }

  _selectNoAttr(e) {
    const pages = this.shadowRoot.querySelector('#noAttr');
    const { action } = e.target.dataset;
    this._select(pages, action);
  }

  _selectAttr(e) {
    const pages = this.shadowRoot.querySelector('#attr');
    const { action } = e.target.dataset;
    this._select(pages, action);
  }

  _select(pages, action) {
    if (action === 'next') {
      pages.selectNext();
    } else if (action === 'previous') {
      pages.selectPrevious();
    }
  }

  constructor() {
    super();
    this._noAttrAnimationClasses = {
      '0_1': {
        in: 'page-rotateCubeLeftIn',
        out: 'page-rotateCubeLeftOut',
      },
      '2_1': {
        in: 'page-rotateCubeRightIn',
        out: 'page-rotateCubeRightOut',
      },
      '*_0': {
        in: 'page-rotateCubeRightIn',
        out: 'page-rotateCubeRightOut',
      },
      '*_2': {
        in: 'page-rotateCubeLeftIn',
        out: 'page-rotateCubeLeftOut',
      },
      _0: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
      _2: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
    };
    this._attrAnimationClasses = {
      first_second: {
        in: 'page-rotateCarouselLeftIn',
        out: 'page-rotateCarouselLeftOut',
      },
      third_second: {
        in: 'page-rotateCarouselRightIn',
        out: 'page-rotateCarouselRightOut',
      },
      '*_first': {
        in: 'page-rotateCarouselRightIn',
        out: 'page-rotateCarouselRightOut',
      },
      '*_third': {
        in: 'page-rotateCarouselLeftIn',
        out: 'page-rotateCarouselLeftOut',
      },
      _first: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
      _third: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
    };

    this._noAttrCode = `
<helium-animated-pages
  .animationClasses="\${this._noAttrAnimationClasses}"
>
  <div>Slide index: 0</div>
  <div>Slide index: 1</div>
  <div>Slide index: 2</div>
</helium-animated-pages>`.trim();
    this._attrCode = `
<helium-animated-pages
  attrForSelected="name"
  .animationClasses="\${this._attrAnimationClasses}"
>
  <div name="first">First Slide</div>
  <div name="second">Second Slide</div>
  <div name="third">Third Slide</div>
</helium-animated-pages>`.trim();
  }
}

window.customElements.define('settings-demo', SettingsDemo);
