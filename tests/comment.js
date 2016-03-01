var TEST_NAME = 'comment';

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
                helpers.contains(data.output, 'comment-empty-line-before') === 1,
                'comment-empty-line-before'
            );

            t.ok(
                helpers.contains(data.output, 'comment-whitespace-inside') === 2,
                'comment-whitespace-inside'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
