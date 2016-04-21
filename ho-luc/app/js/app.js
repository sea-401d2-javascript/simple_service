'use strict'
const angular = require('angular');
var app = angular.module('TrackerApp', [])
require('./services/track-service')(app)

app.controller('CustomerController', ['TrackService', function(TrackService) {
    const vm = this;

    vm.count = TrackService.getCount();
    vm.increment = function() {
      TrackService.increment();
      vm.count = TrackService.getCount();
    }
}])

app.controller('StoreController', ['TrackService', function(TrackService) {
  const vm = this;

  vm.count = TrackService.getCount();
  vm.increment = function() {
    vm.count = TrackService.getCount();
  }

}])
