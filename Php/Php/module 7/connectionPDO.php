<?php

$host = "localhost";
$user = "root";
$password = "";

try{
    $conn = new PDO("mysql:host=$host",$user,$pass);
    echo "Connected";
}catch(Excpectation $e){
    echo "Not Connected";
}
?>