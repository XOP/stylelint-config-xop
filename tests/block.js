var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './block.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}


test('block', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            t.comment('\n');
            t.comment('block:');
            t.comment('--------------------------------------------');

            t.ok(
                contains(data.output, 'block-closing-brace-newline-after') === 1,
                'block-closing-brace-newline-after'
            );

            t.ok(
                contains(data.output, 'block-closing-brace-newline-before') === 4,
                'block-closing-brace-newline-before'
            );

            t.ok(
                contains(data.output, 'block-closing-brace-space-before') === null,
                'block-closing-brace-space-before'
            );

            t.ok(
                contains(data.output, 'block-no-empty') === null,
                'block-no-empty'
            );

            t.ok(
                contains(data.output, 'block-opening-brace-newline-after') === 4,
                'block-opening-brace-newline-after'
            );

            t.ok(
                contains(data.output, 'block-opening-brace-space-after') === null,
                'block-opening-brace-space-after'
            );

            t.ok(
                contains(data.output, 'block-opening-brace-space-before') === 1,
                'block-opening-brace-space-before'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

