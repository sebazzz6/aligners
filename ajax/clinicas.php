<?php
    include('../db/db.php');
    $sql = mysqli_query($db,"select * from clinica");
    $data = array();
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $data[] = array("id" => $row['id'], "nombre" => utf8_encode($row['nombre']));
        }
    }
    header('Content-Type: application/json'); 
    echo json_encode(Array('data'=>$data,'success'=>true));
?>