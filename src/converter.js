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

const TABS = 'tabs';
const SPACES_2 = 'space2';
const SPACES_4 = 'space4';
const SPACES_8 = 'space8';

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
const JSON_DOUBLE = 'json';

// Defaults
const DEFAULT_STRING_TYPE = ECMA5_DOUBLE;
const DEFAULT_VARIABLE_NAME = 'text';
const DEFAULT_SPACE_TYPE = 'tabs';

// Escape any backslashes
const escapeBackslash = value => {
  return value.replace(/\\/g, '\\\\');
};

// Escape any special characters that will effect Javascript
const escapeSpecialCharacters = (line, stringType) => {
  let value = escapeBackslash(line);

  if ((stringType === ECMA5_DOUBLE) || (stringType === JSON_DOUBLE)) {
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
const getQuote = (stringType) => {
  if (stringType === ECMA5_DOUBLE) {
    return DOUBLE_QUOTE;
  } else if (stringType === ECMA6) {
    return BACKTICK;
  } else if (stringType === JSON_DOUBLE) {
    return DOUBLE_QUOTE;
  } else {
    return SINGLE_QUOTE;
  }
};

// Get line of string type
const getLine = (stringType, value) => {
  if (stringType === JSON_DOUBLE) {
    return `${TAB}${TAB}${DOUBLE_QUOTE}${value}${DOUBLE_QUOTE}`;
  } else if (stringType === ECMA6) {
    return value;
  } else {
    const quote = getQuote(stringType);
    return `${quote}${value}${quote}`;
  }
};

// Joiner for joining the array
const getJoiner = (stringType) => {
  if (stringType === JSON_DOUBLE) {
    return `,${NEW_LINE}`;
  } else if (stringType === ECMA6) {
    return `${NEW_LINE}`;
  } else {
    return `${LINE_END}${NEW_LINE}${TAB}`;
  }
};

// Get first line
const getStart = (stringType, variableName) => {
  let buffer = '';
  if (stringType === JSON_DOUBLE) {
    variableName = variableName && variableName.length
      ? variableName : 'output';
    buffer += `{${NEW_LINE}${TAB}${DOUBLE_QUOTE}`;
    buffer += variableName;
    buffer += `${DOUBLE_QUOTE}: [`;
  } else {
    if (variableName && variableName.length) {
      if (stringType === ECMA6) {
        buffer += `const ${variableName} = \``;
      } else {
        buffer += `var ${variableName} = `;
      }
    } else {
      buffer += TAB;
      if (stringType === ECMA6) {
        buffer += BACKTICK;
      }
    }
  }
  return buffer;
};

// Get end of line
const getEnd = (stringType, semiColon = true) => {
  let buffer = '';

  if (stringType === JSON_DOUBLE) {
    return `${TAB}]${NEW_LINE}}`;
  } else if (stringType === ECMA6) {
    buffer += `\``;
  }

  if (semiColon) {
    buffer += FINAL_SEMI_COLON;
  }

  return buffer;
};

// Convert text to JavaScript Variable
const convertText = (variableName, contents, stringType, addNewlines, trim,
  semiColon, spaces) => {
  // Output buffer
  let buffer = getStart(stringType, variableName);

  let arrayCount = 0;
  let arrayBuffer = [''];

  const lineContents =
    (typeof contents === 'string') ? contents.split(NEW_LINE) : contents;

  lineContents.forEach((value, count) => {
    if (trim) {
      value = value.trim();
    }

    if (trim && ((!value || !value.length) || (value === NEW_LINE))) {
      return; // continue
    }

    value = escapeSpecialCharacters(value, stringType);

    if (addNewlines) {
      value += STRING_NEW_LINE;
    }

    arrayBuffer[arrayCount] = getLine(stringType, value);

    arrayCount++;
  });

  if ((arrayBuffer.length > 0) && (stringType === JSON_DOUBLE)) {
    buffer += NEW_LINE;
  }

  buffer += arrayBuffer.join(getJoiner(stringType));

  if ((arrayBuffer.length > 0) && (stringType === JSON_DOUBLE)) {
    buffer += NEW_LINE;
  }

  buffer += getEnd(stringType, semiColon);
  buffer = buffer.replace(/\t/g, indenter[spaces]);

  return buffer;
};

// Clear the field with empty string unless a default selection is provided
const clearField = (field, defaultSelection = '') => {
  field.value = defaultSelection !== null &&
  defaultSelection.toString ? defaultSelection.toString() : '';
};

// Export so it can be required
/* istanbul ignore next */
module.exports = {
  // Constants
  DEFAULT_STRING_TYPE,
  DEFAULT_VARIABLE_NAME,
  DEFAULT_SPACE_TYPE,
  ECMA5_SINGLE,
  ECMA5_DOUBLE,
  ECMA6,
  JSON_DOUBLE,
  TABS,
  SPACES_2,
  SPACES_4,
  SPACES_8,

  // Functions
  escapeBackslash,
  escapeSpecialCharacters,
  getQuote,
  getStart,
  getEnd,
  convertText,
  clearField,
  getLine,
  getJoiner
};
