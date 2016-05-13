module.exports = (app) => {
  app.controller('dogController', [ 'FavePets', dogController ]);
  function dogController(FavePets) {
    this.dogs = [
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

    this.showFavedog = function() {
      return FavePets.showFavedog();
    }

    this.showFavecat = function() {
      return FavePets.showFavecat();
    }

    this.changeFavedog = function(newdog) {
      FavePets.changedog(newdog);
    }

  }
}
