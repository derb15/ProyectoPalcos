MESSAGE_URL = "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message"

function traerMensajes() {
    //FUNCION GET
    $.ajax({
        url: MESSAGE_URL,
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data.items)
            pintarRespuestaMensajes(data.items);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        },
        complete: function (xhr, status) {
            console.log(xhr);
        }
    });
}

function drawTableRow(item) {
    return `<tr>
        <th scope="row">${item.id}</th>
        <td>${item.box}</td>
        <td>${item.text}</td>
        <td>
        <div class="row g-3">
            <div class="col-auto">
        </div>
        </td>
    </tr>`
}

function pintarRespuestaMensajes(items) {
    let tableContent = "";
    $('#resultadoMensajes').empty();
    for (let item of items) {
        tableContent += drawTableRow(item)
    }
    $('#resultadoMensaje').html(tableContent);


}

function adicionarRegistroMensajes() {
    const id = $("#idMensaje");
    const palco = $("#palcomensaje");
    const texto = $("#textomensaje");


    let data = {
        id: id.val(),
        box: palco.val(),
        text: texto.val()
    };
    console.log(data)
    $.ajax({
        url: MESSAGE_URL,
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            palco.val("");
            texto.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerMensajes();
        }

    });

}

