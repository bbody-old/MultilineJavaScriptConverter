const assert = require('chai').assert;
const stringConverter = require('../../src/converter');

describe('convertText', () => {
  describe('Empty content', () => {
    describe('ECMA6', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', '', stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, 'const someVariable = ``;');
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', '', stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, '\t``;');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', '', stringConverter.ECMA6, false, false, true, 'space4'
        );

        assert.equal(results, '    ``;');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', '', stringConverter.ECMA6, false, false, false, 'tabs'
        );

        assert.equal(results, 'const someVariable = ``');
      });
    });

    describe('JSON', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', '', stringConverter.JSON_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, '{\n\t"someVariable": [\n\t\t""\n\t]\n}');
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', '', stringConverter.JSON_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, '{\n\t"output": [\n\t\t""\n\t]\n}');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', '', stringConverter.JSON_DOUBLE, false, false, true, 'space4'
        );

        assert.equal(results, '{\n    "output": [\n        ""\n    ]\n}');
      });

      it('Base example with trimming', () => {
        let results = stringConverter.convertText(
          'someVariable', '', stringConverter.JSON_DOUBLE, false, true, false, 'tabs'
        );

        assert.equal(results, '{\n\t"someVariable": [\n\n\t]\n}');
      });
    });

    describe('ECMA5 Single Quote', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', '', stringConverter.ECMA5_SINGLE, false, false, true, 'tabs'
        );

        assert.equal(results, 'var someVariable = \'\';');
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', '', stringConverter.ECMA5_SINGLE, false, false, true, 'tabs'
        );

        assert.equal(results, '\t\'\';');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', '', stringConverter.ECMA5_SINGLE, false, false, true, 'space4'
        );

        assert.equal(results, '    \'\';');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', '', stringConverter.ECMA5_SINGLE, false, false, false, 'tabs'
        );

        assert.equal(results, 'var someVariable = \'\'');
      });
    });

    describe('ECMA5 Double Quote', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', '', stringConverter.ECMA5_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, 'var someVariable = "";');
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', '', stringConverter.ECMA5_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, '\t"";');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', '', stringConverter.ECMA5_DOUBLE, false, false, true, 'space4'
        );

        assert.equal(results, '    "";');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', '', stringConverter.ECMA5_DOUBLE, false, false, false, 'tabs'
        );

        assert.equal(results, 'var someVariable = ""');
      });
    });
  });

  describe('Single line of content', () => {
    describe('ECMA6', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', 'some content', stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, 'const someVariable = `some content`;');
      });

      it('Base example called with array', () => {
        let results = stringConverter.convertText(
          'someVariable', ['some content'], stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, 'const someVariable = `some content`;');
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', 'some content', stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, '\t`some content`;');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', 'some content', stringConverter.ECMA6, false, false, true, 'space4'
        );

        assert.equal(results, '    `some content`;');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', 'some content', stringConverter.ECMA6, false, false, false, 'tabs'
        );

        assert.equal(results, 'const someVariable = `some content`');
      });
    });

    describe('JSON', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          'some content',
          stringConverter.JSON_DOUBLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(results, '{\n\t"someVariable": [\n\t\t"some content"\n\t]\n}');
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', 'some content', stringConverter.JSON_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, '{\n\t"output": [\n\t\t"some content"\n\t]\n}');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', 'some content', stringConverter.JSON_DOUBLE, false, false, true, 'space4'
        );

        assert.equal(results, '{\n    "output": [\n        "some content"\n    ]\n}');
      });
    });

    describe('ECMA5 Single Quote', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          'some content',
          stringConverter.ECMA5_SINGLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(results, 'var someVariable = \'some content\';');
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', 'some content', stringConverter.ECMA5_SINGLE, false, false, true, 'tabs'
        );

        assert.equal(results, '\t\'some content\';');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', 'some content', stringConverter.ECMA5_SINGLE, false, false, true, 'space4'
        );

        assert.equal(results, '    \'some content\';');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          'some content',
          stringConverter.ECMA5_SINGLE,
          false,
          false,
          false,
          'tabs'
        );

        assert.equal(results, 'var someVariable = \'some content\'');
      });
    });

    describe('ECMA5 Double Quote', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          'some content',
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(results, 'var someVariable = "some content";');
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', 'some content', stringConverter.ECMA5_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, '\t"some content";');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', 'some content', stringConverter.ECMA5_DOUBLE, false, false, true, 'space4'
        );

        assert.equal(results, '    "some content";');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          'some content',
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          false,
          'tabs'
        );

        assert.equal(results, 'var someVariable = "some content"');
      });
    });
  });

  describe('Multiple line content', () => {
    const multiLineContent = 'Something\nmulti\nline';
    const multiLineContentArray = ['Something', 'multi', 'line'];

    describe('ECMA6', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, `const someVariable = \`${multiLineContent}\`;`);
      });

      it('Base example with array', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContentArray, stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, `const someVariable = \`${multiLineContent}\`;`);
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, `\t\`${multiLineContent}\`;`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, false, false, true, 'space4'
        );

        assert.equal(results, `    \`${multiLineContent}\`;`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, false, false, false, 'tabs'
        );

        assert.equal(results, `const someVariable = \`${multiLineContent}\``);
      });
    });

    describe('ECMA5 Double Quote', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line";'
        );
      });

      it('Base example called with Array', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContentArray,
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line";'
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, '\t"Something" +\n\t"multi" +\n\t"line";');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, false, true, 'space4'
        );

        assert.equal(results, '    "Something" +\n    "multi" +\n    "line";');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          false,
          'tabs'
        );

        assert.equal(
          results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line"'
        );
      });
    });

    describe('ECMA5 Single Quote', () => {
      describe('Different tab spacing', () => {
        it('Base example with tabs replacing tabs', () => {
          let results = stringConverter.convertText(
            '', multiLineContent, stringConverter.ECMA5_SINGLE, false, false, true, 'tabs'
          );

          assert.equal(
            results, '\t\'Something\' +\n\t\'multi\' +\n\t\'line\';'
          );
        });

        it('Base example with 2 spaces replacing tabs', () => {
          let results = stringConverter.convertText(
            '', multiLineContent, stringConverter.ECMA5_SINGLE, false, false, true, 'space2'
          );

          assert.equal(
            results, '  \'Something\' +\n  \'multi\' +\n  \'line\';'
          );
        });

        it('Base example with 4 spaces replacing tabs', () => {
          let results = stringConverter.convertText(
            '', multiLineContent, stringConverter.ECMA5_SINGLE, false, false, true, 'space4'
          );

          assert.equal(
            results, '    \'Something\' +\n    \'multi\' +\n    \'line\';'
          );
        });

        it('Base example with 8 spaces replacing tabs', () => {
          let results = stringConverter.convertText(
            '', multiLineContent, stringConverter.ECMA5_SINGLE, false, false, true, 'space8'
          );

          assert.equal(
            results,
            '        \'Something\' +\n        \'multi\' +\n        \'line\';'
          );
        });
      });
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results,
          'var someVariable = \'Something\' +\n\t\'multi\' +\n\t\'line\';'
        );
      });

      it('Base example called with Array', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContentArray,
          stringConverter.ECMA5_SINGLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results,
          'var someVariable = \'Something\' +\n\t\'multi\' +\n\t\'line\';'
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, false, false, true, 'tabs'
        );

        assert.equal(results, '\t\'Something\' +\n\t\'multi\' +\n\t\'line\';');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          false,
          false,
          false,
          'tabs'
        );

        assert.equal(
          results,
          'var someVariable = \'Something\' +\n\t\'multi\' +\n\t\'line\''
        );
      });
    });

    describe('ECMA5 Double Quote', () => {
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line";'
        );
      });

      it('Base example called with Array', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContentArray,
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line";'
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, '\t"Something" +\n\t"multi" +\n\t"line";');
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, false, true, 'space4'
        );

        assert.equal(results, '    "Something" +\n    "multi" +\n    "line";');
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          false,
          'tabs'
        );

        assert.equal(
          results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line"'
        );
      });
    });
  });

  describe('Multiple line of content which needs to be escaped', () => {
    const multiLineContent = '`\n\'\n"';

    describe('ECMA6', () => {
      const multiLineContentExpected = '\\`\n\'\n"';
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\`;`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, false, false, true, 'tabs'
        );

        assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, false, false, true, 'space4'
        );

        assert.equal(results, `    \`${multiLineContentExpected}\`;`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, false, false, false, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\``
        );
      });
    });

    describe('JSON', () => {
      const multiLineContentExpected = '[\n\t\t"`",\n\t\t"\'",\n\t\t"\\""\n\t]';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.JSON_DOUBLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, `{\n\t"someVariable": ${multiLineContentExpected}\n}`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, `{\n\t"output": ${multiLineContentExpected}\n}`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, false, false, true, 'space4'
        );

        assert.equal(results, `{\n    "output": ${multiLineContentExpectedSpaces}\n}`);
      });
    });

    describe('ECMA5 Single Quote', () => {
      const multiLineContentExpected = "'`' +\n\t'\\'' +\n\t'\"'";
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, false, false, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, false, false, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          false,
          false,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });

    describe('ECMA5 Double Quote', () => {
      const multiLineContentExpected = '"`" +\n\t"\'" +\n\t"\\""';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, false, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, false, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          false,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });
  });

  describe('Trim text', () => {
    const multiLineContent = '    \n  A  \n  .  ';

    describe('ECMA6', () => {
      const multiLineContentExpected = 'A\n.';

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, false, true, true, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\`;`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, false, true, true, 'tabs'
        );

        assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, false, true, true, 'space4'
        );

        assert.equal(results, `    \`${multiLineContentExpected}\`;`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, false, true, false, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\``
        );
      });
    });

    describe('JSON', () => {
      const multiLineContentExpected = '[\n\t\t"A",\n\t\t"."\n\t]';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.JSON_DOUBLE,
          false,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `{\n\t"someVariable": ${multiLineContentExpected}\n}`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, false, true, true, 'tabs'
        );

        assert.equal(results, `{\n\t"output": ${multiLineContentExpected}\n}`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, false, true, true, 'space4'
        );

        assert.equal(results, `{\n    "output": ${multiLineContentExpectedSpaces}\n}`);
      });
    });

    describe('ECMA5 Single Quote', () => {
      const multiLineContentExpected = "'A' +\n\t'.'";
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          false,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, false, true, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, false, true, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          false,
          true,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });

    describe('ECMA5 Double Quote', () => {
      const multiLineContentExpected = '"A" +\n\t"."';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, true, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, true, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          true,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });
  });

  describe('Add new lines', () => {
    const multiLineContent = '\n\n\n\n';

    describe('ECMA6', () => {
      const multiLineContentExpected = '\\n\n\\n\n\\n\n\\n\n\\n';

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, true, false, true, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\`;`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, true, false, true, 'tabs'
        );

        assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, true, false, true, 'space4'
        );

        assert.equal(results, `    \`${multiLineContentExpected}\`;`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, true, false, false, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\``
        );
      });
    });

    describe('JSON', () => {
      const multiLineContentExpected = `[\n\t\t"\\n",\n\t\t"\\n",\n\t\t"\\n",\n\t\t"\\n",\n\t\t"\\n"\n\t]`;
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.JSON_DOUBLE,
          true,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, `{\n\t"someVariable": ${multiLineContentExpected}\n}`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, true, false, true, 'tabs'
        );

        assert.equal(results, `{\n\t"output": ${multiLineContentExpected}\n}`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, true, false, true, 'space4'
        );

        assert.equal(results, `{\n    "output": ${multiLineContentExpectedSpaces}\n}`);
      });
    });

    describe('ECMA5 Single Quote', () => {
      const multiLineContentExpected = "'\\n' +\n\t'\\n' +\n\t'\\n' +" +
        "\n\t'\\n' +\n\t'\\n'";
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          true,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, true, false, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, true, false, true, 'space4'
        );
        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          true,
          false,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });

    describe('ECMA5 Double Quote', () => {
      const multiLineContentExpected = '"\\n" +\n\t"\\n" +\n\t"\\n" +' +
        '\n\t"\\n" +\n\t"\\n"';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          true,
          false,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, true, false, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, true, false, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          true,
          false,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });
  });

  describe('Trim text', () => {
    const multiLineContent = '    \n  A  \n  .  ';

    describe('ECMA6', () => {
      const multiLineContentExpected = 'A\n.';

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, false, true, true, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\`;`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, false, true, true, 'tabs'
        );

        assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, false, true, true, 'space4'
        );

        assert.equal(results, `    \`${multiLineContentExpected}\`;`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, false, true, false, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\``
        );
      });
    });

    describe('JSON', () => {
      const multiLineContentExpected = '[\n\t\t"A",\n\t\t"."\n\t]';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );
      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.JSON_DOUBLE,
          false,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `{\n\t"someVariable": ${multiLineContentExpected}\n}`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, false, true, true, 'tabs'
        );

        assert.equal(results, `{\n\t"output": ${multiLineContentExpected}\n}`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, false, true, true, 'space4'
        );

        assert.equal(results, `{\n    "output": ${multiLineContentExpectedSpaces}\n}`);
      });
    });

    describe('ECMA5 Single Quote', () => {
      const multiLineContentExpected = "'A' +\n\t'.'";
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          false,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, false, true, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, false, true, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          false,
          true,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });

    describe('ECMA5 Double Quote', () => {
      const multiLineContentExpected = '"A" +\n\t"."';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, true, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, false, true, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          false,
          true,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });
  });

  describe('Trim text and add newlines', () => {
    const multiLineContent = '    \n  A  \n  .  ';

    describe('ECMA6', () => {
      const multiLineContentExpected = 'A\\n\n.\\n';

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, true, true, true, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\`;`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, true, true, true, 'tabs'
        );

        assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA6, true, true, true, 'space4'
        );

        assert.equal(results, `    \`${multiLineContentExpected}\`;`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable', multiLineContent, stringConverter.ECMA6, true, true, false, 'tabs'
        );

        assert.equal(
          results, `const someVariable = \`${multiLineContentExpected}\``
        );
      });
    });

    describe('JSON', () => {
      const multiLineContentExpected = '[\n\t\t"A\\n",\n\t\t".\\n"\n\t]';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.JSON_DOUBLE,
          true,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `{\n\t"someVariable": ${multiLineContentExpected}\n}`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, true, true, true, 'tabs'
        );

        assert.equal(results, `{\n\t"output": ${multiLineContentExpected}\n}`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.JSON_DOUBLE, true, true, true, 'space4'
        );

        assert.equal(results, `{\n    "output": ${multiLineContentExpectedSpaces}\n}`);
      });
    });

    describe('ECMA5 Single Quote', () => {
      const multiLineContentExpected = "'A\\n' +\n\t'.\\n'";
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          true,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, true, true, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_SINGLE, true, true, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_SINGLE,
          true,
          true,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });

    describe('ECMA5 Double Quote', () => {
      const multiLineContentExpected = '"A\\n" +\n\t".\\n"';
      const multiLineContentExpectedSpaces = multiLineContentExpected.replace(
        /\t/g, '    '
      );

      it('Base example', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          true,
          true,
          true,
          'tabs'
        );

        assert.equal(
          results, `var someVariable = ${multiLineContentExpected};`
        );
      });

      it('Base example with no variable name', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, true, true, true, 'tabs'
        );

        assert.equal(results, `\t${multiLineContentExpected};`);
      });

      it('Base example with 4 spaces replacing tabs', () => {
        let results = stringConverter.convertText(
          '', multiLineContent, stringConverter.ECMA5_DOUBLE, true, true, true, 'space4'
        );

        assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
      });

      it('Base example with no semi-colon', () => {
        let results = stringConverter.convertText(
          'someVariable',
          multiLineContent,
          stringConverter.ECMA5_DOUBLE,
          true,
          true,
          false,
          'tabs'
        );

        assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
      });
    });
  });
});
