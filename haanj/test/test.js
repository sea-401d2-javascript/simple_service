describe('e2e testing for simple services app', function() {
  var firstCount = element(by.binding('countctrl.count'))
  var firstButton = element(by.buttonText('This button increments'))

  var secondCount = element(by.binding('anotherctrl.count'))
  var secondButton = element(by.binding('Get the updated value'))

  beforeEach(function() {
    browser.get('http://localhost:8080/') 
  })

  it('should have the correct title', function() {
    expect(browser.getTitle()).toEqual('Hi')
  })

  it('should have correct starting values', function() {
    console.log(firstCount.getAttribute('value'))   

    //expect(firstCount.getAttribute('value')).toEqual(0) 
    //expect(secondCount.getAttribute('value')).toEqual(0) 
  })

})
