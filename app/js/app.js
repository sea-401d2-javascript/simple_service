var angular = require('angular');
var app = angular.module('myApp', []);
require('./service.js')(app);

app.controller('storyControlelr',[ 'createStoryService' ,function(createStoryService){
  this.story1 = null;
  this.count;
  this.showStory = function(){
    this.story1 = createStoryService.baseStory().story1;
    createStoryService.counter();
    this.count = createStoryService.count();
  };
}]);

app.controller('characterController', ['createStoryService' , function(createStoryService){
  this.char1 = null;
  this.count;
  this.showCharacters = function(){
    this.char1 = createStoryService.characters().char1;
    createStoryService.counter();
    this.count = createStoryService.count();
  };
}]);
