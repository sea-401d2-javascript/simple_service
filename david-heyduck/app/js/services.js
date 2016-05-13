module.exports = (app) => {
  app.factory('FavePets', function() {
    var service = {};
    var favecat = '';
    var favedog = '';

    service.showFavecat = function() {
      return favecat;
    }

    service.changecat = function(newcat) {
      favecat = newcat;
    }

    service.showFavedog = function() {
      return favedog;
    }

    service.changedog = function(newdog) {
      favedog = newdog;
    }

    return service;
  })
}
