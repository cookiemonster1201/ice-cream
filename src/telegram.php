<?php
$name = = $_POST['user_name'];
$phone = = $_POST['user_phone'];
$email = = $_POST['user_email'];
$message = = $_POST['user_message'];
$token = "1746598714:AAGvdi6e6yORZWtLQSgxy9nCc8DfNy_FRro";
$chat_id = "-525319323";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Почта: ' => $email,
  'Комментарий: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>