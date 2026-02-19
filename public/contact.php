<?php
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    header("Content-Type: application/json");
    http_response_code(500);
    echo json_encode(["error" => $errstr]);
    exit();
});

register_shutdown_function(function() {
    $error = error_get_last();
    if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        header("Content-Type: application/json");
        http_response_code(500);
        echo json_encode(["error" => $error['message']]);
    }
});

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

// Accept both JSON and form-urlencoded
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? $_SERVER["CONTENT_TYPE"] : "";

if (strpos($contentType, "application/json") !== false) {
    $input = json_decode(file_get_contents("php://input"), true);
} else {
    $input = $_POST;
}

if (!$input || empty($input)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid request body"]);
    exit();
}

$fullName = isset($input["fullName"]) ? trim($input["fullName"]) : "";
$email    = isset($input["email"]) ? trim($input["email"]) : "";
$subject  = isset($input["subject"]) ? trim($input["subject"]) : "";
$message  = isset($input["message"]) ? trim($input["message"]) : "";

if (empty($fullName) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "All fields are required"]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address"]);
    exit();
}

// SMTP settings
$smtpHost = "mail.startuphqconsult.com";
$smtpUser = "admin@startuphqconsult.com";
$smtpPass = "Startup@hq2026";
$toEmail  = "admin@startuphqconsult.com";
$subjectLine = "New Website Enquiry: " . $subject;

$safeFullName = htmlspecialchars($fullName, ENT_QUOTES, "UTF-8");
$safeEmail    = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$safeSubject  = htmlspecialchars($subject, ENT_QUOTES, "UTF-8");
$safeMessage  = nl2br(htmlspecialchars($message, ENT_QUOTES, "UTF-8"));

$htmlBody = "<html><body>"
    . "<div style='font-family:Arial,sans-serif;max-width:600px;margin:0 auto;'>"
    . "<h2 style='border-bottom:1px solid #eee;padding-bottom:10px;color:#333;'>New Website Enquiry</h2>"
    . "<p style='margin:8px 0;color:#333;'><b>Name:</b> {$safeFullName}</p>"
    . "<p style='margin:8px 0;color:#333;'><b>Email:</b> {$safeEmail}</p>"
    . "<p style='margin:8px 0;color:#333;'><b>Subject:</b> {$safeSubject}</p>"
    . "<div style='margin-top:20px;padding:15px;background:#f5f5f5;border-radius:6px;'>"
    . "<p style='margin:0 0 8px 0;font-weight:bold;color:#333;'>Message:</p>"
    . "<p style='white-space:pre-wrap;margin:0;color:#333;'>{$safeMessage}</p>"
    . "</div>"
    . "<p style='font-size:12px;color:#888;margin-top:20px;'>Sent from StartupHQ contact form</p>"
    . "</div>"
    . "</body></html>";

// Build the email message
$emailMessage  = "To: {$toEmail}\r\n";
$emailMessage .= "From: StartupHQ Website <{$smtpUser}>\r\n";
$emailMessage .= "Reply-To: {$email}\r\n";
$emailMessage .= "Subject: {$subjectLine}\r\n";
$emailMessage .= "MIME-Version: 1.0\r\n";
$emailMessage .= "Content-Type: text/html; charset=UTF-8\r\n";
$emailMessage .= "X-Mailer: StartupHQ\r\n";
$emailMessage .= "\r\n";
$emailMessage .= $htmlBody;
$emailMessage .= "\r\n.\r\n";

// Connect via SSL on port 465
$context = stream_context_create([
    "ssl" => [
        "verify_peer" => false,
        "verify_peer_name" => false,
        "allow_self_signed" => true
    ]
]);

$socket = @stream_socket_client("ssl://{$smtpHost}:465", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);

if (!$socket) {
    http_response_code(500);
    echo json_encode(["error" => "SMTP connection failed", "details" => "{$errstr} ({$errno})"]);
    exit();
}

// Helper to send command and check response
function smtpCommand($socket, $command, $expectedCode) {
    if ($command !== null) {
        fwrite($socket, $command . "\r\n");
    }
    $response = "";
    while ($line = @fgets($socket, 512)) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === " ") break;
    }
    $code = substr($response, 0, 3);
    if ($code !== (string)$expectedCode) {
        fclose($socket);
        http_response_code(500);
        echo json_encode(["error" => "SMTP error", "details" => trim($response)]);
        exit();
    }
    return $response;
}

// SMTP conversation
smtpCommand($socket, null, 220);                              // Read greeting
smtpCommand($socket, "EHLO startuphqconsult.com", 250);      // EHLO
smtpCommand($socket, "AUTH LOGIN", 334);                      // Start auth
smtpCommand($socket, base64_encode($smtpUser), 334);         // Username
smtpCommand($socket, base64_encode($smtpPass), 235);         // Password
smtpCommand($socket, "MAIL FROM:<{$smtpUser}>", 250);        // Sender
smtpCommand($socket, "RCPT TO:<{$toEmail}>", 250);           // Recipient
smtpCommand($socket, "DATA", 354);                           // Start data

// Send email body
fwrite($socket, $emailMessage);
smtpCommand($socket, null, 250);                              // Confirm sent

fwrite($socket, "QUIT\r\n");
fclose($socket);

echo json_encode(["success" => true]);
