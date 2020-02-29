import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import '../../helium-animated-pages.js';
import {
  RotatePullLeft,
  RotatePullRight,
  RotatePushLeft,
  RotatePushRight,
} from '../../sample-animations/push-pull-animations.js';

class NoattrDemo extends PageViewElement {
  render() {
    return html`
      <section>
        <h3>
          This page has just 2 slides and it doesn't use an attribute for the
          selection
        </h3>
        <select @change="${e => this._selectPage(e)}">
          <option value="">Select slide...</option>
          <option value="0">Slide 1</option>
          <option value="1">Slide 2</option>
        </select>
      </section>
      <section class="container">
        <helium-animated-pages
          id="noattr"
          .animationClasses="${this._noattrAnimationClasses}"
        >
          <section class="slide1">Slide 1</section>
          <section class="slide2">Slide 2</section>
        </helium-animated-pages>
      </section>
    `;
  }

  static get properties() {
    return {
      _noattrAnimationClasses: { type: Object },
    };
  }

  static get styles() {
    return [
      RotatePullLeft,
      RotatePullRight,
      RotatePushLeft,
      RotatePushRight,
      css`
        :host {
          background: lightpink;
        }
        section.container {
          width: 70vw;
          height: 50vh;
          position: relative;
        }
        section.slide1 {
          background-color: black;
          color: white;
        }
        section.slide2 {
          background-color: white;
        }
      `,
    ];
  }

  constructor() {
    super();
    this._noattrAnimationClasses = {
      '*_1': {
        in: 'page-rotatePullRight',
        out: 'page-rotatePushLeft',
      },
      '*_0': {
        in: 'page-rotatePullLeft',
        out: 'page-rotatePushRight',
      },
    };
  }
  _selectPage(e) {
    if (e.target.value) {
      const index = parseInt(e.target.value);
      this.shadowRoot.querySelector('#noattr').select(index);
    }
  }
}

window.customElements.define('noattr-demo', NoattrDemo);
