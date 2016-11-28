function mail() {
    sendMail();
}

function callback_sendgrid() {
    console.log();
}

function sendMail() {
    $.ajax({
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
            'subject': document.getElementById('subject').value,
            'text': document.getElementById('comments').value,
            'from': document.getElementById('email').value,
            'to': 'nicolas.imf@gmail.com',
            'fromname': document.getElementById('name').value
        }
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

function errorMail(xhr, status, error) {
    if (xhr.status == '200' && status !== 'parsererror')
        confirmar()
    else {
        $("#mailError").fadeIn();
        //Tarda 3 segs en apagarse
        setTimeout(function() {
            $("#mailError").fadeOut();
        }, 3000);
    }
}

function limpiarCampos() {
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('comments').value = '';
}
