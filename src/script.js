const stringConverter = require('./converter');

window.onChangeStringType = (event) => {
  const selectedElement = event.value;
  const noSemiColon = document.getElementById('no-semi-colon-field');

  if (selectedElement === 'json') {
    noSemiColon.style = 'display: none';
  } else {
    noSemiColon.style = 'display: block';
  }
};

window.convert = () => {
  // Get input content
  const text = document.getElementById('text').value;

  // Get the variable name, set default as "text"
  const variableName = document.getElementById('variable-name').value || '';

  // Get the type of string wanted to be output
  const stringType = document.getElementById('string-type').value ||
    stringConverter.ECMA5_DOUBLE;

  // Get whether newlines are added
  const addNewlines = document.getElementById('add-newline').checked;

  // Get whether white spacing needs to be trimmed
  const trim = document.getElementById('trim-padding').checked;

  // Get whether a semi-colon should be used or not
  const semiColon = !document.getElementById('no-semi-colon').checked;

  // Get whether a spaces or tabs should be used
  const spaces = document.getElementById('space-type').value ||
  stringConverter.TAB;

  // Convert text
  const converted = stringConverter.convertText(variableName, text, stringType,
    addNewlines, trim, semiColon, spaces);

  // Write converted text to output box
  document.getElementById('js-code').value = converted;
};

window.clearAllFields = () => {
  // Clear all fields
  stringConverter.clearField(document.getElementById('text'));
  stringConverter.clearField(document.getElementById('js-code'));
  stringConverter.clearField(document.getElementById('variable-name'),
    stringConverter.DEFAULT_VARIABLE_NAME);
  stringConverter.clearField(document.getElementById('string-type'),
    stringConverter.DEFAULT_STRING_TYPE);
  stringConverter.clearField(document.getElementById('space-type'),
    stringConverter.DEFAULT_SPACE_TYPE);
  document.getElementById('trim-padding').checked = false;
  document.getElementById('add-newline').checked = false;
  document.getElementById('no-semi-colon').checked = false;
};
