module.exports = (app) => {
  app.factory('FavePets', function() {
    var service = {};
    var faveKitty = 'Meowser';
    var faveDoggie = 'Fido';

    service.showFaveKitty = function() {
      return 'Favorite Kitty is: ' + faveKitty;
    }

    service.changeKitty = function(newKitty) {
      faveKitty = newKitty;
    }

    service.showFaveDoggie = function() {
      return 'Favorite Doggie is: ' + faveDoggie;
    }

    service.changeDoggie = function(newDoggie) {
      faveDoggie = newDoggie;
    }

    return service;
  })
}
