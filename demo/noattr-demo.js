import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import '../helium-animated-pages.js';
import { RotateUnfoldLeft, RotateUnfoldRight } from '../in-animations.js';
import { MoveToLeft, MoveToRight } from '../out-animations.js';

class NoattrDemo extends PageViewElement {
  _render({_noattrAnimationClasses}) {
    return html`
    ${RotateUnfoldLeft}
    ${RotateUnfoldRight}
    ${MoveToLeft}
    ${MoveToRight}
    <style>
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
    </style>
    <section>
      <h3>This page has just 2 slides and it doesn't use an attribute for the selection</h3>
      <select onchange="${(e) => this._selectPage(e)}">
        <option value="">Select slide...</option>
        <option value="0">Slide 1</option>
        <option value="1">Slide 2</option>
      </select>
    </section>
    <section class="container">
      <helium-animated-pages id="noattr"
        animationClasses="${_noattrAnimationClasses}">
        <section class="slide1">Slide 1</section>
        <section class="slide2">Slide 2</section>
      </helium-animated-pages>
    </section>
    `;
  }
  static get properties() {
    return {
      _noattrAnimationClasses: Object,
    };
  }
  constructor() {
    super();
    this._noattrAnimationClasses = {
      '1_': {
        in: 'page-rotateUnfoldRight',
        out: 'page-moveToLeft'
      },
      '0_': {
        in: 'page-rotateUnfoldLeft',
        out: 'page-moveToRight'
      }
    };
  }
  _selectPage(e) {
    if(e.target.value){
      const index = parseInt(e.target.value);
      this.shadowRoot.querySelector('#noattr').select(index);
    }
  }
}

window.customElements.define('noattr-demo', NoattrDemo);
