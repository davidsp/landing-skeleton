# landing-skeleton

This is HTML5 application, built with [Brunch](http://brunch.io).

It is meant to work as an starting point when putting together small-medium sized projects.

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * Brunch plugins and Bower dependencies: `npm install & bower install`.
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `site/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `site/`.
    * [Brunch site](http://brunch.io)

* Support and installed dependencies.
    * Less.css
        * Collection of less mixins compiled from these sources:
            - http://css-tricks.com/snippets/css/useful-css3-less-mixins/
            - https://github.com/mrkrupski/LESS-Dynamic-Stylesheet
            - https://gist.github.com/davidsp/9469147
        * Twitter bootstrap (http://getbootstrap.com/)
    * Live.reload

* Todos.
    * Clean and group mixins (simple grids and the like).
    * Add mixins for absolute/centering/flexboxing stuff. 
    * Create proper index file