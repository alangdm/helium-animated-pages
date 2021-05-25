import { LitElement, html, css } from 'lit';
import './settings-demo.js';
import './property-demo.js';
import { sharedStyles } from './shared-styles.js';
import '../../helium-animated-pages.js';
import { FadeIn, FadeOut } from '../../sample-animations/index.js';

class DemoElement extends LitElement {
  render() {
    return html`
      <header>
        <div class="tag-name">&lt;helium-animated-pages&gt;</div>
        <a href="./index.html">Docs</a>
        <a class="demo" href="https://github.com/alangdm/helium-animated-pages"
          >Github</a
        >
      </header>
      <section class="sub-header">
        <label for="page-select">Select a Demo</label>
        <select id="page-select" @blur="${this._selectMainPage}">
          <option value="">Select Demo...</option>
          <option value="property">Using the 'selected' property</option>
          <option value="settings">Customizing the animations</option>
        </select>
      </section>
      <helium-animated-pages
        id="main"
        attrForSelected="name"
        .animationClasses="${this._mainAnimationClasses}"
      >
        <settings-demo name="settings"></settings-demo>
        <property-demo name="property"></property-demo>
      </helium-animated-pages>
    `;
  }

  static get properties() {
    return {
      _mainAnimationClasses: { state: true },
    };
  }

  static get styles() {
    return [
      sharedStyles,
      FadeIn,
      FadeOut,
      css`
        :host {
          --primary-color: #01579b;
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
      `,
    ];
  }

  constructor() {
    super();
    this._mainAnimationClasses = {
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
    };
  }

  _selectMainPage(e) {
    if (e.target.value) {
      this.shadowRoot.querySelector('#main').selected = e.target.value;
    }
  }
}
window.customElements.define('demo-element', DemoElement);
