let assert = require('chai').assert;
let stringConverter = require('../src/converter');

describe('quote', () => {
    const ECMA6 = "ecma6";
    const ECMA5_SINGLE = "ecma5single";
    const ECMA5_DOUBLE = "ecma5double";

	it('should return single quote', () => {
        assert.equal(stringConverter.quote(ECMA5_SINGLE), '\'');
    });

    it('should return double quote', () => {
        assert.equal(stringConverter.quote(ECMA5_DOUBLE), '"');
    });

    it('should not return literal quote if not a wrapping element', () => {
        assert.equal(stringConverter.quote(ECMA6), '');
    });

    it('should not return literal quote if not a wrapping element is false', () => {
        assert.equal(stringConverter.quote(ECMA6, false), '');
    });

    it('should return literal quote if is a wrapping element', () => {
        assert.equal(stringConverter.quote(ECMA6, true), '`');
    });
});