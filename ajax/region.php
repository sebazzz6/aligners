<?php
    include('../db/db.php');
    $sql = mysqli_query($db,"select * from tblregiones");
    $cadena = '';
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena = $cadena."<option value='".$row['id']."'>".utf8_encode($row['region'])."</option>";
        }
    }
    echo $cadena;
?>