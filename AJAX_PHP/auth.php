<?php
if (isset($_GET['name'])) {
  echo 'Hello ' . $_GET['name'];
}

if (isset($_POST['name'])) {
  echo 'Hello ' . $_POST['name'] . '. Your Age is: ' . $_POST['age'];
}
