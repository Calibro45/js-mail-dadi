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

const ol = document.querySelector('.mail-list');
//console.log(ol);

// ciclo for array mail e generazione lista

for (let i = 0; i < mail_list.length; i++) {
    
    const mail = mail_list[i];
    console.log(i, mail);
    
    const li = document.createElement('li');

    ol.append(li);

    li.append(mail);

}

// invio form e verifica mail inserita

formButton.addEventListener('click', function() {
    
    // valore mail input users
    
    const userMail = mailInput.value;
    console.log(userMail);
    
    // stampare un messaggio di avviso se l'utente può accedere
    
    if ((userMail === 'darth-vader@darkside.com') || (userMail === 'anakin@outlook.it')) {

        alert('la forza è potente in te!');

    } else {

        alert('ritenta... spoiler: prova con la n.2 o la n.3');
    }
    
})


// inizio esercizio dadi 

// generare numero random per utente da 1 a 6
// generare numero random per pc da 1 a 6
// stabilire chi ha vinto in base al n. più alto


