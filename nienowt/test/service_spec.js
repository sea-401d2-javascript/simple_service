require('../app/app.js');
const angular = require('angular');
require('angular-mocks');

describe('user service tests', function(){
  var Service;
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function(_UserService_){
    Service = _UserService_;
  }))
  it('oughta be a function', function(){
    expect(typeof Service).toBe('object')
  })
  it('oughta return user data', function(){
    var testUser = Service;
    testUser.enter('test')
    testUser.addToHistory('ugh')
    expect(typeof testUser.enter('test')).toBe('string')
    expect(testUser.getUser()).toBe('test')
    expect(testUser.getHistory()[0]).toBe('ugh')
  })
})
