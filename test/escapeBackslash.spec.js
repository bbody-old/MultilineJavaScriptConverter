var assert = require('chai').assert;
var stringConverter = require('../src/converter');

describe('escapeBackslash', function () {
	describe('Single Quote strings', function(){
		it('should return handle empty string', function () {
	        assert.equal(stringConverter.escapeBackslash(''), '');
	    });
		it('should return two backslashes', function () {
	        assert.equal(stringConverter.escapeBackslash('\\'), '\\\\');
	    });
	    it('should return four backslashes', function () {
	        assert.equal(stringConverter.escapeBackslash('\\\\'), '\\\\\\\\');
	    });
	    it('should handle unrelated characters', function () {
	        assert.equal(stringConverter.escapeBackslash('hello'), 'hello');
	    });
	    it('should handle unrelated characters intertwined', function () {
	        assert.equal(stringConverter.escapeBackslash('hello\\something\\'), 'hello\\\\something\\\\');
	    });
	});

	describe('Literal strings', function(){
		it('should return handle empty string', function () {
	        assert.equal(stringConverter.escapeBackslash(""), "");
	    });
		it('should return two backslashes', function () {
	        assert.equal(stringConverter.escapeBackslash("\\"), "\\\\");
	    });
	    it('should return four backslashes', function () {
	        assert.equal(stringConverter.escapeBackslash("\\\\"), "\\\\\\\\");
	    });
	    it('should handle unrelated characters', function () {
	        assert.equal(stringConverter.escapeBackslash("hello"), "hello");
	    });
	    it('should handle unrelated characters intertwined', function () {
	        assert.equal(stringConverter.escapeBackslash("hello\\something\\"), "hello\\\\something\\\\");
	    });
	});

	describe('Literal strings', function(){
		it('should return handle empty string', function () {
	        assert.equal(stringConverter.escapeBackslash(``), ``);
	    });
		it('should return two backslashes', function () {
	        assert.equal(stringConverter.escapeBackslash(`\\`), `\\\\`);
	    });
	    it('should return four backslashes', function () {
	        assert.equal(stringConverter.escapeBackslash(`\\\\`), `\\\\\\\\`);
	    });
	    it('should handle unrelated characters', function () {
	        assert.equal(stringConverter.escapeBackslash(`hello`), `hello`);
	    });
	    it('should handle unrelated characters intertwined', function () {
	        assert.equal(stringConverter.escapeBackslash(`hello\\something\\`), `hello\\\\something\\\\`);
	    });
	});
});