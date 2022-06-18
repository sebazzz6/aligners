var arrClinicas = [];

function inicial(){
    var cadena = '<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Ingresa tu caso</h1></div>'+
                     '<div class="row"><div class="col-lg-12 mb-12"><div class="card shadow mb-4"><div class="card-header py-3">'+
                      '<h6 class="m-0 font-weight-bold text-primary">Últimos Pacientes</h6></div><div class="card-body">'+getPacientes()+'</div></div></div>'+
                      '<div class="col-lg-12 mb-12"><div class="card shadow mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-primary">Próximos trabajos</h6></div><div class="card-body"></div></div></div></div>';
        $("#paginaSeleccion").html(cadena);
}

function paginas (op){
    if(op == 1){
        var cadena = '<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Dashboard</h1></div>'+
                     '<div class="row"><div class="col-lg-12 mb-12"><div class="card shadow mb-4"><div class="card-header py-3">'+
                      '<h6 class="m-0 font-weight-bold text-primary">Últimos Pacientes</h6></div><div class="card-body">'+getPacientes()+'</div></div></div>'+
                      '<div class="col-lg-12 mb-12"><div class="card shadow mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-primary">Próximos trabajos</h6></div><div class="card-body"></div></div></div></div>';
        $("#paginaSeleccion").html(cadena);
    }
    if(op == 2){
        var cadena = '<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Pacientes</h1></div>'+
                     '<div class="row"><div class="col-lg-12 mb-8"><div class="card shadow mb-4"><div class="card-header py-3">'+
                      '<h6 class="m-0 font-weight-bold text-primary"></h6></div><div class="card-body">';
        cadena += '<div class="selecciones"><a href="#" class="btn btn-success btnSel" onclick="pacSel(\'nuevo\');">Nuevo</a>';
        cadena += '<a href="#" class="btn btn-success btnSel" onclick="pacSel(\'editar\');">Editar</a>';
        cadena += '<a href="#" class="btn btn-success btnSel" onclick="pacSel(\'eliminar\');">Eliminar</a>';
        cadena += '<a href="#" class="btn btn-success btnSel" onclick="pacSel(\'buscar\');">Buscar</a>';
        cadena += '</div>';
        cadena += '<div id="selPacMenu"></div>';
        cadena += '</div></div></div></div></div>';
        $("#paginaSeleccion").html(cadena);
    }
    if(op == 3){
        var cadena = '<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Pacientes</h1></div>'+
                     '<div class="row"><div class="col-lg-12 mb-8"><div class="card shadow mb-4"><div class="card-header py-3">'+
                      '<h6 class="m-0 font-weight-bold text-primary"></h6></div><div class="card-body">';
        cadena += '<div class="selecciones"><a href="#" class="btn btn-success btnSel" onclick="traSel(\'nuevo\');">Nuevo Trabajo</a>';
        cadena += '<a href="#" class="btn btn-success btnSel" onclick="traSel(\'editar\');">Editar</a>';
        cadena += '<a href="#" class="btn btn-success btnSel" onclick="traSel(\'eliminar\');">Eliminar</a>';
        cadena += '</div>';
        cadena += '<div id="selPacMenu"></div>';
        cadena += '</div></div></div></div></div>';
        $("#paginaSeleccion").html(cadena);
    }
    if(op == 'admin'){
        var cadena = '<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Administraci&oacute;n</h1></div><div class="row"><div class="col-lg-12 mb-8"><div class="card shadow mb-4"><div class="card-header py-3">'+
                      '<h6 class="m-0 font-weight-bold text-primary"></h6></div><div class="card-body"></div></div></div>'+
                      '</div></div></div>';
        $("#paginaSeleccion").html(cadena);
    }
}


function pacSel(op){
    if(op == "nuevo"){
        var cadena = '<h2>Ingreso de Datos</h2><table class="table table-hover tablaPac"><tbody><tr><td>Nombre:</td><td><input id="nombrePac" type="text"></td>';
        cadena += '<td>Apellidos:</td><td><input id="apPac" type="text"></td></tr>';
        cadena += '<tr><td>Rut:</td><td><input id="rutPac" type="text"></td>';
        cadena += '<td>Edad:</td><td><input id="edadPac" type="text"></td></tr>';
        cadena += '<tr><td>Telefono:</td><td><input id="telPac"type="text"></td>';
        cadena += '<td>Clínica:</td><td><div id="clinicaSel"</tr>';
        cadena += '<tr><td>Orden de Trabajo:</td><td><input id="otPac" type="text"></td></tr>';
        cadena += '</tbody></table><a href="#" class="btn btn-success btnSel" onclick="insertPac();">Guardar</a><a href="#" class="btn btn-danger btnSel" onclick="">Salir</a>'
        $("#selPacMenu").html(cadena);
        consultaClinicas();
    }
    if(op == "editar"){
        $("#selPacMenu").html('editar');
    }
    if(op == "eliminar"){
        $("#selPacMenu").html('eliminar');
    }
    if(op == "buscar"){
        $("#selPacMenu").html('buscar');
    }
}

function traSel(op){
    if(op == "nuevo"){
        var cadena = '<h2>Ingreso de Trabajo</h2><table class="table table-hover tablaPac"><tbody><tr><td>Buscar Paciente:&nbsp;<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="buscaPacientes();">Seleccionar Paciente</button></td><td><div id="pacienteSelTra"></div></td></tr><tr><td>Superior</td><td><input id="supTra" type="text"></td><td>Inferior</td><td><input id="supTra" type="text"></td>';
        cadena += '</tbody></table><a href="#" class="btn btn-success btnSel" onclick="insertPac();">Guardar</a><a href="#" class="btn btn-danger btnSel" onclick="">Salir</a>'
        $("#selPacMenu").html(cadena);
        consultaClinicas();
    }
    if(op == "editar"){
        $("#selPacMenu").html('editar');
    }
    if(op == "eliminar"){
        $("#selPacMenu").html('eliminar');
    }
    if(op == "buscar"){
        $("#selPacMenu").html('buscar');
    }
}

function consultaClinicas(){
    $.ajax({ // Send it off for prcessing
        type: "POST",
        dataType: 'json',
        async:true,
        url: "./ajax/clinicas.php",
        success: function (results) {
            console.log(results.data);
            var cadena = '<select><option>Seleccione Cl&iacute;nica</option>';
            for (var a of results.data){
                cadena += '<option value="'+a.id+'">'+a.nombre+'</option>';
            }
            cadena +=  '</select>';
            $("#clinicaSel").html(cadena);
        }
    });
}


function insertPac(){
    var nombre = document.getElementById("nombrePac").value;
    var apellido = document.getElementById("apPac").value;
    var rut = document.getElementById("rutPac").value;
    var edad = document.getElementById("edadPac").value;
    var tel = document.getElementById("telPac").value;
    var clinica = $('#clinicaSel option:selected').val();
    var ot = document.getElementById("otPac").value;
    var param = "?nombre="+nombre+"&ap="+apellido+"&rut="+rut+"&edad="+edad+"&telefono="+tel+"&clinica="+clinica+"&orden="+ot;
    console.log(param);
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "./ajax/insertPaciente.php"+param,
        success: function (results) {
            console.log(results);
            
        }
    });
}

function getPacientes(){
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        url: "./ajax/listaPacientes.php",
        success: function (results) {
            cadena = results;
        }
    });
    return cadena;
}


function buscaPacientes(){
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        url: "./ajax/buscaPaciente.php",
        success: function (results) {
            cadena = results;
        }
    });
    $('#resultadoBusqueda').html(cadena);
}

function pacienteSelTra(sel){
    console.log("Paciente Seleccionado: " + sel);
    var cadena = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        url: "./ajax/buscaPaciente.php?id="+sel,
        success: function (results) {
            cadena = results;
        }
    });
    $('#pacienteSelTra').html(cadena);
}