var TEST_NAME = 'number';

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
                helpers.contains(data.output, 'number-leading-zero') === 1,
                'number-leading-zero'
            );

            t.ok(
                helpers.contains(data.output, 'number-max-precision') === 1,
                'number-max-precision'
            );

            t.ok(
                helpers.contains(data.output, 'number-no-trailing-zeros') === 1,
                'number-no-trailing-zeros'
            );

            t.ok(
                helpers.contains(data.output, 'number-zero-length-no-unit') === 1,
                'number-zero-length-no-unit'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
