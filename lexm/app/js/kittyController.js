module.exports = (app) => {
  app.controller('KittyController', ['FavePets', KittyController]);
  function KittyController(FavePets) {
    this.kitties = [
      {
        name: 'Thumbles',
        breed: 'Polydactyl',
        color: 'grey'
      },
      {
        name: 'Mittens',
        breed: 'Domestic Shorthair',
        color: 'orange'
      }
    ];

    this.showFaveDoggie = function() {
      return FavePets.showFaveDoggie();
    }

    this.showFaveKitty = function() {
      return FavePets.showFaveKitty();
    }

    this.changeFaveKitty = function(newKitty) {
      FavePets.changeKitty(newKitty);
    }

  }
}
