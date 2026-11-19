<?php

$host = "localhost";
$user = "root";
$password = "";

try{
    $conn = new PDO("mysql:host=$host",$user,$pass);
    $sql = "Create database testdb";
    $conn->exec($sql);
    echo "Database is created";
}catch(Excpectation $e){
    echo "Database not created, something went wrong";
}
?>