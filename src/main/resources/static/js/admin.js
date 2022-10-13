ADMIN_URL = "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/admin/admin"

function traerAdmin() {
    //FUNCION GET
    $.ajax({
        url: ADMIN_URL,
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data.items)
            pintarRespuestaAdmin(data.items);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowAdmin(admin) {
    return `<tr>
        <th scope="row">${admin.id}</th>
        <td>${admin.name}</td>
        <td>${admin.email}</td>
        <td>${admin.password}</td>
        <td>     
        </div>
        </td>
    </tr>`

}

function pintarRespuestaAdmin(listaAdmins) {
    let tableContent = "";
    const resultadoAdmin = $('#resultadoAdmins');
    resultadoAdmin.html(tableContent);
    for (let admin of listaAdmins) {
        tableContent += drawTableRowAdmin(admin)
    }
    resultadoAdmin.append(tableContent);

}

function adicionarRegistroAdmin() {
    const id = $("#idAdmin");
    const nombre = $("#nombreAdmin");
    const correo = $("#correoAdmin");
    const contraseña = $("#contraseñaAdmin");

    let data = {
        id: id.val(),
        name: nombre.val(),
        email: correo.val(),
        password: contraseña.val()
    };

    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: ADMIN_URL,
        type: 'POST', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            nombre.val("");
            correo.val("");
            contraseña.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerAdmin();
        }

    });

}
