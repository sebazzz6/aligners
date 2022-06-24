<?php
   include('session.php');
?>
<?php
    date_default_timezone_set("America/Santiago");
    include 'funciones.php';
    // incluimos el archivo de configuracion
    include 'config.php';
    // Verificamos si se ha enviado el campo con name from
    if (isset($_POST['from'])){
        // Si se ha enviado verificamos que no vengan vacios
        if ($_POST['from']!="" AND $_POST['to']!=""){
            // Recibimos el fecha de inicio y la fecha final desde el form
            $Datein = date('d/m/Y H:i:s', strtotime($_POST['from']));
            $Datefi = date('d/m/Y H:i:s', strtotime($_POST['to']));
            $inicio = _formatear($Datein);
            // y la formateamos con la funcion _formatear
            $final = _formatear($Datefi);
            // Recibimos el fecha de inicio y la fecha final desde el form
            $orderDate = date('d/m/Y H:i:s', strtotime($_POST['from']));
            $inicio_normal = $orderDate;
            // y la formateamos con la funcion _formatear
            $orderDate2 = date('d/m/Y H:i:s', strtotime($_POST['to']));
            $final_normal = $orderDate2;
            // Recibimos los demas datos desde el form
        $titulo = evaluar($_POST['title']);

        // y con la funcion evaluar
        $body   = evaluar($_POST['event']);

        // reemplazamos los caracteres no permitidos
        $clase  = evaluar($_POST['class']);

        // insertamos el evento
        $query="INSERT INTO agenda VALUES(null,'$titulo','$body','','$clase','$inicio','$final','$inicio_normal','$final_normal')";

        // Ejecutamos nuestra sentencia sql
        $conexion->query($query)or die('<script type="text/javascript">alert("Horario No Disponible ")</script>');

        header("Location:./");        


        // Obtenemos el ultimo id insetado
        $im=$conexion->query("SELECT MAX(id) AS id FROM agenda");
        $row = $im->fetch_row();  
        $id = trim($row[0]);

        // para generar el link del evento
        $link = "descripcion_evento.php?id=$id";

        // y actualizamos su link
        $query="UPDATE agenda SET url = '$link' WHERE id = $id";

        // Ejecutamos nuestra sentencia sql
        $conexion->query($query); 

        // redireccionamos a nuestro calendario
        //header("Location:$base_url"); 
    }
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico">
    <title>Bienvenidos</title>
    <!-- Bootstrap core CSS -->
    <script src="./js/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/calendar.css">
    <!-- Custom styles for this template -->
    <link href="./assets/css/style.css" rel="stylesheet">
    <link href="./css/font-awesome.min.css" rel="stylesheet">
    <script type="text/javascript" src="./js/es-ES.js"></script>
    <script src="./js/moment.js"></script>
    <script src="./js/bootstrap-datetimepicker.js"></script>
    <link rel="stylesheet" href="./css/bootstrap-datetimepicker.min.css" />
  </head>
  <body class="bg-light lang-es">
    <nav class="navbar navbar-expand-md fixed-top navbar-dark navbg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.php">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="opciones(4);">Mis trabajos</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-primary">Salir</button>
        </form>
      </div>
    </nav>
    <main role="main" class="container">
      <div class="d-flex align-items-center p-3 my-3 text-white-50 navbg rounded box-shadow">
        <div class="lh-100">
          <h4 class="mb-0 text-white lh-100">Ingresar Nuevo Trabajo</h4>
          <small>Ingresa una nueva Orden de Trabajo</small>
        </div>
      </div>

      <div class="media text-muted pt-3" id="mainPanel">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-4 d-flex justify-content-center">
              <div class="card no-border">
                <div class="face face1">
                  <div class="content text-center">
                    <img src="assets/img/launch_128.png">
                    <h3>Envía tu Caso</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content text-center">
                    <p>Sube tu casos con sus archivos de Scan</p>
                    <a class="btn btn-primary" href="#" onclick="opciones(1);">Subir</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-lg-4 d-flex justify-content-center">
              <div class="card no-border">
                <div class="face face1">
                  <div class="content text-center">
                    <img src="assets/img/code_128.png">
                    <h3>Solicitar retiro de modelo</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content text-center">
                    <p>Solicita el retiro de los modelos de tu paciente</p>
                    <a class="btn btn-primary" href="#" onclick="opciones(2);">Solicitar</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-lg-4 d-flex justify-content-center">
              <div class="card no-border">
                <div class="face face1">
                  <div class="content text-center">
                    <img src="assets/img/design_128.png">
                    <h3>Agendar Scan</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content text-center">
                    <p>Agenda el Scan de tu paciente</p>
                    <a class="btn btn-primary" href="#" onclick="opciones(3);">Agendar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>    
    <script src="./js/bootstrap.min.js"></script>
    <script src="./assets/js/offcanvas.js"></script>
    <script src="./assets/js/app.js"></script>
    <script src="./js/underscore-min.js"></script>
    <script src="./js/calendar.js"></script>
    <script type="text/javascript">
        (function($){
                //creamos la fecha actual
                var date = new Date();
                var yyyy = date.getFullYear().toString();
                var mm = (date.getMonth()+1).toString().length == 1 ? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();
                var dd  = (date.getDate()).toString().length == 1 ? "0"+(date.getDate()).toString() : (date.getDate()).toString();

                //establecemos los valores del calendario
                var options = {

                    // definimos que los agenda se mostraran en ventana modal
                    modal: '#events-modal', 

                        // dentro de un iframe
                        modal_type:'iframe',    

                        //obtenemos los agenda de la base de datos
                        events_source: 'obtener_eventos.php', 

                        // mostramos el calendario en el mes
                        view: 'month',             

                        // y dia actual
                        day: yyyy+"-"+mm+"-"+dd,   


                        // definimos el idioma por defecto
                        language: 'es-ES', 

                        //Template de nuestro calendario
                        tmpl_path: 'tmpls/', 
                        tmpl_cache: false,


                        // Hora de inicio
                        time_start: '08:00', 

                        // y Hora final de cada dia
                        time_end: '22:00',   

                        // intervalo de tiempo entre las hora, en este caso son 30 minutos
                        time_split: '30',    

                        // Definimos un ancho del 100% a nuestro calendario
                        width: '100%', 

                        onAfterEventsLoad: function(events)
                        {
                            if(!events)
                            {
                                return;
                            }
                            var list = $('#eventlist');
                            list.html('');

                            $.each(events, function(key, val)
                            {
                                $(document.createElement('li'))
                                .html('<a href="' + val.url + '">' + val.title + '</a>')
                                .appendTo(list);
                            });
                        },
                        onAfterViewLoad: function(view)
                        {
                            $('#page-header').text(this.getTitle());
                            $('.btn-group button').removeClass('active');
                            $('button[data-calendar-view="' + view + '"]').addClass('active');
                        },
                        classes: {
                            months: {
                                general: 'label'
                            }
                        }
                    };


                // id del div donde se mostrara el calendario
                var calendar = $('#calendar').calendar(options); 

                $('.btn-group button[data-calendar-nav]').each(function()
                {
                    var $this = $(this);
                    $this.click(function()
                    {
                        calendar.navigate($this.data('calendar-nav'));
                    });
                });

                $('.btn-group button[data-calendar-view]').each(function()
                {
                    var $this = $(this);
                    $this.click(function()
                    {
                        calendar.view($this.data('calendar-view'));
                    });
                });

                $('#first_day').change(function()
                {
                    var value = $(this).val();
                    value = value.length ? parseInt(value) : null;
                    calendar.setOptions({first_day: value});
                    calendar.view();
                });
            }(jQuery));
        </script>

        <div class="modal fade" id="add_evento" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Agregar nuevo evento</h4>
            </div>
            <div class="modal-body">
                <form action="" method="post">
                    <label for="from">Inicio</label>
                    <div class='input-group date' id='from'>
                        <input type='text' id="from" name="from" class="form-control" readonly />
                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                    </div>

                    <br>

                    <label for="to">Final</label>
                    <div class='input-group date' id='to'>
                        <input type='text' name="to" id="to" class="form-control" readonly />
                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                    </div>

                    <br>

                    <label for="tipo">Tipo de evento</label>
                    <select class="form-control" name="class" id="tipo">
                        <option value="event-info">Informacion</option>
                        <option value="event-success">Exito</option>
                        <option value="event-important">Importantante</option>
                        <option value="event-warning">Advertencia</option>
                        <option value="event-special">Especial</option>
                    </select>

                    <br>


                    <label for="title">Título</label>
                    <input type="text" required autocomplete="off" name="title" class="form-control" id="title" placeholder="Introduce un título">

                    <br>


                    <label for="body">Evento</label>
                    <textarea id="body" name="event" required class="form-control" rows="3"></textarea>

                    <script type="text/javascript">
                        $(function () {
                            $('#from').datetimepicker({
                                language: 'es',
                                minDate: new Date()
                            });
                            $('#to').datetimepicker({
                                language: 'es',
                                minDate: new Date()
                            });

                        });
                    </script>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-times"></i> Cancelar</button>
                  <button type="submit" class="btn btn-success"><i class="fa fa-check"></i> Agregar</button>
              </form>
          </div>
      </div>
  </div>
</div>
  </body>
</html>