var fs = require('fs');
var path = require('path');

var projectPath = path.resolve(__dirname, '../');

var config = require(path.resolve(projectPath, 'index.js'));
var configJSON = JSON.stringify(config);

fs.writeFileSync('.stylelintrc', configJSON, 'utf8');
