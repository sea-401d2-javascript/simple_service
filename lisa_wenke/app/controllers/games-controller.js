'use strict';

module.exports = (app) => {
  const app = angular.module('ArcadeApp', []);
  app.controller('GameController', ['$http','HttpService', function($http, HttpService){
    const gameRoute = 'http://localhost:5000/games';
    const gameHttp = HttpService('games');
    $scope.dances = 'Add New Game';
    this.games = ['game'];
    this.newGame = {};


    this.getGames = function(){
      gameHttp.get()
      .then((result)=>{
        this.games = result.data.games;
      });
    };
    this.createGame = function(game){
        gameHttp.create(game);
      .then((res)=>{
        this.games.push(res.data);
      });
    };
    this.removeGame = function(game) {
        gameHttp.delete(game);
      .then((res)=>{
        this.games = this.games.filter((g)=> g._id !=game._id);
      });
    };
    this.updateGame = function(gameEdit){
      gameHttp.update(game);
      .then((res)=>{
        this.games = this.games.map((g) =>{
          if(g._id === gameEdit._id){
            return gameEdit;
          } else {
            return g;
          }
        });
      });
    };
  }]);
};
