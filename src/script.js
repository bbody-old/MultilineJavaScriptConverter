// jshint esversion: 6
const stringConverter = require('./converter');

window.convert = () => {
  // Get input content
  const text = document.getElementById("text").value;

  // Get the variable name, set default as "text"
  const variableName = document.getElementById("variable-name").value || "";

  // Get the type of string wanted to be output
  const stringType = document.getElementById("string-type").value || stringConverter.ECMA5_DOUBLE;

  // Get whether newlines are needed
  const newlines = !document.getElementById("no-newline").checked;

  // Get whether white spacing needs to be trimmed
  const trim = document.getElementById("trim-padding").checked;

  // Get whether a semi-colon should be used or not
  const semiColon = !document.getElementById("no-semi-colon").checked;

  // Convert text
  const converted = stringConverter.convertText(variableName, text, stringType, newlines, trim, semiColon);

  // Write converted text to output box
  document.getElementById("js-code").value = converted;
};

window.clearAllFields = () => {
  // Clear all fields
  stringConverter.clearField(document.getElementById("text"));
  stringConverter.clearField(document.getElementById("js-code"));
  stringConverter.clearField(document.getElementById("variable-name"), stringConverter.DEFAULT_VARIABLE_NAME);
  stringConverter.clearField(document.getElementById("string-type"), stringConverter.DEFAULT_STRING_TYPE);
  document.getElementById('trim-padding').checked = false;
  document.getElementById('no-newline').checked = false;
  document.getElementById('no-semi-colon').checked = false;
};
