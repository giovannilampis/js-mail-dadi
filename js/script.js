"use strict"



// create mailing list

let allowedEmailAddresses = [ "donalduck@gmail.com", "scrooge@gmail.com", "mickeymouse@gmail.com", "goofy@gmail.com", "rockerduck@gmail.com", "daisy@gmail.com", "jetmcquack@gmail.com", "flounder@gmail.com", "hugo@gmail.com"];

// get dom element which contains user emailaddress

let enteredEmail = document.getElementById("user-email-address");

// get the submit email button element

const buttonEmail = document.getElementById("button-email");

// create function that activates the check 

let checkEmail = function () {

    // add the "small soldier" variable

    let found = false;

    // the variable "user" expresses the email address enteret by the user

    let user = enteredEmail.value;

    // use a for cycle, in order to discover wether the user's email address is in the mailing list or not

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

// add event listener

buttonEmail.addEventListener("click", checkEmail);


// EXERCISE 2 : dice challenge against the computer
