<?php
    include('../db/db.php');
    $clinica = $_GET['clinica'];
    $direccion = $_GET['direccion'];
    $comuna = $_GET['comuna'];
    $ciudad = $_GET['ciudad'];
    $pais = $_GET['pais'];
    $metodoPago = $_GET['metodoPago'];
    $activo = $_GET['activo'];
    $telefono = $_GET['telefono'];
    $sql = "INSERT INTO tblClinicas (clinica, direccion, comuna, ciudad, pais, metodoPago, activo, telefono) VALUES ('$clinica','$direccion','$comuna','$ciudad','$pais','$metodoPago','$activo','$telefono')";
    echo $sql;
    mysqli_query($db,$sql);
?>