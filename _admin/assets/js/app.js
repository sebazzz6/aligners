function opciones(op){
    var cadena = '';
    if(op == 1){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<div class="text-center"><button id="nuevoUsuario" onclick="formAgregarUsuario();" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#nuevoUsuarioMod">Nuevo</button>';
        cadena += listaUsuarios();
        document.getElementById("mainPanel").innerHTML = cadena;
    }
    if(op == 2){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<div class="text-center"><button id="nuevoCliente" onclick="formAgregarCliente();" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#nuevoClienteMod">Nuevo</button>';
        cadena += listaClientes();
        document.getElementById("mainPanel").innerHTML = cadena;
    }
    if(op == 3){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<div class="text-center"><button id="nuevaClinica" onclick="formAgregarClinica();" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#nuevaClinicaMod">Nuevo</button>';
        cadena += listaClinicas();
        document.getElementById("mainPanel").innerHTML = cadena;
    }
    if(op == 4){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<div class="text-center"><button id="nuevoPerfil" onclick="formAgregarPerfil();" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#nuevoPerfilMod">Nuevo</button>';
        cadena += listaPerfiles();
        document.getElementById("mainPanel").innerHTML = cadena;
    }
}


function listaUsuarios(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaUsuarios.php",
        success: function (results) {
            retorno = '<table class="table"><tr><th>ID</th><th>Nombres</th><th>Apellidos</th><th>Usuario</th><th>Correo</th><th>Perfil</th><th>Acciones</th></tr>';
            for(var a of results.data){
                retorno += '<tr><td>'+a.id+'</td><td>'+a.nombres+'</td><td>'+a.apellidos+'</td><td>'+a.usuario+'</td><td>'+a.correo+'</td><td>'+perfiles(a.perfil)+'</td><td><button id="modificarUsuario" class="btn btn-primary mx-1">Modificar</button><button id="eliminarUsuario" onclick="delUsuario('+a.id+');"class="btn btn-danger mx-1">Eliminar</button></div></td></tr>'
            }
            retorno += '</table>';
        }
    });
    return retorno;
}

function listaClientes(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaClientes.php",
        success: function (results) {
            retorno = '<table class="table"><tr><th>ID</th><th>Nombres</th><th>Apellidos</th><th>Cargo</th><th>Clínica</th><th>Activo</th><th>Correo</th><th>Acciones</th></tr>';
            console.log(results);
            for(var a of results){
                retorno += '<tr><td>'+a.id+'</td><td>'+a.nombres+'</td><td>'+a.apellidos+'</td><td>'+cargo(a.cargo)+'</td><td>'+clinica(a.clinica)+'</td><td>'+activo(a.activo)+'</td><td>'+a.correo+'</td><td><button id="modificarClinica" class="btn btn-primary mx-1">Modificar</button><button id="eliminarClinica" onclick="delCliente('+a.id+');" class="btn btn-danger mx-1">Eliminar</button></div></td></tr>';
            }  
            retorno += '</table>';
        }
    });
    return retorno;
}

function listaClinicas(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaClinicas.php",
        success: function (results) {
            retorno = '<table class="table"><tr><th>ID</th><th>Clínica</th><th>Dirección</th><th>Comuna</th><th>Ciudad</th><th>Pais</th><th>Metodo Pago</th><th>Teléfono</th><th>Estado</th><th>Acciones</th></tr>';
            console.log(results);
            for(var a of results){
                retorno += '<tr><td>'+a.id+'</td><td>'+a.clinica+'</td><td>'+a.direccion+'</td><td>'+comuna(a.comuna)+'</td><td>'+ciudad(a.ciudad)+'</td><td>'+pais(a.pais)+'</td><td>'+mp(a.metodoPago)+'</td><td>'+a.telefono+'</td><td>'+activo(a.activo)+'</td><td><button id="modificarClinica" class="btn btn-primary mx-1">Modificar</button><button id="eliminarClinica" class="btn btn-danger mx-1" onclick="delClinica('+a.id+');">Eliminar</button></div></td></tr>';
            }  
            retorno += '</table>';
        }
    });
    return retorno;
}

function listaPerfiles(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaPerfiles.php",
        success: function (results) {
            retorno = '<table class="table"><tr><th>ID</th><th>Perfil</th><th>Activo</th><th>Acciones</th></tr>';
            console.log(results);
            for(var a of results){
                retorno += '<tr><td>'+a.id+'</td><td>'+a.nombre+'</td><td>'+activo(a.activo)+'</td><td><button id="modificarPerfil" class="btn btn-primary mx-1">Modificar</button><button id="eliminarPerfil" onclick="delPerfil('+a.id+');" class="btn btn-danger mx-1">Eliminar</button></div></td></tr>';
            }  
            retorno += '</table>';
        }
    });
    return retorno;
}

function perfiles(op){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "GET",
        async:false,
        //dataType: "json",
        url: "../ajax/perfil.php?id="+op,
        success: function (results) {
            retorno = results;
        }
    });
    console.log(op + ' = '+ retorno);
    return retorno;
}

function cargo(op){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "GET",
        async:false,
        //dataType: "json",
        url: "../ajax/perfil.php?id="+op,
        success: function (results) {
            retorno = results;
        }
    });
    console.log(op + ' = '+ retorno);
    return retorno;
}

function clinica(op){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "GET",
        async:false,
        //dataType: "json",
        url: "../ajax/clinica.php?id="+op,
        success: function (results) {
            retorno = results;
        }
    });
    console.log(op + ' = '+ retorno);
    return retorno;
}

function mp(op){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "GET",
        async:false,
        //dataType: "json",
        url: "../ajax/mp.php?id="+op,
        success: function (results) {
            retorno = results;
        }
    });
    console.log(op + ' = '+ retorno);
    return retorno;
}

function activo(op){
    if(op == 1){
        return "Activo";
    }else{
        return "Inactivo";
    }
}

function pais(op){
    if(op == 1){
        return "Chile";
    }else{
        return "No Seleccionado";
    }
}

function comuna(op){
    if(op == 1){
        return "Las Condes";
    }if(op == 2){
        return "Santiago";
    }else{
        return "No Seleccionado";
    }
}

function ciudad(op){
    if(op == 1){
        return "Santiago";
    }else{
        return "No Seleccionado";
    }
}





//Funciones formulario Agregar datos

function formAgregarUsuario(){
    document.getElementById("addUsuario").innerHTML = '';
    var cadena = '';
    cadena += '<table class="table"><tr><td>Nombres</td><td><input id="inNombreUsuario"></td></tr>'+
                '<tr><td>Apellidos</td><td><input id="inApellidoUsuario"></td></tr>'+
                '<tr><td>Usuario</td><td><input id="inUsuario"></td></tr>'+
                '<tr><td>Pass Inicial</td><td><input id="inPassUsuario"></td></tr>'+
                '<tr><td>Correo</td><td><input id="inCorreoUsuario"></td></tr>'+
                '<tr><td>Perfil</td><td>'+selectPerfil()+'</td></tr>'+
                '</table>';
    document.getElementById("addUsuario").innerHTML = cadena;
}

function formAgregarCliente(){
    document.getElementById("addCliente").innerHTML = '';
    var cadena = '';
    cadena += '<table class="table"><tr><td>Nombres</td><td><input id="inNombreCliente"></td></tr>'+
                '<tr><td>Apellidos</td><td><input id="inApellidoCliente"></td></tr>'+
                '<tr><td>Cargo</td><td>'+selectCargo()+'</td></tr>'+
                '<tr><td>Clínica</td><td>'+selectClinica()+'</td></tr>'+
                '<tr><td>Correo</td><td><input id="inCorreoCliente"></td></tr>'+
                '<tr><td>Usuario</td><td><input id="inUsuarioCliente"></td></tr>'+
                '<tr><td>Pass Inicial</td><td><input id="inPassCliente"></td></tr>'+
                '</table>';
    document.getElementById("addCliente").innerHTML = cadena;
}

function formAgregarClinica(){
    document.getElementById("addClinica").innerHTML = '';
    var cadena = '';
    cadena += '<table class="table"><tr><td>Nombre Clínica</td><td><input id="inNombreClinica"></td></tr>'+
                '<tr><td>Dirección</td><td><input id="inDireccionClinica"></td></tr>'+
                '<tr><td>Comuna</td><td>'+selectComuna()+'</td></tr>'+
                '<tr><td>Ciudad</td><td>'+selectCiudad()+'</td></tr>'+
                '<tr><td>Pais</td><td>'+selectPais()+'</td></tr>'+
                '<tr><td>Método Pago</td><td>'+selectMP()+'</td></tr>'+
                '<tr><td>Teléfono</td><td><input id="inTelefonoClinica"></td></tr>'+
                '</table>';
    document.getElementById("addClinica").innerHTML = cadena;
}

function formAgregarPerfil(){
    document.getElementById("addPerfil").innerHTML = '';
    var cadena = '';
    cadena += '<table class="table"><td>Perfil</td><td><input id="inNombrePerfil"></td>'+
                '</tr></table>';
    document.getElementById("addPerfil").innerHTML = cadena;
}

//funciones select 

function selectPerfil(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaPerfiles.php",
        success: function (results) {
            retorno = '<select id="selPerfil">';
            console.log(results);
            for(var a of results){
                retorno += '<option value="'+a.id+'">'+a.nombre+'</option>';
            }  
            retorno += '</select>';
        }
    });
    return retorno;
}

function selectCargo(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaCargos.php",
        success: function (results) {
            retorno = '<select id="selCargo">';
            console.log(results);
            for(var a of results){
                retorno += '<option value="'+a.id+'">'+a.nombre+'</option>';
            }  
            retorno += '</select>';
        }
    });
    return retorno;
}

function selectClinica(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaClinicas.php",
        success: function (results) {
            retorno = '<select id="selClinica">';
            console.log(results);
            for(var a of results){
                retorno += '<option value="'+a.id+'">'+a.clinica+'</option>';
            }  
            retorno += '</select>';
        }
    });
    return retorno;
}

function selectComuna(){
    var retorno = '';
    retorno += '<select id="selComuna">';
    retorno += '<option value="1">Las Condes</option>'+
                '<option value="2">Santiago</option>';
    retorno += '</select>';
    return retorno;
}

function selectCiudad(){
    var retorno = '';
    retorno += '<select id="selCiudad">';
    retorno += '<option value="1">Santiago</option>';
                //'<option value="2">Santiago</option>';
    retorno += '</select>';
    return retorno;
}

function selectPais(){
    var retorno = '';
    retorno += '<select id="selPais">';
    retorno += '<option value="1">Chile</option>';
                //'<option value="2">Santiago</option>';
    retorno += '</select>';
    return retorno;
}

function selectMP(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/listaMP.php",
        success: function (results) {
            retorno = '<select id="selMP">';
            console.log(results);
            for(var a of results){
                retorno += '<option value="'+a.id+'">'+a.nombre+'</option>';
            }  
            retorno += '</select>';
        }
    });
    return retorno;
}
//Funciones agregar a base de datos

function addDBClinicas(){
    var clinica = document.getElementById("inNombreClinica").value;
    var direccion = document.getElementById("inDireccionClinica").value;
    var telefono = document.getElementById("inTelefonoClinica").value;
    var comuna = document.getElementById("selComuna").value;
    var ciudad = document.getElementById("selCiudad").value;
    var pais = document.getElementById("selPais").value;
    var mp = document.getElementById("selMP").value;
    var activo = "1";
    console.log(clinica + "  " + direccion + "  " + telefono + "  " + comuna + "  " + ciudad + "  " + mp + "  " + activo);
    console.log("../ajax/add/addClinica.php?clinica="+clinica+"&direccion="+direccion+"&telefono="+telefono+"&comuna="+comuna+"&ciudad="+ciudad+"&metodoPago="+mp+"&activo="+activo+"&pais="+pais);
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/add/addClinica.php?clinica="+clinica+"&direccion="+direccion+"&telefono="+telefono+"&comuna="+comuna+"&ciudad="+ciudad+"&metodoPago="+mp+"&activo="+activo+"&pais="+pais,
        success: function (results) {
            console.log(results);
        }
    });
    setTimeout(function(){ opciones(3); }, 1000);
}

function addDBUsuario(){
    var nombres = document.getElementById("inNombreUsuario").value;
    var apellidos = document.getElementById("inApellidoUsuario").value;
    var usuario = document.getElementById("inUsuario").value;
    var pass = document.getElementById("inPassUsuario").value;
    var correo = document.getElementById("inCorreoUsuario").value;
    var perfil = document.getElementById("selPerfil").value;
    var activo = "1";
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/add/addUsuario.php?nombres="+nombres+"&apellidos="+apellidos+"&usuario="+usuario+"&pass="+pass+"&correo="+correo+"&perfil="+perfil+"&activo="+activo,
        success: function (results) {
            console.log(results);
        }
    });
    setTimeout(function(){ opciones(1); }, 1000);
}

function addDBCliente(){
    var clinica = document.getElementById("selClinica").value;
    var activo = "1";
    var nombres = document.getElementById("inNombreCliente").value;
    var apellidos = document.getElementById("inApellidoCliente").value;
    var usuario = document.getElementById("inApellidoCliente").value;
    var pass = document.getElementById("inPassCliente").value;
    var correo = document.getElementById("inCorreoCliente").value;
    var cargo = document.getElementById("selCargo").value;
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/add/addCliente.php?clinica="+clinica+"&nombres="+nombres+"&apellidos="+apellidos+"&usuario="+usuario+"&pass="+pass+"&correo="+correo+"&activo="+activo+"&cargo="+cargo,
        success: function (results) {
            console.log(results);
        }
    });
    setTimeout(function(){ opciones(2); }, 1000);
}

//Funciones delete

function delClinica(id){
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/del/delClinica.php?id="+id,
        success: function (results) {
            console.log(results);
        }
    });
    setTimeout(function(){ opciones(3); }, 1000);
}

function delUsuario(id){
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/del/delUsuario.php?id="+id,
        success: function (results) {
            console.log(results);
        }
    });
    setTimeout(function(){ opciones(1); }, 1000);
}

function delPerfil(id){
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/del/delPerfil.php?id="+id,
        success: function (results) {
            console.log(results);
        }
    });
    setTimeout(function(){ opciones(1); }, 1000);
}

function delCliente(id){
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/del/delCliente.php?id="+id,
        success: function (results) {
            console.log(results);
        }
    });
    setTimeout(function(){ opciones(1); }, 1000);
}