module.exports = function(app) {

  app.controller('ReservoirController', ['AqueductService', function(AqueductService) {
    const ctrl = this;

    ctrl.be = function() {
      return "thirsty";
    }

  }]);

};
