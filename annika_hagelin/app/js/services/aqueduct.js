module.exports = function(app) {
  app.factory('AqueductService', function() {
    var service = {};
    var water = 100;

    service.giveWater = function(n) {
      if (n > water) return 0;
      water -= n;
      return n;
    }

    service.assess = function() {
      return water;
    }

    return service;
  });

}
