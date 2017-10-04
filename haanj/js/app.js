var app = angular.module('app', [])

app.factory('CountService', function() {
  var myService = {}
  var count = 0
  
  myService.increment = function() {
    count++
  }

  myService.getCount = function() {
    return count
  }

  return myService
})

app.controller('CountController', ['CountService', function(CountService) {
  const vm = this

  vm.count = CountService.getCount()

  vm.increment = function() {
    CountService.increment()
    vm.count = CountService.getCount()
  }
}])

app.controller('AnotherController', ['CountService', function(CountService) {
  const vm = this

  vm.count = CountService.getCount()

  vm.update = function() {
    vm.count = CountService.getCount()
  }
}])
