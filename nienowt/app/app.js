'use strict';
require('angular')
console.log(new Date())
var app = angular.module('app', []);

app.controller('LogController', ['UserService', function(UserService){
  const vm = this;
  vm.user = UserService.getUser;
  vm.logout = UserService.exit;
  vm.login = function(user){
    UserService.enter(user);
    console.log(vm.user())
  }

}])
.controller('DataController',['$http','UserService', function($http,UserService){
  const vm = this;
  vm.cameras;
  vm.user = UserService.getUser;
  vm.getHist = UserService.getHistory;
  vm.add = function(video){
    UserService.addToHistory(video)
  }
  vm.getData = function(){
    $http.get('https://data.seattle.gov/resource/9wcw-sztr.json')
    .then((res)=>{
      vm.cameras = res.data
      console.log(vm.cameras)
    })
  }

}])
.factory('UserService', function(){
  var service = {};
  var user;
  var history ={};
  service.enter = function(name){
    return user = name;
  }
  service.exit = function(){
    return user = null;
  }
  service.getUser = function(){
    return user;
  }
  service.getHistory = function(){
    return history[user];
  }
  service.addToHistory = function(video){
    if (!history[user]) history[user] = [];
    return history[user].push(video) && console.log(history)
  }
  return service;
})
