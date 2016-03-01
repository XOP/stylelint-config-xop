var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './comment.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}


test('comment', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            t.comment('\n');
            t.comment('comment:');
            t.comment('--------------------------------------------');

            t.ok(
                contains(data.output, 'comment-empty-line-before') === 1,
                'comment-empty-line-before'
            );

            t.ok(
                contains(data.output, 'comment-whitespace-inside') === 2,
                'comment-whitespace-inside'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});
