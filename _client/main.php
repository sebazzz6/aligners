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
        <title>Innova4D - Norte</title>
        <!-- Custom fonts for this template-->
        <link href="../assets/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
        <!-- Custom styles for this template-->
        <link href="../assets/css/sb-admin-2.css" rel="stylesheet">
    </head>
    
    <body id="page-top" onload="inicial();">
        <div id="wrapper">
            <!-- Sidebar -->
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <!-- Sidebar - Brand -->
                <img src="../assets/img/logo_blank.png" alt="" width="100%" >
                
                <!-- Divider -->
                <hr class="sidebar-divider my-0">
                
                <li class="nav-item active">
                    <a class="nav-link" href="#" onclick="paginas(1);">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                     </a>
                </li>
                
                <!-- Nav Item - Dashboard -->
                <li class="nav-item active">
                    <a class="nav-link" href="#" onclick="paginas(2);">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Pacientes</span>
                    </a>
                </li>
                
                <li class="nav-item active">
                    <a class="nav-link" href="#" onclick="paginas(3);">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Trabajos</span>
                    </a>
                </li>
                <!-- Heading -->
                <div class="sidebar-heading">
                    Configuraciones
                </div>
                
                <li class="nav-item active">
                    <a class="nav-link" href="#" onclick="paginas('admin');">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Admin</span>
                    </a>
                </li>
            </ul>
            <!-- End of Sidebar -->
        
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">
                <!-- Main Content -->
                <div id="content">
                    <!-- Topbar -->
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <!-- Topbar Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Nav Item - Alerts -->
                            <li class="nav-item dropdown no-arrow mx-1">
                                <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-bell fa-fw"></i>
                                    <!-- Counter - Alerts -->
                                    <span class="badge badge-danger badge-counter">0</span>
                                </a>
                            </li>
                            <!-- Nav Item - Messages -->
                            <li class="nav-item dropdown no-arrow mx-1">
                                <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-envelope fa-fw"></i>
                                    <!-- Counter - Messages -->
                                    <span class="badge badge-danger badge-counter">0</span>
                                </a>
                            </li>
                            
                            <div class="topbar-divider d-none d-sm-block"></div>
                            
                            <!-- Nav Item - User Information -->
                            <li class="nav-item dropdown no-arrow">
                                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="mr-2 d-none d-lg-inline text-gray-600 small"><?php echo $login_session; ?></span>
                                    <img class="img-profile rounded-circle" src="./assets/img/nn.png">
                                </a>
                            </li>
                            
                            <li class="nav-item dropdown no-arrow salir">
                                <a href = "logout.php" class="boton">Salir</a>
                            </li>
                        </ul>
                    </nav>
                    <!-- End of Topbar -->
                    
                    <!-- Begin Page Content -->
                    <div class="container-fluid">
                        <div id="paginaSeleccion"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Busqueda Paciente</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="resultadoBusqueda"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </body>
    <!-- Bootstrap core JavaScript-->
    <script src="../assets/jquery/jquery.min.js"></script>
    <script src="../assets/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="../assets/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="../assets/js/sb-admin-2.min.js"></script>
    <script src="../assets/js/funciones.js"></script>

    <!-- Page level plugins 
    <script src="./assets/chart.js/Chart.min.js"></script>

    Page level custom scripts 
    <script src="./assets/js/demo/chart-area-demo.js"></script>
    <script src="./assets/js/demo/chart-pie-demo.js"></script>-->
</html>
