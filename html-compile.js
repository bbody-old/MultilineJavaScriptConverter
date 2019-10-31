const pug = require('pug');
const fs = require('fs');
const variables = require('./index.json');
const pkg = require('./package.json');
const args = process.argv.slice(2);

variables.package = pkg;
variables.production = args[0] === 'production';

const html = pug.renderFile('index.pug', variables);

fs.writeFile('dist/index.html', html, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
