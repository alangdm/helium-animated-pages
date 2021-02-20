import { html, css } from 'lit';
import { PageViewElement } from './page-view-element.js';
import { sharedStyles } from './shared-styles.js';
import '../../helium-animated-pages.js';
import { FadeIn, FadeOut } from '../../sample-animations/index.js';

class PropertyDemo extends PageViewElement {
  render() {
    return html`
      <section>
        <h2>Selected Property Demo</h2>
        <p>
          These demos use the <code>selected</code> property to change which
          slide is shown.
        </p>
        <p>
          This is the recommended way of using this component. Just update
          <code>selected</code> either as an attribute or as a property and
          you're done!
        </p>
        <h3>Without Using attrForSelected</h3>
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
            @change=${this._indexChanged}
          />
        </p>
      </section>
      <section class="container">
        <helium-animated-pages
          class="sample-pages"
          selected="${this._selectedIndex}"
          .animationClasses="${this._propAnimationClasses}"
          @helium-start="${this._toggleDisabledIndex}"
          @helium-end="${this._toggleDisabledIndex}"
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
          each page.
        </p>
        <p>
          By doing this the value of <code>selected</code> may now be a string.
          And the children whose attribute value corresponds to the value of
          <code>selected</code> will become active.
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
          the simplest version. It only sets the default animation for every
          single transition.
        </p>
        <pre><code>${JSON.stringify(
          this._propAnimationClasses,
          null,
          2
        )}</code></pre>
      </section>
      <section>
        <h3>Changing slides with methods</h3>
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
  selected="\${this._selectedIndex}"
  .animationClasses="\${this._propAnimationClasses}"
  @helium-start="\${this._toggleDisabledIndex}"
  @helium-end="\${this._toggleDisabledIndex}"
>
  <div>Slide index: 0</div>
  <div>Slide index: 1</div>
  <div>Slide index: 2</div>
</helium-animated-pages>`.trim();
    this._nameDemoCode = `
<helium-animated-pages
  attrForSelected="name"
  selected="\${this._selectedName}"
  .animationClasses="\${this._propAnimationClasses}"
>
  <div name="first">First Slide</div>
  <div name="second">Second Slide</div>
  <div name="third">Third Slide</div>
</helium-animated-pages>`.trim();
  }

  _indexChanged(e) {
    if (e.target.value) {
      this._selectedIndex = parseInt(e.target.value);
    }
  }
  _toggleDisabledIndex() {
    const input = this.shadowRoot.querySelector('#select-index');
    input.disabled = !input.disabled;
  }
  _nameChanged(e) {
    if (e.target.value) {
      this._selectedName = e.target.value;
    }
  }
}

window.customElements.define('property-demo', PropertyDemo);
