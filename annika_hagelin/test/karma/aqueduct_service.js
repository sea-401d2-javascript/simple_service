require('../../app/index.js');
const angular = require('angular');
require('angular-mocks');

describe('aqueduct service tests', function() {

  var AqueductService;

  beforeEach(angular.mock.module('WaterApp'));
  beforeEach(angular.mock.inject(function(_AqueductService_) {
    AqueductService = _AqueductService_;
  }));

  it('be an AqueductService', function() {
    console.log(typeof AqueductService);
    expect(typeof AqueductService).toBe('object');
  });

  it('give water', function() {
    expect(AqueductService.assess()).toBe(100);
    expect(AqueductService.giveWater(1)).toBe(1);
    expect(AqueductService.assess()).toBe(99);
  });

});
