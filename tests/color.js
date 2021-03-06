var TEST_NAME = 'color';

var path = require('path');
var fs = require('fs');

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
                helpers.contains(data.output, 'color-hex-case') === 1,
                'color-hex-case'
            );

            t.ok(
                helpers.contains(data.output, 'color-hex-length') === 1,
                'color-hex-length'
            );

            t.ok(
                helpers.contains(data.output, 'color-no-named') === 1,
                'color-no-named'
            );

            t.ok(
                helpers.contains(data.output, 'color-no-invalid-hex') === 2,
                'color-no-invalid-hex'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
