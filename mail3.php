<?php

$recepient = "info@halikov-studio.ru";
$recepient2 = "2944220@halikov-studio.ru";
$sitename = "Bitrix24";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$licencename = trim($_POST["namelicencename"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email \nНазвание лицензии: $licencename";

$pagetitle = "Покупка лицензии \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
mail($recepient2, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient2");