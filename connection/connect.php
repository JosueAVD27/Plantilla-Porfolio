<?php
function conectar(){
    $SERVERNAME="localhost";
    $USERNAME="";
    $PASSWORD="";
    $DBNAME="";

    $conn=mysqli_connect( $SERVERNAME, $USERNAME, $PASSWORD) or die("Error en la conexión");
    mysqli_select_db($conn, $DBNAME);

    return $conn;
}