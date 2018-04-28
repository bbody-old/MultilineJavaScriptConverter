var assert = require('chai').assert;
var stringConverter = require('../src/converter');

describe('initVariable', function () {
	const ECMA6 = "ecma6";
	const ECMA5_SINGLE = "ecma5single";
	const ECMA5_DOUBLE = "ecma5double";

	it('should return handle ECMA6 string literal', function () {
        assert.equal(stringConverter.initVariable('variable', ECMA6), 'const variable = ');
        assert.equal(stringConverter.initVariable('', ECMA6), '');
    });

    it('should return handle single quote string', function () {
       assert.equal(stringConverter.initVariable('variable', ECMA5_SINGLE), 'var variable = ');
       assert.equal(stringConverter.initVariable(null, ECMA5_SINGLE), '');
    });

    it('should return handle double quote string', function () {
        assert.equal(stringConverter.initVariable('variable', ECMA5_DOUBLE), 'var variable = ');
        assert.equal(stringConverter.initVariable(null, ECMA5_DOUBLE), '');
    });

});