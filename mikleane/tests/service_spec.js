var angular = require('angular');
require('angular-mocks');

require(__dirname + '/../app/index.js');

describe('it should test custom service', function(){
  var MathService;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function(_MathService_){
    MathService = _MathService_;
  }));

  it('should be a service', function(){
    expect(typeof MathService).toBe('object');
  });

  it('should have functions attached to the service', function(){
    expect(typeof MathService.add).toBe('function');
    expect(typeof MathService.subtract).toBe('function');
    expect(typeof MathService.multiply).toBe('function');
    expect(typeof MathService.divide).toBe('function');
  });

  it('should return a value', function(){
    spyOn(MathService, 'add').and.returnValue(2);
    var fetched = MathService.add();
    expect(MathService.add).toHaveBeenCalled();
    expect(fetched).toEqual(2);
  });
});
