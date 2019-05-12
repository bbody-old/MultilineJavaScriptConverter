let assert = require('chai').assert;
let stringConverter = require('../src/converter');

describe('getLine', () => {
  it('handles JSON', () => {
    const result = stringConverter.getLine(stringConverter.JSON_DOUBLE, 'Hello');
    assert.equal(result, '\t\t"Hello"');
  });

  it('handles ECMA6', () => {
    const result = stringConverter.getLine(stringConverter.ECMA6, 'Hello');
    assert.equal(result, 'Hello');
  });

  it('handles ECMA5 Single Quote', () => {
    const result = stringConverter.getLine(stringConverter.ECMA5_SINGLE, 'Hello');
    assert.equal(result, '\'Hello\'');
  });

  it('handles ECMA5 Double Quote', () => {
    const result = stringConverter.getLine(stringConverter.ECMA5_DOUBLE, 'Hello');
    assert.equal(result, '"Hello"');
  });
});
