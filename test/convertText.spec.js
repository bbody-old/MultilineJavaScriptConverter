var assert = require('chai').assert;
var stringConverter = require('../src/converter');

describe('convertText', () => {
    const ECMA6 = "ecma6";
    const ECMA5_SINGLE = "ecma5single";
    const ECMA5_DOUBLE = "ecma5double";

    describe('Empty content', () => {
        describe('ECMA6', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA6, false, false, true, "tabs");

                assert.equal(results, 'const someVariable = ``;');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', '', ECMA6, false, false, true, "tabs");

                assert.equal(results, '\t``;');
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', '', ECMA6, false, false, true, "space4");

                assert.equal(results, '    ``;');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA6, false, false, false, "tabs");

                assert.equal(results, 'const someVariable = ``');
            });
        });

        describe('ECMA5 Single Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA5_SINGLE, false, false, true, "tabs");

                assert.equal(results, 'var someVariable = \'\';');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', '', ECMA5_SINGLE, false, false, true, "tabs");

                assert.equal(results, '\t\'\';');
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', '', ECMA5_SINGLE, false, false, true, "space4");

                assert.equal(results, '    \'\';');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA5_SINGLE, false, false, false, "tabs");

                assert.equal(results, 'var someVariable = \'\'');
            });
        });

        describe('ECMA5 Double Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA5_DOUBLE, false, false, true, "tabs");

                assert.equal(results, 'var someVariable = "";');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', '', ECMA5_DOUBLE, false, false, true, "tabs");

                assert.equal(results, '\t"";');
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', '', ECMA5_DOUBLE, false, false, true, "space4");

                assert.equal(results, '    "";');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', '', ECMA5_DOUBLE, false, false, false, "tabs");

                assert.equal(results, 'var someVariable = ""');
            });
        });
    });

    describe('Single line of content', () => {
        describe('ECMA6', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA6, false, false, true, "tabs");

                assert.equal(results, 'const someVariable = `some content`;');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', 'some content', ECMA6, false, false, true, "tabs");

                assert.equal(results, '\t`some content`;');
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', 'some content', ECMA6, false, false, true, "space4");

                assert.equal(results, '    `some content`;');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA6, false, false, false, "tabs");

                assert.equal(results, 'const someVariable = `some content`');
            });
        });

        describe('ECMA5 Single Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_SINGLE, false, false, true, "tabs");

                assert.equal(results, 'var someVariable = \'some content\';');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', 'some content', ECMA5_SINGLE, false, false, true, "tabs");

                assert.equal(results, '\t\'some content\';');
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', 'some content', ECMA5_SINGLE, false, false, true, "space4");

                assert.equal(results, '    \'some content\';');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_SINGLE, false, false, false, "tabs");

                assert.equal(results, 'var someVariable = \'some content\'');
            });
        });

        describe('ECMA5 Double Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_DOUBLE, false, false, true, "tabs");

                assert.equal(results, 'var someVariable = "some content";');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', 'some content', ECMA5_DOUBLE, false, false, true, "tabs");

                assert.equal(results, '\t"some content";');
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', 'some content', ECMA5_DOUBLE, false, false, true, "space4");

                assert.equal(results, '    "some content";');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_DOUBLE, false, false, false, "tabs");

                assert.equal(results, 'var someVariable = "some content"');
            });
        });
    });

    describe('Multiple line content', () => {
        const multiLineContent = 'Something\nmulti\nline';

        describe('ECMA6', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, false, true, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContent}\`;`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, false, true, "tabs");

                assert.equal(results, `\t\`${multiLineContent}\`;`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, false, true, "space4");

                assert.equal(results, `    \`${multiLineContent}\`;`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, false, false, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContent}\``);
            });
        });

        describe('ECMA5 Single Quote', () => {
            describe('Different tab spacing', () => {
                it('Base example with tabs replacing tabs', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, false, true, "tabs");

                    assert.equal(results, '\t\'Something\' +\n\t\'multi\' +\n\t\'line\';');
                });

                it('Base example with 2 spaces replacing tabs', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, false, true, "space2");

                    assert.equal(results, '  \'Something\' +\n  \'multi\' +\n  \'line\';');
                });

                it('Base example with 4 spaces replacing tabs', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, false, true, "space4");

                    assert.equal(results, '    \'Something\' +\n    \'multi\' +\n    \'line\';');
                });

                it('Base example with 8 spaces replacing tabs', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, false, true, "space8");

                    assert.equal(results, '        \'Something\' +\n        \'multi\' +\n        \'line\';');
                });
            });
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, false, true, "tabs");

                assert.equal(results, 'var someVariable = \'Something\' +\n\t\'multi\' +\n\t\'line\';');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, false, true, "tabs");

                assert.equal(results, '\t\'Something\' +\n\t\'multi\' +\n\t\'line\';');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, false, false, "tabs");

                assert.equal(results, 'var someVariable = \'Something\' +\n\t\'multi\' +\n\t\'line\'');
            });
        });

        describe('ECMA5 Double Quote', () => {
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, false, true, "tabs");

                assert.equal(results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line";');
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, false, true, "tabs");

                assert.equal(results, '\t"Something" +\n\t"multi" +\n\t"line";');
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, false, true, "space4");

                assert.equal(results, '    "Something" +\n    "multi" +\n    "line";');
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, false, false, "tabs");

                assert.equal(results, 'var someVariable = "Something" +\n\t"multi" +\n\t"line"');
            });
        });
    });

    describe('Multiple line of content which needs to be escaped', () => {
        const multiLineContent = '`\n\'\n"';

        describe('ECMA6', () => {
            const multiLineContentExpected = '\\\`\n\'\n"';
            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, false, true, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, false, true, "tabs");

                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, false, true, "space4");

                assert.equal(results, `    \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, false, false, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });

        describe('ECMA5 Single Quote', () => {
            const multiLineContentExpected = "'`' +\n\t'\\\'' +\n\t'\"'";
            const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, false, true, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, false, true, "tabs");

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, false, true, "space4");

                assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, false, false, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });

        describe('ECMA5 Double Quote', () => {
            const multiLineContentExpected = '"`" +\n\t"\'" +\n\t"\\\""';
            const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, false, true, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, false, true, "tabs");

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, false, true, "space4");

                assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, false, false, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });

    describe('Trim text', () => {
        const multiLineContent = '    \n  A  \n  .  ';

        describe('ECMA6', () => {
            const multiLineContentExpected = 'A\n.';

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, true, true, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, true, true, "tabs");

                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, true, true, "space4");

                assert.equal(results, `    \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, true, false, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });

        describe('ECMA5 Single Quote', () => {
            const multiLineContentExpected = "'A' +\n\t'.'";
            const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, true, true, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, true, true, "tabs");

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, true, true, "space4");

                assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, true, false, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });

        describe('ECMA5 Double Quote', () => {
            const multiLineContentExpected = '"A" +\n\t"."';
            const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, true, true, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, true, true, "tabs");

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, true, true, "space4");

                assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, true, false, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });

    describe('Add new lines', () => {
        const multiLineContent = '\n\n\n\n';

        describe('ECMA6', () => {
            const multiLineContentExpected = '\\n\n\\n\n\\n\n\\n\n\\n';

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, true, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, true, false, true, "tabs");

                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, true, false, true, "space4");

                assert.equal(results, `    \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, false, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });

        describe('ECMA5 Single Quote', () => {
            const multiLineContentExpected = "'\\n' +\n\t'\\n' +\n\t'\\n' +\n\t'\\n' +\n\t'\\n'";
            const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, true, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, false, true, "tabs");

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, false, true, "space4");
                assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, false, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });

        describe('ECMA5 Double Quote', () => {
            const multiLineContentExpected = '"\\n" +\n\t"\\n" +\n\t"\\n" +\n\t"\\n" +\n\t"\\n"';
            const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, true, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, false, true, "tabs");

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, false, true, "space4");

                assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, false, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });

    describe('Trim text', () => {
        const multiLineContent = '    \n  A  \n  .  ';

        describe('ECMA6', () => {
            const multiLineContentExpected = 'A\n.';

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, true, true, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, true, true, "tabs");

                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, false, true, true, "space4");

                assert.equal(results, `    \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, false, true, false, "tabs");

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });

        describe('ECMA5 Single Quote', () => {
            const multiLineContentExpected = "'A' +\n\t'.'";
            const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, true, true, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, true, true, "tabs");

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, false, true, true, "space4");

                assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, false, true, false, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });

        describe('ECMA5 Double Quote', () => {
            const multiLineContentExpected = '"A" +\n\t"."';
            const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

            it('Base example', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, true, true, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, true, true, "tabs");

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with 4 spaces replacing tabs', () => {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, false, true, true, "space4");

                assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
            });

            it('Base example with no semi-colon', () => {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, false, true, false, "tabs");

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });

    describe('Trim text and add newlines', () => {
            const multiLineContent = '    \n  A  \n  .  ';

            describe('ECMA6', () => {
                const multiLineContentExpected = 'A\\n\n.\\n';

                it('Base example', () => {
                    let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, true, true, "tabs");

                    assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
                });

                it('Base example with no variable name', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA6, true, true, true, "tabs");

                    assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
                });

                it('Base example with 4 spaces replacing tabs', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA6, true, true, true, "space4");

                    assert.equal(results, `    \`${multiLineContentExpected}\`;`);
                });

                it('Base example with no semi-colon', () => {
                    let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, true, false, "tabs");

                    assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
                });
            });

            describe('ECMA5 Single Quote', () => {
                const multiLineContentExpected = "'A\\n' +\n\t'.\\n'";
                const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

                it('Base example', () => {
                    let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, true, true, "tabs");

                    assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
                });

                it('Base example with no variable name', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, true, true, "tabs");

                    assert.equal(results, `\t${multiLineContentExpected};`);
                });

                it('Base example with 4 spaces replacing tabs', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, true, true, "space4");

                    assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
                });

                it('Base example with no semi-colon', () => {
                    let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, true, false, "tabs");

                    assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
                });
            });

            describe('ECMA5 Double Quote', () => {
                const multiLineContentExpected = '"A\\n" +\n\t".\\n"';
                const multiLineContentExpectedSpaces = multiLineContentExpected.replace(/\t/g, '    ');

                it('Base example', () => {
                    let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, true, true, "tabs");

                    assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
                });

                it('Base example with no variable name', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, true, true, "tabs");

                    assert.equal(results, `\t${multiLineContentExpected};`);
                });

                it('Base example with 4 spaces replacing tabs', () => {
                    let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, true, true, "space4");

                    assert.equal(results, `    ${multiLineContentExpectedSpaces};`);
                });

                it('Base example with no semi-colon', () => {
                    let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, true, false, "tabs");

                    assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
                });
            });
        });
});