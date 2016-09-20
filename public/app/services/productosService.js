 //create your module.
 angular.module('productosData', [])
   .factory('pathService', function () {
        return {
           path: 'assets/productos.json'
        };
   });

