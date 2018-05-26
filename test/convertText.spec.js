var assert = require('chai').assert;
var stringConverter = require('../src/converter');

describe('convertText', () => {
	const ECMA6 = "ecma6";
	const ECMA5_SINGLE = "ecma5single";
	const ECMA5_DOUBLE = "ecma5double";

    describe('Empty content', () => {
        describe('ECMA6', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA6, true, false, true);

                assert.equal(results, 'const someVariable = ``;');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', '', ECMA6, true, false, true);

                assert.equal(results, '\t``;');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA6, true, false, false);

                assert.equal(results, 'const someVariable = ``');
            });
        });

        describe('ECMA5 Single Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA5_SINGLE, true, false, true);

                assert.equal(results, 'var someVariable = \'\';');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', '', ECMA5_SINGLE, true, false, true);

                assert.equal(results, '\t\'\';');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA5_SINGLE, true, false, false);

                assert.equal(results, 'var someVariable = \'\'');
            });
        });

        describe('ECMA5 Double Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA5_DOUBLE, true, false, true);

                assert.equal(results, 'var someVariable = "";');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', '', ECMA5_DOUBLE, true, false, true);

                assert.equal(results, '\t"";');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA5_DOUBLE, true, false, false);

                assert.equal(results, 'var someVariable = ""');
            });
        });
    });

    describe('Single line of content', () => {
        describe('ECMA6', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA6, true, false, true);

                assert.equal(results, 'const someVariable = `some content`;');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', 'some content', ECMA6, true, false, true);

                assert.equal(results, '\t`some content`;');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA6, true, false, false);

                assert.equal(results, 'const someVariable = `some content`');
            });
        });

        describe('ECMA5 Single Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_SINGLE, true, false, true);

                assert.equal(results, 'var someVariable = \'some content\';');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', 'some content', ECMA5_SINGLE, true, false, true);

                assert.equal(results, '\t\'some content\';');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_SINGLE, true, false, false);

                assert.equal(results, 'var someVariable = \'some content\'');
            });
        });

        describe('ECMA5 Double Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_DOUBLE, true, false, true);

                assert.equal(results, 'var someVariable = "some content";');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', 'some content', ECMA5_DOUBLE, true, false, true);

                assert.equal(results, '\t"some content";');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_DOUBLE, true, false, false);

                assert.equal(results, 'var someVariable = "some content"');
            });
        });
    });

    describe('Multiple line content', () => {
        const multiLineContent = 'Something\nmulti\nline';

        describe('ECMA6', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, true);

                assert.equal(results, `const someVariable = \`${multiLineContent}\`;`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, true, false, true);

                assert.equal(results, `\t\`${multiLineContent}\`;`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, false);

                assert.equal(results, `const someVariable = \`${multiLineContent}\``);
            });
        });

        describe('ECMA5 Single Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, true);

                assert.equal(results, "var someVariable = 'Something' +\n\t'multi' +\n\t'line';");
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, false, true);

                assert.equal(results, "\t'Something' +\n\t'multi' +\n\t'line';");
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, false);

                assert.equal(results, "var someVariable = 'Something' +\n\t'multi' +\n\t'line'");
            });
        });

        describe('ECMA5 Double Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, true);

                assert.equal(results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line";');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, false, true);

                assert.equal(results, '\t"Something" +\n\t"multi" +\n\t"line";');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, false);

                assert.equal(results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line"');
            });
        });
    });

    describe('Multiple line of content which needs to be escaped', () => {
        const multiLineContent = '`\n\'\n"';
		
        describe('ECMA6', () => {
            const multiLineContentExpected = '\\\`\n\'\n"';
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, true);
		
                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, true, false, true);
		
                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, false);
		
                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });
		
        describe('ECMA5 Single Quote', () => {
            const multiLineContentExpected = "'`' +\n\t'\\\'' +\n\t'\"'";
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, true);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, false, true);
		
                assert.equal(results, `\t${multiLineContentExpected};`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, false);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
		
        describe('ECMA5 Double Quote', () => {
            const multiLineContentExpected = '"`" +\n\t"\'" +\n\t"\\\""';
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, true);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, false, true);
		
                assert.equal(results, `\t${multiLineContentExpected};`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, false);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });
		
    describe('Trim text', () => {
        const multiLineContent = '    \n  A  \n  .  ';
		
        describe('ECMA6', () => {
            const multiLineContentExpected = '\nA\n.';
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, true, true);
		
                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, true, true, true);
		
                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, true, false);
		
                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });
		
        describe('ECMA5 Single Quote', () => {
            const multiLineContentExpected = "'' +\n\t'A' +\n\t'.'";
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, true, true);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, true, true);
		
                assert.equal(results, `\t${multiLineContentExpected};`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, true, false);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
		
        describe('ECMA5 Double Quote', () => {
            const multiLineContentExpected = '"" +\n\t"A" +\n\t"."';
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, true, true);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, true, true);
		
                assert.equal(results, `\t${multiLineContentExpected};`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, true, false);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });
		
    describe('No new lines', () => {
        const multiLineContent = '\n\n\n\n';
		
        describe('ECMA6', () => {
            const multiLineContentExpected = '';
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, false, true);
		
                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, false, true);
		
                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, false, false);
		
                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });
		
        describe('ECMA5 Single Quote', () => {
            const multiLineContentExpected = "''";
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, false, true);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, false, true);
		
                assert.equal(results, `\t${multiLineContentExpected};`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, false, false);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
		
        describe('ECMA5 Double Quote', () => {
            const multiLineContentExpected = '""';
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, false, true);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, false, true);
		
                assert.equal(results, `\t${multiLineContentExpected};`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, false, false);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });
		
    describe('Trim text and no newlines', () => {
        const multiLineContent = '    \n  A  \n  .  ';
		
        describe('ECMA6', () => {
            const multiLineContentExpected = 'A\n.';
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, true, true);
		
                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, true, true);
		
                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, true, false);
		
                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });
		
        describe('ECMA5 Single Quote', () => {
            const multiLineContentExpected = "'A' +\n\t'.'";
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, true, true);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, true, true);
		
                assert.equal(results, `\t${multiLineContentExpected};`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, true, false);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
		
        describe('ECMA5 Double Quote', () => {
            const multiLineContentExpected = '"A" +\n\t"."';
		
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, true, true);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });
		
            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, true, true);
		
                assert.equal(results, `\t${multiLineContentExpected};`);
            });
		
            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, true, false);
		
                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });
});
