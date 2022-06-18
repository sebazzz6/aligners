<?php
    include('../db/db.php');
    $sql = mysqli_query($db,"select * from tblClientes");
    $cadena = '<table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Clinica</th>
                        <th>Dirección</th>
                        <th>Gerente</th>
                        <th>Suscripción</th>
                    </tr>
                </thead>
                <tbody>';
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena = $cadena."<tr><td>".$row['id']."</td><td>".$row['Clinica']."</td><td></td><td>".$row['Direccion']."</td><td>".$row['gerente']."</td><td>".$row['activo']."</td></tr>";
        }
    }
    $cadena = $cadena."</tbody></table>";
    echo $cadena;
?>