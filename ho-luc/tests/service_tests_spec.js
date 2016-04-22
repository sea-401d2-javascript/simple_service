require('./../app/js/app.js');
const angular = require('angular');
require('angular-mocks');

describe('Service tests.', function() {
  var TrackService;
  beforeEach(angular.mock.module('TrackerApp'));
  beforeEach(angular.mock.inject(function(_TrackService_) {
    TrackService = _TrackService_;
  }));

  it('Expect service to be a object.', function() {
    expect(typeof TrackService).toBe('object');
  });

  it('Expect service to have two functions.', function() {
    expect(typeof TrackService.increment).toBe('function');
    expect(typeof TrackService.getCount).toBe('function');
  });

  it('Should increment count by 1', function() {
    TrackService.increment();
    expect(TrackService.getCount()).toBe(1);
  })
})
