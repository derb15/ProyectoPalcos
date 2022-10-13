function traerInformacion(){
//FUNCION GET
    $.ajax({
        url : '/api/Client/all',
        type : 'GET',
        dataType : 'json',
        contentType: "application/JSON",

        success : function(data) {
            pintarRespuesta(data.items);

        },
        error : function(xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log(xhr);
        }
    });
}

function pintarRespuesta(items){
    let myTable = "<Table BORDER=1>";
    myTable += "<tr>";
    myTable += "<td>ID<td>";
    myTable += "<td>NOMBRE<td>";
    myTable += "<td>CORREO<td>";
    myTable += "<td>EDAD<td>";
    myTable += "<td>Action<td>";
    myTable += "</tr>";
    $('#resultado').html("<br><br>");
    for (i=0; i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"<td>";
        myTable += "<td>"+items[i].name+"<td>";
        myTable += "<td>"+items[i].email+"<td>";
        myTable += "<td>"+items[i].age+"<td>";
        myTable += "<td><button onclick=borrarRegistro("+items[i].id+")>Borrar</button><td>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $('#resultado').append(myTable);


}

function adicionarRegistro() {
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Client/save',
        type : 'POST',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
            alert ('Registro Adicionado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerInformacion();
        }

    });

}

function actualizarRegistro() {
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Client/save',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
            traerInformacion();
            alert ('Registro Editado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerInformacion();
        }
    });

}

function borrarRegistro(idCliente) {

    let data={
        id:idCliente,
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Client/all',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
            alert ('Registro Borrado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerInformacion();
        }
    });

}



function traerPalcos(){
//FUNCION GET
    $.ajax({
        url : '/api/Box/all',
        type : 'GET',
        dataType : 'json',
        contentType: "application/JSON",

        success : function(data) {
            pintarRespuestaPalcos(data.items);

        },
        error : function(xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log(xhr);
        }
    });
}

function pintarRespuestaPalcos(items){
    let myTableP = "<Table BORDER=1>";
    myTableP += "<tr>";
    myTableP += "<td>ID<td>";
    myTableP += "<td>UBICACION<td>";
    myTableP += "<td>CAPACIDAD<td>";
    myTableP += "<td>CATEGORIA ID<td>";
    myTableP += "<td>NOMBRE<td>";
    myTableP += "<td>Action<td>";
    myTableP += "</tr>";
    $('#resultado2').html("<br><br>");
    for (i=0; i<items.length; i++){
        myTableP += "<tr>";
        myTableP += "<td>"+items[i].id+"<td>";
        myTableP += "<td>"+items[i].location+"<td>";
        myTableP += "<td>"+items[i].capacity+"<td>";
        myTableP += "<td>"+items[i].category_id+"<td>";
        myTableP += "<td>"+items[i].name+"<td>";
        myTableP += "<td><button onclick=borrarRegistroPalcos("+items[i].id+")>Borrar</button><td>";
        myTableP += "</tr>";

    }
    myTableP += "</table>";
    $('#resultado2').append(myTableP);


}

function adicionarRegistroPalcos() {
    let idPalco=$("#idPalco").val();
    let ubicacion=$("#ubicacionPalco").val();
    let capacidad=$("#capacidadPalco").val();
    let categoria=$("#categoriaPalco").val();
    let nombre=$("#nombrePalco").val();

    let data={
        id:idPalco,
        location:ubicacion,
        capacity:capacidad,
        category_id:categoria,
        name:nombre
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Box/save',
        type : 'POST',
        dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idPalco").val("");
            $("#ubicacionPalco").val("");
            $("#capacidadPalco").val("");
            $("#categoriaPalco").val("");
            $("#nombrePalco").val("");
            alert ('Registro Adicionado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerPalcos();
        }

    });

}

function actualizarRegistroPalcos() {
    let idPalco=$("#idPalco").val();
    let ubicacion=$("#ubicacionPalco").val();
    let capacidad=$("#capacidadPalco").val();
    let categoria=$("#categoriaPalco").val();
    let nombre=$("#nombrePalco").val();

    let data={
        id:idPalco,
        location:ubicacion,
        capacity:capacidad,
        category_id:categoria,
        name:nombre
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Box/save',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idPalco").val("");
            $("#ubicacionPalco").val("");
            $("#capacidadPalco").val("");
            $("#categoriaPalco").val("");
            $("#nombrePalco").val("");
            traerPalcos();
            alert ('Registro Editado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerPalcos();
        }
    });

}

function borrarRegistroPalcos(idPalco) {

    let data={
        id:idPalco,
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Box/all',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idPalco").val("");
            $("#ubicacionPalco").val("");
            $("#capacidadPalco").val("");
            $("#categoriaPalco").val("");
            $("#nombrePalco").val("");
            alert ('Registro Borrado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerPalcos();
        }
    });

}



function traerMensajes(){
//FUNCION GET
    $.ajax({
        url : '/api/Message/all',
        type : 'GET',
        dataType : 'json',
        contentType: "application/JSON",

        success : function(data) {
            pintarRespuestaMensajes(data.items);

        },
        error : function(xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log(xhr);
        }
    });
}

function pintarRespuestaMensajes(items){
    let myTableM = "<Table BORDER=1>";
    myTableM += "<tr>";
    myTableM += "<td>ID<td>";
    myTableM += "<td>MENSAJE<td>";
    myTableM += "<td>Action<td>";
    myTableM += "</tr>";
    $('#resultado3').html("<br><br>");
    for (i=0; i<items.length; i++){
        myTableM += "<tr>";
        myTableM += "<td>"+items[i].id+"<td>";
        myTableM += "<td><a href='Detalle.html?id="+items[i].id+"' class='aLink'>"+items[i].messagetext+"</a><td>";
        myTableM += "<td><button onclick=borrarRegistroMensajes("+items[i].id+")>Borrar</button><td>";
        myTableM += "</tr>";
    }
    myTableM += "</table>";
    $('#resultado3').append(myTableM);


}

function adicionarRegistroMensajes() {
    let idMensaje=$("#idMensaje").val();
    let mensajeTexto=$("#mensaje").val();

    let data={
        id:idMensaje,
        messagetext:mensajeTexto
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Message/save',
        type : 'POST',
        dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idMensaje").val("");
            $("#mensaje").val("");
            alert ('Registro Adicionado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerMensajes();
        }

    });

}

function actualizarRegistroMensajes() {
    let idMensaje=$("#idMensaje").val();
    let mensajeTexto=$("#mensaje").val();

    let data={
        id:idMensaje,
        messagetext:mensajeTexto
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Message/save',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idMensaje").val("");
            $("#mensaje").val("");
            //traerMensajes();
            alert ('Registro Editado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerMensajes();
        }
    });

}

function borrarRegistroMensajes(idMensaje) {

    let data={
        id:idMensaje,
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : '/api/Message/all',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        success : function(data) {
            $("#idMensaje").val("");
            $("#mensaje").val("");
            alert ('Registro Borrado');
        },
        error : function(xhr, status) {
            //  alert('ha sucedido un problema');
        },
        complete : function() {
            traerMensajes();
        }
    });

}


function EditarMen(idMensaje){
    let queryStrings = new URLSearchParams(window.location.search)
    let parametrosGet = Object.fromEntries(queryStrings.entries())

    //FUNCION GET
    $.ajax({
        url : 'https://g138b03a26498fe-qy8zgvfzypnu70uq.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/:id',
        type : 'GET',
        dataType : 'json',
        contentType: "application/JSON",

        success : function(data) {
            console.log("se ve el mensaje con el id: ", parametrosGet)

        },
        error : function(xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log(xhr);
        }
    });
}



