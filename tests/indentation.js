var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './indentation.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}


test('indentation', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            t.comment('\n');
            t.comment('indentation:');
            t.comment('--------------------------------------------');

            t.ok(
                contains(data.output, ' (indentation)') === 2, // tricky here due to naming
                'indentation'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

