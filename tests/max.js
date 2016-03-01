var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './max.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}


test('TEST', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            t.comment('\n');
            t.comment('max:');
            t.comment('--------------------------------------------');

            t.ok(
                contains(data.output, 'max-empty-lines') === 2,
                'max-empty-lines'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

