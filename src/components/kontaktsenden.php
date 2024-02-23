<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formulardaten auslesen
    $name = $_POST['first-name'] . " " . $_POST['last-name']; 
    $email = $_POST['email'];
    $phone = $_POST['phone-number']; 
    $message = $_POST['message'];

    // E-Mail-Konfiguration
    $empfaenger = 'office@lukashyd.at';
    $betreff = 'Neue Kontaktanfrage';

    // E-Mail-Nachricht erstellen
    $nachricht = "
        Kontaktanfrage von: $name 
        E-Mail: $email
        Telefon: $phone 
        Nachricht: $message
    ";

    // E-Mail versenden
    $erfolg = mail($empfaenger, $betreff, $nachricht);

    // Benachrichtigung für den Benutzer
    if ($erfolg) {
        echo '<p>Ihre Anfrage wurde erfolgreich gesendet!</p>';
    } else {
        echo '<p>Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.</p>';
    }
}

?>