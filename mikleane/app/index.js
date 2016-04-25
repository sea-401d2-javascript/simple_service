(function(){

angular
  .module('app', [])
  .controller('CalculatorController', CalculatorController)
  .controller('AddController', AddController)
  .service('MathService', MathService)
  .service('CalculatorService', CalculatorService)

  function CalculatorController($scope, CalculatorService) {
    $scope.doSquare = function() {
      $scope.answer = CalculatorService.square($scope.number);
    }
    $scope.doCube = function() {
      $scope.answer = CalculatorService.cube($scope.number);
    }
  }

  function AddController($scope, MathService) {
    $scope.add = function() {
      $scope.answer = MathService.add($scope.a, $scope.b)
    }
    $scope.subtract = function() {
      $scope.answer = MathService.subtract($scope.a, $scope.b)
    }
  }

  function MathService () {
    this.add = function(a, b) {
      return a + b
    }
    this.subtract = function(a, b) {
      return a - b
    }
    this.multiply = function (a, b) {
      return a * b
    }
    this.divide = function (a, b) {
      return a / b
    }
  }

  function CalculatorService (MathService) {
    this.square = function(a) {
      return MathService.multiply(a, a);
    };
    this.cube = function(a) {
      return MathService.multiply(a, MathService.multiply(a, a));
    };
  }


})();
