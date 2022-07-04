<?php
    include('../../db/db.php');
    $id = $_GET['id'];
    $sql = "DELETE FROM tblclinicas WHERE id='$id'";
    echo $sql;
    mysqli_query($db,$sql);
?>