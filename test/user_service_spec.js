require('../app/index.js');
const angular = require('angular');
require('angular-mocks');

describe('service tests', function() {
  var UserService;
  beforeEach(angular.mock.module('MyApp'))
  beforeEach(angular.mock.inject(function(_UserService_) {
    UserService = _UserService_;
  }))
  it('should be a service', function() {
    expect(typeof UserService).toBe('object');
  })
  it('should be a function', function() {
    expect(typeof UserService.all).toBe('function');
    expect(UserService.first()).toBe('Tom');
    expect(UserService.last()).toBe('Gail');
  })
})
