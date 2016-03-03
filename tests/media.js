var TEST_NAME = 'media';

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
                helpers.contains(data.output, 'media-feature-colon-space-after') === 1,
                'media-feature-colon-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'media-feature-colon-space-before') === 1,
                'media-feature-colon-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'media-feature-name-no-vendor-prefix') === 1,
                'media-feature-name-no-vendor-prefix'
            );

            t.ok(
                helpers.contains(data.output, 'media-feature-no-missing-punctuation') === 1,
                'media-feature-no-missing-punctuation'
            );

            t.ok(
                helpers.contains(data.output, 'media-feature-range-operator-space-after') === 1,
                'media-feature-range-operator-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'media-feature-range-operator-space-before') === 1,
                'media-feature-range-operator-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'media-query-list-comma-newline-after') === 1,
                'media-query-list-comma-newline-after'
            );

            t.ok(
                helpers.contains(data.output, 'media-query-list-comma-space-after') === 2,
                'media-query-list-comma-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'media-query-list-comma-space-before') === 1,
                'media-query-list-comma-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'media-query-parentheses-space-inside') === 2,
                'media-query-parentheses-space-inside'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
