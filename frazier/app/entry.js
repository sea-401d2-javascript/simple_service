'use strict';

/* global angular */

require('angular');
require(__dirname + '/services/tabService.js');
require(__dirname + '/controllers/tab0.js');
require(__dirname + '/controllers/tab1.js');

(function(){
  angular.module('servicesExampleApp', ['serviceApp', 'tab0', 'tab1']);
})();
