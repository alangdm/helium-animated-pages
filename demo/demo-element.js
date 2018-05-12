import { LitElement, html } from '@polymer/lit-element';
import '../helium-animated-pages.js';
import { FadeIn } from '../in-animations.js';
import { FadeOut } from '../out-animations.js';

class DemoElement extends LitElement {

  _render({_mainAnimationClasses}) {
    return html `
      ${FadeIn}
      ${FadeOut}
      <style>
        :host {
          font-family: sans-serif;
        }
        section[name="page1"] {
          background-color: #bbbbbb;
        }
        section[name="page2"] {
          background-color: lightblue;
        }
        section[name="page3"] {
          background-color: lightgreen;
        }
      </style>
      <section>
        <h2>Select a page</h2>
        <select onchange="${(e) => this._selectMainPage(e)}">
          <option value="page1">Page 1</option>
          <option value="page2">Page 2</option>
          <option value="page3">Page 3</option>
        </select>
      </section>
      <helium-animated-pages id="main" attrForSelected="name"
        animationClasses="${_mainAnimationClasses}">
        <section name="page1">Page 1</section>
        <section name="page2">Page 2</section>
        <section name="page3">Page 3</section>
      </helium-animated-pages>
    `;
  }

  static get properties() {
    return {
      _mainAnimationClasses: Object
    };
  }

  constructor() {
    super();
    this._mainAnimationClasses = {
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut'
      }
    };
  }

  _firstRendered() {
    this._selectMainPage({
      target: {
        value: 'page1'
      }
    });
  }

  _selectMainPage(e) {
    if(e.target.value){
      this.shadowRoot.querySelector('#main').select(e.target.value);
    }
  }

}
window.customElements.define('demo-element', DemoElement);
