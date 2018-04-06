const pug = require('pug');
const fs = require('fs');
const variables = require('./index.json');
const package = require('./package.json');

variables.package = package;

const compiledFunction = pug.compileFile('index.pug');

// console.log(compiledFunction(variables));

var html = pug.renderFile('index.pug', variables);

fs.writeFile("dist/index.html", html, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});