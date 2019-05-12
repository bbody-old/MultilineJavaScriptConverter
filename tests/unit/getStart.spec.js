let assert = require('chai').assert;
let stringConverter = require('../../src/converter');

describe('getStart', () => {
  it('should return handle ECMA6 string literal', () => {
    assert.equal(stringConverter.getStart(stringConverter.ECMA6, ''), '\t`');
    assert.equal(stringConverter.getStart(stringConverter.ECMA6), '\t`');
    assert.equal(stringConverter.getStart(stringConverter.ECMA6, null), '\t`');
    assert.equal(stringConverter.getStart(stringConverter.ECMA6, undefined), '\t`');
    assert.equal(stringConverter.getStart(stringConverter.ECMA6, 'someVariable'), 'const someVariable = `');
  });

  it('should return handle JSON', () => {
    assert.equal(stringConverter.getStart(stringConverter.JSON_DOUBLE, ''), '{\n\t"output": [');
    assert.equal(stringConverter.getStart(stringConverter.JSON_DOUBLE), '{\n\t"output": [');
    assert.equal(stringConverter.getStart(stringConverter.JSON_DOUBLE, null), '{\n\t"output": [');
    assert.equal(stringConverter.getStart(stringConverter.JSON_DOUBLE, undefined), '{\n\t"output": [');
    assert.equal(stringConverter.getStart(stringConverter.JSON_DOUBLE, 'someVariable'), '{\n\t"someVariable": [');
  });

  it('should return handle single quote string', () => {
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_SINGLE, ''), '\t');
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_SINGLE), '\t');
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_SINGLE, null), '\t');
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_SINGLE, undefined), '\t');
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_SINGLE, 'someVariable'), 'var someVariable = ');
  });

  it('should return handle double quote string', () => {
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_DOUBLE, ''), '\t');
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_DOUBLE), '\t');
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_DOUBLE, null), '\t');
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_DOUBLE, undefined), '\t');
    assert.equal(stringConverter.getStart(stringConverter.ECMA5_DOUBLE, 'someVariable'), 'var someVariable = ');
  });
});
