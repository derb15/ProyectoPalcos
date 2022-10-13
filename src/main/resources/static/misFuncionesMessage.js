function traerMensajes() {
    //FUNCION GET
    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
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
        <td>${item.messagetext}</td>
        <td>
        <div class="row g-3">
            <div class="col-auto">
                <button class="btn btn-danger" onclick="borrarRegistroMensajes(${item.id})">Borrar</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary" onclick="populateMessageFields(${item.id}, '${item.messagetext}')">Editar</button>
            </div>
            
        </div>
        </td>
    </tr>`
}

function pintarRespuestaMensajes(items) {
    let tableContent = "";
    $('#resultadoMensajes').html(tableContent);
    for (let item of items) {
        tableContent += drawTableRow(item)
    }
    $('#resultadoMensajes').append(tableContent);


}

function adicionarRegistroMensajes() {
    const id = $("#idMensaje");
    const mensaje = $("#mensajeText");
    let idMensaje = id.val();
    let mensajeTexto = mensaje.val();

    let data = {
        id: idMensaje, mensajeText: mensajeTexto
    };
    console.log(data)
    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(data),
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            mensaje.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerMensajes();
        }

    });

}


function populateMessageFields(idMensaje, mensajeText) {
    const id = $("#idMensaje");
    const mensaje = $("#mensajeText");

    id.val(idMensaje);
    mensaje.val(mensajeText);
}

function actualizarRegistroMensajes() {
    const id = $("#idMensaje");
    const mensaje = $("#mensajeText");


    let data = {
        id: id.val(), mensajeText: mensaje.val()
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            $("#idMensaje").val("");
            $("#mensaje").val("");
            //traerMensajes();
            alert('Registro Editado');
        },
        error: function (xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerMensajes();
        }
    });

}


function borrarRegistroMensajes(idMensaje) {

    let data = {
        id: idMensaje,
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            $("#idMensaje").val("");
            $("#mensaje").val("");
            alert('Registro Borrado');
        },
        error: function (xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerMensajes();
        }
    });

}

function EditarMen(idMensaje) {
    let data = {
        id: idMensaje,
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            $("#idMensaje").val();
            $("#mensaje").val();
            alert('Editado');
        },
        error: function (xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerMensajes();
        }
    });

}