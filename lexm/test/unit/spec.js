// require('../../public/bundle.js');
require('../../app/js/index.js');
const angular = require('angular');
require('angular-mocks');

describe('testing something', function() {
  var doggieController;
  it('should have a test', function(done) {
    expect(false).toBe(false);
    done();
  });
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function($controller) {
    doggieController = $controller('DoggieController');
    kittyController = $controller('KittyController');
  }));
  it('should construct doggieController', function(done) {
    expect(typeof doggieController).toBe('object');
    expect(typeof doggieController.doggies[0]).toBe('object');
    expect(typeof doggieController.showFaveDoggie).toBe('function');
    expect(typeof doggieController.changeFaveDoggie).toBe('function');
    expect(typeof doggieController.showFaveKitty).toBe('function');
    done();
  });
  it('should construct kittyController', function(done) {
    expect(typeof kittyController).toBe('object');
    expect(typeof kittyController.kitties[0]).toBe('object');
    expect(typeof kittyController.showFaveKitty).toBe('function');
    expect(typeof kittyController.changeFaveKitty).toBe('function');
    expect(typeof kittyController.showFaveDoggie).toBe('function');
    done();
  });
});

describe('unit testing directive', function() {
  var $compile;
  var $rootScope;

  beforeEach(angular.mock.module('directives'));
  beforeEach(angular.mock.inject(function(_$compile, _$rootScope) {
    $compile = _$compile;
    $rootScope = _$rootScope;
  }))
})

describe('unit testing services', function() {
  var FavePets,
      showFaveKitty,
      changeKitty,
      showFaveDoggie,
      changeDoggie;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function(_FavePets_) {
    FavePets = _FavePets_;
  }))
  // beforeEach(angular.mock.inject(function(_showFaveKitty_, _changeKitty_,
  //   _showFaveDoggie_, _changeDoggie_))) {
  //     showFaveKitty = _showFaveKitty_;
  //     changeKitty = _changeKitty_;
  //     showFaveDoggie = _showFaveDoggie_;
  //     changeDoggie = _changeDoggie_;
  //   };

  it('should be able to set a fave kitty', function(done) {
    expect(typeof FavePets.changeKitty).toBe('function');
    expect(typeof FavePets.showFaveKitty).toBe('function');
    expect(FavePets.showFaveKitty()).toBe('');
    FavePets.changeKitty('Thumbles');
    expect(FavePets.showFaveKitty()).toBe('Thumbles');
    done();
  });

  it('should be able to set a fave doggie', function(done) {
    expect(typeof FavePets.changeDoggie).toBe('function');
    expect(typeof FavePets.showFaveDoggie).toBe('function');
    expect(FavePets.showFaveDoggie()).toBe('');
    FavePets.changeDoggie('Thumbles');
    expect(FavePets.showFaveDoggie()).toBe('Thumbles');
    done();
  })
})
