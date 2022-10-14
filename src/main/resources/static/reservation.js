RESERVATION_URL = "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/reservation/reservation"

function traerReservation() {
    //FUNCION GET
    $.ajax({
        url: "api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data.items)
            pintarRespuestaReservation(data.items);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowReservation(reservation) {
    return `<tr>
        <th scope="row">${reservation.id}</th>
        <td>${reservation.box}</td>
        <td>${reservation.client}</td>
        <td>${reservation.startdate}</td>
        <td>${reservation.devolutiondate}</td>
        <td>  
        </div>
        </td>
    </tr>`

}

function pintarRespuestaReservation(listaReservations) {
    let tableContent = "";
    const resultadoReservation = $('#resultadoReservations');
    resultadoReservation.empty();
    for (let reservation of listaReservations) {
        tableContent += drawTableRowReservation(reservation)
    }
    resultadoReservation.html(tableContent);

}

function adicionarRegistroReservation() {
    const id = $("#idReservation");
    const palco = $("#palcoReservation");
    const cliente = $("#clienteReservation");
    const fechaInicio = $("#fechaInicioReservation");
    const fechaEntrega = $("#fechaEntregaReservation");

    let data = {
        id: id.val(),
        box: palco.val(),
        client: cliente.val(),
        startdate: fechaInicio.val(),
        devolutiondate: fechaEntrega.val()
    };
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: "api/Reservation/save",
        type: 'POST', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            palco.val("");
            cliente.val("");
            fechaInicio.val("");
            fechaEntrega.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerReservation();
        }
    });
}

