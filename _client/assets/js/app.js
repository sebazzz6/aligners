var opcionesForm = 0;

function opciones(op){
    var cadena = '';
    if(op == 1){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<h2>Datos de Paciente</h2>'+
        '<table class="table table-responsive">'+
        '<tr>'+
            '<td>Nombres:</td><td><input id="otNombrePac"></td><td>Apellidos:</td><td><input id="otApellidoPac"></td>'+
        '</tr><tr>'+
            '<td>Rut:</td><td><input id="otRutPac"></td><td>Fecha Nacimiento:</td><td><input type="date" id="otFnPac"></td>'+
        '</tr></table>'+
        '<table class="table table-responsive">'+
        '<tr>'+
            '<td colspan="2">Selecccione la(s) Arcada(s) para alineador(es):</td>'+
            '<td><input type="radio" id="otArcSup" value="1" name="arcada" onclick="habilitar(1);"><label class="mx-2" for="sup">Máxilar Superior</label></td>'+
            '<td><input type="radio" id="otArcInf" value="2" name="arcada" onclick="habilitar(2);"><label class="mx-2" for="inf">Mandíbula</label></td>'+
            '<td><input type="radio" id="otArcAmb" value="3" name="arcada" onclick="habilitar(3);"><label class="mx-2" for="inf">Ambas</label></td>'+
        '</tr><table>'+
        '<h2>Orden de Alineador</h2>'+
        '<h4>Seleccione las indicaciones terapeuticas por arcada</h4>'+
        '<table class="table table-responsive">'+
        '<tr>'+
            '<td colspan="2" align="center">Máxilar Superior</td><td colspan="2" align="center">Mandíbula</td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="radio" id="aliCheckSupCom" name="aliSup" value="1" disabled>&nbsp;&nbsp;Alineación Completa</td>'+
            '<td><input class="form-check-input" type="radio" id="aliCheckSupTres" name="aliSup" value="2" disabled>&nbsp;&nbsp;Alineación solo de 3 a 3</td>'+
            '<td><input class="form-check-input" type="radio" id="aliCheckInfCom" name="aliInf" value="1" disabled>&nbsp;&nbsp;Alineación Completa</td>'+
            '<td><input class="form-check-input" type="radio" id="aliCheckInfTres" name="aliInf" value="2" disabled>&nbsp;&nbsp;Alineación solo de 3 a 3</td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="nivSup" value="1" disabled>&nbsp;&nbsp;Nivelación</td><td><input id="inpNivSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="nivInf" value="1" disabled>&nbsp;&nbsp;Nivelación</td><td><input id="inpNivInf" value="" disabled></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="stripSup" value="1" disabled>&nbsp;&nbsp;Stripping entre dientes</td><td><input id="inpStripSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="stripInf" value="1" disabled>&nbsp;&nbsp;Stripping entre dientes</td><td><input id="inpStripInf" value="" disabled></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="expSup" value="1" disabled>&nbsp;&nbsp;Expansión</td><td><input id="inpExpSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="expInf" value="1" disabled>&nbsp;&nbsp;Expansión</td><td><input id="inpExpInf" value="" disabled></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="rrdSup" value="1" disabled>&nbsp;&nbsp;RetroInclinar o Retruir dientes</td><td><input id="inpRrdSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="rrdInf" value="1" disabled>&nbsp;&nbsp;RetroInclinar o Retruir dientes</td><td><input id="inpRrdInf" value="" disabled></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="ppdSup" value="1" disabled>&nbsp;&nbsp;ProInclinar o Protruir dientes</td><td><input id="inpPpdSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="ppdInf" value="1" disabled>&nbsp;&nbsp;ProInclinar o Protruir dientes</td><td><input id="inpPpdInf" value="" disabled></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="extSup" value="1" disabled>&nbsp;&nbsp;Extruir dientes</td><td><input id="inpExtSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="extInf" value="1" disabled>&nbsp;&nbsp;Extruir dientes</td><td><input id="inpExtInf" value="" disabled></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="intSup" value="1" disabled>&nbsp;&nbsp;Intruir dientes</td><td><input id="inpIntSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="intInf" value="1" disabled>&nbsp;&nbsp;Intruir dientes</td><td><input id="inpIntInf" value="" disabled></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="ceeSup" value="1" disabled>&nbsp;&nbsp;Cerrar Espacio entre dientes</td><td><input id="inpCeeSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="ceeInf" value="1" disabled>&nbsp;&nbsp;Cerrar Espacio entre dientes</td><td><input id="inpCeeInf" value="" disabled></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="clmSup" value="1" disabled>&nbsp;&nbsp;Cerrar Línea Media</td><td><input id="inpClmSup" value="" disabled></td>'+
            '<td><input class="form-check-input" type="checkbox" id="clmInf" value="1" disabled>&nbsp;&nbsp;Cerrar Línea Media</td><td><input id="inpClmInf" value="" disabled></td>'+
        '</tr>'+
        '</table>';
            cadena += '<textarea id="observaciones" placeholder="Observaciones" rows="4" cols="50" value="-" disabled></textarea><br/><br/>';
            cadena += '<div><button class="btn btn-danger" onclick="grabarOT();">Enviar</button></div>';
            document.getElementById("mainPanel").innerHTML = cadena;
    }
    if(op == 2){
        document.getElementById("mainPanel").innerHTML = '';
    }
    if(op == 3){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<div class="container">'+
                    '<div id="calendar"></div>'+
                    '</div>';
        document.getElementById("mainPanel").innerHTML = cadena;
        calendario();
    }
    if(op == 4){
        document.getElementById("mainPanel").innerHTML = '';
    }
}


function calendario(){
    $(document).ready(function() {
        var calendar = $('#calendar').fullCalendar({
         editable:true,
         header:{
          left:'prev,next today',
          center:'title',
          right:'month,agendaWeek,agendaDay'
         },
         events: 'load.php',
         selectable:true,
         selectHelper:true,
         select: function(start, end, allDay)
         {
          var title = prompt("Desea Agendar para este dia?");
          if(title)
          {
           var start = $.fullCalendar.formatDate(start, "Y-MM-DD HH:mm:ss");
           var end = $.fullCalendar.formatDate(end, "Y-MM-DD HH:mm:ss");
           $.ajax({
            url:"insert.php",
            type:"POST",
            data:{title:title, start:start, end:end},
            success:function()
            {
             calendar.fullCalendar('refetchEvents');
             alert("Added Successfully");
            }
           })
          }
         },
         editable:true,
         eventResize:function(event)
         {
          var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
          var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
          var title = event.title;
          var id = event.id;
          $.ajax({
           url:"update.php",
           type:"POST",
           data:{title:title, start:start, end:end, id:id},
           success:function(){
            calendar.fullCalendar('refetchEvents');
            alert('Event Update');
           }
          })
         },
     
         eventDrop:function(event)
         {
          var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
          var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
          var title = event.title;
          var id = event.id;
          $.ajax({
           url:"update.php",
           type:"POST",
           data:{title:title, start:start, end:end, id:id},
           success:function()
           {
            calendar.fullCalendar('refetchEvents');
            alert("Event Updated");
           }
          });
         },
     
         eventClick:function(event)
         {
          if(confirm("Are you sure you want to remove it?"))
          {
           var id = event.id;
           $.ajax({
            url:"delete.php",
            type:"POST",
            data:{id:id},
            success:function()
            {
             calendar.fullCalendar('refetchEvents');
             alert("Event Removed");
            }
           })
          }
         },
     
        });
       });
}

function grabarOT(){
    let arcSel = aliSup = aliInf = nivSup = nivInf = stripSup = stripInf = expSup = expInf = rrdSup = rrdInf = ppdSup = ppdInf = extSup = extInf = intSup = intInf = ceeSup = ceeInf = clmSup = clmInf = '0';
    let usuario = document.getElementById("idUsuario").value;
    let nombre = document.getElementById("otNombrePac").value;
    let apellido = document.getElementById("otApellidoPac").value;
    let rut = document.getElementById("otRutPac").value;
    let fn = document.getElementById("otFnPac").value;
    let tipoOt = "1";

    var element = document.querySelector('input[name = "arcada"]:checked');
    if(typeof(element) != 'undefined' && element != null){ arcSel = element.value; }

    var elementaliSup = document.querySelector('input[name = "aliSup"]:checked');
    if(typeof(elementaliSup) != 'undefined' && elementaliSup != null){ aliSup = elementaliSup.value; }
    var elementaliInf = document.querySelector('input[name = "aliInf"]:checked');
    if(typeof(elementaliInf) != 'undefined' && elementaliInf != null){ aliInf = elementaliInf.value; }

    var elementnivSup = document.querySelector('input[id = "nivSup"]:checked');
    if(typeof(elementnivSup) != 'undefined' && elementnivSup != null){ nivSup = "1"; }
    var elementnivInf = document.querySelector('input[id = "nivInf"]:checked');
    if(typeof(elementnivInf) != 'undefined' && elementnivInf != null){ nivInf = "1"; }
    
    var elementstripSup = document.querySelector('input[id = "stripSup"]:checked');
    if(typeof(elementstripSup) != 'undefined' && elementstripSup != null){ stripSup = "1"; }
    var elementstripInf = document.querySelector('input[id = "stripInf"]:checked');
    if(typeof(elementstripInf) != 'undefined' && elementstripInf != null){ stripInf = "1"; }

    var elementexpSup = document.querySelector('input[id = "expSup"]:checked');
    if(typeof(elementexpSup) != 'undefined' && elementexpSup != null){ expSup = "1"; }
    var elementexpInf = document.querySelector('input[id = "expInf"]:checked');
    if(typeof(elementexpInf) != 'undefined' && elementexpInf != null){ expInf = "1"; }

    var elementrrdSup = document.querySelector('input[id = "rrdSup"]:checked');
    if(typeof(elementrrdSup) != 'undefined' && elementrrdSup != null){ rrdSup = "1"; }
    var elementrrdInf = document.querySelector('input[id = "rrdInf"]:checked');
    if(typeof(elementrrdInf) != 'undefined' && elementrrdInf != null){ rrdInf = "1"; }

    var elementppdSup = document.querySelector('input[id = "ppdSup"]:checked');
    if(typeof(elementppdSup) != 'undefined' && elementppdSup != null){ ppdSup = "1"; }
    var elementppdInf = document.querySelector('input[id = "ppdInf"]:checked');
    if(typeof(elementppdInf) != 'undefined' && elementppdInf != null){ ppdInf = "1"; }

    var elementextSup = document.querySelector('input[id = "extSup"]:checked');
    if(typeof(elementextSup) != 'undefined' && elementextSup != null){ extSup = "1"; }
    var elementextInf = document.querySelector('input[id = "extInf"]:checked');
    if(typeof(elementextInf) != 'undefined' && elementextInf != null){ extInf = "1"; }

    var elementintSup = document.querySelector('input[id = "intSup"]:checked');
    if(typeof(elementintSup) != 'undefined' && elementintSup != null){ intSup = "1"; }
    var elementintInf = document.querySelector('input[id = "intInf"]:checked');
    if(typeof(elementintInf) != 'undefined' && elementintInf != null){ intInf = "1"; }

    var elementceeSup = document.querySelector('input[id = "ceeSup"]:checked');
    if(typeof(elementceeSup) != 'undefined' && elementceeSup != null){ ceeSup = "1"; }
    var elementceeInf = document.querySelector('input[id = "ceeInf"]:checked');
    if(typeof(elementceeInf) != 'undefined' && elementceeInf != null){ ceeInf = "1"; }

    var elementclmSup = document.querySelector('input[id = "clmSup"]:checked');
    if(typeof(elementclmSup) != 'undefined' && elementclmSup != null){ clmSup = "1"; }
    var elementclmInf = document.querySelector('input[id = "clmInf"]:checked');
    if(typeof(elementclmInf) != 'undefined' && elementclmInf != null){ clmInf = "1"; }

    let inpNivSup = document.getElementById("inpNivSup").value;
    let inpNivInf = document.getElementById("inpNivInf").value;
    let inpstripSup = document.getElementById("inpStripSup").value;
    let inpStripInf = document.getElementById("inpStripInf").value;
    let inpExpSup = document.getElementById("inpExpSup").value;
    let inpExpInf = document.getElementById("inpExpInf").value;
    let inpRrdSup = document.getElementById("inpRrdSup").value;
    let inpRrdInf = document.getElementById("inpRrdInf").value;
    let inpPpdSup = document.getElementById("inpPpdSup").value;
    let inpPpdInf = document.getElementById("inpPpdInf").value;
    let inpExtSup = document.getElementById("inpExtSup").value;
    let inpExtInf = document.getElementById("inpExtInf").value;
    let inpIntSup = document.getElementById("inpIntSup").value;
    let inpIntInf = document.getElementById("inpIntInf").value;
    let inpCeeSup = document.getElementById("inpCeeSup").value;
    let inpCeeInf = document.getElementById("inpCeeInf").value;
    let inpClmSup = document.getElementById("inpClmSup").value;
    let inpClmInf = document.getElementById("inpClmInf").value;

    let obs = document.getElementById("observaciones").value;

    console.log("../ajax/ot/ingresarOT.php?usuario="+usuario+'&nombre='+nombre+'&apellido='+apellido+'&rut='+rut+'&fn='+fn+'&tipoOt='+tipoOt+'&arcSel='+arcSel+'&aliSup='+aliSup+
    '&aliInf='+aliInf+'&nivSup='+nivSup+'&inpNivSup='+inpNivSup+'&nivInf='+nivInf+'&inpNivInf='+inpNivInf+'&stripSup='+stripSup+'&inpstripSup='+inpstripSup+
    '&stripInf='+stripInf+'&inpStripInf='+inpStripInf+'&expSup='+expSup+'&inpExpSup='+inpExpSup+'&stripInf='+stripInf+'&inpStripInf='+inpStripInf+'&inpExpInf='+inpExpInf+'&rrdSup='+rrdSup+
    '&inpRrdSup='+inpRrdSup+'&rrdInf='+rrdInf+'&inpRrdInf='+inpRrdInf+'&ppdSup='+ppdSup+'&inpPpdSup='+inpPpdSup+'&ppdInf='+ppdInf+'&inpPpdInf='+inpPpdInf+
    '&extSup='+extSup+'&inpExtSup='+inpExtSup+'&extInf='+extInf+'&inpExtInf='+inpExtInf+'&intSup='+intSup+'&inpIntSup='+inpIntSup+'&intInf='+intInf+'&inpIntInf='+inpIntInf+
    '&ceeSup='+ceeSup+'&inpCeeSup='+inpCeeSup+'&ceeInf='+ceeInf+'&inpCeeInf='+inpCeeInf+'&clmSup='+clmSup+'&inpClmSup='+inpClmSup+'&clmInf='+clmInf+
    '&inpClmInf='+inpClmInf+'&obs='+obs);
    $.ajax({ // Send it off for prcessing
        type: "GET",
        url: "../ajax/ot/ingresarOT.php?usuario="+usuario+'&nombre='+nombre+'&apellido='+apellido+'&rut='+rut+'&fn='+fn+'&tipoOt='+tipoOt+'&arcSel='+arcSel+'&aliSup='+aliSup+
        '&aliInf='+aliInf+'&nivSup='+nivSup+'&inpNivSup='+inpNivSup+'&nivInf='+nivInf+'&inpNivInf='+inpNivInf+'&stripSup='+stripSup+'&inpstripSup='+inpstripSup+
        '&stripInf='+stripInf+'&inpStripInf='+inpStripInf+'&expSup='+expSup+'&inpExpSup='+inpExpSup+'&stripInf='+stripInf+'&inpStripInf='+inpStripInf+'&inpExpInf='+inpExpInf+'&rrdSup='+rrdSup+
        '&inpRrdSup='+inpRrdSup+'&rrdInf='+rrdInf+'&inpRrdInf='+inpRrdInf+'&ppdSup='+ppdSup+'&inpPpdSup='+inpPpdSup+'&ppdInf='+ppdInf+'&inpPpdInf='+inpPpdInf+
        '&extSup='+extSup+'&inpExtSup='+inpExtSup+'&extInf='+extInf+'&inpExtInf='+inpExtInf+'&intSup='+intSup+'&inpIntSup='+inpIntSup+'&intInf='+intInf+'&inpIntInf='+inpIntInf+
        '&ceeSup='+ceeSup+'&inpCeeSup='+inpCeeSup+'&ceeInf='+ceeInf+'&inpCeeInf='+inpCeeInf+'&clmSup='+clmSup+'&inpClmSup='+inpClmSup+'&clmInf='+clmInf+
        '&inpClmInf='+inpClmInf+'&obs='+obs,
        success: function (results) {
            console.log(results);
            var mensaje = results.split(",");
            //console.log(mensaje);
            if(mensaje[0] == 'ok'){
                var opcion = confirm("Registro guardado Correctamente");
                if(opcion == true){
                    //menu(1);
                    metodoPago(mensaje[1]);
                }
            }else{
                alert("No registrado....");
            }
        }
    });
}

function metodoPago(registro){
    console.log("Metodo de pago");
    document.getElementById("mainPanel").innerHTML = '';
    var cadena = '<h3>Método de pago ('+registro+')</h3>';
    cadena += '<table class="table" border="0"><tr><td><input name="mp" type="radio" value="1">  Cargo a Clínica (Quedara a la espera de que se confirme el pago)</td></tr><tr><td><input name="mp" type="radio" value="2">  Cargo a Paciente</td></tr></table>';
    cadena += '<button class="btn btn-primary" onclick="enviarMP(\''+registro+'\');">Confirmar</button><button class="btn btn-danger mx-2">Cancelar</button>';
    document.getElementById("mainPanel").innerHTML = cadena;
}

function enviarMP(ot){
    let op = document.querySelector('input[name = "mp"]:checked').value;
    $.ajax({ 
        type: "GET",
        async:false,
        url: "../ajax/ot/mp.php?ot="+ot+"&op="+op,
        success: function (results) {
            retorno = results;
        }
    });
    setTimeout(function(){ subirImg(ot); }, 1000);
}

function subirImg(ot){
    console.log("Subir IMG");
    document.getElementById("mainPanel").innerHTML = '';
    var cadena = '<h3>Subir Imágenes Scan ('+ot+')</h3>';
    document.getElementById("mainPanel").innerHTML = cadena;
}

function menu(op){
    var cadena = '';
    if(op ==1){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<h3>Mis Ordenes</h3>';
        cadena += misOT();
        document.getElementById("mainPanel").innerHTML = cadena;
    }
}

function misOT(){
    var retorno = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/ot/misOT.php",
        success: function (results) {
            retorno = '<table class="table"><tr><th>OT</th><th>Fecha Ingreso</th><th>Paciente</th><th>Estado</th><th>Acciones</th></tr>';
            console.log(results);
            for(var a of results){
                retorno += '<tr><td>'+a.id+'</td><td>'+a.fechaIngreso+'</td><td>'+a.nombrePac+' '+a.apellidoPac+'</td><td>'+estadosOT(a.estado)+'</td>'+
                '<td><a id="imgOT" target="#" data-bs-toggle="modal" data-bs-target="#modVerOT" onclick="verOT('+a.id+');"><img src="../assets/img/iconos/ver.png" width="25"></a>'+
                '<a class="mx-3" data-bs-toggle="modal" data-bs-target="#modUpImgOT" onclick="imgOT('+a.id+');"><img src="../assets/img/iconos/up.png" width="25"></a>'+
                '<a class="mx-1" data-bs-toggle="modal" data-bs-target="#modEdiOT" onclick="ediOT('+a.id+');"><img src="../assets/img/iconos/edit.png" width="30"></a>'+
                '<a class="mx-2" data-bs-toggle="modal" data-bs-target="#modDelOT" onclick="delOT('+a.id+');" ><img src="../assets/img/iconos/del.png" width="20"></a>'+
                '<a class="mx-2" data-bs-toggle="modal" data-bs-target="#modDelOT" onclick="sendOT('+a.id+');" ><img src="../assets/img/iconos/send.png" width="30"></a></div></td></tr>';
            }  
            retorno += '</table>';
        }
    });
    return retorno;
}

function estadosOT(op){
    if(op == 1){
        return "Ingresada";
    }
}

function verOT(ot){
    console.log("Ver OT: " + ot);
    document.getElementById("verOTmain").innerHTML = '';
    var cadena = "<h3>Orden de Trabajo "+ot+"</h3>";
    var datos = '';
    $.ajax({ // Send it off for prcessing
        type: "POST",
        async:false,
        dataType: "json",
        url: "../ajax/ot/ot.php?ot="+ot,
        success: function (results) {
            datos = results;
            for(var a of results){
                let tipoArc = '';
                if(a.arc == '1'){
                    tipoArc = 'Máxilar Superior';
                    cadena += '<div class="accordion" id="accordionExample">'+
                                    '<div class="accordion-item">'+
                                        '<h2 class="accordion-header" id="headingOne">'+
                                            '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Datos de Paciente</button>'+
                                        '</h2>'+
                                        '<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
                                            '<div class="accordion-body">'+
                                                '<strong>Paciente:</strong> '+a.nombrePac+' '+a.apellidoPac+'<br/><strong>Rut:</strong> '+a.rutPac+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="accordion-item">'+
                                        '<h2 class="accordion-header" id="headingTwo">'+
                                            '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Datos Formulario</button>'+
                                        '</h2>'+
                                        '<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">'+
                                            '<div class="accordion-body">'+
                                            '<h3>'+tipoArc+'</h3>'+
                                            '<strong>Alineación: </strong>'+nombreTipoAlineacion(a.alineacionSup)+'<br/>'+
                                            '<strong>Nivelación: </strong>'+nombreOp(a.nivelacionSup)+'&nbsp;&nbsp;&nbsp;'+a.nivelacionSupText+'<br/>'+
                                            '<strong>Striping Entre Dientes: </strong>'+nombreOp(a.strSup)+'&nbsp;&nbsp;&nbsp;'+a.strSupText+'<br/>'+
                                            '<strong>Expansión: </strong>'+nombreOp(a.expSup)+'&nbsp;&nbsp;&nbsp;'+a.expSupText+'<br/>'+
                                            '<strong>RetroInclinar o Retruir dientes: </strong>'+nombreOp(a.rrdSup)+'&nbsp;&nbsp;&nbsp;'+a.rrdSupText+'<br/>'+
                                            '<strong>ProInclinar o Protruir dientes: </strong>'+nombreOp(a.ppdSup)+'&nbsp;&nbsp;&nbsp;'+a.ppdSupText+'<br/>'+
                                            '<strong>Extruir dientes: </strong>'+nombreOp(a.extSup)+'&nbsp;&nbsp;&nbsp;'+a.extSupText+'<br/>'+
                                            '<strong>Intruir dientes: </strong>'+nombreOp(a.intSup)+'&nbsp;&nbsp;&nbsp;'+a.intSupText+'<br/>'+
                                            '<strong>Cerrar Espacio entre dientes: </strong>'+nombreOp(a.cerrarEspSup)+'&nbsp;&nbsp;&nbsp;'+a.cerrarEspSupText+'<br/>'+
                                            '<strong>Cerrar Línea Media: </strong>'+nombreOp(a.cerrarLMSup)+'&nbsp;&nbsp;&nbsp;'+a.cerrarLMSupText+'<br/>'+
                                            '<strong>Observaciones: </strong>'+a.obs+'<br/>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                }else if(a.arc == '2'){
                    tipoArc = 'Mandibular';
                    cadena += '<div class="accordion" id="accordionExample">'+
                                    '<div class="accordion-item">'+
                                        '<h2 class="accordion-header" id="headingOne">'+
                                            '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Datos de Paciente</button>'+
                                        '</h2>'+
                                        '<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
                                            '<div class="accordion-body">'+
                                                '<strong>Paciente:</strong> '+a.nombrePac+' '+a.apellidoPac+'<br/><strong>Rut:</strong> '+a.rutPac+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="accordion-item">'+
                                        '<h2 class="accordion-header" id="headingTwo">'+
                                            '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Datos Formulario</button>'+
                                        '</h2>'+
                                        '<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">'+
                                            '<div class="accordion-body">'+
                                                '<h3>'+tipoArc+'</h3>'+
                                                '<strong>Alineación: </strong>'+nombreTipoAlineacion(a.alineacionMan)+'<br/>'+
                                                '<strong>Nivelación: </strong>'+nombreOp(a.nivelacionInf)+'&nbsp;&nbsp;&nbsp;'+a.nivelacionInfText+'<br/>'+
                                                '<strong>Striping Entre Dientes: </strong>'+nombreOp(a.strInf)+'&nbsp;&nbsp;&nbsp;'+a.strInfText+'<br/>'+
                                                '<strong>Expansión: </strong>'+nombreOp(a.expInf)+'&nbsp;&nbsp;&nbsp;'+a.expInfText+'<br/>'+
                                                '<strong>RetroInclinar o Retruir dientes: </strong>'+nombreOp(a.rrdInf)+'&nbsp;&nbsp;&nbsp;'+a.rrdInfText+'<br/>'+
                                                '<strong>ProInclinar o Protruir dientes: </strong>'+nombreOp(a.ppdInf)+'&nbsp;&nbsp;&nbsp;'+a.ppdInfText+'<br/>'+
                                                '<strong>Extruir dientes: </strong>'+nombreOp(a.extInf)+'&nbsp;&nbsp;&nbsp;'+a.extInfText+'<br/>'+
                                                '<strong>Intruir dientes: </strong>'+nombreOp(a.intInf)+'&nbsp;&nbsp;&nbsp;'+a.intInfText+'<br/>'+
                                                '<strong>Cerrar Espacio entre dientes: </strong>'+nombreOp(a.cerrarEspInf)+'&nbsp;&nbsp;&nbsp;'+a.cerrarEspInfText+'<br/>'+
                                                '<strong>Cerrar Línea Media: </strong>'+nombreOp(a.cerrarLMInf)+'&nbsp;&nbsp;&nbsp;'+a.cerrarLMInfText+'<br/>'+
                                                '<strong>Observaciones: </strong>'+a.obs+'<br/>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                }else{
                    tipoArc = 'Ambos';
                    cadena += '<div class="accordion" id="accordionExample">'+
                                    '<div class="accordion-item">'+
                                        '<h2 class="accordion-header" id="headingOne">'+
                                            '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Datos de Paciente</button>'+
                                        '</h2>'+
                                        '<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
                                            '<div class="accordion-body">'+
                                                '<strong>Paciente:</strong> '+a.nombrePac+' '+a.apellidoPac+'<br/><strong>Rut:</strong> '+a.rutPac+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="accordion-item">'+
                                        '<h2 class="accordion-header" id="headingTwo">'+
                                            '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Datos Formulario</button>'+
                                        '</h2>'+
                                        '<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">'+
                                            '<div class="accordion-body">'+
                                                '<h3>Máxilar Superior</h3>'+
                                                '<strong>Alineación: </strong>'+nombreTipoAlineacion(a.alineacionSup)+'<br/>'+
                                                '<strong>Nivelación: </strong>'+nombreOp(a.nivelacionSup)+'&nbsp;&nbsp;&nbsp;'+a.nivelacionSupText+'<br/>'+
                                                '<strong>Striping Entre Dientes: </strong>'+nombreOp(a.strSup)+'&nbsp;&nbsp;&nbsp;'+a.strSupText+'<br/>'+
                                                '<strong>Expansión: </strong>'+nombreOp(a.expSup)+'&nbsp;&nbsp;&nbsp;'+a.expSupText+'<br/>'+
                                                '<strong>RetroInclinar o Retruir dientes: </strong>'+nombreOp(a.rrdSup)+'&nbsp;&nbsp;&nbsp;'+a.rrdSupText+'<br/>'+
                                                '<strong>ProInclinar o Protruir dientes: </strong>'+nombreOp(a.ppdSup)+'&nbsp;&nbsp;&nbsp;'+a.ppdSupText+'<br/>'+
                                                '<strong>Extruir dientes: </strong>'+nombreOp(a.extSup)+'&nbsp;&nbsp;&nbsp;'+a.extSupText+'<br/>'+
                                                '<strong>Intruir dientes: </strong>'+nombreOp(a.intSup)+'&nbsp;&nbsp;&nbsp;'+a.intSupText+'<br/>'+
                                                '<strong>Cerrar Espacio entre dientes: </strong>'+nombreOp(a.cerrarEspSup)+'&nbsp;&nbsp;&nbsp;'+a.cerrarEspSupText+'<br/>'+
                                                '<strong>Cerrar Línea Media: </strong>'+nombreOp(a.cerrarLMSup)+'&nbsp;&nbsp;&nbsp;'+a.cerrarLMSupText+'<br/>'+
                                                '<br/><br/><h3>Mandibular</h3>'+
                                                '<strong>Alineación: </strong>'+nombreTipoAlineacion(a.alineacionMan)+'<br/>'+
                                                '<strong>Nivelación: </strong>'+nombreOp(a.nivelacionInf)+'&nbsp;&nbsp;&nbsp;'+a.nivelacionInfText+'<br/>'+
                                                '<strong>Striping Entre Dientes: </strong>'+nombreOp(a.strInf)+'&nbsp;&nbsp;&nbsp;'+a.strInfText+'<br/>'+
                                                '<strong>Expansión: </strong>'+nombreOp(a.expInf)+'&nbsp;&nbsp;&nbsp;'+a.expInfText+'<br/>'+
                                                '<strong>RetroInclinar o Retruir dientes: </strong>'+nombreOp(a.rrdInf)+'&nbsp;&nbsp;&nbsp;'+a.rrdInfText+'<br/>'+
                                                '<strong>ProInclinar o Protruir dientes: </strong>'+nombreOp(a.ppdInf)+'&nbsp;&nbsp;&nbsp;'+a.ppdInfText+'<br/>'+
                                                '<strong>Extruir dientes: </strong>'+nombreOp(a.extInf)+'&nbsp;&nbsp;&nbsp;'+a.extInfText+'<br/>'+
                                                '<strong>Intruir dientes: </strong>'+nombreOp(a.intInf)+'&nbsp;&nbsp;&nbsp;'+a.intInfText+'<br/>'+
                                                '<strong>Cerrar Espacio entre dientes: </strong>'+nombreOp(a.cerrarEspInf)+'&nbsp;&nbsp;&nbsp;'+a.cerrarEspInfText+'<br/>'+
                                                '<strong>Cerrar Línea Media: </strong>'+nombreOp(a.cerrarLMInf)+'&nbsp;&nbsp;&nbsp;'+a.cerrarLMInfText+'<br/>'+
                                                '<br/><br/><h3>Observaciones</h3>'+
                                                '<strong>Observaciones: </strong>'+a.obs+'<br/>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="accordion-item">'+
                                        '<h2 class="accordion-header" id="headingThree">'+
                                            '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Facturación</button>'+
                                        '</h2>'+
                                        '<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">'+
                                            '<div class="accordion-body">'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="accordion-item">'+
                                        '<h2 class="accordion-header" id="headingFour">'+
                                            '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">Imagenes Cargadas</button>'+
                                        '</h2>'+
                                        '<div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">'+
                                            '<div class="accordion-body">'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                }
            }
        }
    });
    document.getElementById("verOTmain").innerHTML = cadena;
}

function imgOT(ot){
    console.log("Carga de Imagenes: " + ot);
    document.getElementById("mainPanel").innerHTML = '';
}



//Funciones nombres de numeros OT
function nombreTipoAlineacion(num){
    if(num == '0' || num === ''){
        return 'Ninguna';
    }
    if(num == '1'){
        return 'Alineación Completa';
    }
    if(num == '2'){
        return 'Alineación solo de 3 a 3';
    }
}

function nombreOp(num){
    if(num == '1'){
        return 'Si';
    }
    else{
        return 'No';
    }
}

function habilitar(op){
    console.log("Habilitar " + op);
    opcionesForm = 1;
    if(op == 1){
        $("#aliCheckSupCom").prop("disabled",false);    $("#aliCheckSupTres").prop("disabled",false);   $("#aliCheckInfCom").prop("disabled",true);     $("#aliCheckInfTres").prop("disabled",true);
        $("#nivSup").prop("disabled",false);            $("#inpNivSup").prop("disabled",false);         $("#nivInf").prop("disabled",true);             $("#inpNivInf").prop("disabled",true);
        $("#stripSup").prop("disabled",false);          $("#inpNivSup").prop("disabled",false);         $("#stripInf").prop("disabled",true);           $("#inpNivInf").prop("disabled",true);
        $("#expSup").prop("disabled",false);            $("#inpExpSup").prop("disabled",false);         $("#expInf").prop("disabled",true);             $("#inpExpInf").prop("disabled",true);
        $("#rrdSup").prop("disabled",false);            $("#inpRrdSup").prop("disabled",false);         $("#rrdInf").prop("disabled",true);             $("#inpRrdInf").prop("disabled",true);
        $("#ppdSup").prop("disabled",false);            $("#inpPpdSup").prop("disabled",false);         $("#ppdInf").prop("disabled",true);             $("#inpPpdInf").prop("disabled",true);
        $("#extSup").prop("disabled",false);            $("#inpExtSup").prop("disabled",false);         $("#extInf").prop("disabled",true);             $("#inpExtInf").prop("disabled",true);
        $("#intSup").prop("disabled",false);            $("#inpIntSup").prop("disabled",false);         $("#intInf").prop("disabled",true);             $("#inpIntInf").prop("disabled",true);
        $("#ceeSup").prop("disabled",false);            $("#inpCeeSup").prop("disabled",false);         $("#ceeInf").prop("disabled",true);             $("#inpCeeInf").prop("disabled",true);
        $("#clmSup").prop("disabled",false);            $("#inpClmSup").prop("disabled",false);         $("#clmInf").prop("disabled",true);             $("#inpClmInf").prop("disabled",true);
        $("#observaciones").prop("disabled",false);
    }
    if(op == 2){
        $("#aliCheckSupCom").prop("disabled",true);     $("#aliCheckSupTres").prop("disabled",true);    $("#aliCheckInfCom").prop("disabled",false);    $("#aliCheckInfTres").prop("disabled",false);
        $("#nivSup").prop("disabled",true);             $("#inpNivSup").prop("disabled",true);          $("#nivInf").prop("disabled",false);            $("#inpNivInf").prop("disabled",false);
        $("#stripSup").prop("disabled",true);           $("#inpNivSup").prop("disabled",true);          $("#stripInf").prop("disabled",false);          $("#inpNivInf").prop("disabled",false);
        $("#expSup").prop("disabled",true);             $("#inpExpSup").prop("disabled",true);          $("#expInf").prop("disabled",false);            $("#inpExpInf").prop("disabled",false);
        $("#rrdSup").prop("disabled",true);             $("#inpRrdSup").prop("disabled",true);          $("#rrdInf").prop("disabled",false);            $("#inpRrdInf").prop("disabled",false);
        $("#ppdSup").prop("disabled",true);             $("#inpPpdSup").prop("disabled",true);          $("#ppdInf").prop("disabled",false);            $("#inpPpdInf").prop("disabled",false);
        $("#extSup").prop("disabled",true);             $("#inpExtSup").prop("disabled",true);          $("#extInf").prop("disabled",false);            $("#inpExtInf").prop("disabled",false);
        $("#intSup").prop("disabled",true);             $("#inpIntSup").prop("disabled",true);          $("#intInf").prop("disabled",false);            $("#inpIntInf").prop("disabled",false);
        $("#ceeSup").prop("disabled",true);             $("#inpCeeSup").prop("disabled",true);          $("#ceeInf").prop("disabled",false);            $("#inpCeeInf").prop("disabled",false);
        $("#clmSup").prop("disabled",true);             $("#inpClmSup").prop("disabled",true);          $("#clmInf").prop("disabled",false);            $("#inpClmInf").prop("disabled",false);
        $("#observaciones").prop("disabled",false);
    }
    if(op == 3){
        $("#aliCheckSupCom").prop("disabled",false);    $("#aliCheckInfCom").prop("disabled",false);    $("#aliCheckSupTres").prop("disabled",false);   $("#aliCheckInfTres").prop("disabled",false);
        $("#nivSup").prop("disabled",false);            $("#inpNivSup").prop("disabled",false);         $("#nivInf").prop("disabled",false);            $("#inpNivInf").prop("disabled",false);
        $("#stripSup").prop("disabled",false);          $("#inpNivSup").prop("disabled",false);         $("#stripInf").prop("disabled",false);          $("#inpNivInf").prop("disabled",false);
        $("#expSup").prop("disabled",false);            $("#inpExpSup").prop("disabled",false);         $("#expInf").prop("disabled",false);            $("#inpExpInf").prop("disabled",false);
        $("#rrdSup").prop("disabled",false);            $("#inpRrdSup").prop("disabled",false);         $("#rrdInf").prop("disabled",false);            $("#inpRrdInf").prop("disabled",false);
        $("#ppdSup").prop("disabled",false);            $("#inpPpdSup").prop("disabled",false);         $("#ppdInf").prop("disabled",false);            $("#inpPpdInf").prop("disabled",false);
        $("#extSup").prop("disabled",false);            $("#inpExtSup").prop("disabled",false);         $("#extInf").prop("disabled",false);            $("#inpExtInf").prop("disabled",false);
        $("#intSup").prop("disabled",false);            $("#inpIntSup").prop("disabled",false);         $("#intInf").prop("disabled",false);            $("#inpIntInf").prop("disabled",false);
        $("#ceeSup").prop("disabled",false);            $("#inpCeeSup").prop("disabled",false);         $("#ceeInf").prop("disabled",false);            $("#inpCeeInf").prop("disabled",false);
        $("#clmSup").prop("disabled",false);            $("#inpClmSup").prop("disabled",false);         $("#clmInf").prop("disabled",false);            $("#inpClmInf").prop("disabled",false);
        $("#observaciones").prop("disabled",false);
    }
}