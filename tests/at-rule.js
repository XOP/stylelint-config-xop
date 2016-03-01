var TEST_NAME = 'at-rule';

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
                helpers.contains(data.output, 'at-rule-empty-line-before') === 2,
                'at-rule-empty-line-before'
            );

            t.ok(
                helpers.contains(data.output, 'at-rule-no-vendor-prefix') === 1,
                'at-rule-no-vendor-prefix'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
