module.exports = (app) => {
  app.controller('DoggieController', [ 'FavePets', DoggieController ]);
  function DoggieController(FavePets) {
    this.doggies = [
      {
        name: 'Murphy',
        breed: 'Pichon',
        color: 'white'
      },
      {
        name: 'Harry',
        breed: 'Mutt',
        color: 'dirty'
      }
    ];

    this.showFaveDoggie = function() {
      return FavePets.showFaveDoggie();
    }

    this.showFaveKitty = function() {
      return FavePets.showFaveKitty();
    }

    this.changeFaveDoggie = function(newDoggie) {
      FavePets.changeDoggie(newDoggie);
    }

  }
}
