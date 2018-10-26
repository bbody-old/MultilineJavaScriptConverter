const assert = require('chai').assert;
const stringConverter = require('../src/converter');

describe('lastLineEmpty', () => {
  const ECMA6 = 'ecma6';
  const ECMA5_SINGLE = 'ecma5single';
  const ECMA5_DOUBLE = 'ecma5double';
  const multiLineContent = 'Something\nmulti\nline\n';
	
  describe('ECMA6', () => {
    it('should trim out the last line', () => {
	  const multiLineContentExpected = 'Something\nmulti\nline';
      let results = stringConverter.convertText(
          'someVariable', multiLineContent, ECMA6, false, true, true, 'tabs'
        );
        assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
    });
  });
  
    describe('ECMA5 Single Quote', () => {
    it('should trim out the last line', () => {
	  const multiLineContentExpected = "\'Something\' +\n\t\'multi\' +\n\t\'line\'";
      let results = stringConverter.convertText(
          'someVariable', multiLineContent, ECMA5_SINGLE, false, true, true, 'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
    });
  });
	
  describe('ECMA5 Double Quote', () => {
    it('should trim out the last line', () => {
	  const multiLineContentExpected = "\"Something\" +\n\t\"multi\" +\n\t\"line\"";
      let results = stringConverter.convertText(
          'someVariable', multiLineContent, ECMA5_DOUBLE, false, true, true, 'tabs'
        );
        assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
    });
  });
});
