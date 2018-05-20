var assert = require('chai').assert;
var stringConverter = require('../src/converter');

describe('convertText', function () {
	const ECMA6 = "ecma6";
	const ECMA5_SINGLE = "ecma5single";
	const ECMA5_DOUBLE = "ecma5double";

    describe('Empty content', function () {
        describe('ECMA6', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', '', ECMA6, true, false, true);

                assert.equal(results, 'const someVariable = ``;');
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', '', ECMA6, true, false, true);

                assert.equal(results, '\t``;');
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', '', ECMA6, true, false, false);

                assert.equal(results, 'const someVariable = ``');
            });
        });

        describe('ECMA5 Single Quote', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', '', ECMA5_SINGLE, true, false, true);

                assert.equal(results, 'var someVariable = \'\';');
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', '', ECMA5_SINGLE, true, false, true);

                assert.equal(results, '\t\'\';');
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', '', ECMA5_SINGLE, true, false, false);

                assert.equal(results, 'var someVariable = \'\'');
            });
        });

        describe('ECMA5 Double Quote', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', '', ECMA5_DOUBLE, true, false, true);

                assert.equal(results, 'var someVariable = "";');
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', '', ECMA5_DOUBLE, true, false, true);

                assert.equal(results, '\t"";');
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', '', ECMA5_DOUBLE, true, false, false);

                assert.equal(results, 'var someVariable = ""');
            });
        });
    });

    describe('Single line of content', function () {
        describe('ECMA6', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA6, true, false, true);

                assert.equal(results, 'const someVariable = `some content`;');
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', 'some content', ECMA6, true, false, true);

                assert.equal(results, '\t`some content`;');
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA6, true, false, false);

                assert.equal(results, 'const someVariable = `some content`');
            });
        });

        describe('ECMA5 Single Quote', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_SINGLE, true, false, true);

                assert.equal(results, 'var someVariable = \'some content\';');
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', 'some content', ECMA5_SINGLE, true, false, true);

                assert.equal(results, '\t\'some content\';');
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_SINGLE, true, false, false);

                assert.equal(results, 'var someVariable = \'some content\'');
            });
        });
        
        describe('ECMA5 Double Quote', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_DOUBLE, true, false, true);

                assert.equal(results, 'var someVariable = "some content";');
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', 'some content', ECMA5_DOUBLE, true, false, true);

                assert.equal(results, '\t"some content";');
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', 'some content', ECMA5_DOUBLE, true, false, false);

                assert.equal(results, 'var someVariable = "some content"');
            });
        });
    });

    describe('Multiple line content', function () {
        const multiLineContent = 'Something\nmulti\nline';

        describe('ECMA6', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, true);

                assert.equal(results, `const someVariable = \`${multiLineContent}\`;`);
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, true, false, true);

                assert.equal(results, `\t\`${multiLineContent}\`;`);
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, false);

                assert.equal(results, `const someVariable = \`${multiLineContent}\``);
            });
        });

        describe('ECMA5 Single Quote', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, true);

                assert.equal(results, "var someVariable = 'Something'\n\t+ 'multi'\n\t+ 'line';");
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, false, true);

                assert.equal(results, "\t'Something'\n\t+ 'multi'\n\t+ 'line';");
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, false);

                assert.equal(results, "var someVariable = 'Something'\n\t+ 'multi'\n\t+ 'line'");
            });
        });
        
        describe('ECMA5 Double Quote', function(){
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, true);

                assert.equal(results, 'var someVariable = "Something"\n\t+ "multi"\n\t+ "line";');
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, false, true);

                assert.equal(results, '\t"Something"\n\t+ "multi"\n\t+ "line";');
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, false);

                assert.equal(results, 'var someVariable = "Something"\n\t+ "multi"\n\t+ "line"');
            });
        });
    });

    describe('Multiple line of content which needs to be escaped', function () {
        const multiLineContent = '`\n\'\n"';

        describe('ECMA6', function(){
            const multiLineContentExpected = '\\\`\n\'\n"';
            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, true);

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\`;`);
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', multiLineContent, ECMA6, true, false, true);

                assert.equal(results, `\t\`${multiLineContentExpected}\`;`);
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA6, true, false, false);

                assert.equal(results, `const someVariable = \`${multiLineContentExpected}\``);
            });
        });

        describe('ECMA5 Single Quote', function(){
            const multiLineContentExpected = "'`'\n\t+ '\\\''\n\t+ '\"'";

            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, true);

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_SINGLE, true, false, true);

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_SINGLE, true, false, false);

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
        
        describe('ECMA5 Double Quote', function(){
            const multiLineContentExpected = '"`"\n\t+ "\'"\n\t+ "\\\""';

            it('Base example', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, true);

                assert.equal(results, `var someVariable = ${multiLineContentExpected};`);
            });

            it('Base example with no variable name', function () {
                let results = stringConverter.convertText('', multiLineContent, ECMA5_DOUBLE, true, false, true);

                assert.equal(results, `\t${multiLineContentExpected};`);
            });

            it('Base example with no semi-colon', function () {
                let results = stringConverter.convertText('someVariable', multiLineContent, ECMA5_DOUBLE, true, false, false);

                assert.equal(results, `var someVariable = ${multiLineContentExpected}`);
            });
        });
    });
});