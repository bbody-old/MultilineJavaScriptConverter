$(document).ready(function(){
  // Constant variables
  var LINE_START = "\t+ ";
  var NEW_LINE = "\n";
  var STRING_NEW_LINE = "\\n";
  var FINAL_SEMI_COLON = ";";
  var ESCAPE_CHARACTER = "\\";

  var DOUBLE_QUOTE = "\"";
  var SINGLE_QUOTE = "\'";
  var ECMA6_QUOTE = "`";

  new Clipboard('#copy');

  // Escape any special characters that will effect Javascript
  function escapeSpecialCharacters(line, stringType){
    var value = line;
    value = value.replace(/\\/g, "\\\\");

    if (stringType !== "ecma6"){
      value = value.replace(/"/g, "\\\"");
      value = value.replace(/'/g, "\\\'");
    } else {
      value = value.replace(/`/g, "\\`");
    }

    return value;
  }

  function quote(stringType, wrapper){
    wrapper = wrapper ? wrapper : "";

    if (stringType === "ecma5double"){
      return DOUBLE_QUOTE;
    } else if (stringType === "ecma5single"){
      return SINGLE_QUOTE;
    } else if (stringType === "ecma6" && wrapper){
      return ECMA6_QUOTE;
    } else {
      return "";
    }
  }

  // Initialize the variable line
  function initVariable(variableName, stringType){
    var buffer = "var ";
    buffer += variableName;
    buffer += " = ";//\"\"\n";

    buffer += quote(stringType, true);
    buffer += quote(stringType);
    buffer += "\n";

    return buffer;
  }

  function convertText(variableName, contents, stringType){
    // Output buffer
    var converted = "";

    // Split input into an array based on their line
    var lineContents = contents.split(NEW_LINE);

    // Intialize variable
    converted += initVariable(variableName, stringType);

    $.each(lineContents, function(index, value){
      if (stringType !== "ecma6"){
        // Start the line
        converted += LINE_START;

        converted += quote(stringType);
      }
      // Remove escaped characters
      converted += escapeSpecialCharacters(value, stringType);

      if (stringType !== "ecma6"){
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

    var variableName = $("#variable-name").val();
    variableName = variableName ? variableName : "text";

    var stringType = $("#string-type").val();
    stringType = stringType ? stringType : "";

    var converted = convertText(variableName, text, stringType);

    // Write converted text to output box
    $("#js-code").val(converted);
  });

  function clearField(field, defaultSelection){
    var newValue = defaultSelection ? defaultSelection : "";
    field.val(newValue);
  }

  $("#clear").click(function(){
    clearField($("#text"));
    clearField($("#js-code"));
    clearField($("#variable-name"));
    clearField($("#string-type"), "ecma5double");
  });
});