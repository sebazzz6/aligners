<?php
   include('session.php');
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
    <div class="sidebar bg-gradient-primary">
      <img src="../assets/img/logo_blank.png" alt="" width="220">
      <a href="#" onclick="opciones(1);">Usuarios</a>
      <a href="#" onclick="opciones(2);">Clientes</a>
      <a href="#" onclick="opciones(3);">Clínicas</a>
      <a href="#" onclick="opciones(4);">Perfiles</a>
    </div>
    <main role="main" class="content container mt-5">
      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-gradient-primary rounded box-shadow">
        <div class="lh-100">
          <h4 class="mb-0 text-white lh-100">Administración</h4>
          <small>Plataforma de Administración InnovAligners</small>
        </div>
      </div>
      <div id="mainPanel"></div>
    </main>

    <!-- Modal Nuevo Usuario-->
    <div class="modal fade" id="nuevoUsuarioMod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nuevo Usuario</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="addUsuario"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" onclick="addDBUsuario();">Guardar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Cliente-->
    <div class="modal fade" id="nuevoClienteMod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nuevo Cliente</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="addCliente"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nueva Clinica-->
    <div class="modal fade" id="nuevaClinicaMod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nueva Clínica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="addClinica"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" onclick="addDBClinicas();">Guardar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Perfil-->
    <div class="modal fade" id="nuevoPerfilMod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nuevo Perfil</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="addPerfil"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>    
    <script src="./assets/js/app.js"></script>
  </body>
</html>