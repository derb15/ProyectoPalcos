CATEGORY_URL = "https://ga86dbc11d72b0c-m7pq54x8i0vwwssl.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/category/category"

function traerCategory() {
    //FUNCION GET
    $.ajax({
        url:"api/Category/all",
        type: 'GET',
        dataType: 'json',
        contentType: "application/JSON",

        success: function (data) {
            console.log(data.items)
            pintarRespuestaCategory(data.items);

        },
        error: function (xhr, status) {
            alert(xhr);
            alert('Ha sucedido un problema');
        }
    });
}

function drawTableRowCategory(category) {
    return `<tr>
        <th scope="row">${category.id}</th>
        <td>${category.name}</td>
        <td>${category.description}</td>
        <td>    
        </div>
        </td>
    </tr>`

}

function pintarRespuestaCategory(listaCategorys) {
    let tableContent = "";
    const resultadoCategory = $('#resultadoCategorys');
    resultadoCategory.html(tableContent);
    for (let category of listaCategorys) {
        tableContent += drawTableRowCategory(category)
    }
    resultadoCategory.append(tableContent);

}

function adicionarRegistroCategory() {
    const id = $("#idCategory");
    const nombre = $("#nombreCategory");
    const descripcion = $("#descripcionCategory");


    let data = {
        id: id.val(),
        name: nombre.val(),
        description: descripcion.val()
    };

    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url: "api/Category/save",
        type: 'POST',
        data: dataToSend,
        contentType: 'application/json',

        success: function (data) {
            id.val("");
            nombre.val("");
            descripcion.val("");
            alert('Registro Adicionado');
        },
        error: function (xhr, status) {
            console.log(xhr)
        },
        complete: function () {
            traerCategory();
        }

    });

}

