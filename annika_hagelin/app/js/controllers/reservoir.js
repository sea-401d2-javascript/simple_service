module.exports = function(app) {

  app.controller('ReservoirController', ['AqueductService', function(AqueductService) {
    const ctrl = this;

    ctrl.name = 'reservoir';
    ctrl.myWater = 0;
    ctrl.status = 'at capicity';

    ctrl.be = function() {
      return "thirsty";
    }

    ctrl.takeWater = function() {
      var returns = AqueductService.giveWater(10);
      if (!returns) this.status = "closed to recreation";
      else this.myWater += returns;
    }

  }]);

};
