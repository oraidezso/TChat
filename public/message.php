<?php
require("./conn.php");

if(!$conn = new mysqli($servername, $username, $password,$db)){
	echo "Connect failed: (" . $conn->errno . ") " . $conn->error;
}

$message = json_decode($_POST["message"], true);

$query='INSERT INTO chat (userid,name,roomid,lang,mes) VALUES(?,?,?,?,?)';

if(!$sql=$conn->prepare($query)){
    echo "Prepare failed: (" . $conn->errno . ") " . $conn->error;
}

$sql->bind_param("isiss", 
    $message["uid"], 
    $message["name"], 
    $message["roomid"], 
    $message["from"], 
    $message["value"]
);

$sql->execute();
$sql->close();
/*
  $sql->bind_param("isiss", 
    mysqli_real_escape_string($conn,$message["uid"]), 
    mysqli_real_escape_string($conn,$message["name"]), 
    mysqli_real_escape_string($conn,$message["roomid"]), 
    mysqli_real_escape_string($conn,$message["from"]), 
    mysqli_real_escape_string($conn,$message["value"])
);
*/



?>
