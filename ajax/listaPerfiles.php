<?php
    include('../db/db.php');
    $cadena = array();
    $sql = mysqli_query($db,"select * from tblperfiles");
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena[] = array("id"=>$row['id'], "nombre"=>$row['nombre'], "nivel"=>$row['nivel'], "activo"=>$row['activo']);
        }
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($cadena);
?>