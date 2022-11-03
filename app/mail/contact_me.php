<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require '../vendor/autoload.php';

$data = json_decode(file_get_contents('php://input'), true);

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

$mail = new PHPMailer(true);
$name = $data['name'];
$email_address = $data['email'];
$phone = $data['phone'];
$message = $data['message'];

try {
    //Server settings
    $mail->SMTPDebug = false;             //SMTP::DEBUG_SERVER         // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.forpsi.com';                   // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'EMAIL';          // SMTP username
    $mail->Password   = 'PASSWORD';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to
    //Recipients
    $mail->setFrom('webmail@jfsabinov.sk', 'WebPage');    // Add a recipient
    $mail->AddAddress('fecko@jfsabinov.sk', "WebPage");            // Name is optional

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Web-site formular:  $name";
    $mail->Body    = "Nova sprava z kontaktneho formulara:\n\n"."Detaily:\n\nName: $name\nEmail: $email_address\nPhone: $phone\n\nMessage:\n$message";
    $mail->AltBody = "Nova sprava z kontaktnaho formulara:\n\n"."Detaily:\n\nName: $name\nEmail: $email_address\nPhone: $phone\n\nMessage:\n$message";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Error"; //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}    
        
?>