import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import '../helium-animated-pages.js';
import { FadeIn, FadeOut } from '../sample-animations/fade-animations.js';
import { RotateUnfoldLeft, RotateUnfoldRight } from '../sample-animations/fold-unfold-animations.js';
import { MoveToLeft, MoveToRight } from '../sample-animations/move-animations.js';

class PrevnextDemo extends PageViewElement {
  _render(props) {
    return html`
    ${FadeIn}
    ${FadeOut}
    ${RotateUnfoldLeft}
    ${RotateUnfoldRight}
    ${MoveToLeft}
    ${MoveToRight}
    <style>
      :host {
        background: lightyellow;
      }
      :host(:not([active])) {
        --helium-children-visible: hidden;
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
        background-color: white;
      }
    </style>
    <section>
      <h3>This page has 2 slideshows which only use selectNext() and selectPrevious() to iterate</h3>
    </section>
    <section>
      <h4>First slideshow, no attrForSelected</h4>
      <input type="button" value="previous" onclick="${(e) => this._selectNoattr(e)}">
      <input type="button" value="next" onclick="${(e) => this._selectNoattr(e)}">
    </section>
    <section class="container">
      <helium-animated-pages id="noattr"
        animationClasses="${props._noattrAnimationClasses}">
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </helium-animated-pages>
    </section>
    <section>
      <h4>Second slideshow, with attrForSelected (the way of defining the animationClasses changes)</h4>
      <input type="button" value="previous" onclick="${(e) => this._selectAttr(e)}">
      <input type="button" value="next" onclick="${(e) => this._selectAttr(e)}">
    </section>
    <section class="container">
      <helium-animated-pages id="attr" attrForSelected="name"
        animationClasses="${props._attrAnimationClasses}">
        <div name="slide1">Slide 1</div>
        <div name="slide2">Slide 2</div>
        <div name="slide3">Slide 3</div>
      </helium-animated-pages>
    </section>
    `;
  }
  static get properties() {
    return {
      _attrAnimationClasses: Object,
      _noattrAnimationClasses: Object,
    };
  }
  _selectNoattr(e) {
    const pages = this.shadowRoot.querySelector('#noattr');
    if(e.target.value === 'next') {
      pages.selectNext();
    }
    pages.selectPrevious();
  }
  _selectAttr(e) {
    const pages = this.shadowRoot.querySelector('#attr');
    if(e.target.value === 'next') {
      pages.selectNext();
    }
    pages.selectPrevious();
  }
  constructor() {
    super();
    this._noattrAnimationClasses = {
      '0_1': {
        in: 'page-rotateUnfoldRight',
        out: 'page-moveToLeft'
      },
      '2_1': {
        in: 'page-rotateUnfoldLeft',
        out: 'page-moveToRight'
      },
      '*_0': {
        in: 'page-rotateUnfoldLeft',
        out: 'page-moveToRight'
      },
      '*_2': {
        in: 'page-rotateUnfoldRight',
        out: 'page-moveToLeft'
      },
      '_0': {
        in: 'page-fadeIn',
        out: 'page-fadeOut'
      },
      '_2': {
        in: 'page-fadeIn',
        out: 'page-fadeOut'
      },
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut'
      }
    };
    this._attrAnimationClasses = {
      'slide1_slide2': {
        in: 'page-rotateUnfoldRight',
        out: 'page-moveToLeft'
      },
      'slide3_slide2': {
        in: 'page-rotateUnfoldLeft',
        out: 'page-moveToRight'
      },
      '*_slide1': {
        in: 'page-rotateUnfoldLeft',
        out: 'page-moveToRight'
      },
      '*_slide3': {
        in: 'page-rotateUnfoldRight',
        out: 'page-moveToLeft'
      },
      '_slide1': {
        in: 'page-fadeIn',
        out: 'page-fadeOut'
      },
      '_slide3': {
        in: 'page-fadeIn',
        out: 'page-fadeOut'
      },
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut'
      }
    };
  }
}

window.customElements.define('prevnext-demo', PrevnextDemo);
