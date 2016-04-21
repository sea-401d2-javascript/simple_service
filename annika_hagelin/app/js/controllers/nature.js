module.exports = function(app) {

  app.controller('NatureController', ['AqueductService', function(AqueductService) {
    const ctrl = this;

    ctrl.name = 'nature';
    ctrl.myWater = 0;

    ctrl.be = function() {
      return 'need water';
    }

    ctrl.useWater = function() {
      this.myWater += AqueductService.giveWater(10);
    }


  }])

};
