<?php
    include('../../db/db.php');
    $usuario = $_GET['usuario'];///*
    $nombre = $_GET['nombre'];///*
    $apellido = $_GET['apellido'];///*
    $rut = $_GET['rut'];//*
    $fn = $_GET['fn'];//*
    $tipoOt = $_GET['tipoOt'];///*
    $arcSel = $_GET['arcSel'];//*
    $aliSup = $_GET['aliSup'];//*
    $aliInf = $_GET['aliInf'];//*
    $nivSup = $_GET['nivSup'];//*
    $inpNivSup = $_GET['inpNivSup'];//*
    $nivInf = $_GET['nivInf'];//*
    $inpNivInf = $_GET['inpNivInf'];//*
    $stripSup = $_GET['stripSup'];//*
    $inpstripSup = $_GET['inpstripSup'];//*
    $striInf = $_GET['stripInf'];//*
    $inpStripInf = $_GET['inpStripInf'];//*
    $rrdSup = $_GET['rrdSup'];//*
    $inpRrdSup = $_GET['inpRrdSup'];//*
    $rrdInf = $_GET['rrdInf'];//*
    $inpRrdInf = $_GET['inpRrdInf'];//*
    $ppdSup = $_GET['ppdSup'];//*
    $inpPpdSup = $_GET['inpPpdSup'];//*
    $ppdInf = $_GET['ppdInf'];//*
    $inpPpdInf = $_GET['inpPpdInf'];//*
    $extSup = $_GET['extSup'];//*
    $inpExtSup = $_GET['inpExtSup'];//*
    $extInf = $_GET['extInf'];//*
    $inpExtInf = $_GET['inpExtInf'];//*
    $intSup = $_GET['intSup'];//*
    $inpIntSup = $_GET['inpIntSup'];//*
    $intInf = $_GET['intInf'];//*
    $inpIntInf = $_GET['inpIntInf'];//*
    $ceeSup = $_GET['ceeSup'];//*
    $inpCeeSup = $_GET['inpCeeSup'];//*
    $ceeInf = $_GET['ceeInf'];//*
    $inpCeeInf = $_GET['inpCeeInf'];//*

    $expSup = $_GET['intSup'];//*
    $inpExpSup = $_GET['inpExpSup'];//*
    $expInf = $_GET['intInf'];//*
    $inpExpInf = $_GET['inpExpInf'];//*

    $clmSup = $_GET['clmSup'];//*
    $inpClmSup = $_GET['inpClmSup'];//*
    $clmInf = $_GET['clmInf'];//*
    $inpClmInf = $_GET['inpClmInf'];//*

    $obs = $_GET['obs'];
    $estado = '1';

    $sql = "INSERT INTO tblot (usuarioIngreso, tipoOt, nombrePac, apellidoPac, rutPac, fechaNacPac, arc, alineacionSup, alineacionMan, nivelacionSup, nivelacionSupText, nivelacionInf, nivelacionInfText, strSup, strSupText, strInf, strInfText, expSup, expSupText, expInf, expInfText, rrdSup, rrdSupText, rrdInf, rrdInfText, ppdSup, ppdSupText, ppdInf, ppdInfText, extSup, extSupText, extInf, extInfText, intSup, intSupText, intInf, intInfText, cerrarEspSup, cerrarEspSupText, cerrarEspInf, cerrarEspInfText, cerrarLMSup, cerrarLMSupText, cerrarLMInf, cerrarLMInfText, obs, estado) VALUES ('$usuario','$tipoOt','$nombre','$apellido','$rut','$fn','$arcSel','$aliSup','$aliInf','$nivSup','$inpNivSup','$nivInf','$inpNivInf','$stripSup','$inpstripSup','$striInf','$inpStripInf','$expSup','$inpExpSup','$expInf','$inpExpInf','$rrdSup','$inpRrdSup','$rrdInf','$inpRrdInf','$ppdSup','$inpPpdSup','$ppdInf','$inpPpdInf','$extSup','$inpExpSup','$expInf','$inpExpInf','$intSup','$inpIntSup','$intInf','$inpIntInf','$ceeSup','$inpCeeSup','$ceeInf','$inpCeeInf','$clmSup','$inpClmSup','$clmInf','$inpClmInf','$obs','$estado')";
    //echo $sql;
    $result = mysqli_query($db, $sql);
    if ($result){
        echo "ok";
    }else{
        echo "fail";
    } 
?>