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
        document.getElementById("result").innerHTML = "Access is allowed, welcome to disneyland !"

    } else {
        document.getElementById("result").innerHTML = "Sorry but you can't enter because you don't know the magic word"
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

    let userDiceImg = './images/dice' + userDiceThrow + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', userDiceImg)

    // computer's dice throw

    let computerDiceThrow = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    console.log(computerDiceThrow);

    let computerDiceImg = './images/dice' + computerDiceThrow + '.png';

    document.querySelectorAll('img')[1].setAttribute('src', computerDiceImg);

    // get the #result-dice element

    let resultDice = document.getElementById("result-dice");


    // let us discover who is the winner

    if ( userDiceThrow > computerDiceThrow ) {
        console.log("Complimenti, hai vinto !");
        resultDice.innerHTML = "Complimenti, hai vinto tu !"
    } else if ( computerDiceThrow > userDiceThrow ) {
        console.log("Siamo spiacenti, hai perso ");
        resultDice.innerHTML = "Siamo spiacenti, questa volta hai perso !"
    } else {
        console.log("E' un pareggio !")
        resultDice.innerHTML = "Che sfida avvincente, è un pareggio !"
    }


})

