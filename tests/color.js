var path = require('path');
var fs = require('fs');

var test = require('tape');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var stylelintOptions = {
    files: path.resolve(__dirname, './color.scss'),
    syntax: "scss",
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

// compiling to css
// setting special stylelint options
var sass = require('node-sass');
var fileContent = fs.readFileSync(path.resolve(__dirname, './color.scss'), 'utf8');

var css = sass.renderSync({
    data: fileContent,
    includePaths: [path.resolve(__dirname, './')]
}).css.toString('utf8');

var stylelintOptionsCss = {
    code: css,
    formatter: formatter,
    configFile: path.resolve(__dirname, '../', 'index.js')
};

function contains(hay, needle) {
    var regExp = new RegExp(needle, 'gm');

    return hay.match(regExp) && hay.match(regExp).length;
}

test('color', function (t) {
    stylelint.lint(stylelintOptions)
        .then(function (data){

            t.comment('\n');
            t.comment('color:');
            t.comment('--------------------------------------------');

            t.ok(
                contains(data.output, 'color-hex-case') === 1,
                'color-hex-case'
            );

            t.ok(
                contains(data.output, 'color-hex-length') === 1,
                'color-hex-length'
            );

            t.ok(
                contains(data.output, 'color-no-named') === 1,
                'color-no-named'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    stylelint.lint(stylelintOptionsCss)
        .then(function (data) {

            t.comment('\n');
            t.comment('color:');
            t.comment('--------------------------------------------');

            t.ok(
                contains(data.output, 'color-no-invalid-hex') === 1,
                'color-no-invalid-hex'
            );
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    t.end();
});

