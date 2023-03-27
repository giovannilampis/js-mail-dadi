"use strict"

// EXERCISE 1 : CHECK EMAIL ADDRESS

// create mailing list

let allowedEmailAddresses = [ "donalduck@gmail.com", "scrooge@gmail.com", "mickeymouse@gmail.com", "goofy@gmail.com", "rockerduck@gmail.com", "daisy@gmail.com", "jetmcquack@gmail.com", "flounder@gmail.com", "hugo@gmail.com"];

// get dom element which contains user emailaddress

let enteredEmail = document.getElementById("user-email-address");

// get the submit email button element

const buttonEmail = document.getElementById("button-email");

// create function that activates the check 

let checkEmail = function () {

    let found = false;

    let user = enteredEmail.value;

    for (let i = 0; i < allowedEmailAddresses.length; i++) {

        if(user == allowedEmailAddresses[i]) {

            found = true;

            console.log("utente presente");
        }
    }

    if(found == true) {
        document.getElementById("result").innerHTML = "Complimenti, l'accesso ti è consentito !"

    } else {
        document.getElementById("result").innerHTML = "Siamo spiacenti ma il tuo indirizzo email non è associato ad alcun iscritto"
    }

}


buttonEmail.addEventListener("click", checkEmail)
