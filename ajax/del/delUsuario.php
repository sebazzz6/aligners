<?php
    include('../../db/db.php');
    $id = $_GET['id'];
    $sql = "DELETE FROM tblusuarios WHERE id='$id'";
    echo $sql;
    mysqli_query($db,$sql);
?>