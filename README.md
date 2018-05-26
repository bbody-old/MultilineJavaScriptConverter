[![Build Status](https://travis-ci.org/bbody/MultilineJavaScriptConverter.svg?branch=master)](https://travis-ci.org/bbody/MultilineJavaScriptConverterMultilineJavaScriptConverter)
[![Coverage Status](https://coveralls.io/repos/github/bbody/MultilineJavaScriptConverter/badge.svg)](https://coveralls.io/github/bbody/MultilineJavaScriptConverter)

# Multiline JavaScript Converter
## Description
Multiline JavaScript Converter is a tool to convert strings into JavaScript safe text. It is able to account for new lines, special characters and able to produce multiple string types.

[Multiline JavaScript Converter tool](http://jsstringconverter.bbody.io/)

## Getting setup
1. Download repository
2. Run `npm install`
3. Run `npm run setup` to install dependencies

### Run site
`npm run serve`

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

### Tests
`npm run test`

#### Mocha
`npm run mocha`

#### JS Hint
`npm run jshint`

## Built with
- [Skeleton](http://getskeleton.com/) - for basic CSS framework
- [Babel](https://babeljs.io/) - for converting to ECMA5 code for browser
- [clipboard.js](https://clipboardjs.com/) - for copying text to clipboard
- [Browserify](http://browserify.org/) - for using require feature to enable better modularity of JavaScript
- [PugJS](https://pugjs.org) - for HTML templating
- [Mocha](https://mochajs.org/) - for unit testing

## Bugs and suggestions
If you find any bugs or have any suggestions on how to improve Multiline JavaScript Converter please post in the [Github issues](https://github.com/bbody/MultilineJavaScriptConverter/issues).
