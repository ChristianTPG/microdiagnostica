angular.module('headerCtrl', ['productosData'])

.controller('headerController', function($http, pathService){
    
    // bind this to vm (view-model)
    var vm = this;
    
   $http.get(pathService.path).success(function(data) {
       vm.productos = data;
   });

});