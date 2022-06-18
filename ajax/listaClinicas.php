<?php
    include('../db/db.php');
    $sql = mysqli_query($db,"select * from tblClinicas");
    $cadena = '<table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Clinica</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Comuna</th>
                        <th>Ciudad</th>
                        <th>Pais</th>
                        <th>Método Pago</th>
                        <th>Suscripción</th>
                    </tr>
                </thead>
                <tbody>';
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena = $cadena."<tr><td>".$row['id']."</td><td>".$row['Clinica']."</td><td>".$row['Direccion']."</td><td>".$row['telefono']."</td><td>".$row['comuna']."</td><td>".$row['ciudad']."</td><td>".$row['pais']."</td><td>".$row['metodoPago']."</td><td>".$row['activo']."</td></tr>";
        }
    }
    $cadena = $cadena."</tbody></table>";
    echo $cadena;
?>