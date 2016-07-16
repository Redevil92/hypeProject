<?php
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

?>