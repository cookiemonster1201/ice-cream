<?php
$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $token = "1746598714:AAGvdi6e6yORZWtLQSgxy9nCc8DfNy_FRro";
    $chat_id = "-525319323";
 
    if (!empty($_POST['name']) && !empty($_POST['phone']) && !empty($_POST['message'])){
        $bot_url = "https://api.telegram.org/bot{$token}/";
 
        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $name = "Имя пославшего: " . strip_tags($_POST['name']) . "%0A";
          }
        }
 
        if (isset($_POST['phone'])) {
          if (!empty($_POST['phone'])){
            $phone = "Телефон: " . "%2B" . strip_tags($_POST['phone']) . "%0A";
          }
        }

        if (isset($_POST['email'])) {
          if (!empty($_POST['email'])){
            $email = "Почта: " . strip_tags($_POST['email']) . "%0A";
          }
        }

        if (isset($_POST['message'])) {
          if (!empty($_POST['message'])){
            $message = "Комментарий: " . strip_tags($_POST['message']) . "%0A";
          }
        }
 
        if (isset($_POST['theme'])) {
          if (!empty($_POST['theme'])){
            $theme = "Тема: " .strip_tags($_POST['theme']);
          }
        }

        
        // Формируем текст сообщения
        $txt = $name . $phone . $theme . $message;
 
        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
        } elseif ($sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
          return true;
        } else {
            $msgs['err'] = 'Ошибка. Сообщение не отправлено!';
            echo json_encode($msgs);
            die('Ошибка. Сообщение не отправлено!');
        }
 
    } else {
        $msgs['err'] = 'Ошибка. Вы заполнили не все обязательные поля!';
        echo json_encode($msgs);;
    }
} else {
  header ("Location: /");
}
?>