'use strict';
/* global angular */

(function(){
  angular.module('tab1', [])
    .controller('Tab1Controller', ['$log', 'tabService', Tab1Controller])
    .directive('tabOne', function(){      
      return {
        restrict: 'E', 
        templateUrl: 'tab1.html',
        controller: 'Tab1Controller', 
        controllerAs: 'tab1Ctrl'
      };
    });
  
  function Tab1Controller($log, tabService){
    this.name       = 'TAB ONE';
    this.tabNumber  = 1;
    this.changeTabs = changeTabs;
    this.isVisible  = isVisible;
    
    function changeTabs(){
      // $log.log('change tabs in tab1');
      tabService.changeTabs();
      this.visible = this.isVisible();
    }
    
    function isVisible(){
      let tabToShow = tabService.getTab();
      // $log.log('1 ' + tabToShow);
      return  tabToShow === this.tabNumber;
    }
    
  }
})();
