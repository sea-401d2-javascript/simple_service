'use strict';
require('../app/index');
const angular = require('angular');
require('angular-mocks');

describe('login tests', function() {
  var loginService;
  beforeEach(angular.mock.module('MovieApp'));
  beforeEach(angular.mock.inject(function(_loginService_) {
    loginService = _loginService_;
  }));

  it('should be a service', function() {
    expect(typeof loginService).toBe('object');
  });

  it('should return a e object', function() {
    loginService.login('test');
    var loggedIn = loginService.get('test');
    expect(typeof loggedIn).toBe('boolean');
    expect(loggedIn).toBe(true);
  });
});
