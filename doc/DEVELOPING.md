# Developing

## Prerequisites

- node v8.9.1
- npm v5.5.1
- python (for testing)
- inkscape (for icon-generation)

Install dev-dependencies:

`$ npm install`


## Developing

Development is biased towards Firefox, at the moment.  
Haven't checked, whether there is some kind of tooling available for Chrome.


`$ npm start`

Starts a fresh Firefox instance with the extension already loaded.  
Loads `http://localhost:8000/testbed.html` (see `serve`).


`$ npm run serve`

Serve the current directory (using python, see `package.json`).  
Used to serve the testbed.

Additionally, you'll have to temporarily add `<all_urls>` to `content_scripts.matches[]` in `manifest.json`.


`$ npm run lint`

Lint, mozilla-style


## Icons

The original icon is `src/images/icon.svg`. The PNG-versions are generated from the SVG.

`$ ./pngify-icons.sh`

Generate png-icons from the svg-file (using inkscape).


## Resources

see https://developer.mozilla.org/en-US/Add-ons/WebExtensions
