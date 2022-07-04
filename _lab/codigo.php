<?php
    foreach($_FILES['archivo']['tmp_name'] as $key => $tmp_name){
        if($_FILES['archivo']['name'][$key]){
            $filename = $_FILES['archivo']['name'][$key];
            $tmpFileName = $_FILES['archivo']['tmp_name'][$key];
            $directorio = 'archivos/';
            if(!file_exists($directorio)){
                mkdir($directorio,0777);
            }
            $dir = opendir($directorio);
            $ruta = $directorio.'/'.$filename;

            if(move_uploaded_file($tmpFileName,$ruta)){
                echo "El archivo $filename se ha almacenado correctamente<br>";
            }else{
                echo "No se ha guardado<br>";
            }

            closedir($dir);
        }
    }
?>