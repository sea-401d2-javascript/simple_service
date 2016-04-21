module.exports = function(app) {
  app.factory('TrackService', function() {
    var tService = {};
    var count = 0;

    tService.increment = function() {
      count += 1;
    };

    tService.getCount = function() {
      return count;
    };

    return tService;
  })
}
