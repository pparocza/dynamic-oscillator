<?php



// array
$array = Array (
        "valence" => htmlspecialchars($_GET["valence"]),
        "degree" => htmlspecialchars($_GET["degree"])
);

// encode array to json
$json = json_encode($array);

//write json to file
if (file_put_contents("data.json", $json))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

header("Location:simulateHRdata.html");

?>