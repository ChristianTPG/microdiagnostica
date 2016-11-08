angular.module('sideCtrl',['productosData','angularSlideables'])

    .controller('sideController',function(){

    var vm = this;

    vm.openNav = function() {
        angular.element(document.querySelector('#mySidenav'))[0].style.width = "250px";
    }

    vm.closeNav = function() {
        angular.element(document.querySelector('#mySidenav'))[0].style.width = "0px";
    }

    vm.more = function() {
        angular.element(document.querySelector('#mySidenav2'))[0].style.width = "250px";

    }
    
    vm.less = function() {
        angular.element(document.querySelector('#mySidenav2'))[0].style.width = "0px";

    }
    
})
