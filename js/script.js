$(document).ready(function(){
  // Constant variables
  var LINE_START = "\t+ ";
  var NEW_LINE = "\n";
  var STRING_NEW_LINE = "\\n";
  var FINAL_SEMI_COLON = ";";
  var ESCAPE_CHARACTER = "\\";

  // Special characters
  var DOUBLE_QUOTE = "\"";
  var SINGLE_QUOTE = "\'";
  var BACKTICK = "`";

  // Escaped special characters
  var ESCAPED_DOUBLE_QUOTE = "\\\"";
  var ESCAPED_SINGLE_QUOTE = "\\\'";
  var ESCAPED_BACKTICK = "\\`";

  // Types
  var ECMA6 = "ecma6";
  var ECMA5_SINGLE = "ecma5single";
  var ECMA5_DOUBLE = "ecma5double";

  // Initialize clipboard editing
  new Clipboard('#copy');

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

    // First line for string
    buffer += " = ";
    buffer += quote(stringType, true);
    buffer += quote(stringType);
    buffer += "\n";

    return buffer;
  }

  // Convert text to JavaScript Variable
  function convertText(variableName, contents, stringType){
    // Output buffer
    var converted = "";

    // Split input into an array based on their line
    var lineContents = contents.split(NEW_LINE);

    // Intialize variable
    converted += initVariable(variableName, stringType);

    $.each(lineContents, function(index, value){
      if (stringType !== ECMA6){
        // Start the line
        converted += LINE_START;

        converted += quote(stringType);
      }

      // Remove escaped characters
      converted += escapeSpecialCharacters(value, stringType);

      if (stringType !== ECMA6){
        // Put in new line
        converted += STRING_NEW_LINE;
      }

      // If it is the last line, put in semi colon otherwise a newline
      if (lineContents.length - 1 !== index){
        converted += quote(stringType);
        converted += NEW_LINE;
      } else {
        converted += quote(stringType, true);
        converted += FINAL_SEMI_COLON;
      }
    });

    return converted;
  }

  $("#convert").click(function(){
    // Get input content
    var text = $("#text").val();

    // Get the variable name, set default as "text"
    var variableName = $("#variable-name").val();
    variableName = variableName ? variableName : "text";

    // Get the type of string wanted to be output
    var stringType = $("#string-type").val();
    stringType = stringType ? stringType : ECMA5_DOUBLE;

    // Convert text
    var converted = convertText(variableName, text, stringType);

    // Write converted text to output box
    $("#js-code").val(converted);
  });

  // Clear the field with empty string unless a default selection is provided
  function clearField(field, defaultSelection){
    var newValue = defaultSelection ? defaultSelection : "";
    field.val(newValue);
  }

  // Clear all fields
  $("#clear").click(function(){
    clearField($("#text"));
    clearField($("#js-code"));
    clearField($("#variable-name"));
    clearField($("#string-type"), ECMA5_DOUBLE);
  });
});