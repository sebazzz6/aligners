<?php
    include('../db/db.php');
    $sel = $_GET['sel'];
    $opcion = $_GET['op'];
    if($sel == 1){
        $sql = mysqli_query($db,"select * from tblcomunas where id = '$opcion'");
        $cadena = '';
        if(!empty($sql)) {
            while ($row = mysqli_fetch_array($sql)) {
                $cadena = utf8_encode($row['comuna']);
            }
        }
    }
    if($sel == 2){
        $sql = mysqli_query($db,"select * from tblprovincias where id = '$opcion'");
        $cadena = '';
        if(!empty($sql)) {
            while ($row = mysqli_fetch_array($sql)) {
                $cadena = utf8_encode($row['provincia']);
            }
        }
    }
    if($sel == 3){
       $cadena = 'Chile';
    }
    if($sel == 4){
        $sql = mysqli_query($db,"select * from tblmetodopago where id = '$opcion'");
        $cadena = '';
        if(!empty($sql)) {
            while ($row = mysqli_fetch_array($sql)) {
                $cadena = utf8_encode($row['nombre']);
            }
        }
    }
    if($sel == 5){
        if($opcion == 1){
            $cadena = 'Activo';
        }else{
            $cadena = 'Inactivo';
        }
     }
    //echo $sql;
    echo $cadena;
?>