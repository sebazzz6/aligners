<?php
    include("../db/db.php");
    //$_SESSION['login_user'];
    $sql = "SELECT * FROM tblclientes WHERE usuario = '".$_SESSION['login_user']."'";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    $nombreUsuario = $row['nombres'].' '.$row['apellidos'];
    $idUsuario = $row['id'];
?>