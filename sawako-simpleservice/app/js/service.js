module.exports = function(app){
  app.factory('createStoryService', function(){
    var myService = {};
    var count = 0;

    myService.count = function(){
      return count;
    };
    myService.baseStory = function(){
      return {
        story1: 'Once upon a time, there was a dog who could talk.',
        story2: 'Once upon a time, there was a dog who could talk.'
      };
    };
    myService.characters = function(){
      return {
        char1: 'peterpan',
        char2: 'goofy'
      };
    };
    myService.counter = function(){
      count++;
    };
    return myService;
  });

};
