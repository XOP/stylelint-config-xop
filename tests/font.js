var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './font.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}


test('font', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            t.comment('\n');
            t.comment('font:');
            t.comment('--------------------------------------------');

            t.ok(
                contains(data.output, 'font-family-name-quotes') === 2,
                'font-family-name-quotes'
            );

            t.ok(
                contains(data.output, 'font-weight-notation') === 1,
                'font-weight-notation'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

