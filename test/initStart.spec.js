var assert = require('chai').assert;
var stringConverter = require('../src/converter');

describe('initStart', function () {
	const ECMA6 = "ecma6";
	const ECMA5_SINGLE = "ecma5single";
	const ECMA5_DOUBLE = "ecma5double";

	it('should return handle ECMA6 string literal', function () {
        assert.equal(stringConverter.initStart(ECMA6), '`\n');
    });

    it('should return handle single quote string', function () {
        assert.equal(stringConverter.initStart(ECMA5_SINGLE), "''\n");
    });

    it('should return handle double quote string', function () {
        assert.equal(stringConverter.initStart(ECMA5_DOUBLE), '""\n');
    });

    it('should return handle no argument', function () {
        assert.equal(stringConverter.initStart(), "''\n");
        assert.equal(stringConverter.initStart(null), "''\n");
        assert.equal(stringConverter.initStart(''), "''\n");
    });

});