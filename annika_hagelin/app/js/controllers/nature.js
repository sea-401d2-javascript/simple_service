module.exports = function(app) {

  app.controller('NatureController', ['AqueductService', function(AqueductService) {
    const ctrl = this;

    ctrl.name = 'nature';
    ctrl.lifesource = 0;
    ctrl.status = 'ok';

    ctrl.be = function() {
      return 'need water';
    }

    ctrl.useWater = function() {
      var returns = AqueductService.giveWater(10);
      if (!returns) this.status = "extreme drought";
      else this.lifesource += returns;
    }




  }])

};
