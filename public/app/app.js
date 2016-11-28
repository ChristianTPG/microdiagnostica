angular.module('userApp', [
    'ngAnimate',
    'app.routes',
    'mainCtrl',
    'productosCtrl',
    'detalleProductoCtrl',
    'sideCtrl',
    'contactoCtrl'
])

// application configuration to integrate token into requests
/*.config(function($httpProvider){

    // attach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor');

});
*/
