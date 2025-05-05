<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "";
    $recipe = isset($_POST["recipe"]) ? htmlspecialchars($_POST["recipe"]) : "";
    
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Imię i nazwisko jest wymagane.";
    }
    
    if (empty($email)) {
        $errors[] = "Email jest wymagany.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Nieprawidłowy format adresu email.";
    }
    
    if (empty($recipe)) {
        $errors[] = "Przepis jest wymagany.";
    }
    
    if (empty($errors)) {
        $to = "mdeeczek@gmail.com";
        
        $subject = "Nowy przepis od: $name";
        
        $message = "Imię i nazwisko: $name\n";
        $message .= "Email: $email\n\n";
        $message .= "Przepis:\n$recipe";
        
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        $mail_sent = mail($to, $subject, $message, $headers);
        
        if ($mail_sent) {
            header("Location: ../index.html?status=success");
            exit;
        } else {
            header("Location: ../index.html?status=error");
            exit;
        }
    } else {
        $error_string = implode(",", $errors);
        header("Location: ../index.html?status=validation_error&errors=" . urlencode($error_string));
        exit;
    }
} else {
    header("Location: ../index.html");
    exit;
}
?> 