import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import '../helium-animated-pages.js';
import { FadeIn, FadeOut } from '../sample-animations/fade-animations.js';

class PropertyDemo extends PageViewElement {
  render() {
    return html `
    ${FadeIn}
    ${FadeOut}
    <style>
      :host {
        background: skyblue;
      }
      section.container {
        width: 50vw;
        height: 20vh;
        position: relative;
      }
      div:nth-of-type(odd) {
        background-color: black;
        color: white;
      }
      div:nth-of-type(even) {
        background-color: brown;
        color: white;
      }
    </style>
    <section>
      <h3>This demo doesn't use select(next) but updates the selected property to achieve the same effect</h3>
      <div>Warning: If you decide changing selection like this do not use the select(), selectPrevious() or selectNext() methods to prevent weird state behavior</div>
      <select @change="${(e) => this._selectPage(e)}">
        <option value="">Select slide...</option>
        <option value="0">Slide 1</option>
        <option value="1">Slide 2</option>
      </select>
    </section>
    <section class="container">
      <helium-animated-pages id="prop" selected="${this._selected}"
        .animationClasses="${this._propAnimationClasses}">
        <div>Slide 1</div>
        <div>Slide 2</div>
      </helium-animated-pages>
    </section>
    `;
  }

  static get properties() {
    return {
      _selected: { type: Number },
      _propAnimationClasses: { type: Object },
    };
  }

  constructor(){
    super();
    this._propAnimationClasses =  {
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut'
      }
    };
  }

  _selectPage(e) {
    if (e.target.value) {
      this._selected = parseInt(e.target.value);
    }
  }
}

window.customElements.define('property-demo', PropertyDemo)
