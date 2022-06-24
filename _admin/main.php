<?php
   include('session.php');
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>InnovAligners Chile 2022</title>
        <!-- Custom fonts for this template-->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
        <!-- Custom styles for this template-->
        <link href="../assets/css/bootstrap.css" rel="stylesheet">
        <link href="../assets/css/styleAdmin.css" rel="stylesheet">
    </head>
    
    <body id="page-top">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="logo" src="../assets/img/logo.png"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#" onclick="opciones(1);">Clínicas</a>
                        <a class="nav-link" href="#" onclick="opciones(2);">Clientes</a>
                        <a class="nav-link" href="#" onclick="opciones(3);">Usuarios</a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container-fluid text-center">
            <div id="paginaSeleccion"></div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="ingresoCliente" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nuevo Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="resultadoBusqueda"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="ingresoClinica" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva Clínica</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <tr>
                                <td>Nombre Clínica</td>
                                <td><input id="nclinica"></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Dirección</td>
                                <td><input id="dclinica"></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Teléfono</td>
                                <td><input id="codigoArea" value="+56" size="1px" disabled> - <input id="tclinica"></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Región</td>
                                <td><div id="listaRegiones"></div></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Ciudad</td>
                                <td><div id="listaCiudad"></div></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Comuna</td>
                                <td><div id="listaComuna"></div></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Pais</td>
                                <td><div id="listaPais"></div></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Metodo Pago</td>
                                <td><div id="listaMetodoPago"></div></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Suscripción</td>
                                <td><div id="listaSuscripcion"></div></td>
                            </tr>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" onclick="addDBClinicas();opciones(1);">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bootstrap core JavaScript-->
    <script src="../assets/jquery/jquery.min.js"></script>
    <script src="../assets/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="../assets/js/appAdmin.js"></script>
    </body>
</html>
