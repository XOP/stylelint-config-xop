var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './declaration.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}


test('declaration', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            t.comment('\n');
            t.comment('declaration:');
            t.comment('--------------------------------------------');

            console.log(data.output);


            t.ok(
                contains(data.output, 'declaration-bang-space-after') === 1,
                'declaration-bang-space-after'
            );

            t.ok(
                contains(data.output, 'declaration-bang-space-before') === 2,
                'declaration-bang-space-before'
            );

            t.ok(
                contains(data.output, 'declaration-block-no-single-line') === 2,
                'declaration-block-no-single-line'
            );

            t.ok(
                contains(data.output, 'declaration-block-semicolon-newline-after') === 2,
                'declaration-block-semicolon-newline-after'
            );

            t.ok(
                contains(data.output, 'declaration-block-semicolon-newline-before') === 2,
                'declaration-block-semicolon-newline-before'
            );

            t.ok(
                contains(data.output, 'declaration-block-semicolon-space-before') === 2,
                'declaration-block-semicolon-space-before'
            );


        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

