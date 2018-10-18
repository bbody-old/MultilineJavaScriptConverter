var assert = require('chai').assert;
var stringConverter = require('../src/converter');

describe('initVariable', () => {
  const ECMA6 = 'ecma6';
  const ECMA5_SINGLE = 'ecma5single';
  const ECMA5_DOUBLE = 'ecma5double';

  it('should return handle ECMA6 string literal', () => {
    assert.equal(stringConverter.initVariable('variable', ECMA6), 'const variable = ');
    assert.equal(stringConverter.initVariable('', ECMA6), '');
  });

  it('should return handle single quote string', () => {
    assert.equal(stringConverter.initVariable('variable', ECMA5_SINGLE), 'var variable = ');
    assert.equal(stringConverter.initVariable(null, ECMA5_SINGLE), '');
  });

  it('should return handle double quote string', () => {
    assert.equal(stringConverter.initVariable('variable', ECMA5_DOUBLE), 'var variable = ');
    assert.equal(stringConverter.initVariable(null, ECMA5_DOUBLE), '');
  });
});
