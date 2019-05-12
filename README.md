[![Build Status](https://travis-ci.org/bbody/MultilineJavaScriptConverter.svg?branch=master)](https://travis-ci.org/bbody/MultilineJavaScriptConverterMultilineJavaScriptConverter)
[![Coverage Status](https://coveralls.io/repos/github/bbody/MultilineJavaScriptConverter/badge.svg?branch=master)](https://coveralls.io/github/bbody/MultilineJavaScriptConverter?branch=master)

# Multiline JavaScript Converter
## Description
Multiline JavaScript Converter is a tool to convert strings into JavaScript safe text. It is able to account for new lines, special characters and able to produce multiple string types.

[Multiline JavaScript Converter tool](http://jsstringconverter.bbody.io/)

![Demo of Multiline JavaScript Converter](https://raw.githubusercontent.com/bbody/MultilineJavaScriptConverter/master/screenshots/demo.gif "Demo of Multiline JavaScript Converter")

## NPM Library


## Getting setup
1. Download repository
2. Run `npm install`
3. Run `npm run setup` to install dependencies

### Build all
`npm run build`

### Run site
`npm run serve`

---

### Compile JS
#### Full JS compile
`npm run js`

#### Import all components
`npm run js:build`

#### Convert to ECMA5 code and minify
`npm run js:compile`

### Compile CSS
`npm run  css`

### Compile HTML
`npm run  html`

### Tests
#### Run all tests
`npm run test`

#### Run ESLLint
`npm run linter`

#### Mocha
`npm run mocha`

## Built with
- [Skeleton](http://getskeleton.com/) - for basic CSS framework
- [Babel](https://babeljs.io/) - for converting to ECMA5 code for browser
- [clipboard.js](https://clipboardjs.com/) - for copying text to clipboard
- [Browserify](http://browserify.org/) - for using require feature to enable better modularity of JavaScript
- [PugJS](https://pugjs.org) - for HTML templating
- [Mocha](https://mochajs.org/) - for unit testing
- [Chai](http://www.chaijs.com/) - for assertions in Mocha
- [ESLint](https://eslint.org/) - for linting of JS files

## Bugs and suggestions
If you find any bugs or have any suggestions on how to improve Multiline JavaScript Converter please post in the [Github issues](https://github.com/bbody/MultilineJavaScriptConverter/issues).
