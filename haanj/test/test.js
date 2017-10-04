describe('e2e testing for simple services app', function() {
  var firstCount = element(by.binding('countctrl.count'))
  var firstButton = element(by.buttonText('This button increments'))

  var secondCount = element(by.binding('anotherctrl.count'))
  var secondButton = element(by.buttonText('Get the updated value'))

  beforeEach(function() {
    browser.get('http://localhost:8080/') 
  })

  it('should have the correct title', function() {
    expect(browser.getTitle()).toEqual('Hi')
  })

  it('should have correct starting values', function() {
    expect(firstCount.getText()).toEqual('0')
    expect(secondCount.getText()).toEqual('0')
  })

  it('should first should increment count when first button is pressed', function() {
    firstButton.click()
    expect(firstCount.getText()).toEqual('1')
    expect(secondCount.getText()).toEqual('0')
  
    firstButton.click()
    expect(firstCount.getText()).toEqual('2')
    expect(secondCount.getText()).toEqual('0')

    for(var i = 0; i < 100; i++) firstButton.click()
    expect(firstCount.getText()).toEqual('102')
    expect(secondCount.getText()).toEqual('0')
  })

  it('should update second count when second button is pressed', function() {
    for(var i = 0; i < 50; i++) firstButton.click()
    expect(firstCount.getText()).toEqual('50')
    expect(secondCount.getText()).toEqual('0')

    secondButton.click()
    expect(firstCount.getText()).toEqual('50')
    expect(secondCount.getText()).toEqual('50')
    
  })






    
  
})
