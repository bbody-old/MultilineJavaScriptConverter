let assert = require('chai').assert;
let stringConverter = require('../src/converter');

describe('getEnd', () => {
  const ECMA6 = 'ecma6';
  const ECMA5_SINGLE = 'ecma5single';
  const ECMA5_DOUBLE = 'ecma5double';

  it('should return handle ECMA6 string literal', () => {
    assert.equal(stringConverter.getEnd(ECMA6, true), '`;');
    assert.equal(stringConverter.getEnd(ECMA6, false), '`');
  });

  it('should return handle single quote string', () => {
    assert.equal(stringConverter.getEnd(ECMA5_SINGLE, true), "';");
    assert.equal(stringConverter.getEnd(ECMA5_SINGLE, false), "'");
  });

  it('should return handle double quote string', () => {
    assert.equal(stringConverter.getEnd(ECMA5_DOUBLE, true), '";');
    assert.equal(stringConverter.getEnd(ECMA5_DOUBLE, false), '"');
  });

  it('should return handle no argument', () => {
    assert.equal(stringConverter.getEnd(), "';");
    assert.equal(stringConverter.getEnd(null), "';");
    assert.equal(stringConverter.getEnd(''), "';");
    assert.equal(stringConverter.getEnd('', false), "'");
  });
});
