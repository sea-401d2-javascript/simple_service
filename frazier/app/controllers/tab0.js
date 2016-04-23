'use strict';
/* global angular */

(function(){
  angular.module('tab0', [])
    .controller('Tab0Controller', ['$log', 'tabService', TabZeroController])
    .directive('tabZero', function(){
      return {
        restrict: 'E', 
        templateUrl: 'tab0.html',
        controller: 'Tab0Controller', 
        controllerAs: 'tab0Ctrl'
      };
    });
  
  function TabZeroController($log, tabService){
    this.name       = 'TAB ZERO';
    this.tabNumber  = 0;
    this.changeTabs = changeTabs;
    this.isVisible  = isVisible;
    
    
    
    function changeTabs(){
      // $log.log('changed tabs in tab 0');
      tabService.changeTabs();
      this.visible = this.isVisible();
    }
    
    function isVisible(){
      let tabToShow = tabService.getTab();
      // $log.log('0 ' + tabToShow);
      return  tabToShow === this.tabNumber;
    }
    
  }
})();
