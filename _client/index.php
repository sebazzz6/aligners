<?php
   include('session.php');
   include('datosUsuario.php');
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

        header("Location:");        


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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <!-- Custom styles for this template -->
    <link href="./assets/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/fullcalendar.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="./assets/js/moment.js"></script>
    <script src="./assets/js/fullcalendar.js"></script>
  </head>
  <body class="bg-light lang-es">
    <input type="hidden" id="idUsuario" value="<?php echo $idUsuario;?>">
    <div class="sidebar bg-gradient-primary">
      <img src="../assets/img/logo_blank.png" alt="" width="220">
      <a href="index.php">Nuevo</a>
      <a href="#">Mis Pacientes</a>
      <a href="#">Mis Datos</a>
    </div>
    <main role="main" class="content container mt-5 text-center">
      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-gradient-primary rounded box-shadow">
        <div class="lh-100">
          <h4 class="mb-0 text-white lh-100">Ingresar Nuevo Trabajo</h4>
          <small>Bienvenido: <?php echo $nombreUsuario;?></small><br/>
          <small>Clínica: <?php echo $nombreUsuario;?></small>
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

            <!--<div class="col-sm-12 col-lg-4 d-flex justify-content-center">
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
            </div>-->
          </div>
        </div>
      </div>
    </main>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>    
    <script src="./assets/js/app.js"></script>
  </body>
</html>