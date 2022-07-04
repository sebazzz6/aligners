<?php
    include('../../db/db.php');
    $clinica = $_GET['clinica'];
    $nombres = $_GET['nombres'];
    $apellidos = $_GET['apellidos'];
    $usuario = $_GET['usuario'];
    $pass = $_GET['pass'];
    $activo = '1';
    $correo = $_GET['correo'];
    $cargo = $_GET['cargo'];
    $sql = "INSERT INTO tblclientes (clinica, activo, nombres, apellidos, usuario, pass, cargo, correo) VALUES ('$clinica','$activo','$nombres','$apellidos','$usuario','$pass','$cargo','$correo')";
    echo $sql;
    mysqli_query($db,$sql);
?>