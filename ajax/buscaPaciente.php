<?php
    include('../db/db.php');
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $sql = mysqli_query($db,"select * from pacientes WHERE id='$id'");
        if(!empty($sql)) {
            $row = mysqli_fetch_assoc($sql);
            $cadena = $row['nombre']." ".$row['apellidos'];
        }
        echo $cadena;
    }else{
        $sql = mysqli_query($db,"select * from pacientes");
        $cadena = '<table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Rut</th>
                        <th>Sel</th>
                    </tr>
                </thead>
                <tbody>';
        if(!empty($sql)) {
            while ($row = mysqli_fetch_array($sql)) {
                $cadena = $cadena."<tr><td>".$row['nombre']."</td><td>".$row['apellidos']."</td><td>".$row['rut']."</td><td><a href='#' class='btn btn-success btnSel' onclick='pacienteSelTra(\"".$row['id']."\");' data-bs-dismiss='modal'>Seleccionar</a></td></tr>";
            }
        }
        $cadena = $cadena."</tbody></table>";
        echo $cadena;
    }
?>