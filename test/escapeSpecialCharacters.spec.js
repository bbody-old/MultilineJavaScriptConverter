var assert = require('chai').assert;
var stringConverter = require('../src/converter');

describe('escapeSpecialCharacters', function () {
	describe('ECMA6 String literals', () =>{
		const ECMA6 = "ecma6";

		it('should return handle empty string', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('', ECMA6), '');
	        assert.equal(stringConverter.escapeSpecialCharacters("", ECMA6), "");
	        assert.equal(stringConverter.escapeSpecialCharacters(``, ECMA6), ``);
	    });

		it('should return handle string literal characters', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('`', ECMA6), '\\\`');
	        assert.equal(stringConverter.escapeSpecialCharacters("```", ECMA6), "\\\`\\\`\\\`");
	    });

	    it('should return handle other types of string identifiers', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('`"', ECMA6), '\\\`"');
	        assert.equal(stringConverter.escapeSpecialCharacters("`'", ECMA6), "\\\`'");
	    });
	});

	describe('Single String', () =>{
		const ECMA5_SINGLE = "ecma5single";

		it('should return handle empty string', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('', ECMA5_SINGLE), '');
	        assert.equal(stringConverter.escapeSpecialCharacters("", ECMA5_SINGLE), "");
	        assert.equal(stringConverter.escapeSpecialCharacters(``, ECMA5_SINGLE), ``);
	    });

		it('should return handle string literal characters', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('"', ECMA5_SINGLE), '"');
	        assert.equal(stringConverter.escapeSpecialCharacters("'", ECMA5_SINGLE), "\\\'");
	    });

	    it('should return handle other types of string identifiers', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('`"', ECMA5_SINGLE), '`"');
	        assert.equal(stringConverter.escapeSpecialCharacters("`'", ECMA5_SINGLE), "`\\\'");
	    });
	});

	describe('Double String', () =>{
		const ECMA5_DOUBLE = "ecma5double";

		it('should return handle empty string', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('', ECMA5_DOUBLE), '');
	        assert.equal(stringConverter.escapeSpecialCharacters("", ECMA5_DOUBLE), "");
	        assert.equal(stringConverter.escapeSpecialCharacters(``, ECMA5_DOUBLE), ``);
	    });

		it('should return handle string literal characters', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('"', ECMA5_DOUBLE), '\\\"');
	        assert.equal(stringConverter.escapeSpecialCharacters("'", ECMA5_DOUBLE), "'");
	    });

	    it('should return handle other types of string identifiers', function () {
	        assert.equal(stringConverter.escapeSpecialCharacters('`"', ECMA5_DOUBLE), '`\\\"');
	        assert.equal(stringConverter.escapeSpecialCharacters("`'", ECMA5_DOUBLE), "`'");
	    });
	});
});