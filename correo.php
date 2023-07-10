<?php
$destinatario = 'diaz.monreal.luis.alberto@gmail.com';
$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = "Enviado desde la página web Fundación Erick Muro";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\nCon Correo: ". $email;

mail($destinatario, $asunto, $mensajeCompleto,$header);
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>