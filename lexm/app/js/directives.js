(function() {
  var app = angular.module('directives', []);

  app.directive('listFavePets', function() {
    return {
      restrict: 'A',
      templateUrl: '../html/listFavePets.html'
    }
  })

})()
