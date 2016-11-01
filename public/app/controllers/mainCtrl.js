angular.module('mainCtrl', [])

.controller('mainController', function($http, pathService, $rootScope, $location, Auth){
    
    var vm = this;
    
    vm.muestraCategoria = false;
    vm.showHome = true;
    
    vm.viewsConCategoria = ['public/app/views/pages/detalleProducto.html','public/app/views/pages/productos.html'];
    
    
    //verifica si debe mostrarse el arbol de categorías
    $rootScope.$on('$routeChangeStart', function(event, next, prev){
        
        vm.muestraCategoria = $.inArray(next.templateUrl, vm.viewsConCategoria) >= 0;
        vm.showHome = $.inArray(next.templateUrl,['public/app/views/pages/home.html']) >= 0;
    });
    
    
    $http.get(pathService.path).success(function(data) {
        vm.listado_productos = data;
    });

});