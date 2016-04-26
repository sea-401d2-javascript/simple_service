'use strict';

require('../app.js');
require('angular-mocks');

describe('custom service', function() {
  var CustomService;
  beforeEach(angular.mock.module('myApp'))
  beforeEach(angular.mock.inject(function(_CustomService_) {
    CustomService = _CustomService_;
  }));
  it('should be a constructor function', function() {
    expect(typeof CustomService).toBe('function');
  });
  it('should instantiate a new service', function() {
    var service = CustomService('test');
    expect(typeof service).toBe('object');
    expect(service.name).toBe('test');
  });
});
