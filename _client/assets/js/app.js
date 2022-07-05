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
            '<td><input type="radio" id="otArcSup" value="1" name="arcada"><label class="mx-2" for="sup">Superior</label></td>'+
            '<td><input type="radio" id="otArcInf" value="2" name="arcada"><label class="mx-2" for="inf">Inferior</label></td>'+
            '<td><input type="radio" id="otArcAmb" value="3" name="arcada"><label class="mx-2" for="inf">Ambas</label></td>'+
        '</tr><table>'+
        '<h2>Orden de Alineador</h2>'+
        '<h4>Seleccione las indicaciones terapeuticas por arcada</h4>'+
        '<table class="table table-responsive">'+
        '<tr>'+
            '<td colspan="2" align="center">Máxilar Superior</td><td colspan="2" align="center">Mandíbula</td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="radio" id="check1" name="aliSup" value="1">&nbsp;&nbsp;Alineación Completa</td>'+
            '<td><input class="form-check-input" type="radio" id="check1" name="aliSup" value="2">&nbsp;&nbsp;Alineación solo de 3 a 3</td>'+
            '<td><input class="form-check-input" type="radio" id="check1" name="aliInf" value="1">&nbsp;&nbsp;Alineación Completa</td>'+
            '<td><input class="form-check-input" type="radio" id="check1" name="aliInf" value="2">&nbsp;&nbsp;Alineación solo de 3 a 3</td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="nivSup" value="1">&nbsp;&nbsp;Nivelación</td><td><input id="inpNivSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="nivInf" value="1">&nbsp;&nbsp;Nivelación</td><td><input id="inpNivInf" value=""></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="stripSup" value="1">&nbsp;&nbsp;Stripping entre dientes</td><td><input id="inpStripSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="stripInf" value="1">&nbsp;&nbsp;Stripping entre dientes</td><td><input id="inpStripInf" value=""></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="expSup" value="1">&nbsp;&nbsp;Expansión</td><td><input id="inpExpSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="expInf" value="1">&nbsp;&nbsp;Expansión</td><td><input id="inpExpInf" value=""></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="rrdSup" value="1">&nbsp;&nbsp;RetroInclinar o Retruir dientes</td><td><input id="inpRrdSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="rrdInf" value="1">&nbsp;&nbsp;RetroInclinar o Retruir dientes</td><td><input id="inpRrdInf" value=""></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="ppdSup" value="1">&nbsp;&nbsp;ProInclinar o Protruir dientes</td><td><input id="inpPpdSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="ppdInf" value="1">&nbsp;&nbsp;ProInclinar o Protruir dientes</td><td><input id="inpPpdInf" value=""></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="extSup" value="1">&nbsp;&nbsp;Extruir dientes</td><td><input id="inpExtSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="extInf" value="1">&nbsp;&nbsp;Extruir dientes</td><td><input id="inpExtInf" value=""></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="intSup" value="1">&nbsp;&nbsp;Intruir dientes</td><td><input id="inpIntSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="intInf" value="1">&nbsp;&nbsp;Intruir dientes</td><td><input id="inpIntInf" value=""></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="ceeSup" value="1">&nbsp;&nbsp;Cerrar Espacio entre dientes</td><td><input id="inpCeeSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="ceeInf" value="1">&nbsp;&nbsp;Cerrar Espacio entre dientes</td><td><input id="inpCeeInf" value=""></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="clmSup" value="1">&nbsp;&nbsp;Cerrar Línea Media</td><td><input id="inpClmSup" value=""></td>'+
            '<td><input class="form-check-input" type="checkbox" id="clmInf" value="1">&nbsp;&nbsp;Cerrar Línea Media</td><td><input id="inpClmInf" value=""></td>'+
        '</tr>'+
        '</table>';
            cadena += '<textarea id="observaciones" placeholder="Observaciones" rows="4" cols="50" value="-"></textarea><br/><br/>';
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

    console.log("Usuario: " + usuario); console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);   console.log("Rut: " + rut);
    console.log("Fecha Nacimiento: " + fn); console.log("Tipo OT: " + tipoOt);
    console.log("Arcada: " + arcSel);   console.log("Tipo Alineadcion Sup: " + aliSup);
    console.log("Tipo Alineadcion Inf: " + aliInf); console.log("Nivelacion Sup: " + nivSup);   
    console.log("Dientes Sup: " + inpNivSup);   console.log("Nivelacion Inf: " + nivInf);   
    console.log("Dientes Inf: " + inpNivInf);   console.log("Strip Sup: " + stripSup);  
    console.log("Dientes Sup: " + inpstripSup); console.log("Strip Inf: " + stripInf);  
    console.log("Dientes Inf: " + inpStripInf); console.log("Expansion Sup: " + expSup);    
    console.log("Dientes Sup: " + inpExpSup);   console.log("Expansion Inf: " + expInf);    
    console.log("Dientes Inf: " + inpExpInf);   console.log("RRD Sup: " + rrdSup);  
    console.log("Dientes Sup: " + inpRrdSup);   console.log("RRD Inf: " + rrdInf);  
    console.log("Dientes Inf: " + inpRrdInf);   console.log("PPD Sup: " + ppdSup);  
    console.log("Dientes Sup: " + inpPpdSup);   console.log("PPD Inf: " + ppdInf);  
    console.log("Dientes Inf: " + inpPpdInf);   console.log("Extension Sup: " + extSup);    
    console.log("Dientes Sup: " + inpExtSup);   console.log("Extension Inf: " + extInf);    
    console.log("Dientes Inf: " + inpExtInf);   console.log("Intruir Sup: " + intSup);  
    console.log("Dientes Sup: " + inpIntSup);   console.log("Intruir Inf: " + intInf);  
    console.log("Dientes Inf: " + inpIntInf);   console.log("Cerrar Espacio Sup: " + ceeSup);   
    console.log("Dientes Sup: " + inpCeeSup);   console.log("Cerrar Espacio Inf: " + ceeInf);   
    console.log("Dientes Inf: " + inpCeeInf);   console.log("Cerrar LM Sup: " + clmSup);   
    console.log("Dientes Sup: " + inpClmSup);   console.log("Cerrar Espacio Inf: " + clmInf);   
    console.log("Dientes Inf: " + inpClmInf);

    console.log("Obs: " + obs);
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
                retorno += '<tr><td>'+a.id+'</td><td>'+a.fechaIngreso+'</td><td>'+a.nombrePac+' '+a.apellidoPac+'</td><td>'+estadosOT(a.estado)+'</td><td><button id="modificarOT" class="btn btn-primary mx-1">Ver</button><button id="modificarOT" class="btn btn-primary mx-1">Modificar</button><button id="eliminarOT" onclick="delOT('+a.id+');" class="btn btn-danger mx-1">Eliminar</button></div></td></tr>';
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