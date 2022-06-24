<?php
    include('../db/db.php');
    $opcion = $_GET['op'];
    $sql = mysqli_query($db,"select * from tblcomunas where provincia_id = '$opcion'");
    //echo $sql;
    $cadena = '';
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena = $cadena."<option value='".$row['id']."'>".utf8_encode($row['comuna'])."</option>";
        }
    }
    echo $cadena;
?>