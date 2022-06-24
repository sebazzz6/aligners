<?php
    include('../db/db.php');
    $cadena = array();
    $sql = mysqli_query($db,"select * from tblClinicas");
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena[] = array("id"=>$row['id'], "clinica"=>$row['clinica'], "direccion"=>$row['direccion'], "telefono"=>$row['telefono'], "comuna"=>$row['comuna'], "ciudad"=>$row['ciudad'], "pais"=>$row['pais'], "metodoPago"=>$row['metodoPago'], "activo"=>$row['activo']);
            //$cadena = $cadena."<tr><td>".$row['id']."</td><td>".$row['clinica']."</td><td>".$row['direccion']."</td><td>".$row['telefono']."</td><td>".$row['comuna']."</td><td>".$row['ciudad']."</td><td>".$row['pais']."</td><td>".$row['metodoPago']."</td><td>".$row['activo']."</td></tr>";
        }
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($cadena);
?>