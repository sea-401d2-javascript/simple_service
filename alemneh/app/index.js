const angular = require('angular');
const app = angular.module('MovieApp', []);
require('./service')(app);
app.controller('LoginController', ['loginService',
  function(loginService) {
    const vm = this;
    vm.add = function() {
      console.log(vm.user);
      loginService.login(vm.user);
    };

}]);


app.controller('CheckLoginController', ['loginService',
  function(loginService) {
    const vm = this;
    vm.loggedIn = false;
    vm.loggedOut = false;
    vm.get = function() {
      vm.loggedIn = loginService.get(vm.user);
      vm.loggedOut = false;
      if(vm.loggedIn != true) {
        vm.loggedIn = false;
        vm.loggedOut = true;
      }
    }

}])
