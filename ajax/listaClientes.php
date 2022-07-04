<?php
    include('../db/db.php');
    $cadena = array();
    $sql = mysqli_query($db,"select * from tblclientes");
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena[] = array("id"=>$row['id'], "clinica"=>$row['Clinica'], "nombres"=>$row['nombres'], "apellidos"=>$row['apellidos'], "usuario"=>$row['usuario'], "pass"=>$row['pass'], "cargo"=>$row['cargo'], "correo"=>$row['correo'], "activo"=>$row['activo']);
        }
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($cadena);
?>