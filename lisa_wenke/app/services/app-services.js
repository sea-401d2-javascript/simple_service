'use strict';

module.exports = (app) => {
  app.factory('HttpService', ['$http', function($http){
    const mainRoute = 'http://localhost:5000/';

    function RouteService(routeName){
    this.routeName = routeName;
  }
    RouteService.prototype.get = function(){
      return $http.get(mainRoute + this.routeName);
    }
    RouteService.prototype.create = function(){
      return $http.post(mainRoute + this.routeName, data);
    }

    RouteService.prototype.update = function(){
      return $http.put(mainRoute + this.routeName + '/' + data._id, data);
    }
    RouteService.prototype.delete = function(){
      return $http.delete(mainRoute + this.routeName + '/' + data._id);
    }
    return function(routeName){
      return new RouteService(routeName);
    }
    };

  }]);
  
};
