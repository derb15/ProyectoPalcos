//PALCO_URL = "api/Box/"
PALCO_URL = "http://129.148.31.104:8080/api/Box/"

function traerPalco() {
    //FUNCION GET
    $.ajax({
        url: PALCO_URL + "all",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data)
            pintarRespuestaPalco(data);
        },
        error: function (xhr, status) {
            console.log(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowPalco(palco) {
    return `<tr>
        <th scope="row">${palco.id}</th>
        <td>${palco.name}</td>
        <td>${palco.capacity}</td>
        <td>${palco.description}</td>
        <td>${palco.category?.name}</td>
         <td>${palco.location}</td>
        <td>
        <div class="row g-3">
            <div class="col-auto">
                <button class="btn btn-warning" onclick="editarInformacionPalco()"> Actualizar</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-danger" onclick="borrarRegistroPalco(${palco.id})"> Borrar</button>
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
    const nombre = $("#nombrePalco");
    const capacidad = $("#capacidadPalco");
    const descripcion = $("#descripcionPalco");
    const categoria = $("#categoriaPalco");
    const ubicacion = $("#ubicacionPalco");

    let data = {
        name: nombre.val(),
        capacity: capacidad.val(),
        description: descripcion.val(),
        category: {id: categoria.val()},
        location: ubicacion.val(),


    };
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: PALCO_URL + "save",
        type: 'POST',
        dataType: 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function () {
            nombre.val("");
            capacidad.val("");
            descripcion.val("");
            categoria.val("");
            ubicacion.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerPalco();
        }

    });

}

function editarInformacionPalco() {
    let data = {};
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: PALCO_URL + "update",
        type: 'PUT',
        dataType: 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (respuesta) {
            alert("Se ha actualizado")
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerPalco();
        }

    });

}

function borrarRegistroPalco(idPalco) {

    $.ajax({
        url: PALCO_URL + idPalco,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',

        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerPalco();
        }
    });
}


