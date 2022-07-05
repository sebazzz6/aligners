<?php
	$servidor='192.168.0.83:3306';
	$usuario='innovali_adminInnova';
	$pass='Innova@#2022';
	$bd='innovali_innovaligners';
	// Nos conectamos a la base de datos
	$conexion = new mysqli($servidor, $usuario, $pass, $bd);	
	// Definimos que nuestros datos vengan en utf8
	$conexion->set_charset('utf8');
	// verificamos si hubo algun error y lo mostramos
	if ($conexion->connect_errno) {
		echo "Error al conectar la base de datos {$conexion->connect_errno}";
	}
	// Url donde estara el proyecto, debe terminar con un "/" al final
	$base_url="http://localhost/aligners/_client/";
?>

