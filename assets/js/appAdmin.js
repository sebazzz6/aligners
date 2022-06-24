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
    var lista = [];
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaClinicas.php",
        success: function (results) {
            lista = results;
            cadena += '<table class="table"><thead><tr><th>ID</th><th>Clinica</th><th>Dirección</th><th>Teléfono</th><th>Comuna</th>'+
                        '<th>Ciudad</th><th>Pais</th><th>Método Pago</th><th>Suscripción</th></tr></thead><tbody>';
            for (var a of results){
                //console.log(a);
                cadena += '<tr><td>'+a.id+'</td><td>'+a.clinica+'</td><td>'+a.direccion+'</td><td>'+a.telefono+'</td><td>'+nombreOpciones(1,a.comuna)+'</td><td>'+nombreOpciones(2,a.ciudad)+'</td><td>'+nombreOpciones(3,a.pais)+'</td><td>'+nombreOpciones(4,a.metodoPago)+'</td><td>'+nombreOpciones(5,a.activo)+'</td></tr>';
            }
        }
    });
    console.log(lista);
    cadena += '</tbody></table>';
    return cadena;
}

function agregarClinicas(){
    var listaregiones = regiones();
    var cadenaRegion = '<select id="selRegion" onchange="ciudad(this.value);">'+listaregiones+'</select>';
    $("#listaRegiones").html(cadenaRegion);
    var cadenaPais = '<select id="selPais"><option value="1">Chile</option></select>';
    $("#listaPais").html(cadenaPais);
}

function ciudad(op){
    console.log(op);
    var ciudad = ciudades(op);
    var cadenaCiudad = '<select id="selCiudad" onchange="comuna(this.value);">'+ciudad+'</select>';
    $("#listaCiudad").html(cadenaCiudad);
}

function comuna(op){
    $("#listaComuna").html('');
    console.log(op);
    var comuna = comunas(op);
    console.log(comuna);
    var cadenaComuna = '<select id="selComuna">'+comuna+'</select>';
    $("#listaComuna").html(cadenaComuna);
}

function addDBClinicas(){
    var clinica = document.getElementById("nclinica").value;
    var direccion = document.getElementById("dclinica").value;
    var telefono = document.getElementById("tclinica").value;
    var comuna = document.getElementById("selComuna").value;
    var ciudad = document.getElementById("selCiudad").value;
    var pais = document.getElementById("selPais").value;
    var mp = document.getElementById("selMp").value;
    var activo = document.getElementById("selSuscripcion").value;
    console.log(clinica + "  " + direccion + "  " + telefono + "  " + comuna + "  " + ciudad + "  " + mp + "  " + activo);
    console.log("../ajax/addClinica.php?clinica="+clinica+"&direccion="+direccion+"&telefono="+telefono+"&comuna="+comuna+"&ciudad="+ciudad+"&metodoPago="+mp+"&activo="+activo+"&pais="+pais);
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/addClinica.php?clinica="+clinica+"&direccion="+direccion+"&telefono="+telefono+"&comuna="+comuna+"&ciudad="+ciudad+"&metodoPago="+mp+"&activo="+activo+"&pais="+pais,
        success: function (results) {
            console.log(results);
        }
    });
}

function regiones(){
    console.log("Consultando regiones...");
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        url: "../ajax/region.php",
        async:false,
        success: function (results) {
            cadena = results;
        }
    });
    return cadena;
}

function ciudades(op){
    console.log("Consultando ciudades...");
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/ciudades.php?op="+op,
        async:false,
        success: function (results) {
            cadena = results;
        }
    });
    console.log(cadena);
    return cadena;
}

function comunas(op){
    console.log("Consultando comuna...");
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/comunas.php?op="+op,
        async:false,
        success: function (results) {
            cadena = results;
        }
    });
    //console.log(cadena);
    return cadena;
}

function nombreOpciones(sel, op){
    console.log("Consultando nombres...");
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/nombres.php?sel="+sel+"&op="+op,
        async:false,
        success: function (results) {
            cadena = results;
        }
    });
    //console.log(cadena);
    return cadena;
}