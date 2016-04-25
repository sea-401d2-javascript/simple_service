/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);