<?php

function DisplayWelcome() {
    echo "Welcome to average grade calculator";
};

function calculateAverage($s1 ,$s2 , $s3) {
    $calculateAverage =($s1 + $s2 + $s3) /3;
    return $calculateAverage;
};

function getGrade($average) {
    if ($average >= 90) {
        return "A";
    }
    elseif ($average >= 80) {
        return "B";
    }
      elseif ($average >= 70) {
        return "C";
    }
    
       elseif ($average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}

DisplayWelcome();

$test1 = 85;
$test2 = 90;
$test3 = 95;
$averge = calculateAverage($test1,$test2,$test3);
$grade = getGrade(average);

if ($average >= 60) {
    echo "Result: Passed";
} else {
    echo "Result: Failed";
}
