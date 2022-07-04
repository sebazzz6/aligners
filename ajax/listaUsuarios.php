<?php
    include('../db/db.php');
    $sql = mysqli_query($db,"select * from tblusuarios");
    $data = array();
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $data[] = array("id" => $row['id'], "nombres" => utf8_encode($row['nombres']), "apellidos" => utf8_encode($row['apellidos']), "usuario" => utf8_encode($row['usuario']), "correo" => utf8_encode($row['correo']), "perfil" => utf8_encode($row['perfil']));
        }
    }
    header('Content-Type: application/json'); 
    echo json_encode(Array('data'=>$data,'success'=>true));
?>