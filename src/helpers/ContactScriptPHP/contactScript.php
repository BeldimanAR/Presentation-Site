<?php
$to = 'chisu.vladut@gmail.com';
$subject = 'Atlantic Partners Contact Form';
$from = $_GET['email'];

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Compose a simple HTML email message
$message = '<html><body>';
$message .= '<h1>From: '. $_GET['name'] .'</h1>';
$message .= '<p style="font-size:16px;"><a href="mailto:'.$_GET['email'].'">'.$_GET['email'].'</a></p>';
$message .= '<p style="font-size:16px;">'. $_GET['phone'] .'</p>';
$message .= '<p style="font-size:16px;">'. $_GET['message'] .'</p>';
$message .= '</body></html>';

// Sending email
if(mail($to, $subject, $message, $headers)){
    echo json_encode(['success' => 'Your message was sent! We will get back to you shortly!']);
} else{
    echo json_encode(['error' => 'Unable to send email. Please try again.']);
}
?>
