<?php

$recepient = "info@halikov-studio.ru";
$recepient2 = "2944220@halikov-studio.ru";
$sitename = "Bitrix24";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$namesimilar = trim($_POST["namesimilar"]);
$message = "$namesimilar\nИмя: $name \nТелефон: $phone";

$pagetitle = "\"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");