PALCO_URL = "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box"

function traerPalco() {
    //FUNCION GET
    $.ajax({
        url: "api/Box/all",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data.items)
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
        <td>${palco.name}</td>
        <td>${palco.capacity}</td>
        <td>${palco.description}</td>
        <td>${palco.category}</td>
         <td>${palco.ubication}</td>
        <td>
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
    const id = $("#idPalco");
    const nombre = $("#nombrePalco");
    const capacidad = $("#capacidadPalco");
    const descripcion = $("#descripcionPalco");
    const categoria = $("#categoriaPalco");
    const ubicacion = $("#ubicacionPalco");

    let data = {
        id: id.val(),
        name: nombre.val(),
        capacity: capacidad.val(),
        description: descripcion.val(),
        category: categoria.val(),
        ubication: ubicacion.val(),


    };
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: "api/Box/save",
        type: 'POST',
        dataType: 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
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











