'use strict';
require('./../app/index.js');
var angular = require('angular');
require('angular-mocks');

describe('App tests.', function() {
  var myFactory;
  beforeEach(angular.mock.module('scoreApp'));
  beforeEach(angular.mock.inject(function(_myFactory_) {
    myFactory = _myFactory_;
  }));

  it('Expects 1 to be 1.', function() {
    expect(1).toBe(1);
  });

  it('Expects myFactory to be a object.', function() {
    expect(typeof myFactory).toBe('object');
  });

  it('Expect myFactory.increment to be a function.', function() {
    expect(typeof myFactory.increment).toBe('function');
  });

  it('Expect myFactory.getScore to be a function.', function() {
    expect(typeof myFactory.getScore).toBe('function');
  });

  it('Should increment count by 1', function() {
    myFactory.increment();
    expect(myFactory.getScore()).toBe(1);
  })
});