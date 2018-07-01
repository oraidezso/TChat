<?php
require("./conn.php");

header("Content-Type: application/json; charset=UTF-8");
$message = json_decode($_POST["message"], true);
$conn = new mysqli($servername, $username, $password,$db);
$result = $conn->query("SELECT coalesce(max(userid),0)+1 as max FROM chat where roomid=".$message["nroomid"].";");
if($result){
    while ($row = $result->fetch_assoc()) {
        echo json_encode($row);
    }
}else{
    echo $message;
    echo $_POST["message"];
}
$conn->close();
?>
