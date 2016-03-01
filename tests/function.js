var TEST_NAME = 'function';

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
                helpers.contains(data.output, 'function-calc-no-unspaced-operator') === 3,
                'function-calc-no-unspaced-operator'
            );

            t.ok(
                helpers.contains(data.output, 'function-comma-newline-after') === 2,
                'function-comma-newline-after'
            );

            t.ok(
                helpers.contains(data.output, 'function-comma-newline-before') === 1,
                'function-comma-newline-before'
            );

            t.ok(
                helpers.contains(data.output, 'function-comma-space-after') === 2,
                'function-comma-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'function-comma-space-before') === 2,
                'function-comma-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'function-linear-gradient-no-nonstandard-direction') === 2,
                'function-linear-gradient-no-nonstandard-direction'
            );

            t.ok(
                helpers.contains(data.output, 'function-parentheses-space-inside') === 2,
                'function-parentheses-space-inside'
            );

            t.ok(
                helpers.contains(data.output, 'function-url-quotes') === 1,
                'function-url-quotes'
            );

            t.ok(
                helpers.contains(data.output, 'function-whitespace-after') === 1,
                'function-whitespace-after'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
