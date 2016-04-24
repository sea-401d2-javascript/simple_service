require(__dirname + '/../app/js/app.js');
var angular = require('angular');
require('angular-mocks');


describe('it should test custom service functionality', function(){
  var CreateStoryService;

  beforeEach(angular.mock.module('myApp'));
  beforeEach(angular.mock.inject(function(_createStoryService_){
    CreateStoryService = _createStoryService_;
  }));

  it('should be a service', function(){
    expect(typeof CreateStoryService).toBe('object');
  });

  it('should have functions attached to the service', function(){
    expect(typeof CreateStoryService.count).toBe('function');
    expect(typeof CreateStoryService.baseStory).toBe('function');
    expect(typeof CreateStoryService.characters).toBe('function');
    expect(typeof CreateStoryService.counter).toBe('function');
  });

  it('should return a correct incremented value', function(){
    var count = 0;
    spyOn(CreateStoryService, 'counter').and.callFake(function(){
      count++;
    });
    CreateStoryService.counter();
    expect(CreateStoryService.counter).toHaveBeenCalled();
    expect(count).toEqual(1);
  });

  it('should return a value', function(){
    spyOn(CreateStoryService, 'count').and.returnValue(2);
    var fetched = CreateStoryService.count();
    expect(CreateStoryService.count).toHaveBeenCalled();
    expect(fetched).toEqual(2);
  });
});
