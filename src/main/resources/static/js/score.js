SCORE_URL = "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/score/score"

function traerScore() {
    //FUNCION GET
    $.ajax({
        url: SCORE_URL,
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data.items)
            pintarRespuestaScore(data.items);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowScore(score) {
    return `<tr>
        <th scope="row">${score.id}</th>
        <td>${score.calification}</td>
        <td>${score.message}</td>
        <td>${score.reservation}</td>   
        <td>     
        </div>
        </td>
    </tr>`

}

function pintarRespuestaScore(listaScores) {
    let tableContent = "";
    const resultadoScore = $('#resultadoScores');
    resultadoScore.html(tableContent);
    for (let score of listaScores) {
        tableContent += drawTableRowScore(score)
    }
    resultadoScore.append(tableContent);

}

function adicionarRegistroScore() {
    const id = $("#idScore");
    const calificacion = $("#calificacionScore");
    const mensaje = $("#mensajeScore");
    const reserva = $("#reservaScore");

    let data = {
        id: id.val(),
        calification: calificacion.val(),
        message: mensaje.val(),
        reservation: reserva.val()
    };

    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: SCORE_URL,
        type: 'POST', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            calificacion.val("");
            mensaje.val("");
            reserva.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerScore();
        }

    });

}

