<?php
    include('../db/db.php');
    $cadena = array();
    $sql = mysqli_query($db,"select * from tblclinicas");
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena[] = array("id"=>$row['id'], "clinica"=>$row['clinica'], "direccion"=>$row['direccion'], "telefono"=>$row['telefono'], "comuna"=>$row['comuna'], "ciudad"=>$row['ciudad'], "pais"=>$row['pais'], "metodoPago"=>$row['metodoPago'], "activo"=>$row['activo']);
        }
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($cadena);
?>