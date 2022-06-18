<?php
    include('../db/db.php');
    $sql = mysqli_query($db,"select * from pacientes");
    $cadena = '<table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Rut</th>
                        <th>Edad</th>
                        <th>Clinica</th>
                        <th>Telefono</th>
                        <th>OT</th>
                    </tr>
                </thead>
                <tbody>';
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena = $cadena."<tr><td>".$row['nombre']."</td><td>".$row['apellidos']."</td><td>".$row['rut']."</td><td>".$row['edad']."</td><td>".$row['clinica']."</td><td>".$row['telefono']."</td><td>".$row['ot']."</td></tr>";
        }
    }
    $cadena = $cadena."</tbody></table>";
    echo $cadena;
?>