<?php

require_once 'db_login.php';

//connection to db
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if (mysqli_connect_errno()) { //verify connection
    echo "ERROR: Cannot connect to database ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else { //connection succesful
    
    $query = "SELECT * FROM tv_smartliving";
    
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