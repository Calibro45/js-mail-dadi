// chiedere all'utente la mail

const mailInput = document.getElementById("user-mail");
console.log(mailInput);

const formButton = document.getElementById('cta-form');
console.log(formButton);

formButton.addEventListener('click', function() {

    const userMail = mailInput.value;
    console.log(userMail);
})


// verificare che la mail sia nella lista per accedere
// di conseguenza creare una lista mail
// stampare un messaggio di avviso se l'utente può accedere