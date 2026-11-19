<?php

$emri = "Mali";

print_r($emri);
echo gettype($emri)

funtcion displaytext(){
    echo "Hello world"
}

displaytext()

function shuma(){
    $value = 120 + 20;
    echo $value
}

function shuma($numri1, $numri2){
    $shumafinale = $numri1 + $numri2;
    echo $shumafinale;
}

shuma()

echo "<br>";
shuma(300, 400);
shuma(100, 200);

shuma(100, 400);


function maximum($x, $y){
    if($x > $y){
        return $x;
    }
    else{
        return $y;
    }
}

$a =20;
$b =30;
$test = maximum($a,$b);
echo"The max of $a and $b is $test"

function minimum($x, $y){
    if($x > $y){
        return $x;
    }
    else{
        return $y;
    }
}

$a =-20;
$b =30;
$test = maximum($a,$b);
echo"The min of $a and $b is $test";

function even_odd($numri){
    if(($numri % 2) == 0){
        return "$numri eshte numer qift"
    }
    else{
        return "$numri eshte numer tek";
    }
}
$mosha = 50;
echo "<br>";
echo even_odd($mosha);
?>