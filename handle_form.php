<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = array();

    if (empty($_POST["password"]) || strlen(trim($_POST["password"])) < 6) {
        $errors[] = "Минимальная длина пароля должна составлять минимум 6 символов!";
    } elseif (!preg_match('/[A-Z]/', $_POST["password"]) || !preg_match('/[^a-zA-Z]/', $_POST["password"])) {
        $errors[] = "Пароль должен содержать хотя бы 2 заглавных символа!";
    }

    if (empty($errors)) {
        header('Location: index.php');
        exit();
    } else {
        foreach ($errors as $error) {
            echo $error;
        }
    }
}

