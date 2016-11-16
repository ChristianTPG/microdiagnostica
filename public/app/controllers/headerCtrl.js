angular.module('headerCtrl', ['productosData'])

.controller('headerController', function($http, pathService){
    
    // bind this to vm (view-model)
    var vm = this;
    vm.menu = ['HOME', 'PRODUCTOS', 'NOSOTROS', 'CONTACTO']; 
    vm.active = vm.menu[0];
    
   $http.get(pathService.path).success(function(data) {
       vm.productos = data;
   });
    
    vm.setActive = function(menuItem) {
        vm.active = menuItem
    };

});