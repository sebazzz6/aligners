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
            '<td><input class="form-check-input" type="checkbox" id="nivSup" value="1">&nbsp;&nbsp;Nivelación</td><td></td>'+
            '<td><input class="form-check-input" type="checkbox" id="nivInf" value="1">&nbsp;&nbsp;Nivelación</td><td></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Stripping entre dientes</td><td><input></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Stripping entre dientes</td><td><input></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Expansión</td><td></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Expansión</td><td></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;RetroInclinar o Retruir dientes</td><td><input></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;RetroInclinar o Retruir dientes</td><td><input></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;ProInclinar o Protruir dientes</td><td><input></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;ProInclinar o Protruir dientes</td><td><input></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Extruir dientes</td><td><input></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Extruir dientes</td><td><input></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Intruir dientes</td><td><input></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Intruir dientes</td><td><input></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Cerrar Espacio entre dientes</td><td><input></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Cerrar Espacio entre dientes</td><td><input></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Cerrar Línea Media</td><td><input></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Cerrar Línea Media</td><td><input></td>'+
        '</tr>'+
        '</table>';
            cadena += '<textarea id="Observaciones" placeholder="Observaciones" rows="4" cols="50"></textarea><br/><br/>';
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
    let arcSel = aliSup = aliInf = nivSup = nivInf = '0';
    let usuario = document.getElementById("idUsuario").value;
    let nombre = document.getElementById("otNombrePac").value;
    let apellido = document.getElementById("otApellidoPac").value;
    let rut = document.getElementById("otRutPac").value;
    let fn = document.getElementById("otFnPac").value;
    let tipoOt = "1";
    //tipo arcada
    var element = document.querySelector('input[name = "arcada"]:checked');
    if(typeof(element) != 'undefined' && element != null){ arcSel = element.value; }

    //tipo alineacion superior
    var elementaliSup = document.querySelector('input[name = "aliSup"]:checked');
    if(typeof(elementaliSup) != 'undefined' && elementaliSup != null){ aliSup = elementaliSup.value; }
    //tipo alineacion inferior
    var elementaliInf = document.querySelector('input[name = "aliInf"]:checked');
    if(typeof(elementaliInf) != 'undefined' && elementaliInf != null){ aliInf = elementaliInf.value; }

    //tipo nivelacion superior
    var elementnivSup = document.querySelector('input[id = "nivSup"]:checked');
    if(typeof(elementnivSup) != 'undefined' && elementnivSup != null){ nivSup = "1"; }
    //tipo nivelacion inferior
    var elementnivInf = document.querySelector('input[id = "nivInf"]:checked');
    if(typeof(elementnivInf) != 'undefined' && elementnivInf != null){ nivInf = "1"; }
    
    
    
    console.log("Usuario: " + usuario);
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Rut: " + rut);
    console.log("Fecha Nacimiento: " + fn);
    console.log("Tipo OT: " + tipoOt);
    console.log("Arcada: " + arcSel);
    console.log("Tipo Alineadcion Sup: " + aliSup);
    console.log("Tipo Alineadcion Inf: " + aliInf);
    console.log("Nivelacion Sup: " + nivSup);
    console.log("Nivelacion Inf: " + nivInf);
}





//funciones habilitar inputs