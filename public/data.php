<?php
require("./conn.php");

header("Content-Type: application/json; charset=UTF-8");
$message = json_decode($_POST["message"], true);
$conn = new mysqli($servername, $username, $password,$db);
$result = $conn->query("SELECT * FROM chat where roomid=".$message["roomid"]." ORDER BY modtime asc;");
//$outp = array();
//$outp = $result->fetch_all(MYSQLI_ASSOC);//fetch all hiánya miatt átírva
//echo json_encode($outp)
$outp=array();
while ($row = $result->fetch_assoc()) {
	$outp[]=$row;
}
echo json_encode($outp);
$conn->close();
?>
