var TEST_NAME = 'rule-order';

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

            //t.ok(
            //    helpers.contains(data.output, 'rule-properties-order') === 2,
            //    'rule-properties-order'
            //);
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
