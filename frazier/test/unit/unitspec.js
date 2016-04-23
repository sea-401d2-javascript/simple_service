'use strict';
/* global angular expect describe it beforeEach */

require(__dirname + '/../../build/bundle.js');
require('angular-mocks');

describe('service test', function(){
  var tabService;
  beforeEach(angular.mock.module('servicesExampleApp'));
  beforeEach(angular.mock.inject(function(_tabService_){
    tabService = _tabService_;
  }));
  it('should return the correct initial service', function(){
    expect(tabService.getTab()).toEqual(0);
  });
  it('shoud let you change tabs', function(){
    tabService.changeTabs();
    expect(tabService.getTab()).toEqual(1);
  });
});
