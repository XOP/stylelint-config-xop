var TEST_NAME = 'declaration';

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
                helpers.contains(data.output, 'declaration-bang-space-after') === 1,
                'declaration-bang-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'declaration-bang-space-before') === 2,
                'declaration-bang-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'declaration-block-no-single-line') === 2,
                'declaration-block-no-single-line'
            );

            t.ok(
                helpers.contains(data.output, 'declaration-block-semicolon-newline-after') === 2,
                'declaration-block-semicolon-newline-after'
            );

            t.ok(
                helpers.contains(data.output, 'declaration-block-semicolon-newline-before') === 2,
                'declaration-block-semicolon-newline-before'
            );

            t.ok(
                helpers.contains(data.output, 'declaration-block-semicolon-space-before') === 2,
                'declaration-block-semicolon-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'declaration-colon-newline-after') === 1,
                'declaration-colon-newline-after'
            );

            t.ok(
                helpers.contains(data.output, 'declaration-colon-space-after') === 2,
                'declaration-colon-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'declaration-colon-space-before') === 1,
                'declaration-colon-space-before'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
