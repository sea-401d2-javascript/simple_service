describe('Client Angular App', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('should have the correct title', function() {
    expect(browser.getTitle()).toEqual('Movies');
  })


  it('should login and confim login', function() {
    element(by.model('logctrl.user')).sendKeys('Alem');
    element(by.buttonText('Login')).click();
    element(by.model('checkctrl.user')).sendKeys('Alem');
    element(by.buttonText('Check who is logged In')).click();
    expect(element(by.binding('checkctrl.user')).getText()).toEqual('Alem is Logged In.')
  })

  it('should login and confim not logged in', function() {
    element(by.model('logctrl.user')).clear();
    element(by.model('checkctrl.user')).clear();
    element(by.model('checkctrl.user')).sendKeys('Tom');
    element(by.buttonText('Check who is logged In')).click();
    expect(element(by.binding('checkctrl.user')).getText()).toEqual('Tom is Not Logged In.')
  })
})
