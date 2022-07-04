<?php
    include('../../db/db.php');
    $nombres = $_GET['nombres'];
    $apellidos = $_GET['apellidos'];
    $usuario = $_GET['usuario'];
    $pass = $_GET['pass'];
    $perfil = $_GET['perfil'];
    $activo = $_GET['activo'];
    $correo = $_GET['correo'];
    $sql = "INSERT INTO tblusuarios (nombres, apellidos, usuario, pass, perfil, activo,correo) VALUES ('$nombres','$apellidos','$usuario','$pass','$perfil','$activo','$correo')";
    echo $sql;
    mysqli_query($db,$sql);
?>