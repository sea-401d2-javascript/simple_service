require('../app/index.js');
const angular = require('angular');
require('angular-mocks');

describe('http tests', function() {
  var ResourceService;
  beforeEach(angular.mock.module('PeopleApp'))
  beforeEach(angular.mock.inject(function(_ResourceService_) {
    ResourceService = _ResourceService_;
  }))
  it('should be a service', function() {
    expect(typeof ResourceService).toBe('function');
  })
  it('should return a resouce object', function() {
    var testResource = ResourceService('test');
    expect(typeof testResource).toBe('object');
    expect(testResource.resourceName).toBe('test');
  })
})
