let assert = require('chai').assert;
let stringConverter = require('../src/converter');

describe('getStart', () => {
    const ECMA6 = "ecma6";
    const ECMA5_SINGLE = "ecma5single";
    const ECMA5_DOUBLE = "ecma5double";

    it('should return handle ECMA6 string literal', () => {
        assert.equal(stringConverter.getStart(ECMA6, ''), '\t`');
        assert.equal(stringConverter.getStart(ECMA6), '\t`');
        assert.equal(stringConverter.getStart(ECMA6, null), '\t`');
        assert.equal(stringConverter.getStart(ECMA6, undefined), '\t`');
        assert.equal(stringConverter.getStart(ECMA6, 'someVariable'), 'const someVariable = `');
    });

    it('should return handle single quote string', () => {
        assert.equal(stringConverter.getStart(ECMA5_SINGLE, ''), "\t'");
        assert.equal(stringConverter.getStart(ECMA5_SINGLE), "\t'");
        assert.equal(stringConverter.getStart(ECMA5_SINGLE, null), "\t'");
        assert.equal(stringConverter.getStart(ECMA5_SINGLE, undefined), "\t'");
        assert.equal(stringConverter.getStart(ECMA5_SINGLE, 'someVariable'), "var someVariable = '");
    });

    it('should return handle double quote string', () => {
        assert.equal(stringConverter.getStart(ECMA5_DOUBLE, ''), '\t"');
        assert.equal(stringConverter.getStart(ECMA5_DOUBLE), '\t"');
        assert.equal(stringConverter.getStart(ECMA5_DOUBLE, null), '\t"');
        assert.equal(stringConverter.getStart(ECMA5_DOUBLE, undefined), '\t"');
        assert.equal(stringConverter.getStart(ECMA5_DOUBLE, 'someVariable'), 'var someVariable = "');
    });
});