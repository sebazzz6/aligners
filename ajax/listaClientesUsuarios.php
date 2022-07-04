<?php
    include('../db/db.php');
    $cadena = array();
    $sql = mysqli_query($db,"select * from tblclientesusuarios");
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena[] = array("id"=>$row['id'], "nombres"=>$row['nombres'], "apellidos"=>$row['apellidos'], "cargo"=>$row['cargo'], "clinica"=>$row['clinica'], "activo"=>$row['activo'], "correo"=>$row['correo'], "pass"=>$row['pass']);
        }
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($cadena);
?>