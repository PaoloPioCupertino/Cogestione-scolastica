document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene l'invio del modulo

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Messaggio inviato da ${name} (${email}): ${message}`);

    // Resetta il modulo
    document.getElementById('contactForm').reset();
});
