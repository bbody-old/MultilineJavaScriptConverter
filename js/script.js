// Constant variables
const LINE_START = "\t+ ";
const NEW_LINE = "\n";
const STRING_NEW_LINE = "\\n";
const FINAL_SEMI_COLON = ";";
const ESCAPE_CHARACTER = "\\";

// Special characters
const DOUBLE_QUOTE = "\"";
const SINGLE_QUOTE = "\'";
const BACKTICK = "`";

// Escaped special characters
const ESCAPED_DOUBLE_QUOTE = "\\\"";
const ESCAPED_SINGLE_QUOTE = "\\\'";
const ESCAPED_BACKTICK = "\\`";

// Types
const ECMA6 = "ecma6";
const ECMA5_SINGLE = "ecma5single";
const ECMA5_DOUBLE = "ecma5double";

// Defaults
const DEFAULT_STRING_TYPE = ECMA5_DOUBLE;
const DEFAULT_VARIABLE_NAME = "text";

// Escape any backslashes
function escapeBackslash(value){
  return value.replace(/\\/g, "\\\\");
}

// Escape any special characters that will effect Javascript
function escapeSpecialCharacters(line, stringType){
  var value = escapeBackslash(line);

  if (stringType !== ECMA6){
    // Escape double quotes
    value = value.replace(/"/g, ESCAPED_DOUBLE_QUOTE);

    // Escape single quotes
    value = value.replace(/'/g, ESCAPED_SINGLE_QUOTE);
  } else {
    // Escape backtick quotes
    value = value.replace(/`/g, ESCAPED_BACKTICK);
  }

  return value;
}

// Return the type of quote based on string type and if it is the end/start
function quote(stringType, wrapper){
  // Check if wrapper not null
  wrapper = wrapper ? wrapper : "";

  if (stringType === ECMA5_DOUBLE){
    return DOUBLE_QUOTE;
  } else if (stringType === ECMA5_SINGLE){
    return SINGLE_QUOTE;
  } else if (stringType === ECMA6 && wrapper){
    return BACKTICK;
  } else {
    return "";
  }
}

// Initialize the variable line
function initVariable(variableName, stringType){
  // Variable name
  var buffer = "var ";
  buffer += variableName;
  buffer += " = ";

  return buffer;
}

function initStart(stringType){
  // First line for string
  var buffer = quote(stringType, true);
  buffer += quote(stringType);
  buffer += "\n";

  return buffer;
}

// Convert text to JavaScript Variable
function convertText(variableName, contents, stringType, newlines, trim, semiColon){
  // Output buffer
  var converted = "";

  // Split input into an array based on their line
  var lineContents = contents.split(NEW_LINE);

  if (variableName.length > 0){
      // Intialize variable
      converted += initVariable(variableName, stringType);
  } else {
    converted += "\t";
  }

  converted += initStart(stringType);
  for (var i = 0; i < lineContents.length; i++){
    var value = lineContents[i];
    if (trim){
      value = value.trim();
    }

    if (!(trim && value.length === 0)){

      if (stringType !== ECMA6){
        // Start the line
        converted += LINE_START;

        converted += quote(stringType);
      }

      // Remove escaped characters
      converted += escapeSpecialCharacters(value, stringType);

      if (stringType !== ECMA6 && newlines){
        // Put in new line
        converted += STRING_NEW_LINE;
      }

    }

    // If it is the last line, put in semi colon otherwise a newline
    if (lineContents.length - 1 !== i){
      converted += quote(stringType);
      converted += NEW_LINE;
    } else {
      //if (!trim){
        converted += quote(stringType, true);
      //}

      if (trim && value.length === 0){
        converted = converted.substring(0, converted.length - 2);
      }
      if (semiColon){
        converted += FINAL_SEMI_COLON;
      }
    }

  }

  return converted;
}

function convert(){
  // Get input content
  var text = document.getElementById("text").value;

  // Get the variable name, set default as "text"
  var variableName = document.getElementById("variable-name").value;
  variableName = variableName ? variableName : "";

  // Get the type of string wanted to be output
  var stringType = document.getElementById("string-type").value;
  stringType = stringType ? stringType : ECMA5_DOUBLE;

  // Get whether newlines are needed
  var newlines = !document.getElementById("no-newline").checked;

  // Get whether white spacing needs to be trimmed
  var trim = document.getElementById("trim-padding").checked;

  // Get whether a semi-colon should be used or not
  var semiColon = !document.getElementById("no-semi-colon").checked;

  // Convert text
  var converted = convertText(variableName, text, stringType, newlines, trim, semiColon);

  // Write converted text to output box
  document.getElementById("js-code").value = converted;
}

// Clear the field with empty string unless a default selection is provided
function clearField(field, defaultSelection){
  var newValue = defaultSelection ? defaultSelection : "";
  field.value = newValue;
}

function clearAllFields(){
  // Clear all fields
  clearField(document.getElementById("text"));
  clearField(document.getElementById("js-code"));
  clearField(document.getElementById("variable-name"), DEFAULT_VARIABLE_NAME);
  clearField(document.getElementById("string-type"), DEFAULT_STRING_TYPE);
  document.getElementById('trim-padding').checked = false;
  document.getElementById('no-newline').checked = false;
  document.getElementById('no-semi-colon').checked = false;
}

window.onload=function(){
  // Initialize clipboard editing
  new Clipboard('#copy');
}