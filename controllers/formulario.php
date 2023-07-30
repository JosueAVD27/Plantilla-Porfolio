<?php
// obtener los valores del formulario
$name = $_POST['fullname'];
$email = $_POST['email'];
$message = $_POST['message'];

// enviar el correo electrónico
mail('example@gmail.com', 'Nuevo mensaje de ' . $name, $message, 'From: ' . $email);

// enviar una respuesta de éxito
echo 'Correo electrónico enviado correctamente';