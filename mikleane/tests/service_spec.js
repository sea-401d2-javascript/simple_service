require(__dirname + '/../app/index.js');
var angular = require('angular');
require('angular-mocks');


describe('it should test custom service', function(){
  var MathService;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function(_mathService_){
    MathService = _mathService_;
  }));

  it('should be a service', function(){
    expect(typeof MathService).toBe('object');
  });

  it('should have functions attached to the service', function(){
    expect(typeof MathService.add).toBe('function');
    expect(typeof MathService.substract).toBe('function');
    expect(typeof MathService.multiply).toBe('function');
    expect(typeof MathService.divide).toBe('function');
  });

  it('should return a correct math value', function(){
    var a = 8
    var b = 6;
    spyOn(MathService, 'add').and.callFake(function(){
      a + b;
    });
    MathService.add();
    expect(MathService.add).toHaveBeenCalled();
    expect(answer).toEqual(14);
  });

  it('should return a value', function(){
    spyOn(MathService, 'add').and.returnValue(2);
    var fetched = MathService.add();
    expect(MathService.add).toHaveBeenCalled();
    expect(fetched).toEqual(2);
  });
});  
