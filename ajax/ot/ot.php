<?php
    include('../../db/db.php');
    $ot = $_GET['ot'];
    $cadena = array();
    $sql = mysqli_query($db,"select * from tblot where ot='$ot'");
    if(!empty($sql)) {
        while ($row = mysqli_fetch_array($sql)) {
            $cadena[] = array("id"=>$row['ot'], "fechaIngreso"=>$row['fechaIngreso'], "usuarioIngreso"=>$row['usuarioIngreso'], "tipoOt"=>$row['tipoOt'], "cargoPago"=>$row['cargoPago'], "nombrePac"=>$row['nombrePac'], "apellidoPac"=>$row['apellidoPac'], "rutPac"=>$row['rutPac'], "fechaNacPac"=>$row['fechaNacPac'], "arc"=>$row['arc'], "alineacionSup"=>$row['alineacionSup'], "alineacionMan"=>$row['alineacionMan'], "nivelacionSup"=>$row['nivelacionSup'], "nivelacionSupText"=>$row['nivelacionSupText'], "nivelacionInf"=>$row['nivelacionInf'], "nivelacionInfText"=>$row['nivelacionInfText'], "strSup"=>$row['strSup'], "strSupText"=>$row['strSupText'], "strInf"=>$row['strInf'], "strInfText"=>$row['strInfText'], "expSup"=>$row['expSup'], "expSupText"=>$row['expSupText'], "expInf"=>$row['expInf'], "expInfText"=>$row['expInfText'], "rrdSup"=>$row['rrdSup'], "rrdSupText"=>$row['rrdSupText'], "rrdInf"=>$row['rrdInf'], "rrdInfText"=>$row['rrdInfText'], "ppdSup"=>$row['ppdSup'], "ppdSupText"=>$row['ppdSupText'], "ppdInf"=>$row['ppdInf'], "ppdInfText"=>$row['ppdInfText'], "extSup"=>$row['extSup'], "extSupText"=>$row['extSupText'], "extInf"=>$row['extInf'], "extInfText"=>$row['extInfText'], "intSup"=>$row['intSup'], "intSupText"=>$row['intSupText'], "intInf"=>$row['intInf'], "intInfText"=>$row['intInfText'], "cerrarEspSup"=>$row['cerrarEspSup'], "cerrarEspSupText"=>$row['cerrarEspSupText'], "cerrarEspInf"=>$row['cerrarEspInf'], "cerrarEspInfText"=>$row['cerrarEspInfText'], "cerrarLMSup"=>$row['cerrarLMSup'], "cerrarLMSupText"=>$row['cerrarLMSupText'], "cerrarLMInf"=>$row['cerrarLMInf'], "cerrarLMInfText"=>$row['cerrarLMInfText'], "obs"=>$row['obs'], "estado"=>$row['estado']);
        }
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($cadena);
?>