module.exports = (app) => {
  app.factory('FavePets', function() {
    var service = {};
    var faveKitty = '';
    var faveDoggie = '';

    service.showFaveKitty = function() {
      return faveKitty;
    }

    service.changeKitty = function(newKitty) {
      faveKitty = newKitty;
    }

    service.showFaveDoggie = function() {
      return faveDoggie;
    }

    service.changeDoggie = function(newDoggie) {
      faveDoggie = newDoggie;
    }

    return service;
  })
}
