'use strict';
require('./../app/index.js');
var angular = require('angular');
require('angular-mocks');


describe('App tests.', function() {
  it('Expects 1 to be 1.', function() {
    expect(1).toBe(1);
  });
//   var myFactory;
//   beforeEach(angular.mock.module('scoreApp'));
//   beforeEach(angular.mock.inject(function(_myFactory_) {
//     myFactory = _myFactory_;
//   }));

//   it('Expects myFactory to be a object.', function() {
//     expect(typeof myFactory).toBe('object');
//   });

//   it('Expect myFactory.increment to have be a function.', function() {
//     expect(typeof myFactory.increment).toBe('function');
//   });

// it('Expect myFactory.getCount to have be a function.', function() {
//     expect(typeof myFactory.getCount).toBe('function');
//   });


//   it('Should increment count by 1', function() {
//     myFactory.increment();
//     expect(myFactory.getCount()).toBe(1);
//   })
});