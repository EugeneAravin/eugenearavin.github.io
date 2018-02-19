<?php

$recepient = "tc-expert82@mail.ru";
$sitename = "ТС-Эксперт";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$name = trim($_POST["codde"]);
$message = "Имя: $name \nТелефон: $phone \nПромокод: $codde";

$pagetitle = "Новая заявка с сайта с главной формы \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

