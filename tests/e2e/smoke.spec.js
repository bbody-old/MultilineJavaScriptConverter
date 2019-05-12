module.exports = {
  'beforeEach': function (browser) {
    browser
      .url('http://127.0.0.1:8080')
      .waitForElementVisible('body');
  },
  'Page Loads': function (browser) {
    browser
      .assert.visible('h1', 'Multiline JavaScript Converter')
      .assert.title('Multiline JavaScript Converter')
      .end();
  },
  'Outputs': function (browser) {
    browser
      .setValue('textarea#text', 'line1\nline2\nline3')
      .click('input#convert')
      .pause(1000)
      .expect.element('textarea#js-code').value.to.contain('var text = "line1" +\n\t"line2" +\n\t"line3";');
  },
  'Clears Outputs': function (browser) {
    browser
      .setValue('textarea#text', 'line1\nline2\nline3')
      .click('input#convert')
      .pause(1000)
      .assert.visible('textarea#js-code', 'var text = "line1" +\n\t"line2" +\n\t"line3";')
      .click('input#clear')
      .pause(1000)
      .assert.visible('textarea#js-code', 'doggy');
  },
  'Custom variable name': function (browser) {
    browser
      .setValue('textarea#text', 'line1\nline2\nline3')
      .setValue('input#variable-name', 'customVariable')
      .click('input#convert')
      .pause(1000)
      .expect.element('textarea#js-code').value.to.contain('customVariable');
  },
  'Different space string type': function (browser) {
    browser
      .setValue('textarea#text', 'line1\nline2\nline3')
      .setValue('select#string-type', 'json')
      .click('input#convert')
      .pause(1000)
      .expect.element('textarea#js-code').value.to.contain('{');
  },
  'No semi-colon is hidden on JSON type': function (browser) {
    browser
      .setValue('select#string-type', 'json')
      .pause(1000)
      .assert.attributeEquals('#no-semi-colon-field', 'style', 'display: none;');
  },
  'No semi-colon is normally visible': function (browser) {
    browser
      .pause(1000)
      .assert.visible('#no-semi-colon-field');
  },
  'Different spacing': function (browser) {
    browser
      .setValue('textarea#text', 'line1\nline2\nline3')
      .pause(1000)
      .click('#space-type option[value=space4]')
      .pause(1000)
      .click('input#convert')
      .pause(1000)
      .expect.element('textarea#js-code').value.to.contain('    ');
  },
  'Adding newline': function (browser) {
    browser
      .setValue('textarea#text', '    line1     \nline2\n   line3')
      .click('input#trim-padding')
      .click('input#convert')
      .pause(1000)
      .expect.element('textarea#js-code').value.to.contain('var text = "line1"');
  }
};
