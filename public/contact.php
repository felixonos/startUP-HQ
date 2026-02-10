<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

$input = json_decode(file_get_contents("php://input"), true);

$fullName = isset($input["fullName"]) ? trim($input["fullName"]) : "";
$email    = isset($input["email"]) ? trim($input["email"]) : "";
$subject  = isset($input["subject"]) ? trim($input["subject"]) : "";
$message  = isset($input["message"]) ? trim($input["message"]) : "";

if (empty($fullName) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "All fields are required."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address."]);
    exit();
}

$to      = "admin@startuphqconsult.com";
$from    = "admin@startuphqconsult.com";
$replyTo = $email;

$subjectLine = "New Website Enquiry: " . $subject;

$safeFullName = htmlspecialchars($fullName, ENT_QUOTES, "UTF-8");
$safeEmail    = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$safeSubject  = htmlspecialchars($subject, ENT_QUOTES, "UTF-8");
$safeMessage  = htmlspecialchars($message, ENT_QUOTES, "UTF-8");

$htmlBody = "
<div style='font-family:Arial,sans-serif;max-width:600px;margin:auto'>
  <h2 style='border-bottom:1px solid #eee;padding-bottom:10px'>
    New Website Enquiry
  </h2>
  <p><b>Name:</b> {$safeFullName}</p>
  <p><b>Email:</b> {$safeEmail}</p>
  <p><b>Subject:</b> {$safeSubject}</p>
  <div style='margin-top:20px;padding:15px;background:#f5f5f5;border-radius:6px'>
    <p style='margin:0;font-weight:bold'>Message:</p>
    <p style='white-space:pre-wrap'>{$safeMessage}</p>
  </div>
  <p style='font-size:12px;color:#888;margin-top:20px'>
    Sent from StartupHQ contact form
  </p>
</div>
";

$boundary = md5(time());

$headers  = "From: StartupHQ Website <{$from}>\r\n";
$headers .= "Reply-To: {$replyTo}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";
$headers .= "X-Mailer: StartupHQ Mailer\r\n";

$textBody = "New Website Enquiry\n\n";
$textBody .= "Name: {$fullName}\n";
$textBody .= "Email: {$email}\n";
$textBody .= "Subject: {$subject}\n\n";
$textBody .= "Message:\n{$message}\n";

$body  = "--{$boundary}\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
$body .= $textBody . "\r\n";
$body .= "--{$boundary}\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
$body .= $htmlBody . "\r\n";
$body .= "--{$boundary}--\r\n";

$sent = mail($to, $subjectLine, $body, $headers);

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send message. Please try again later."]);
}
