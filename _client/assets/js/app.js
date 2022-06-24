function opciones(op){
    var cadena = '';
    if(op == 1){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<div class="accordion" id="accordionExample">'+
                    '<div class="accordion-item">'+
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
                '</div>';
            cadena += '<div><button class="btn btn-danger">Enviar</button>11</div>';
            document.getElementById("mainPanel").innerHTML = cadena;
    }
    if(op == 2){
        document.getElementById("mainPanel").innerHTML = '';
    }
    if(op == 3){
        document.getElementById("mainPanel").innerHTML = '';
        cadena += '<div class="container">'+
                        '<div class="row">'+
                            '<div class="pull-left form-inline"><br>'+
                                '<div class="btn-group">'+
                                    '<button class="btn btn-primary" data-calendar-nav="prev"><i class="fa fa-arrow-left"></i></button>'+
                                    '<button class="btn" data-calendar-nav="today">Hoy</button>'+
                                    '<button class="btn btn-primary" data-calendar-nav="next"><i class="fa fa-arrow-right"></i></button>'+
                                '</div>'+
                                '<div class="btn-group">'+
                                    '<button class="btn btn-warning" data-calendar-view="year">Año</button>'+
                                    '<button class="btn btn-warning active" data-calendar-view="month">Mes</button>'+
                                    '<button class="btn btn-warning" data-calendar-view="week">Semana</button>'+
                                    '<button class="btn btn-warning" data-calendar-view="day">Dia</button>'+
                                '</div>'+
                            '</div>'+
                            '<div class="pull-right form-inline"><br>'+
                            '<button class="btn btn-info" data-toggle"modal" data-target="#add_evento">Añadir Evento</button>'+
                        '</div>'+
                    '</div>'+
                    '<br><br><br>'+
                    '<div class="row">'+
                        '<div id="calendar"></div> <!-- Aqui se mostrara nuestro calendario -->'+
                    '</div>'+
                    '<div class="modal fade" id="events-modal">'+
                        '<div class="modal-dialog">'+
                            '<div class="modal-content">'+
                                '<div class="modal-header">'+
                                    '<a href="#" data-dismiss="modal" style="float: right;"> <i class="glyphicon glyphicon-remove "></i> </a>'+
                                    '<br>'+
                                '</div>'+
                                '<div class="modal-body" style="height: 400px">'+
                                    '<p>One fine body&hellip;</p>'+
                                '</div>'+
                            '</div><!-- /.modal-content -->'+
                        '</div><!-- /.modal-dialog -->'+
                    '</div><!-- /.modal -->'+
                '</div>';
                document.getElementById("mainPanel").innerHTML = cadena;
    }
    if(op == 4){
        document.getElementById("mainPanel").innerHTML = '';
    }
}