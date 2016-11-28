angular.module('angularSlideables', [])

.directive('slideable', function() {
    return {
        restrict: 'C',
        compile: function(element, attr) {
            // wrap tag
            var contents = element.html();

            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '0.4s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing,
                    'white-space': 'nowrap'
                });
            };
        }
    };
})

.directive('slideToggle', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target = document.querySelector(attrs.slideToggle);
            //            attrs.expanded = false;
            element.bind('click', function() {
                var target = document.querySelector(attrs.slideToggle);
                var content = target.querySelector('.slideable_content');

                /*AGREGADOS DE MIERDA*/
                //var parent = document.querySelector("#mobilerow");

                //                if(!attrs.expanded) {

                //INICIALIZO EL ATRIBUTO EXPANDED EN FALSE
                if (!target.getAttribute("expanded"))
                    target.setAttribute("expanded", "false");


                var expanded = target.getAttribute("expanded") === "true";

                if (!expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';

                    /*AGREGADOS DE MIERDA*/
                    //parent.style.height = parent.clientHeight + y + 'px';

                } else {
                    var y = content.clientHeight;
                    /*AGREGADOS DE MIERDA*/
                    //parent.style.height = parent.clientHeight - y + 'px';

                    target.style.height = '0px';
                }

                target.setAttribute("expanded", expanded ? "false" : "true")
                    //                attrs.expanded = !attrs.expanded;
            });
        }
    }
});
