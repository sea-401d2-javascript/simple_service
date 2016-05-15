'use strict';

var angular = require('angular');

var app = angular.module('scoreApp', []);
require('./services/myService.js')(app);

app.controller('Game1Controller', ['myFactory', function(myFactory) {
  var g1 = this;
  g1.score = myFactory.getScore();

  g1.increment = function() {
    myFactory.increment();
    g1.score = myFactory.getScore();
  };
}]);

app.controller('Game2Controller', ['myFactory', function(myFactory) {
  var g2 = this;
  g2.score = myFactory.getScore();

  g2.increment = function() {
    myFactory.increment();
    g2.score = myFactory.getScore();
  };
}]);

app.controller('HighScoreController', ['myFactory', function(myFactory) {
  var hs = this;
  hs.highScore = myFactory.getScore();

  hs.setHighScore = function() {
    hs.highScore = myFactory.getScore();
  };
}]);