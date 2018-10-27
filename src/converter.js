// Constant variables
const NEW_LINE = '\n';
const LINE_END = ' +';
const STRING_NEW_LINE = '\\n';
const FINAL_SEMI_COLON = ';';
// const ESCAPE_CHARACTER = "\\";

// Space types
const TAB = '\t';
// const SPACE1 = " ";
const SPACE2 = '  ';
const SPACE4 = '    ';
const SPACE8 = '        ';

const indenter = {
  'tabs': TAB,
  'space2': SPACE2,
  'space4': SPACE4,
  'space8': SPACE8
};

// Special characters
const DOUBLE_QUOTE = `"`;
const SINGLE_QUOTE = `'`;
const BACKTICK = `\``;

// Escaped special characters
const ESCAPED_DOUBLE_QUOTE = '\\"';
const ESCAPED_SINGLE_QUOTE = '\\\'';
const ESCAPED_BACKTICK = `\\\``;

// Types
const ECMA6 = 'ecma6';
const ECMA5_SINGLE = 'ecma5single';
const ECMA5_DOUBLE = 'ecma5double';

// Defaults
const DEFAULT_STRING_TYPE = ECMA5_DOUBLE;
const DEFAULT_VARIABLE_NAME = 'text';
const DEFAULT_SPACE_TYPE = 'tabs';

// Escape any backslashes
let escapeBackslash = value => {
  return value.replace(/\\/g, '\\\\');
};

// Escape any special characters that will effect Javascript
let escapeSpecialCharacters = (line, stringType) => {
  let value = escapeBackslash(line);

  if (stringType === ECMA5_DOUBLE) {
    // Escape double quotes
    value = value.replace(/"/g, ESCAPED_DOUBLE_QUOTE);
  } else if (stringType === ECMA5_SINGLE) {
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
  if (stringType === ECMA5_DOUBLE) {
    return DOUBLE_QUOTE;
  } else if (stringType === ECMA5_SINGLE) {
    return SINGLE_QUOTE;
  } else if (stringType === ECMA6 && wrapper) {
    return BACKTICK;
  } else if (stringType === ECMA6) {
    return '';
  } else {
    return SINGLE_QUOTE;
  }
};

// Initialize the variable line
let initVariable = (variableName, stringType) => {
  let buffer = '';

  if (variableName && variableName.length) {
    // Variable name
    if (stringType === ECMA6) {
      buffer += 'const ';
    } else {
      buffer += 'var ';
    }

    buffer += variableName;
    buffer += ' = ';
  }

  return buffer;
};

// Get first line
let getStart = (stringType, variableName) => {
  let buffer = '';

  if (variableName && variableName.length) {
    if (stringType === ECMA6) {
      buffer += `const ${variableName} = `;
    } else {
      buffer += `var ${variableName} = `;
    }
  } else {
    buffer += TAB;
  }

  buffer += quote(stringType, true);

  return buffer;
};

// Get end of line
let getEnd = (stringType, semiColon = true) => {
  let buffer = quote(stringType, true);

  if (semiColon) {
    buffer += FINAL_SEMI_COLON;
  }

  return buffer;
};

// Convert text to JavaScript Variable
let convertText = (variableName, contents, stringType, addNewlines, trim,
  semiColon, spaces) => {
  // Output buffer
  let buffer = getStart(stringType, variableName);

  let arrayCount = 0;
  let arrayBuffer = [''];

  const lineContents = contents.split(NEW_LINE);

  lineContents.forEach((value, count) => {
    if (trim) {
      value = value.trim();
    }

    if (trim && ((!value || !value.length) || (value === NEW_LINE))) {
      return; // continue
    }

    arrayBuffer[arrayCount] += escapeSpecialCharacters(value, stringType);

    if (addNewlines) {
      arrayBuffer[arrayCount] += STRING_NEW_LINE;
    }

    if (lineContents.length - 1 !== count) {
      arrayCount++;
      arrayBuffer[arrayCount] = quote(stringType);

      if (stringType !== ECMA6) {
        arrayBuffer[arrayCount] +=
            `${LINE_END}${NEW_LINE}${TAB}${quote(stringType)}`;
      } else {
        arrayBuffer[arrayCount] += NEW_LINE;
      }
    }
  });

  let lastLine = (lineContents[lineContents.length - 1]).trim();
  if (trim && ((!lastLine || !lastLine.length) || (lastLine === NEW_LINE))) {
    arrayBuffer.pop();
  }

  buffer += arrayBuffer.join('');
  buffer += getEnd(stringType, semiColon);
  buffer = buffer.replace(/\t/g, indenter[spaces]);

  return buffer;
};

// Clear the field with empty string unless a default selection is provided
let clearField = (field, defaultSelection = '') => {
  field.value = defaultSelection !== null &&
  defaultSelection.toString ? defaultSelection.toString() : '';
};

// Export so it can be required
/* istanbul ignore next */
module.exports = {
  // Constants
  DEFAULT_STRING_TYPE: DEFAULT_STRING_TYPE,
  DEFAULT_VARIABLE_NAME: DEFAULT_VARIABLE_NAME,
  DEFAULT_SPACE_TYPE: DEFAULT_SPACE_TYPE,
  ECMA5_DOUBLE: ECMA5_DOUBLE,

  // Functions
  escapeBackslash: escapeBackslash,
  escapeSpecialCharacters: escapeSpecialCharacters,
  quote: quote,
  initVariable: initVariable,
  getStart: getStart,
  getEnd: getEnd,
  convertText: convertText,
  clearField: clearField
};
