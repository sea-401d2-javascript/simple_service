// two controllers
// one service
'use strict';

let app = angular.module('myApp', []);

app.factory('CustomService', () => {
  var history = [];

  function ServiceConstructor(name) {
    this.name = name;
    this.addHistory = history;
  }

  ServiceConstructor.prototype.add = function(num) {
    var num = Number(num);
    if (!history.length) history.push(num);
    else {
      history.push(history[history.length - 1] + num);
      return history.length - 1;
    }
  }

  return function(name) {
    return new ServiceConstructor(name);
  }
})

app.controller('mainController', function(CustomService) {
  let vm = this;
  let service = CustomService('mainCtrl');

  vm.name = service.name;
  vm.add = service.add;
  vm.addHistory = service.addHistory;
});

app.controller('subController', function(CustomService) {
  let vm = this;
  let service = CustomService('subCtrl');

  vm.name = service.name;
  vm.add = service.add;

});
