# Multiline JavaScript Converter
## Description
Multiline JavaScript Converter is a tool to convert strings into JavaScript safe text. It is able to account for new lines, special characters and able to produce multiple string types.

[Multiline JavaScript Converter tool](http://jsstringconverter.bbody.io/)

## Getting setup
1. Download repository
2. Run `npm install`
3. Install [mocha](https://www.npmjs.com/package/mocha), [browserify](https://www.npmjs.com/package/browserify), [http-server](https://www.npmjs.com/package/http-server) and [babel](https://www.npmjs.com/package/Babel) or run `npm run setup`

### Run site
`npm serve`

### Compile JS
#### Import all components
`npm run js:build`

#### Convert to ECMA5 code and minify
`npm run js:compile`

#### Full compile
`npm run js`

### Compile CSS
`npm run  css`

### Compile HTML
`npm run  html`

### Build all
`npm run  build`

### Test
`npm run test`

## Built with
- [Skeleton](http://getskeleton.com/) - for basic CSS framework
- [Babel](https://babeljs.io/) - for converting to ECMA5 code for browser
- [clipboard.js](https://clipboardjs.com/) - for copying text to clipboard
- [Browserify](http://browserify.org/) - for using require feature to enable better modularity of JavaScript
- [PugJS](https://pugjs.org) - for HTML templating
- [Mocha](https://mochajs.org/) - for unit testing

## Bugs and suggestions
If you find any bugs or have any suggestions on how to improve Multiline JavaScript Converter please post in the [Github issues](https://github.com/bbody/MultilineJavaScriptConverter/issues).
