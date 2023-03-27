<?php
$phone = $_POST['phone'];
$msg = $_POST['question'];
$name = $_POST['name'];
$token = "6164860035:AAEqHeKBp_JClr2X4pbNhtW3lWop78TzJJE";
$chat_id = "-813746320";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Вопрос:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>