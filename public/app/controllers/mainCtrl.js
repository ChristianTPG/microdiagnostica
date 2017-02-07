angular.module('mainCtrl', [])

.controller('mainController', function($http, pathService, $rootScope, $location, $scope){
    
    var vm = this;
    
    vm.mostrarBienvenidos = true;
    vm.muestraCategoria = false;
    vm.showHome = true;
    vm.menu = ['home', 'productos', 'nosotros', 'contacto']; 
    vm.active = vm.menu[0];
    
    vm.viewsConCategoria = ['public/app/views/pages/detalleProducto.html','public/app/views/pages/productos.html'];
    
    
    vm.findBrother = function (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }
    
    
    //VERIFICA Y CAMBIA ORDEN DEL NOSOTROS EN MOBILE CUANDO SE CAMBIA LA RUTA
    $scope.$on('$viewContentLoaded', function(event){
        //PARA EL NOSOTROS
        if (jQuery(window).width() <= 975) {
            jQuery('#descripcion').insertBefore('#lista');
        }
        if (jQuery(window).width() > 975) {
            jQuery('#lista').insertBefore('#descripcion');
        }
        jQuery(window).height(); // New height
        jQuery(window).width(); // New width    
    });
    
    
    //verifica si debe mostrarse el arbol de categorías
    $rootScope.$on('$routeChangeStart', function(event, next, prev){
        
        vm.showHome = $.inArray(next.templateUrl,['public/app/views/pages/home.html']) >= 0;
        vm.muestraCategoria = $.inArray(next.templateUrl, vm.viewsConCategoria) >= 0;
        
        
        // Saca la clase activa a todos los elementos no clickeados
        var elementsNotActive = $( "a.active" ).find( "a" ).prevObject;
        if(elementsNotActive.length > 0){
            angular.forEach(elementsNotActive, function(element) {
                element.classList.remove('active');
            });
        }
        
        //Cierra todos los elementos del menu
        var divsSlideables = $( "div.slideable" ).find( "div" ).prevObject;

        if(divsSlideables.length > 0){
            angular.forEach(divsSlideables, function(element) {
                
                var esMobile = element.getAttribute("mobile") == "true"
                   
                if(esMobile || !vm.muestraCategoria)
                {
                    element.style.height = '0px';
                    element.setAttribute('expanded', 'false');
                }
            });  
        }
        
        if(next.pathParams.subcategoria && vm.muestraCategoria){

            // Setea la clase activo al elemento seleccionado
            var elements = $('a:contains("'+ next.pathParams.subcategoria +'")');
            angular.forEach(elements, function(element) {
                element.className = 'active';
            });
            

            //Abre los elementos hijos del clickeado
            angular.forEach(elements, function(element) {
                var slideableBro = vm.findBrother(element,'slideable_content');

                if(slideableBro) {
                    
                    var categorias = vm.findBrother(element,'categorias');
                    if(categorias)
                        categorias.classList.remove('ng-hide');
                    
                    slideableBro.parentElement.style.height = slideableBro.clientHeight + 'px';
                    slideableBro.parentElement.setAttribute('expanded', true);
                }
            });
            
        }
        
    });

    
    vm.setActive = function(menuItem) {
        vm.active = menuItem
    };
    
    $http.get(pathService.path).success(function(data) {
        vm.listado_productos = data;
    });

});