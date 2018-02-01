# External Address Highlighter

This is a web-extension.  
It should work in Firefox and Chrome.


## Prerequisites

- node v8.9.1
- npm v5.5.1
- inkscape

Install dev-dependencies:

`$ npm install`


## Developing

Development is biased towards Firefox, at the moment.  
Haven't checked, whether there is some kind of tooling available for Chrome.


`$ npm start`

Starts a fresh Firefox instance with the extension already loaded.  
Loads `http://localhost:8000/testbed.html`.


`$ npm run serve`

Serve the current directory (using python, see `package.json`).  
Used to serve the testbed.

Additionally, you'll have to temporarily add `<all_urls>` to `content_scripts.matches` in `manifest.json`.


`$ npm run lint`

Lint, mozilla-style


## Releasing

`$ npm run build`

Packages the extension into an archive.


`$ npm run sign -- --api-key=user:00000000:000 --api-secret=asdasdasdasdasdasdasdasdasdasdasd`

Signs the packaged extension via mozilla's Signing-API.  
To get `api-key` and `api-secret`, you need to create an account on `https://addons.mozilla.org/en-US/developers/`.


## Resources

see https://developer.mozilla.org/en-US/Add-ons/WebExtensions
