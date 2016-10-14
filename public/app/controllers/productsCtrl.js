angular.module('productosCtrl',['productosData','angularSlideables'])

.controller('productosController', function($http, pathService, $routeParams) {

    var vm = this;
    vm.productos_categoria = $routeParams.categoria;
    vm.productos_subcategoria = $routeParams.subcategoria;
    vm.productos = [];
    var xpath = '//*[name="'+vm.productos_categoria+'"]//*[name= "'+vm.productos_subcategoria+'"]/sub';
    
    $http.get(pathService.path).success(function(data) {
        vm.listado_productos = data;
        vm.productos = JSON.search(vm.listado_productos,xpath);
        vm.breadcrumb = "Productos > "+vm.productos_categoria+" > "+vm.productos_subcategoria;
    });
    
})

