var TEST_NAME = 'rule';

var path = require('path');

var test = require('tape');
var helpers = require('./_helpers');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './' + TEST_NAME + '.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};


test(TEST_NAME, function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            helpers.title(TEST_NAME);

            t.ok(
                helpers.contains(data.output, 'rule-nested-empty-line-before') === 2,
                'rule-nested-empty-line-before'
            );

            t.ok(
                helpers.contains(data.output, 'rule-no-duplicate-properties') === 1,
                'rule-no-duplicate-properties'
            );

            t.ok(
                helpers.contains(data.output, 'rule-no-shorthand-property-overrides') === 1,
                'rule-no-shorthand-property-overrides'
            );

            t.ok(
                helpers.contains(data.output, 'rule-non-nested-empty-line-before') === 1,
                'rule-non-nested-empty-line-before'
            );

            t.ok(
                helpers.contains(data.output, 'rule-trailing-semicolon') === 1,
                'rule-trailing-semicolon'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
