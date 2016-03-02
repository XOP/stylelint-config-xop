var TEST_NAME = 'value';

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
                helpers.contains(data.output, 'value-list-comma-newline-after') === 1,
                'value-list-comma-newline-after'
            );

            t.ok(
                helpers.contains(data.output, 'value-list-comma-newline-before') === 1,
                'value-list-comma-newline-before'
            );

            t.ok(
                helpers.contains(data.output, 'value-list-comma-space-after') === 2,
                'value-list-comma-space-after'
            );

            t.ok(
                helpers.contains(data.output, 'value-list-comma-space-before') === 2,
                'value-list-comma-space-before'
            );

            t.ok(
                helpers.contains(data.output, 'value-no-vendor-prefix') === 1,
                'value-no-vendor-prefix'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
