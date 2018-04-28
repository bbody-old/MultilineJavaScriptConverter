// Constant variables
const LINE_START = "\t+ ";
const NEW_LINE = "\n";
const STRING_NEW_LINE = "\\n";
const FINAL_SEMI_COLON = ";";
const ESCAPE_CHARACTER = "\\";

// Special characters
const DOUBLE_QUOTE = `"`;
const SINGLE_QUOTE = `'`;
const BACKTICK = `\``;

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
let escapeBackslash = value => {
  return value.replace(/\\/g, "\\\\");
};

// Escape any special characters that will effect Javascript
let escapeSpecialCharacters = (line, stringType) => {
  let value = escapeBackslash(line);

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
};

// Return the type of quote based on string type and if it is the end/start
let quote = (stringType, wrapper = false) => {
  if (stringType === ECMA5_DOUBLE){
    return DOUBLE_QUOTE;
  } else if (stringType === ECMA5_SINGLE){
    return SINGLE_QUOTE;
  } else if (stringType === ECMA6 && wrapper){
    return BACKTICK;
  } else if (stringType === ECMA6){
    return "";
  } else {
    return SINGLE_QUOTE;
  }
};

// Initialize the variable line
let initVariable = (variableName, stringType) => {
  let buffer = "";

  if (variableName && variableName.length){
    // Variable name
    if (stringType === ECMA6){
      buffer += "const ";
    } else {
      buffer += "var ";  
    }
    
    buffer += variableName;
    buffer += " = ";
  }
  
  return buffer;
};

let initStart = stringType => {
  // First line for string
  let buffer = quote(stringType, true);
  buffer += quote(stringType);
  buffer += "\n";

  return buffer;
};

// Convert text to JavaScript Variable
let convertText = (variableName, contents, stringType, newlines, trim, semiColon) => {
  // Output buffer
  let converted = "";

  // Split input into an array based on their line
  const lineContents = contents.split(NEW_LINE);

  if (variableName.length > 0){
      // Intialize variable
      converted += initVariable(variableName, stringType);
  } else {
    converted += "\t";
  }

  converted += initStart(stringType);
  lineContents.forEach(function(value, count){
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
    if (lineContents.length - 1 !== count){
      converted += quote(stringType);
      converted += NEW_LINE;
    } else {
      converted += quote(stringType, true);

      if (trim && value.length === 0){
        converted = converted.substring(0, converted.length - 2);
      }

      if (semiColon){
        converted += FINAL_SEMI_COLON;
      }
    }

  });

  return converted;
};

// Clear the field with empty string unless a default selection is provided
let clearField = (field, defaultSelection = "") => {
  field.value = defaultSelection !== null && defaultSelection.toString ? defaultSelection.toString() : "";
};

module.exports = {
  // Constants
  DEFAULT_STRING_TYPE: DEFAULT_STRING_TYPE,
  DEFAULT_VARIABLE_NAME: DEFAULT_VARIABLE_NAME,
  ECMA5_DOUBLE: ECMA5_DOUBLE,

  // Functions
  escapeBackslash: escapeBackslash,
  escapeSpecialCharacters: escapeSpecialCharacters,
  quote: quote,
  initVariable: initVariable,
  initStart: initStart,
  convertText: convertText,
  clearField: clearField
};