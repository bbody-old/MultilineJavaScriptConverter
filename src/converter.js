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

module.exports = {
  DEFAULT_STRING_TYPE: DEFAULT_STRING_TYPE,
  DEFAULT_VARIABLE_NAME: DEFAULT_VARIABLE_NAME,
  ECMA5_DOUBLE: ECMA5_DOUBLE,

  // Escape any backslashes
  escapeBackslash: function(value){
    return value.replace(/\\/g, "\\\\");
  },

  // Escape any special characters that will effect Javascript
  escapeSpecialCharacters: function(line, stringType){
    let value = this.escapeBackslash(line);

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
  },

  // Return the type of quote based on string type and if it is the end/start
  quote: function(stringType, wrapper = false){

    if (stringType === ECMA5_DOUBLE){
      return DOUBLE_QUOTE;
    } else if (stringType === ECMA5_SINGLE){
      return SINGLE_QUOTE;
    } else if (stringType === ECMA6 && wrapper){
      return BACKTICK;
    } else {
      return "";
    }
  },

  // Initialize the variable line
  initVariable: function(variableName, stringType){
    // Variable name
    let buffer = "var ";
    buffer += variableName;
    buffer += " = ";

    return buffer;
  },

  initStart: function(stringType){
    // First line for string
    let buffer = this.quote(stringType, true);
    buffer += this.quote(stringType);
    buffer += "\n";

    return buffer;
  },
    
  // Convert text to JavaScript Variable
  convertText: function(variableName, contents, stringType, newlines, trim, semiColon){
    let self = this;
    // Output buffer
    let converted = "";

    // Split input into an array based on their line
    const lineContents = contents.split(NEW_LINE);

    if (variableName.length > 0){
        // Intialize variable
        converted += self.initVariable(variableName, stringType);
    } else {
      converted += "\t";
    }

    converted += self.initStart(stringType);
    lineContents.forEach(function(value, count){
      if (trim){
        value = value.trim();
      }

      if (!(trim && value.length === 0)){

        if (stringType !== ECMA6){
          // Start the line
          converted += LINE_START;

          converted += self.quote(stringType);
        }

        // Remove escaped characters
        converted += self.escapeSpecialCharacters(value, stringType);

        if (stringType !== ECMA6 && newlines){
          // Put in new line
          converted += STRING_NEW_LINE;
        }

      }

      // If it is the last line, put in semi colon otherwise a newline
      if (lineContents.length - 1 !== count){
        converted += self.quote(stringType);
        converted += NEW_LINE;
      } else {
        //if (!trim){
          converted += self.quote(stringType, true);
        //}

        if (trim && value.length === 0){
          converted = converted.substring(0, converted.length - 2);
        }
        if (semiColon){
          converted += FINAL_SEMI_COLON;
        }
      }

    });

    return converted;
  },

  // Clear the field with empty string unless a default selection is provided
  clearField: function(field, defaultSelection = ""){
    field.value = defaultSelection !== null && defaultSelection.toString ? defaultSelection.toString() : "";
  }
};