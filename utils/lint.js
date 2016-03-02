var path = require('path');

var stylelint = require('stylelint');
var formatter = require('stylelint-formatter-yhw');

var args = process.argv;
var files = args[2] === '--files' && args[3] ? args[3] : 'examples/module.scss';
var filesPath = path.resolve(__dirname, '../', files);
var configPath = path.resolve(__dirname, '../', 'config.json');
var config = require(configPath);

var stylelintOptions = {
    files: filesPath,
    config: config,
    syntax: 'scss'
};

stylelint.lint(stylelintOptions)
    .then(function (data) {
        console.log(formatter(data.results));
    })
    .catch(function (err) {
        console.log(err.stack);
    });
