let assert = require('chai').assert;
let stringConverter = require('../src/converter');

describe('getEnd', () => {
  it('should return handle ECMA6 string literal', () => {
    assert.equal(stringConverter.getEnd(stringConverter.ECMA6, true), '`;');
    assert.equal(stringConverter.getEnd(stringConverter.ECMA6, false), '`');
  });

  it('should return handle JSON', () => {
    assert.equal(stringConverter.getEnd(stringConverter.JSON_DOUBLE, true), '\t]\n}');
    assert.equal(stringConverter.getEnd(stringConverter.JSON_DOUBLE, false), '\t]\n}');
  });

  it('should return handle single quote string', () => {
    assert.equal(stringConverter.getEnd(stringConverter.ECMA5_SINGLE, true), ';');
    assert.equal(stringConverter.getEnd(stringConverter.ECMA5_SINGLE, false), '');
  });

  it('should return handle double quote string', () => {
    assert.equal(stringConverter.getEnd(stringConverter.ECMA5_DOUBLE, true), ';');
    assert.equal(stringConverter.getEnd(stringConverter.ECMA5_DOUBLE, false), '');
  });

  it('should return handle no argument', () => {
    assert.equal(stringConverter.getEnd(), ';');
    assert.equal(stringConverter.getEnd(null), ';');
    assert.equal(stringConverter.getEnd(''), ';');
    assert.equal(stringConverter.getEnd('', false), '');
  });
});
