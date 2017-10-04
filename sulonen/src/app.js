'use strict';

const angular = require('angular');
const app = angular.module('app', []);

app.factory('DataService', ['$http', function($http) {
  var vm = this;
  vm.data = {};
  vm.getData = function() {
    return $http.get('./data.json');
  };
  return vm;
}]);

app.controller('FirstController', ['DataService', function(DataService) {
  var vm = this;

  vm.data = ['FirstController'];
  vm.getData = function() {
    DataService.getData()
    .then(function(response) {
      DataService.data = response.data.personages;
      vm.data = DataService.data;
    });
  };
}]);

app.controller('SecondController', ['DataService', function(DataService) {
  var vm = this;

  vm.data = ['SecondController'];
  vm.getData = function() {
    DataService.getData()
    .then(function(response) {
      DataService.data = response.data.personages;
      vm.data = DataService.data;
    });
  };
}]);

