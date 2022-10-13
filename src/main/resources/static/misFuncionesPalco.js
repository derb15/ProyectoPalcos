function traerPalco() {
    //FUNCION GET
    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            pintarRespuestaPalco(data.items);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowPalco(palco) {
    return `<tr>
        <th scope="row">${palco.id}</th>
        <td>${palco.location}</td>
        <td>${palco.capacity}</td>
        <td>${palco.category_id}</td>
        <td>${palco.name}</td>
        <td>
        <div class="row g-3">
            <div class="col-auto">
                <button class="btn btn-danger" onclick="borrarRegistroPalco(${palco.id})">Borrar</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary" onclick="populatePalcoFields(${palco.id}, '${palco.location}', '${palco.capacity}', '${palco.category_id}','${palco.name}')">Editar</button>
            </div>
            
        </div>
        </td>
    </tr>`

}

function pintarRespuestaPalco(listaPalcos) {
    let tableContent = "";
    const resultadoPalco = $('#resultadoPalcos');
    resultadoPalco.html(tableContent);
    for (let palco of listaPalcos) {
        tableContent += drawTableRowPalco(palco)
    }
    resultadoPalco.append(tableContent);

}

function adicionarRegistroPalco() {
    const id= $("#idPalco");
    const ubicacion = $("#ubicacionPalco");
    const capacidad = $("#capacidadPalco");
    const categoria_id= $("#categoria_idPalco");
    const nombre = $("#nombrePalco");

    let data = {
        id: id.val(), location: ubicacion.val(), capacity: capacidad.val(), category_id: categoria_id.val(), name: nombre.val()
    };
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box",
        type: 'POST', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            ubicacion.val("");
            capacidad.val("");
            categoria_id.val("");
            nombre.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerPalco();
        }

    });

}

function populatePalcoFields(id, location, capacity, category_id, name) {
    $("#idPalco").val(id);
    $("#ubicacionPalco").val(location);
    $("#capacidadPalco").val(capacity);
    $("#categoria_idPalco").val(category_id);
    $("#nombrePalco").val(name);
}

function actualizarRegistroPalco() {
    const id = $("#idpalco");
    const ubicacion = $("#locationPalco");
    const capacidad = $("#capacityPalco");
    const categoria_id = $("#category_idPalco");
    const nombre = $("#namePalco");


    let data = {
        id: id.val(), location: ubicacion.val(), capacity: capacidad.val(), category_id: categoria_id.val(),name: nombre.val(),
    };
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box",
        type: 'PUT', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            ubicacion.val("");
            capacidad.val("");
            categoria_id.val("");
            nombre.val("");
            alert('Registro Editado');
        },
        error: function (xhr, status) {
            console.log(xhr)
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerPalco();
        }
    });

}

function borrarRegistroPalco(idPalco) {

    let data = {
        id: idPalco,
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box",
        type: 'DELETE', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            $("#id").val("");
            $("#location").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            alert('Registro Borrado');
        },
        error: function (xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerPalco();
        }

    });

}



