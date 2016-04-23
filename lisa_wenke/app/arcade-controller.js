'use strict';

module.exports = (app) => {
  const app = angular.module('ArcadeApp', []);

  app.controller('ArcadeController', ['$http','HttpService', function($http, HttpService){
    const arcadeRoute = 'http://localhost:5000/arcades';
    const arcadeHttp = HttpService('arcades');
    $scope.dance = 'Add New Arcade';
    this.arcades = ['arcade'];
    this.newArcade = {};


    this.getArcades = function(){
      arcadeHttp.get()
      .then((result)=>{
        this.arcades = result.data.arcades;
        this.cancelEdit = angular.copy(this.arcades);
      }, function(error){
        console.log(error);
      });
    };
    this.createArcade = function(arcade){
      arcadeHttp.create(arcade);
      .then((res)=>{
        this.arcades.push(res.data);
        this.newArcade = null;
      });
    };
    this.removeArcade = function(arcade) {
      arcadeHttp.delete(arcade)
      .then((res)=>{
        this.arcades = this.arcades.filter((a)=> a._id !=arcade._id);
      });
    };
    this.updateArcade = function(arcade){
      arcadeHttp.update(arcade)
      .then((res)=>{
        this.arcades = this.arcades.map((a) =>{
          if(a._id === arcadeEdit._id){
            return arcadeEdit;
          } else {
            return a;
          }
        });
      });
    };

  }]);
};
