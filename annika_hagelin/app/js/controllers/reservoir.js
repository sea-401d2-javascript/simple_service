module.exports = function(app) {

  app.controller('ReservoirController', ['AqueductService', function(AqueductService) {
    const ctrl = this;

    ctrl.name = 'reservoir';
    ctrl.myWater = 0;

    ctrl.be = function() {
      return "thirsty";
    }

    ctrl.takeWater = function() {
      this.myWater += AqueductService.giveWater(10);
    }

  }]);

};
