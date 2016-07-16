<?php

$mysqli = new mysqli("localhost", "root", "", "tim");

if (mysqli_connect_errno()) { //verify connection
    echo "ERROR: Cannot connect to database ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else { //connection succesful
    
    $query = "SELECT * FROM modem_networking";
    
    $returned = $mysqli->query($query); //object notation
    
    if($returned->num_rows > 0) {
        $encodedArray = array();
        while($row = $returned->fetch_array(MYSQLI_ASSOC)) {
            $encodedArray[] = array_map('utf8_encode', $row); //fetch every row and put it in the array
        }
        echo json_encode($encodedArray); //build the json file to be parsed by js function
    }
    
    $returned->close(); //free query result
    
    $mysqli->close(); //close connection
}
    


?>