<?php
require("./conn.php");

header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli($servername, $username, $password,$db);
$result = $conn->query("SELECT * FROM chat;");
//$outp = array();
//$outp = $result->fetch_all(MYSQLI_ASSOC);//fetch all hiánya miatt átírva
//echo json_encode($outp)
$com='';
echo '[';
while ($row = $result->fetch_assoc()) {
	echo $com;
    echo json_encode($row);
    $com=',';
}
echo ']';
$conn->close();
?>
