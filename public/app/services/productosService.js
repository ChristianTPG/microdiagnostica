 //create your module.
 angular.module('productosData', [])
   .factory('pathService', function () {
        return {
           path: 'public/assets/productos.json'
        };
   });

