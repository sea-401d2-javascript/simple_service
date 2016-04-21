module.exports = function(app) {
  app.factory('AqueductService', function() {
    var service = {};
    var water = 100;

    service.giveWater = function(n) {
      water -= n;
      return n;
    }

    return service;
  });

}
