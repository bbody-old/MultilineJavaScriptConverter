let assert = require('chai').assert;
let stringConverter = require('../src/converter');

describe('getJoiner', () => {
  it('handles JSON', () => {
    const result = stringConverter.getJoiner(stringConverter.JSON_DOUBLE);
    assert.equal(result, ',\n');
  });

  it('handles ECMA6', () => {
    const result = stringConverter.getJoiner(stringConverter.ECMA6);
    assert.equal(result, '\n');
  });

  it('handles ECMA5 Single Quote', () => {
    const result = stringConverter.getJoiner(stringConverter.ECMA5_SINGLE);
    assert.equal(result, ' +\n\t');
  });

  it('handles ECMA5 Double Quote', () => {
    const result = stringConverter.getJoiner(stringConverter.ECMA5_DOUBLE);
    assert.equal(result, ' +\n\t');
  });
});
