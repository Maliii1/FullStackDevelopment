<?php
$VideoGames = array('Fortinte','Fifa','Minecraft','CSGO','Warzone','GTA');

$VideoGames1 = 'Fortnite';
$VideoGames2 = 'Fifa';
$VideoGames3 = 'Minecraft';
$VideoGames4 = 'CSGO';
$VideoGames5 = 'Warzone';
$VideoGames6 = 'GTA';

$Videolojat = ['Fortinte','Fifa','Minecraft','CSGO','Warzone','GTA'];

echo  $Videolojat[2];
echo "<br>";
echo count($Videolojat);


$frutat = array('Dredhza','Molla');
print_r($frutat);
array_push($frutat);
echo "<br>";
print_r($frutat);
array_unshift($frutat,'Pjeshka');
echo "<br>";
print_r($frutat);
array_shift($frutat);
echo "<br>";
print_r($frutat);

$hobbies = ['Football','Basketball','Hockey','Rugby','Tenis'];

$thefirstslice = array_slice($hobbies, 2);
$thesecondslice = array_slice($hobbies,0.3);
print_r($thefirstslice);
print_r($thesecondslice);
?>