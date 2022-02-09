// chiedere all'utente la mail

const mailInput = document.getElementById("user-mail");
console.log(mailInput);

const formButton = document.getElementById('cta-form');
console.log(formButton);

// verificare che la mail sia nella lista per accedere
// di conseguenza creare una lista mail

const mail_list = [
    'obi-wan@hotmail.it',
    'anakin@outlook.it',
    'darth-vader@darkside.com',
    'boba-fet@hunter.it',
    'mando@hunter.com',
    'qui-gon@force.com',
];

console.log(mail_list);


formButton.addEventListener('click', function() {
    
    // valore mail input users
    
    const userMail = mailInput.value;
    console.log(userMail);
    
    for (let i = 0; i < mail_list.length; i++) {
        
        const mail = mail_list[i];
        console.log(i, mail);
        
    }

    // stampare un messaggio di avviso se l'utente può accedere
    
    if ((userMail === 'darth-vader@darkside.com') || (userMail === 'anakin@outlook.it')) {

        alert('la forza è potente in te!')

    } else {

        alert('ritenta...')
    }
    
})

