angular.module('contactoCtrl', [])

.controller('contactoController', function($scope) {

    var vm = this;
 
    vm.sendMail = function() {
        /*$.ajax({
            type: "POST",
            url: "https://api.sendgrid.com/api/mail.send.json",
            contentType: 'text/plain',
            xhrFields: {
                withCredentials: false
            },
            crossDomain: true,
            success: confirmar,
            error: errorMail,
            cache: true,
            dataType: 'jsonp',
            data: {
                'api_user': 'h.iacovino',
                'api_key': 'Jackkerouac25',
                'toname': 'Hernan Iacovino',
                'subject': $scope.subject,
                'text': $scope.comments,
                'from': $scope.email,
                'to': 'nicolas.imf@gmail.com',
                'fromname': $scope.name
            }
        });*/
        
        emailjs.send("microdiagnostica", "microdiagnostica", {
            "email":    $scope.email,
            "name":     $scope.name,
            "subject":  $scope.subject,
            "comments": $scope.comments
        }).then(function(response) {
                confirmar()
            }, function(err) {
                error()
            });
        }

    function confirmar() {
        $("#mailConfirmado").fadeIn();
        //Tarda 3 segs en apagarse
        setTimeout(function() {
            $("#mailConfirmado").fadeOut();
        }, 3000);
        limpiarCampos();
    }
    
    
    function error() {
        $("#mailError").fadeIn();
        
        //Tarda 3 segs en apagarse
        setTimeout(function() {
            $("#mailError").fadeOut();
        }, 3000);
    }

    /*
    function errorMail(xhr, status, error) {
        if (xhr.status == '200' && status == 'parsererror')
            confirmar()
        else {
            $("#mailError").fadeIn();
            //Tarda 3 segs en apagarse
            setTimeout(function() {
                $("#mailError").fadeOut();
            }, 3000);
        }
    }*/

    function limpiarCampos() {
        $scope.email = '';
        $scope.name = '';
        $scope.subject = '';
        $scope.comments = '';
    }
});
