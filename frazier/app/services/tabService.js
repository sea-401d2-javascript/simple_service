'use strict';
/* global angular */

(function(){
  angular.module('serviceApp', [])
    .factory('tabService', ['$log', function($log){
      var tabService = {};
      tabService.tab = 0;
      
      tabService.changeTabs = changeTabs;
      tabService.getTab     = getTab;

      function getTab(){
        return tabService.tab;
      }
      
      
      
      function changeTabs(){
        if (tabService.tab === 1){
          tabService.tab = 0;
        } else {
          tabService.tab = 1;
        }
        // $log.log('tabService.tab is ' + tabService.tab);
      }
      

      return tabService;
    }]);
})();
