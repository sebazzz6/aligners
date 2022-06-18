<?php
    include('../db/db.php');
    $nombre = $_GET['nombre'];
    $apellido = $_GET['ap'];
    $rut = $_GET['rut'];
    $edad = $_GET['edad'];
    $telefono = $_GET['telefono'];
    $clinica = $_GET['clinica'];
    $orden = $_GET['orden'];
    
    $sql = "INSERT INTO pacientes (nombre,apellidos,rut,edad,telefono,clinica,ot) VALUES ('$nombre','$apellido','$rut','$edad','$telefono','$clinica','$orden')";
    mysqli_query($db, $sql);
    
    echo $nombre;
    

?>