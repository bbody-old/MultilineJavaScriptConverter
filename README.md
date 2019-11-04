[![Coverage Status](https://coveralls.io/repos/github/bbody/MultilineJavaScriptConverter/badge.svg?branch=master)](https://coveralls.io/github/bbody/MultilineJavaScriptConverter?branch=master)

# Multiline JavaScript Converter
## Description
Multiline JavaScript Converter is a tool to convert strings into JavaScript safe text. It is able to account for new lines, special characters and able to produce multiple string types.

[Multiline JavaScript Converter tool](http://jsstringconverter.bbody.io/)

![Demo of Multiline JavaScript Converter](https://raw.githubusercontent.com/bbody/MultilineJavaScriptConverter/master/screenshots/demo.gif "Demo of Multiline JavaScript Converter")

## Standalone Library

Multiline JavaScript Converter can also be used as an [NPM library](https://www.npmjs.com/package/multilinejavascriptconverter).

### NPM
`npm install --save-dev multilinejavascriptconverter`

### Yarn
`yarn install --save multilinejavascriptconverter`

### Import

Inside your Node project:

```js
    var msc = require('multilinejavascriptconverter');
    var input = [
        'line1',
        'line2',
        'line3',
        'line4',
        'line5',
    ];
    var output = msc.convertText('output', input, msc.ECMA5_DOUBLE, false, true, false, msc.TABS);
    console.log(output);

    /* Expected output:
        var output = "line1" +
          "line2" +
          "line3" +
          "line4" +
          "line5"
    */
```

### Documentation

**Note:** All fields are required.

| Field # | Field Name | Valid Values |
|:-------:| ---------- | ------------ |
| 1 | Variable name | Any string |
| 2 | Input variables | String separated by '\n' (Newline) or Array |
| 3 | String type | *ECMA_DOUBLE*/*ECMA_SINGLE*/*ECMA6*/*JSON_DOUBLE* |
| 4 | Add new lines | *true*/*false* |
| 5 | Trim whitespace | *true*/*false* |
| 6 | Semicolon (N/A for JSON_DOUBLE) | *true*/*false* |
| 7 | Spaces | *TAB*/*SPACES_2*/*SPACES_4*/*SPACES_8* |

Below constants can be imported from the library:
- **String types:** *ECMA_DOUBLE*/*ECMA_SINGLE*/*ECMA6*/*JSON_DOUBLE*
- **Space types:** *TAB*/*SPACES_2*/*SPACES_4*/*SPACES_8*

## Getting setup
1. Download repository
2. Run `npm install`
3. Run `npm run setup` to install dependencies

### Build all
`npm run build`

### Run site
`npm run serve`

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

#### Run E2E tests

Run the below the first time:

`npm run selenium-setup`

The below must be running every time tests are run:

`npm run serve`
`node_modules/.bin/chromedriver`

To run the tests run the below:

`npm run nightwatch`

## Built with
- [Skeleton](http://getskeleton.com/) - for basic CSS framework
- [Babel](https://babeljs.io/) - for converting to ECMA5 code for browser
- [clipboard.js](https://clipboardjs.com/) - for copying text to clipboard
- [Browserify](http://browserify.org/) - for using require feature to enable better modularity of JavaScript
- [PugJS](https://pugjs.org) - for HTML templating
- [Mocha](https://mochajs.org/) - for unit testing
- [Chai](http://www.chaijs.com/) - for assertions in Mocha
- [Nightwatch](https://nightwatchjs.org) - for E2E testing
- [ESLint](https://eslint.org/) - for linting of JS files
- [Github Actions](https://github.com/actions) - for CI and deployment

## Bugs and suggestions
If you find any bugs or have any suggestions on how to improve Multiline JavaScript Converter please post in the [Github issues](https://github.com/bbody/MultilineJavaScriptConverter/issues).
