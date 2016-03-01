var path = require('path');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './function.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}


test('function', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            t.comment('\n');
            t.comment('function:');
            t.comment('--------------------------------------------');

            t.ok(
                contains(data.output, 'function-calc-no-unspaced-operator') === 3,
                'function-calc-no-unspaced-operator'
            );

            t.ok(
                contains(data.output, 'function-comma-newline-after') === 2,
                'function-comma-newline-after'
            );

            t.ok(
                contains(data.output, 'function-comma-newline-before') === 1,
                'function-comma-newline-before'
            );

            t.ok(
                contains(data.output, 'function-comma-space-after') === 2,
                'function-comma-space-after'
            );

            t.ok(
                contains(data.output, 'function-comma-space-before') === 2,
                'function-comma-space-before'
            );

            t.ok(
                contains(data.output, 'function-linear-gradient-no-nonstandard-direction') === 2,
                'function-linear-gradient-no-nonstandard-direction'
            );

            t.ok(
                contains(data.output, 'function-parentheses-space-inside') === 2,
                'function-parentheses-space-inside'
            );

            t.ok(
                contains(data.output, 'function-url-quotes') === 1,
                'function-url-quotes'
            );

            t.ok(
                contains(data.output, 'function-whitespace-after') === 1,
                'function-whitespace-after'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

