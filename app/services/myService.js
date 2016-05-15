module.exports = function(app) {
  app.factory('myFactory', function() {
    var fac = {};
    fac.score = 0;

    fac.increment = function() {
      fac.score = fac.score + 1;
    };

    fac.getScore = function() {
      return fac.score
    };

    return fac;
  });
};