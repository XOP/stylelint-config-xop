var TEST_NAME = 'block';

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
                helpers.contains(data.output, 'block-closing-brace-newline-after') === 1,
                'block-closing-brace-newline-after'
            );

            t.ok(
                helpers.contains(data.output, 'block-closing-brace-newline-before') === 4,
                'block-closing-brace-newline-before'
            );

            t.ok(
                helpers.contains(data.output, 'block-closing-brace-space-before') === null,
                'block-closing-brace-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'block-no-empty') === null,
                'block-no-empty'
            );

            t.ok(
                helpers.contains(data.output, 'block-opening-brace-newline-after') === 4,
                'block-opening-brace-newline-after'
            );

            t.ok(
                helpers.contains(data.output, 'block-opening-brace-space-after') === null,
                'block-opening-brace-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'block-opening-brace-space-before') === 1,
                'block-opening-brace-space-before'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
