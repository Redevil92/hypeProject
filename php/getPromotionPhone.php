<?php

require_once 'db_login.php';

//connection to db
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else
{
    # extract results mysqli_result::fetch_array
    $query = " SELECT * FROM Promozioni WHERE Pagina = 'Fisso' ";
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


/*
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "TIM";

//create connection
//$conn = new mysqli($servername, $username, $password, $dbname);

$conn = mysqli_connect($servername, $username, $password, $dbname);
//check connection
if($conn->connect_error){
    die ("Connection failed: ".$conn->connect_error);
}

$sql = "SELECT * FROM Promozioni ";
$result = mysqli_query($conn, $sql) or die("Error in select ing".mysqli_error($conn));


    //create an array of row
    $lines = array();
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $lines[] = $row;
    }
    echo json_encode($lines);


//close the db connection

mysqli_close($conn)

*/
?>
