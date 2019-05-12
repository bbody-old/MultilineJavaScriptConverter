const assert = require('chai').assert;
const stringConverter = require('../../src/converter');

describe('escapeBackslash', () => {
  describe('Single Quote strings', () => {
    it('should return handle empty string', () => {
      assert.equal(stringConverter.escapeBackslash(''), '');
    });
    it('should return two backslashes', () => {
      assert.equal(stringConverter.escapeBackslash('\\'), '\\\\');
    });
    it('should return four backslashes', () => {
      assert.equal(stringConverter.escapeBackslash('\\\\'), '\\\\\\\\');
    });
    it('should handle unrelated characters', () => {
      assert.equal(stringConverter.escapeBackslash('hello'), 'hello');
    });
    it('should handle unrelated characters intertwined', () => {
      assert.equal(
        stringConverter.escapeBackslash('hello\\something\\'),
        'hello\\\\something\\\\'
      );
    });
  });

  describe('Literal strings', () => {
    it('should return handle empty string', () => {
      assert.equal(stringConverter.escapeBackslash(''), '');
    });
    it('should return two backslashes', () => {
      assert.equal(stringConverter.escapeBackslash('\\'), '\\\\');
    });
    it('should return four backslashes', () => {
      assert.equal(stringConverter.escapeBackslash('\\\\'), '\\\\\\\\');
    });
    it('should handle unrelated characters', () => {
      assert.equal(stringConverter.escapeBackslash('hello'), 'hello');
    });
    it('should handle unrelated characters intertwined', () => {
      assert.equal(
        stringConverter.escapeBackslash('hello\\something\\'),
        'hello\\\\something\\\\'
      );
    });
  });

  describe('Literal strings', () => {
    it('should return handle empty string', () => {
      assert.equal(stringConverter.escapeBackslash(``), ``);
    });
    it('should return two backslashes', () => {
      assert.equal(stringConverter.escapeBackslash(`\\`), `\\\\`);
    });
    it('should return four backslashes', () => {
      assert.equal(stringConverter.escapeBackslash(`\\\\`), `\\\\\\\\`);
    });
    it('should handle unrelated characters', () => {
      assert.equal(stringConverter.escapeBackslash(`hello`), `hello`);
    });
    it('should handle unrelated characters intertwined', () => {
      assert.equal(
        stringConverter.escapeBackslash(`hello\\something\\`),
        `hello\\\\something\\\\`
      );
    });
  });
});
