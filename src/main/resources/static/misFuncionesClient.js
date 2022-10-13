function traerCliente() {
    //FUNCION GET
    $.ajax({
        url: "/api/Client/all",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            pintarRespuestaCliente(data.items);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowClient(cliente) {
    return `<tr>
        <th scope="row">${cliente.id}</th>
        <td>${cliente.name}</td>
        <td>${cliente.age}</td>
        <td>${cliente.email}</td>
        <td>
        <div class="row g-3">
            <div class="col-auto">
                <button class="btn btn-danger" onclick="borrarRegistroCliente(${cliente.id})">Borrar</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary" onclick="populateClienteFields(${cliente.id}, '${cliente.name}', '${cliente.email}', '${cliente.age}')">Editar</button>
            </div>
            
        </div>
        </td>
    </tr>`

}

function pintarRespuestaCliente(listaClientes) {
    let tableContent = "";
    const resultadoCliente = $('#resultadoClientes');
    resultadoCliente.html(tableContent);
    for (let cliente of listaClientes) {
        tableContent += drawTableRowClient(cliente)
    }
    resultadoCliente.append(tableContent);

}

function adicionarRegistroCliente() {
    const id = $("#idCliente");
    const nombre = $("#nameCliente");
    const correo = $("#correoCliente");
    const edad = $("#edadCliente");

    let data = {
        id: id.val(), name: nombre.val(), email: correo.val(), age: edad.val()
    };
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: "/api/Client/save",
        type: 'POST', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            nombre.val("");
            correo.val("");
            edad.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            //  alert('ha sucedido un problema');
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
    const id = $("#idCliente");
    const nombre = $("#nameCliente");
    const correo = $("#correoCliente");
    const edad = $("#edadCliente");


    let data = {
        id: id.val(), name: nombre.val(), email: correo.val(), age: edad.val()
    };
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "/api/Client/save",
        type: 'PUT', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            nombre.val("");
            correo.val("");
            edad.val("");
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

    let data = {
        id: idClient,
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "/api/Client/all",
        type: 'DELETE', //dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            alert('Registro Borrado');
        },
        error: function (xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete: function () {
            traerCliente();
        }

    });

}