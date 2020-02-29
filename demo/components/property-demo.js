import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { sharedStyles } from './shared-styles.js';
import '../../helium-animated-pages.js';
import { FadeIn, FadeOut } from '../../sample-animations/fade-animations.js';

class PropertyDemo extends PageViewElement {
  render() {
    return html`
      <section>
        <h2>Selected Property Demo</h2>
        <p>
          This demos use the <code>selected</code> property to change which
          slide is shown.
        </p>
        <p>
          This is the recommended way of using this component, just update
          <code>selected</code> either as an attribute or as a property and
          you're done!
        </p>
        <h3>Without Using attrForSelected</h3>
        <p>
          If you don't use the <code>attrForSelected</code> property you can
          just set the numerical index of which element you wish to show.
        </p>
        <p>
          <label for="select-index">Slide Index:</label>
          <input
            type="number"
            id="select-index"
            min="0"
            max="2"
            placeholder="0"
            @change=${this._indexChanged}
          />
        </p>
      </section>
      <section class="container">
        <helium-animated-pages
          class="sample-pages"
          selected="${this._selectedIndex}"
          .animationClasses="${this._propAnimationClasses}"
        >
          <div>Slide index: 0</div>
          <div>Slide index: 1</div>
          <div>Slide index: 2</div>
        </helium-animated-pages>
      </section>
      <section>
        Code for the previous example:
        <pre><code>${this._indexDemoCode}</code></pre>
      </section>
      <section>
        <h3>Using attrForSelected</h3>
        <p>
          If you use <code>attrForSelected</code> you'll be able to set which of
          the animated pages attributes this component should check to identify
          them.
        </p>
        <p>
          One of the benefits of doing this is that the value of
          <code>selected</code> may now be a string and the children whose
          attribute value corresponds to it will become active.
        </p>
        <p>
          <label for="select-name">Select Slide with <code>name</code>:</label>
          <select id="select-name" @change=${this._nameChanged}>
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
          selected="${this._selectedName}"
          .animationClasses="${this._propAnimationClasses}"
        >
          <div name="first">First Slide</div>
          <div name="second">Second Slide</div>
          <div name="third">Third Slide</div>
        </helium-animated-pages>
      </section>
      <section>
        Code for the previous example:
        <pre><code>${this._nameDemoCode}</code></pre>
      </section>
      <section>
        <h3>animationClasses</h3>
        <p>
          The code for the <code>animationClasses</code> in this two demos is
          the very simples version of just setting the default animation for
          every single transition.
        </p>
        <pre><code>${this._animationCode}</code></pre>
      </section>
    `;
  }

  static get properties() {
    return {
      _selectedIndex: { type: Number },
      _selectedName: { type: String },
      _propAnimationClasses: { type: Object },
    };
  }

  static get styles() {
    return [
      sharedStyles,
      FadeIn,
      FadeOut,
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

  constructor() {
    super();
    this._propAnimationClasses = {
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
    };
    this._indexDemoCode = `
<helium-animated-pages
  class="sample-pages"
  selected="\${this._selectedIndex}"
  .animationClasses="\${this._propAnimationClasses}"
>
  <div>Slide index: 0</div>
  <div>Slide index: 1</div>
  <div>Slide index: 2</div>
</helium-animated-pages>`.trim();
    this._nameDemoCode = `
<helium-animated-pages
  class="sample-pages"
  attrForSelected="name"
  selected="\${this._selectedName}"
  .animationClasses="\${this._propAnimationClasses}"
>
  <div name="first">First Slide</div>
  <div name="second">Second Slide</div>
  <div name="third">Third Slide</div>
</helium-animated-pages>`.trim();
    this._animationCode = `
{
  default: {
    in: 'page-fadeIn',
    out: 'page-fadeOut',
  },
}`.trim();
  }

  _indexChanged(e) {
    if (e.target.value) {
      this._selectedIndex = parseInt(e.target.value);
    }
  }
  _nameChanged(e) {
    if (e.target.value) {
      this._selectedName = e.target.value;
    }
  }
}

window.customElements.define('property-demo', PropertyDemo);
