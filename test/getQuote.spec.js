let assert = require('chai').assert;
let stringConverter = require('../src/converter');

describe('getQuote', () => {
  it('should return single quote', () => {
    assert.equal(stringConverter.getQuote(stringConverter.ECMA5_SINGLE), '\'');
  });

  it('should return double quote', () => {
    assert.equal(stringConverter.getQuote(stringConverter.ECMA5_DOUBLE), '"');
  });

  it('should return double quote', () => {
    assert.equal(stringConverter.getQuote(stringConverter.JSON_DOUBLE), '"');
  });

  it('should return literal quote if is a wrapping element', () => {
    assert.equal(stringConverter.getQuote(stringConverter.ECMA6), '`');
  });
});
