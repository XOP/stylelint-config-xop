var TEST_NAME = 'general';

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

            helpers.debug(data);

            t.ok(
                helpers.contains(data.output, ' (indentation)') === 2, // tricky here due to naming
                'indentation'
            );

            t.ok(
                helpers.contains(data.output, 'max-empty-lines') === 2,
                'max-empty-lines'
            );

            t.ok(
                helpers.contains(data.output, 'no-duplicate-selectors') === 2,
                'no-duplicate-selectors'
            );

            t.ok(
                helpers.contains(data.output, 'no-unknown-animations') === 3,
                'no-unknown-animations'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
