module.exports = (app) => {
  app.controller('CatController', ['FavePets', CatController]);
  function CatController(FavePets) {
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

    this.showFavedog = function() {
      return FavePets.showFavedog();
    }

    this.showFavecat = function() {
      return FavePets.showFavecat();
    }

    this.changeFavecat = function(newcat) {
      FavePets.changecat(newcat);
    }

  }
}
