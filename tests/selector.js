var TEST_NAME = 'selector';

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
                helpers.contains(data.output, 'selector-combinator-space-after') === 1,
                'selector-combinator-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'selector-combinator-space-before') === 1,
                'selector-combinator-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'selector-list-comma-newline-after') === 3,
                'selector-list-comma-newline-after'
            );

            t.ok(
                helpers.contains(data.output, 'selector-list-comma-newline-before') === 2,
                'selector-list-comma-newline-before'
            );

            t.ok(
                helpers.contains(data.output, 'selector-list-comma-space-before') === 3,
                'selector-list-comma-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'selector-no-id') === 1,
                'selector-no-id'
            );

            t.ok(
                helpers.contains(data.output, 'selector-no-type') === 2,
                'selector-no-type'
            );

            t.ok(
                helpers.contains(data.output, 'selector-no-universal') === 1,
                'selector-no-universal'
            );

            t.ok(
                helpers.contains(data.output, 'selector-no-vendor-prefix') === 2,
                'selector-no-vendor-prefix'
            );

            t.ok(
                helpers.contains(data.output, 'selector-pseudo-element-colon-notation') === 1,
                'selector-pseudo-element-colon-notation'
            );

            t.ok(
                helpers.contains(data.output, 'selector-root-no-composition') === 1,
                'selector-root-no-composition'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
