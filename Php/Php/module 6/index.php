<?php

$file = fopen('championsleauge.txt','r');

$header = fgetcsv($file, 0, "\t");


echo implode("\t", $header) . "\n";

while (($row = fgetcsv($file, 0, "\t")) == !false) {
    echo implode("\t", $row) . "\n";
}

fclose($file);

$my_file = fopen('championsleauge.txt', 'w');

$added_text = "Llapi vs Drenica 4-2";

fwrite($my_file, $added_text);

?>