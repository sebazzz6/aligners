function opciones(op){
    var cadena = '';
    if(op == 1){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<h2>Datos de Paciente</h2>'+
        '<table class="table">'+
        '<tr>'+
            '<td>Nombres:</td><td><input></td><td>Apellidos:</td><td><input></td>'+
        '</tr><tr>'+
            '<td>Rut:</td><td><input></td><td>Fecha Nacimiento:</td><td><input type="date"></td>'+
        '</tr></table>'+
        '<table class="table">'+
        '<tr>'+
            '<td colspan="2">Selecccione la(s) Arcada(s) para alineador(es):</td><td><input type="radio" id="sup" name="arcada"><label class="mx-2" for="sup">Superior</label></td><td><input type="radio" id="inf" name="arcada"><label class="mx-2" for="inf">Inferior</label></td><td><input type="radio" id="mor" name="arcada"><label class="mx-2" for="inf">Ambas</label></td>'+
        '</tr><table>'+
        '<h2>Orden de Alineador</h2>'+
        '<h4>Seleccione las indicaciones terapeuticas por arcada</h4>'+
        '<table class="table">'+
        '<tr>'+
            '<td align="center">Máxilar Superior</td><td></td><td align="center">Mandíbula</td><td></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Alineación</td><td></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Alineación</td><td></td>'+
        '</tr>'+
        '<tr>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Nivelación</td><td></td>'+
            '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Nivelación</td><td></td>'+
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
                    /*'<div class="accordion-item">'+
                        '<h2 class="accordion-header" id="headingOne">'+
                            '<button class="accordion-button membrete-acordeon" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+
                                'Datos de Paciente'+
                            '</button>'+
                        '</h2>'+
                        '<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
                            '<div class="accordion-body">'+
                                '<table class="table">'+
                                    '<tr>'+
                                        '<td>Nombres:</td><td><input></td><td>Apellidos:</td><td><input></td>'+
                                    '</tr><tr>'+
                                        '<td>Rut:</td><td><input></td><td>Fecha Nacimiento:</td><td><input type="date"></td>'+
                                    '</tr></table>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="accordion-item">'+
                        '<h2 class="accordion-header" id="headingOne">'+
                            '<button class="accordion-button membrete-acordeon" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+
                                'Imágenes'+
                            '</button>'+
                        '</h2>'+
                        '<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
                            '<div class="accordion-body">'+
                                '<form method="post" action="codigo.php" enctype="multipart/form-data">'+
                                    '<input type="file" name="archivo[]" id="archivo[]" multiple=""><br>'+
                                    '<button type="submit">Enviar</button>'+
                                '</form>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="accordion-item">'+
                        '<h2 class="accordion-header" id="headingTwo">'+
                            '<button class="accordion-button membrete-acordeon" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">'+
                                'Orden Para Estudio de Alineador'+
                            '</button>'+
                        '</h2>'+
                        '<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">'+
                            '<div class="accordion-body">'+
                            '<table class="table">'+
                            '<tr>'+
                                '<td colspan="2">Selecccione la(s) Arcada(s) para alineador(es):</td><td><input type="radio" id="sup" name="arcada"><label class="mx-2" for="sup">Superior</label></td><td><input type="radio" id="inf" name="arcada"><label class="mx-2" for="inf">Inferior</label></td><td><input type="radio" id="mor" name="arcada"><label class="mx-2" for="inf">Ambas</label></td>'+
                            '</tr><table>'+
                            '<h4>Seleccione las indicaciones terapeuticas por arcada</h4>'+
                            '<table class="table">'+
                            '<tr>'+
                                '<td align="center">Máxilar Superior</td><td></td><td align="center">Mandíbula</td><td></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Alineación</td><td></td>'+
                                '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Alineación</td><td></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Nivelación</td><td></td>'+
                                '<td><input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">&nbsp;&nbsp;Nivelación</td><td></td>'+
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
                            '</table>'+
                            '<textarea placeholder="Observaciones"></textarea>'
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';*/
            cadena += '<div><button class="btn btn-danger">Enviar</button>11</div>';
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