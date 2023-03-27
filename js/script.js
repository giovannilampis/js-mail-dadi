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

// get the button

let throwDice = document.getElementById("throw-dice");

// add event listener

throwDice.addEventListener("click", function() {

    // user's dice throw

    let userDiceThrow = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    console.log(userDiceThrow);

    // computer's dice throw

    let computerDiceThrow = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    console.log(computerDiceThrow);

    // let us discover who is the winner

    if ( userDiceThrow > computerDiceThrow ) {
        console.log("Complimenti, hai vinto !");
    } else if ( computerDiceThrow > userDiceThrow ) {
        console.log("Siamo spiacenti, hai perso ");
    } else {
        console.log("E' un pareggio !")
    }


})

