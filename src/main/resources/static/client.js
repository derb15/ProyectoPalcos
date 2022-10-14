CLIENT_URL = "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client"

function traerCliente() {
    //FUNCION GET
    $.ajax({
        url: "api/Client/all",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data.items)
            pintarRespuestaCliente(data.items);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowCliente(cliente) {
    return `<tr>
        <th scope="row">${cliente.id}</th>
        <td>${cliente.name}</td>
        <td>${cliente.email}</td>
        <td>${cliente.age}</td>
        <td>${cliente.password}</td>
        <td>
        
        </div>
        </td>
    </tr>`

}

function pintarRespuestaCliente(listaClientes) {
    let tableContent = "";
    const resultadoCliente = $('#resultadoClientes');
    resultadoCliente.empty();
    for (let cliente of listaClientes) {
        tableContent += drawTableRowCliente(cliente)
    }
    resultadoCliente.append(tableContent);

}

function adicionarRegistroCliente() {
    const id = $("#idCliente");
    const nombre = $("#nombreCliente");
    const correo = $("#correoCliente");
    const edad = $("#edadCliente");
    const contraseña = $("#contraseñaCliente");

    let data = {
        id: id.val(),
        name: nombre.val(),
        email: correo.val(),
        age: edad.val(),
        password: contraseña.val()
    };
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: "api/Client/save",
        type: 'POST', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            nombre.val("");
            correo.val("");
            edad.val("");
            contraseña.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerCliente();
        }

    });

}

