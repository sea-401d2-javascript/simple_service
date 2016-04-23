'use strict';
/* global browser element expect by  */

describe('e2e testing', function() {
  beforeEach(function(){
    browser.get('http://127.0.0.1:3000/');
  });
  
  it('should have the correct page title', function(){
    expect(browser.getTitle()).toEqual('services example app');
  });
  
  it('should let you click the button and change tabs', function(){
    element(by.buttonText('Change Tabs from tab 0')).click();
    expect(element(by.binding('tab1Ctrl.name')).getText()).toEqual('TAB ONE');
  });
  



  
  
});
