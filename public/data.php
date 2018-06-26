<?php
require("./conn.php");

header("Content-Type: application/json; charset=UTF-8");
//$obj = json_decode($_POST["x"], false);
$conn = new mysqli($servername, $username, $password,$db);
$result = $conn->query("SELECT * FROM chat;");
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);
$conn->close();
?>
