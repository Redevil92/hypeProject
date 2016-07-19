<?php
$host = "localhost";
$user = "root";
$pass = "root";
$database = "TIM";

//connection to db
$mysqli = new mysqli($host, $user, $pass, $database);

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else
{
# extract results mysqli_result::fetch_array
    $query = " SELECT * FROM promozioni ORDER BY Ordine ";
//query execution
    $result = $mysqli->query($query);
//if there are data available
    if($result->num_rows >0) {
        $myArray = array();//create an array
        while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = array_map("utf8_encode", $row);
        }
        echo json_encode($myArray);
    }

//free result
    $result->close();

//close connection
    $mysqli->close();
}



?>