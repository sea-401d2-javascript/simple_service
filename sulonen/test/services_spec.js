'use strict';

const angular = require('angular');
require('angular-mocks');
require('../src/app.js');

describe('services tests', function() {
  var DataService;
  var testData;
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function(_DataService_) {
    DataService = _DataService_;
  }));

  it('should be a service', function() {
    expect(typeof DataService).toBe('object');
  });
  
  it('should return a data object', function() {
    DataService.getData()
      .then(function(response) {
        testData = response.data;
        console.log(response);
        expect(typeof testData).toBe('object');
      });
  });
});
