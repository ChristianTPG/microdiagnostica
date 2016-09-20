angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
    $routeProvider
    // home page route
    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    })
    
    //nosotros page
    .when('/nosotros', {
        templateUrl: 'app/views/pages/nosotros.html'
    })
    
    //contacto page
    .when('/contacto', {
        templateUrl: 'app/views/pages/contacto.html'
    }) 
    
    //PRODUCTOS page
    .when('/productos/:categoria/:subcategoria', {
        templateUrl: 'app/views/pages/productos.html',
        controller: 'productosController',
        controllerAs: 'productosCtrl'
    })
    
    //Detalle PRODUCTOS page
    .when('/detalleProducto/:categoria/:subcategoria/:producto', {
        templateUrl: 'app/views/pages/detalleProducto.html',
        controller: 'detalleProductoController',
        controllerAs: 'detalleProductoCtrl'
    })
    
    
    // show all users
    .when('/users', {
        templateUrl: 'app/views/pages/users/all.html',
        controller: 'userController',
        controllerAs: 'user'
    });

    //get rid of the hash in the URL
    $locationProvider.html5Mode(true);
    
});
