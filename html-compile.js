const pug = require('pug');
const fs = require('fs');
const variables = require('./index.json');
const pkg = require('./package.json');

variables.package = pkg;

const compiledFunction = pug.compileFile('index.pug');

console.log(compiledFunction(variables));

const html = pug.renderFile('index.pug', variables);

fs.writeFile('dist/index.html', html, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
