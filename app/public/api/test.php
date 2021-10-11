<?php

$foo="to be";
$bar="or not to be";

echo $foo . " " . $bar;

$arr=[1,2,3,4,5,6];

$arr2=[
    "first"=>"Tom",
    "second"=> "Manvith"
];

if(true){
    echo "True \n";
}
else{
    echo "False \n";
}

foreach ($arr2 as $key => $val){
    echo "<li>" .$key." is ".$val."</li> \n";
}

echo json_encode($arr2, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR);
