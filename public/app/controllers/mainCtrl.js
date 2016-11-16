angular.module('mainCtrl', [])

.controller('mainController', function($http, pathService, $rootScope, $location, Auth){
    
    var vm = this;
    
    vm.muestraCategoria = false;
    vm.showHome = true;
    
    vm.viewsConCategoria = ['public/app/views/pages/detalleProducto.html','public/app/views/pages/productos.html'];
    
    
    vm.findBrother = function (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }
    
    //verifica si debe mostrarse el arbol de categorías
    $rootScope.$on('$routeChangeStart', function(event, next, prev){
        
        vm.showHome = $.inArray(next.templateUrl,['public/app/views/pages/home.html']) >= 0;
        
        if(next.pathParams.subcategoria){
            
            // Saca la clase activa a todos los elementos no clickeados
            var elementsNotActive = $( "a.active" ).find( "a" ).prevObject;
            if(elementsNotActive.length > 0){
                angular.forEach(elementsNotActive, function(element) {
                    element.classList.remove('active');
                });
            }
            
            // Setea la clase activo al elemento seleccionado
            var elements = $('a:contains("'+ next.pathParams.subcategoria +'")');
            angular.forEach(elements, function(element) {
                element.className = 'active';
            });
            
            
           //Cierra todos los elementos del menu
            var divsSlideables = $( "div.slideable" ).find( "div" ).prevObject;
            angular.forEach(divsSlideables, function(element) {
                if(element.id != 'mobilerow')
                {
                    var alturaHijoMobile = parseFloat(element.style.height);
                    
                    element.style.height = '0px';
                    element.setAttribute('expanded', 'false');   
                    
                    
                    if(element.getAttribute("mobile") === "true")
                    {
                        //Para el padre mobile del hijo de remil puta que lo remil pario
                        var parentMobile = document.querySelector("#mobilerow");
                        parentMobile.style.height = parentMobile.clientHeight - alturaHijoMobile + 'px';   
                    }

                }
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
                    
                    //ESTO ES PARA MOBAIL ROMBAIL
                    if(slideableBro.parentElement.getAttribute("mobile") === "true")
                    {
                        //Para el padre mobile del hijo de remil puta que lo remil pario
                        var parentMobile = document.querySelector("#mobilerow");
                        parentMobile.style.height = parentMobile.clientHeight + slideableBro.clientHeight + 'px';   
                    }
                }
            });
            
        }
        
        vm.muestraCategoria = $.inArray(next.templateUrl, vm.viewsConCategoria) >= 0;
        
    });
    
    
    
    $http.get(pathService.path).success(function(data) {
        vm.listado_productos = data;
    });

});