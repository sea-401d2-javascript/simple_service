var angular = require('angular');
var directives = require('./directives');

var app = angular.module('app', ['directives']);

require('./services')(app);
require('./CatController')(app);
require('./dogController')(app);
