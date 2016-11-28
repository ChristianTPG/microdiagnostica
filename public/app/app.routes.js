angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
    $routeProvider
    // home page route
    .when('/', {
        templateUrl: 'public/app/views/pages/home.html'
    })
    
    //nosotros page
    .when('/nosotros', {
        templateUrl: 'public/app/views/pages/nosotros.html'
    })
    
    //contacto page
    .when('/contacto', {
        templateUrl: 'public/app/views/pages/contacto.html',
        controller: 'contactoController',
        controllerAs: 'contactoCtrl'
    }) 
    
    //PRODUCTOS page
    .when('/productos/:categoria/:subcategoria', {
        templateUrl: 'public/app/views/pages/productos.html',
        controller: 'productosController',
        controllerAs: 'productosCtrl'
    })
    
    //Detalle PRODUCTOS page
    .when('/detalleProducto/:categoria/:subcategoria/:producto', {
        templateUrl: 'public/app/views/pages/detalleProducto.html',
        controller: 'detalleProductoController',
        controllerAs: 'detalleProductoCtrl'
    })
    
    
    // show all users
    .when('/users', {
        templateUrl: 'public/app/views/pages/users/all.html',
        controller: 'userController',
        controllerAs: 'user'
    });

    //get rid of the hash in the URL
    $locationProvider.html5Mode(true);
    
});
