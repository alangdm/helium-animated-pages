# `<helium-animated-pages>`

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/helium-animated-pages)[![npm version](https://badge.fury.io/js/helium-animated-pages.svg)](https://badge.fury.io/js/helium-animated-pages)

###### [Docs/Demo](https://helium-animated-pages.glitch.me/demo/)

This is a light spiritual successor to the now deprecated [`<neon-animated-pages>`](https://www.webcomponents.org/element/PolymerElements/neon-animation/elements/neon-animated-pages).

It works with CSS animations and only depends on [lit](https://www.npmjs.com/package/lit). So, you don't have to worry about including any heavy JS libraries.

This component takes care of the logic behind triggering the animations so that you can focus on making your views and your animations. Alternatively, you can use the animations included in the `sample-animations` folder. 😉

To begin using it follow these simple steps:

- Install it:

  `npm i --save helium-animated-pages`

- Import the script:

  In html:

  ```html
  <!-- type="module" is essential -->
  <script type="module" src="node_modules/helium-animated-pages"></script>
  ```

  In a js module:

  ```javascript
  import 'helium-animated-pages';
  ```

- Create an instance of `<helium-animated-pages>` in your HTML page. You can also use any framework that [supports rendering Custom Elements](https://custom-elements-everywhere.com/).

  ```html
  <style>
    /*
      Define your animation keyframes and classes
        in the same context that contains
        <helium-animated-pages>.
      You can also use the provided sample animations.
    */
    /*
      The sample code here only uses a simple
        fade animation to keep the code short.
    */
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
  <!--
    Use attrForSelected to define which attribute will
      act as the identifier for the pages.
    You can also opt to not use it and use numerical indexes instead.
  -->
  <helium-animated-pages id="pages" attrForSelected="name">
    <!-- The pages can be almost anything -->
    <section name="page1">Page 1</section>
    <div name="page2">Page 2</div>
    <custom-element name="page3"></custom-element>
  </helium-animated-pages>
  <script>
    /*
      Here's a sample way of switching pages.
      You can use a router to do this switching.
    */
    document.querySelector('#selector').addEventListener('change', e => {
      // Switch pages; you can use the numerical index too.
      document.querySelector('#pages').selected = e.target.value;
    });
    /*
      Here we define the "rules" about which CSS classes
        should be applied on the different page transitions.
      For more info go to:
        https://helium-animated-pages.glitch.me/demo/
      I'm using CSS classes that aren't actually defined in
        this context for illustrative purposes.
      You must define every class that you want to use.
    */
    document.querySelector('#pages').animationClasses = {
      /*
        The animation classes rules are like CSS rules:
          the most specific ones apply first.
      */
      // from page1 to page2
      page1_page2: {
        in: 'page_moveFromRight',
        out: 'page_moveToLeft',
      },
      // from anything other than page1 to page2
      '*_page2': {
        in: 'page_moveFromLeft',
        out: 'page_moveToRight',
      },
      // from page1 to anything other than page2
      'page1_*': {
        in: 'page_moveFromTop',
        out: 'page_moveToBottom',
      },
      // from nothing selected to page1
      _page1: {
        in: 'page_moveFromBottom',
        out: 'page_moveToTop',
      },
      // fallback in case none of the rules above apply
      default: {
        in: 'page-fadeIn',
        out: 'page-fadeOut',
      },
    };
  </script>
  ```

## Credits

- Almost all sample animations and the general flow of the page selection are based on an article by [Pedro Botelho@Codrops](https://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/).
- The docs are powered by [@web-padawan's](https://github.com/web-padawan) [api-viewer-element](https://www.npmjs.com/package/api-viewer-element) and [@runem's](https://github.com/runem) [web-component-analyzer](https://www.npmjs.com/package/web-component-analyzer)
