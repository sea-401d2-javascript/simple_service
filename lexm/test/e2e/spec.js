describe('test of angular service', function() {
  var kitties = element.all(by.repeater('kitty in kittyCtrl.kitties'));
  var kitty0Name = kitties.get(0).element(by.binding('kitty.name'));
  var kitty0Breed = kitties.get(0).element(by.binding('kitty.breed'));
  var kitty0Color = kitties.get(0).element(by.binding('kitty.color'));
  var kitty1Name = kitties.get(1).element(by.binding('kitty.name'));
  var kitty1Breed = kitties.get(1).element(by.binding('kitty.breed'));
  var kitty1Color = kitties.get(1).element(by.binding('kitty.color'));
  var doggies = element.all(by.repeater('doggie in doggieCtrl.doggies'));
  var doggie0Name = doggies.get(0).element(by.binding('doggie.name'));
  var doggie0Breed = doggies.get(0).element(by.binding('doggie.breed'));
  var doggie0Color = doggies.get(0).element(by.binding('doggie.color'));
  var doggie1Name = doggies.get(1).element(by.binding('doggie.name'));
  var doggie1Breed = doggies.get(1).element(by.binding('doggie.breed'));
  var doggie1Color = doggies.get(1).element(by.binding('doggie.color'));
  var newKitty = element(by.model('kittyCtrl.newKitty'));
  var newDoggie = element(by.model('doggieCtrl.newDoggie'));
  var newKittyButton = element(by.css('[ng-click="kittyCtrl.changeFaveKitty(kittyCtrl.newKitty)"]'));
  var newDoggieButton = element(by.css('[ng-click="doggieCtrl.changeFaveDoggie(doggieCtrl.newDoggie)"]'));
  var kFaveKitty = element(by.binding('kittyCtrl.showFaveKitty()'));
  var kFaveDoggie = element(by.binding('kittyCtrl.showFaveDoggie()'));
  var dFaveKitty = element(by.binding('doggieCtrl.showFaveKitty()'));
  var dFaveDoggie = element(by.binding('doggieCtrl.showFaveDoggie()'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('should be able to enter a fave kitty', function(done) {
    newKitty.sendKeys('Mittens');
    newKittyButton.click();
    expect(kFaveKitty.getText()).toEqual('My favorite kitty is: Mittens');
    expect(dFaveKitty.getText()).toEqual('My favorite kitty is: Mittens');
    done();
  });

  it('should be able to enter a fave doggie', function(done) {
    newDoggie.sendKeys('Murphy');
    newDoggieButton.click();
    expect(kFaveDoggie.getText()).toEqual('My favorite doggie is: Murphy');
    expect(dFaveDoggie.getText()).toEqual('My favorite doggie is: Murphy');
    done();
  });

  it('should get a list of kitties', function() {
    kitty0Name.getText()
      .then(function(text) {
        expect(text).toEqual('Name: Thumbles');
      });
    kitty0Breed.getText()
      .then(function(text) {
        expect(text).toEqual('Breed: Polydactyl');
      });
    kitty0Color.getText()
      .then(function(text) {
        expect(text).toEqual('Color: grey');
      });
  })
  it('should get a list of doggies', function() {

  })

})
