<?php
    include('../../db/db.php');
    $ot = $_GET['ot'];
    $op = $_GET['op'];

    $sql = "UPDATE tblot set cargoPago = '$op' WHERE ot = '$ot'";
    //echo $sql;
    $result = mysqli_query($db, $sql);
?>