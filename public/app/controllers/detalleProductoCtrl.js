angular.module('detalleProductoCtrl',['productosData','angularSlideables','bootstrapLightbox'])

    .controller('detalleProductoController', function($http, pathService, $routeParams, $sce, Lightbox) {

        var vm = this;
        vm.tab_seleccionada = 1;
        vm.productos_categoria = $routeParams.categoria;
        vm.productos_subcategoria = $routeParams.subcategoria;
        vm.producto_name = $routeParams.producto;
        vm.producto;
        vm.seleccionado;
        vm.descripcionProductoHtml;

        // var $table = $('.table');
        // var $fixedColumn = $table.clone().insertBefore($table).addClass('fixed-column');
        //
        // $fixedColumn.find('th:not(:first-child),td:not(:first-child)').remove();
        //
        // $fixedColumn.find('tr').each(function (i, elem) {
        //     $(this).height($table.find('tr:eq(' + i + ')').height());
        // });


        var xpath = '//*[name="'+vm.productos_categoria+'"]//*[name= "'+vm.productos_subcategoria+'"]//*[name= "'+ vm.producto_name +'"]';

        $http.get(pathService.path).success(function(data) {
            vm.listado_productos = data;
            vm.producto = JSON.search(vm.listado_productos,xpath)[0];
            vm.seleccionado = vm.producto.sub.length > 0 ? vm.producto.sub[0] : vm.producto

            vm.descripcionProductoHtml = $sce.trustAsHtml(vm.seleccionado.descripcion);
            vm.caracteristicasProductoHtml = $sce.trustAsHtml(vm.seleccionado.caracteristicas);
            vm.especificacionesProductoHtml = $sce.trustAsHtml(vm.seleccionado.especificaciones);

        });

        vm.changeData = function(seleccionado) {
            vm.descripcionProductoHtml = $sce.trustAsHtml(vm.seleccionado.descripcion);
            vm.caracteristicasProductoHtml = $sce.trustAsHtml(vm.seleccionado.caracteristicas);
            vm.especificacionesProductoHtml = $sce.trustAsHtml(vm.seleccionado.especificaciones);
        }

        vm.mostrarTabs = function($event, tab_seleccionada){

            document.getElementsByClassName("selected")[0].className = "";
            angular.element($event.currentTarget)[0].className = 'selected';

            vm.tab_seleccionada = tab_seleccionada;
        }

        vm.openLightboxModal = function ($index) {
            Lightbox.openModal(vm.seleccionado.imgs, 0);
        };
})
