<?php
    include('../db/db.php');
    $cadena = array();
    $sql = mysqli_query($db,"select * from tblcargo");
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena[] = array("id"=>$row['id'], "nombre"=>$row['nombre']);
        }
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($cadena);
?>