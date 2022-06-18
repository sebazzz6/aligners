function opciones(op){
    if(op == 1){
        var cadena = "<h2>Clínicas</h2>";
        cadena += '<button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#ingresoClinica" onclick="agregarClinicas();">Ingresar</button><button class="btn btn-success mx-2">Buscar</button>';
        cadena += listaClinicas();
        $("#paginaSeleccion").html(cadena);
    }
    if(op == 2){
        var cadena = '<h2>Clientes</h2>';
        cadena += '<button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#ingresoCliente">Ingresar</button><button class="btn btn-success mx-2">Buscar</button>';
        cadena += listaClientes();
        $("#paginaSeleccion").html(cadena);
    }
    if(op == 3){
        var cadena = "<h2>Usuarios</h2>";
        $("#paginaSeleccion").html(cadena);
    }
}

function listaClientes(){
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        url: "../ajax/listaClientes.php",
        success: function (results) {
            cadena = results;
        }
    });
    return cadena;
}

function listaClinicas(){
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        url: "../ajax/listaClinicas.php",
        success: function (results) {
            cadena = results;
        }
    });
    return cadena;
}

function agregarClinicas(){
    var cadenaComuna = '<select id="selComuna"><option value="Santiago">Santiago</option></select>';
    $("#listaComuna").html(cadenaComuna);

    var cadenaCiudad = '<select id="selCiudad"><option value="Santiago">Santiago</option></select>';
    $("#listaCiudad").html(cadenaCiudad);

    var cadenaPais = '<select id="selPais"><option value="Chile">Chile</option></select>';
    $("#listaPais").html(cadenaPais);

    var cadenaMp = '<select id="selMp"><option value="Transferencia">Transferencia</option><option value="Transbank">Transbank</option></select>';
    $("#listaMetodoPago").html(cadenaMp);

    var cadenaActivo = '<select id="selSuscriocion"><option value="1">Activo</option></select>';
    $("#listaSuscripcion").html(cadenaActivo);
}

function agregarClinicas(){
    var clinica = document.getElementById("nclinica").value;
    var direccion = document.getElementById("dclinica").value;
    var telefono = document.getElementById("tclinica").value;
    console.log(clinica + "  " + direccion + "  " + telefono);
}