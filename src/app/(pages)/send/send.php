<?php

// Formular-Daten auslesen
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// E-Mail-Konfiguration
$empfaenger = 'office@antiquiten-kral.at';
$betreff = 'Neue Kontaktanfrage';

// E-Mail-Nachricht erstellen
$nachricht = "
    Vorname: $name
    E-Mail: $email
    Nachricht: $message
";

// E-Mail versenden
mail($empfaenger, $betreff, $nachricht);

// Erfolgsmeldung
echo '<p>Ihre Anfrage wurde erfolgreich gesendet!</p>';

?>