<?php
$host = 'localhost';
$user = 'root';
$password = 'root';
$db = 'test_db';
$port = 3306;

$name = $_POST['member_name'];
$address = $_POST['member_address'];
$birth = $_POST['member_birth'];

// DB接続
$mysqli = new mysqli($host, $user, $password, $db);
if ($mysqli->connect_error) {
  echo $mysqli->connect_error;
  exit();
} else {
  $mysqli->set_charset("utf8");
}

// DB処理
$sql = 'insert into member (name, address, birth, ins_date, upd_date) '
     . 'values("'.$name.'", "'.$address.'", "'.$birth.'", now(), now())';

$res = $mysqli->query($sql);

$mysqli->close();

header('Content-type: application/json; charset= UTF-8');
echo json_encode($res);
