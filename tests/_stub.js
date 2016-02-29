var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './[FILE_NAME].scss'),
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
            t.ok(
                contains(data.output, 'RULE') === 2,
                'RULE'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

