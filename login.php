<?php
   include("./db/db.php");
   session_start();
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      $myusername = mysqli_real_escape_string($db,$_POST['username']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 
      $sql = "SELECT * FROM tblUsuarios WHERE usuario = '$myusername' and pass = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['activo'];
      $perfil = $row['perfil'];
      $count = mysqli_num_rows($result);
      // If result matched $myusername and $mypassword, table row must be 1 row
      if($count == 1) {
         //session_register("myusername");
         $_SESSION['login_user'] = $myusername;
         if($perfil == 1){
            header("location:_admin/main.php"); 
         }
         //header("location: main.php");
      }else {
         $error = "Usuario o Pass erroneos";
      }
      if($count == 1) {
         //session_register("myusername");
         $_SESSION['login_user'] = $myusername;
         if($perfil == 1){
            header("location:_admin/index.php"); 
         }
         $_SESSION['login_user'] = $myusername;
         if($perfil == 2){
            header("location:_lab/index.php"); 
         }
         //header("location: main.php");
      }else {
         $error = "Usuario o Pass erroneos";
      }
      if($count == 1) {
         //session_register("myusername");
         $_SESSION['login_user'] = $myusername;
         if($perfil == 5){
            header("location:_client/index.html"); 
         }
         //header("location: main.php");
      }else {
         $error = "Usuario o Pass erroneos";
      }
   }
?>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <link rel="icon" href="assets/favicon.ico">
        <title>Bienvenidos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/styleLogin.css">
   </head>
   
    <body class="text-center">
        <form class="form-signin" action = "" method = "post">
            <img class="mb-4" src="assets/img/logos/Innova4D-05.svg" alt="" width="80%" >
            <h1 class="h3 mb-3 font-weight-normal">Bienvenido</h1>
            <label for="username" class="sr-only">Usuario</label>
            <input type="text" name = "username" id="username" class="form-control" placeholder="Usuario" required autofocus>
            <label for="password" class="sr-only">Password</label>
            <input type="password" name = "password" id="password" class="form-control" placeholder="Password" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
        </form>
    </body>
    <script src="assets/js/bootstrap.min.js"></script>
</html>