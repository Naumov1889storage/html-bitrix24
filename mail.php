<?php

$recepient = "info@halikov-studio.ru";
$recepient2 = "2944220@halikov-studio.ru";
$sitename = "Bitrix24";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка на скидку \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
mail($recepient2, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient2");