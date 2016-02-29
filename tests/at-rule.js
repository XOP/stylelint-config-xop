var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './at-rule.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}


test('at-rule', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){
            t.ok(
                contains(data.output, 'at-rule-empty-line-before') === 2,
                'at-rule-empty-line-before'
            );
            t.ok(
                contains(data.output, 'at-rule-no-vendor-prefix') === 1,
                'at-rule-no-vendor-prefix'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

