<?php

$mysqli = new mysqli("localhost", "root", "root", "tim");

if (mysqli_connect_errno()) { //verify connection
    echo "ERROR: Cannot connect to database ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else { //connection succesful
    
    //get data from jquery
    $id = $_POST['id'];
    $table = $_POST['table'];
    
    //build query starting from data received
    $query = "SELECT * FROM ".$table." WHERE ID = ".$id;
    
    $returned = $mysqli->query($query); //object notation
    
    if($returned->num_rows > 0) {
        $encodedArray = array();
        while($row = $returned->fetch_array(MYSQLI_ASSOC)) {
            $encodedArray[] = array_map('utf8_encode', $row); //fetch every row and put it in the array (only one this time)
        }
        echo json_encode($encodedArray); //build the json file to be parsed by js function
    }
    
    $returned->close(); //free query result
    
    $mysqli->close(); //close connection
}
    


?>