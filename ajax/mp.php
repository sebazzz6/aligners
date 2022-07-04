<?php
    include('../db/db.php');
    $opcion = $_GET['id'];
    $sql = mysqli_query($db,"select * from tblmetodopago where id = '$opcion'");
    //echo $sql;
    $cadena = '';
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena = $row['nombre'];
        }
    }
    echo $cadena;
?>