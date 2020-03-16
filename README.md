# `<helium-animated-pages>`

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/helium-animated-pages)[![npm version](https://badge.fury.io/js/helium-animated-pages.svg)](https://badge.fury.io/js/helium-animated-pages)

###### [Docs/Demo](https://helium-animated-pages.glitch.me/demo/) | [Using it in `pwa-starter-kit`](https://github.com/alangdm/helium-animated-pages/wiki/Usage-in-pwa-starter-kit)

This is a light spiritual successor to the now deprecated [`<neon-animated-pages>`](https://www.webcomponents.org/element/PolymerElements/neon-animation/elements/neon-animated-pages).

It works with css animations and only depends on [lit-element](https://github.com/Polymer/lit-element) so you don't have to worry about including any heavy js libraries.

This component takes care of the logic behind triggering the animations so that you can focus on making your views and your animations (or just use the animations included in the `sample-animations` folder if you don't want to bother with those either 😉.)

It can be easily used in [pwa-starter-kit](https://github.com/Polymer/pwa-starter-kit/) and [here's how](https://github.com/alangdm/helium-animated-pages/wiki/Usage-in-pwa-starter-kit).

To begin using it just follow this simple steps:

- Install it:

  `npm i --save helium-animated-pages`

- Import the script:

  In html:

  ```html
  <!-- type="module" is essential -->
  <script
    type="module"
    src="node_modules/helium-animated-pages/helium-animated-pages.js"
  ></script>
  ```

  In a js module:

  ```javascript
  import 'helium-animated-pages/helium-animated-pages.js';
  ```

- Create an instance of `<helium-animated-pages>` in your HTML page, or via any framework that [supports rendering Custom Elements](https://custom-elements-everywhere.com/) and start using it:

  ```html
  <style>
    /* define your animation keyframes and classes
        (you can use the ones provided too)
        these must be defined context that contains
        <helium-animated-pages> */
    /* these only use the standard css animation to keep
       example code short */
    .page-fadeIn {
      animation: fadeIn 0.7s ease both;
    }
    @keyframes fadeIn {
      from {
        opacity: 0.3;
      }
      to {
      }
    }
    .page-fadeOut {
      animation: fadeOut 0.7s ease both;
    }
    @keyframes fadeOut {
      from {
      }
      to {
        opacity: 0;
      }
    }
  </style>
  <section>
    <h2>Select a page</h2>
    <select id="selector">
      <option value="page1">Page 1</option>
      <option value="page2">Page 2</option>
      <option value="page3">Page 3</option>
    </select>
  </section>
  <!-- attrForSelected is used to say which attribute
      identifies the pages
      or you can just not use it and use numerical indexes -->
  <helium-animated-pages id="pages" attrForSelected="name">
    <!-- The pages can be almost anything -->
    <section name="page1">Page 1</section>
    <div name="page2">Page 2</div>
    <!-- It is recommended that custom elements
        used as a page all extend an element like pwa-starter-kit's
        page-view-element
        https://github.com/Polymer/pwa-starter-kit/blob/master/src/components/page-view-element.js
      -->
    <custom-element name="page3"></custom-element>
  </helium-animated-pages>
  <script>
    // example way of changing pages, you could use a router
    // or any other way you want
    document.querySelector('#selector').addEventListener('change', e => {
      // Change selected page, can also receive and index
      document.querySelector('#pages').select(e.target.value);
      // you can also use selectPrevious() or selectNext()
    });

    // defining the "rules" for which css classes to apply on
    // diferent page transitions, for more info go to:
    // https://github.com/alangdm/helium-animated-pages/wiki/API#attrforselected
    // I'm using css classes which aren't defined on this context but you
    // must define them when actually using this
    document.querySelector('#pages').animationClasses = {
      // animation classes rules are like css rules, the most specific ones apply first
      // from page1 to page2
      page1_page2: {
        in: 'page_moveFromRight',
        out: 'page_moveToLeft',
      },
      // from anything (other than page1 to page2)
      '*_page2': {
        in: 'page_moveFromLeft',
        out: 'page_moveToRight',
      },
      // from page1 to anything (other than page2)
      'page1_*': {
        in: 'page_moveFromTop',
        out: 'page_moveToBottom',
      },
      // from nothing selected to page1
      _page1: {
        in: 'page_moveFromBottom',
        out: 'page_moveToTop',
      },
      // if none of the rules above apply
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
    };
  </script>
  ```

## Credits

- Almost all sample animations and the overall flow of the page selection are based on an article by [Pedro Botelho@Codrops](https://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/).
- The docs are powered by [@web-padawan's](https://github.com/web-padawan) [api-viewer-element](https://www.npmjs.com/package/api-viewer-element) and [@runem's](https://github.com/runem) [web-component-analyzer]https://www.npmjs.com/package/web-component-analyzer)
