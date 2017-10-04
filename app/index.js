const angular = require('angular');

var app = angular.module("MyApp", []);

app.factory("UserService", function() {
  var users = ["Tom", "Doug", "Sally", "Bobby", "Gail"];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    },
    last: function() {
      return users[users.length -1];
    }
  };
});

app.controller("MyCtrl", function($scope, UserService) {
  $scope.users = UserService.all();
});

app.controller("AnotherCtrl", function($scope, UserService) {
  $scope.firstUser = UserService.first();
  $scope.lastUser = UserService.last();

});
