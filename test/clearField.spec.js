let assert = require('chai').assert;
let stringConverter = require('../src/converter');

describe('clearField', () => {
  let field;
  beforeEach(() => {
    field = {
      value: ''
    };
  });

  it('should return handle no default value', () => {
    stringConverter.clearField(field);
    assert.equal(field.value, '');
  });

  it('should return handle empty default value', () => {
    stringConverter.clearField(field, '');
    assert.equal(field.value, '');
  });

  it('should return handle null default value', () => {
    stringConverter.clearField(field, null);
    assert.equal(field.value, '');
  });

  it('should handle a default string value', () => {
    stringConverter.clearField(field, 'SOMETHING');
    assert.equal(field.value, 'SOMETHING');
  });

  it('should handle a default integer value', () => {
    stringConverter.clearField(field, 234);
    assert.equal(field.value, '234');
  });

  it('should handle a default integer value of zero', () => {
    stringConverter.clearField(field, 0);
    assert.equal(field.value, '0');
  });

  it('should handle a default boolean value of true', () => {
    stringConverter.clearField(field, true);
    assert.equal(field.value, 'true');
  });

  it('should handle a default boolean value of false', () => {
    stringConverter.clearField(field, false);
    assert.equal(field.value, 'false');
  });
});
