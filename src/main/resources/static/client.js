//CLIENT_URL = "api/Client/"
CLIENT_URL = "http://129.148.31.104:8080/api/Client/"

function traerCliente() {
    //FUNCION GET
    $.ajax({
        url: CLIENT_URL + "all",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data)
            pintarRespuestaCliente(data);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowCliente(cliente) {
    return `<tr>
        <th scope="row">${cliente.idClient}</th>
        <td>${cliente.name}</td>
        <td>${cliente.email}</td>
        <td>${cliente.age}</td>
        <td>${cliente.password}</td>
        <td>
        <div class="row g-3">
            <div class="col-auto">
                <button class="btn btn-warning" onclick="actualizarRegistroCliente()"> Actualizar</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-danger" onclick="borrarRegistroCliente(${cliente.idClient})"> Borrar</button>
            </div>
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
    const nombre = $("#nombreCliente");
    const correo = $("#correoCliente");
    const edad = $("#edadCliente");
    const contrasena = $("#contraseñaCliente");

    let data = {
        name: nombre.val(),
        email: correo.val(),
        age: edad.val(),
        password: contrasena.val()
    };
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: CLIENT_URL + "save",
        type: 'POST', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            nombre.val("");
            correo.val("");
            edad.val("");
            contrasena.val("");
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


function populateClienteFields(id, name, email, age) {
    $("#idCliente").val(id);
    $("#nameCliente").val(name);
    $("#correoCliente").val(email);
    $("#edadCliente").val(age);
}

function actualizarRegistroCliente() {
    const nombre = $("#nombreCliente");
    const correo = $("#correoCliente");
    const edad = $("#edadCliente");
    const contrasena = $("#contrasenaCliente");


    let data = {
        name: nombre.val(),
        email: correo.val(),
        age: edad.val(),
        password: contrasena.val()
    };

    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: CLIENT_URL + "update",
        type: 'PUT', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',


        success: function (data) {
            nombre.val("");
            correo.val("");
            edad.val("");
            contrasena.val("");
            alert('Registro Editado');
        },
        error: function (xhr, status) {
            console.log(xhr)
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerCliente();
        }
    });

}

function borrarRegistroCliente(idClient) {

    $.ajax({
        url: CLIENT_URL + idClient,
        type: 'DELETE', //dataType : 'json',
        contentType: 'application/json',

        success: function () {
            alert('Registro Borrado');
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerCliente();
        }

    });

}

