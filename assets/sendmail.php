<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);
  
  $mail->setForm('info@knn.com', 'knnfmx');

  $mail->addAddress('fmxhighlife@gmail.com');

  $mail->Subject = 'Hello, this is me';

  $body = '<h1>Title</h1>';

  if (trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email']. '</p>';
  }
  if (trim(!empty($_POST['name']))){
    $body.='<p><strong>Name:</strong> '.$_POST['name']. '</p>';
  }
  if (trim(!empty($_POST['phone']))){
    $body.='<p><strong>Phone:</strong> '.$_POST['phone']. '</p>';
  }
  if (trim(!empty($_POST['message']))){
    $body.='<p><strong>Message:</strong> '.$_POST['message']. '</p>';
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Error';
  }  else {
    $message = 'All done!'
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>