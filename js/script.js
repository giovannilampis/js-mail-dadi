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

        // a writing says the user is allowed to enter, as his / her email address is in the mailing list

        document.getElementById("result").innerHTML = "Access is allowed, welcome to disneyland !"

    } else {

        // a writing says the user is not allowed to enter, as his / her email address isn't in the mailing list

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

    // USER's dice throw

    // get a random number (from 1 to 6) for the user's dice throw

    let userDiceThrow = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    console.log(userDiceThrow);

    // prepare the source to set for the img (user's dice) in the DOM

    let userDiceImg = './images/dice' + userDiceThrow + '.png';

    // over the game dice, a writing says who's the player

    document.getElementById("player-user").innerHTML = "You";

    // setAttribute method

    document.querySelectorAll('img')[0].setAttribute('src', userDiceImg);

    // COMPUTER's dice throw

    // get a random number (from 1 to 6) for the computer's dice throw

    let computerDiceThrow = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    console.log(computerDiceThrow);

    // prepare the source to set for the img (computer's dice) in the DOM

    let computerDiceImg = './images/dice' + computerDiceThrow + '.png';

    // over the game dice, a writing says who's the player

    document.getElementById("player-computer").innerHTML = "Computer";

    // setAttribute method

    document.querySelectorAll('img')[1].setAttribute('src', computerDiceImg);

    // get the #result-dice element

    let resultDice = document.getElementById("result-dice");


    // let us discover who is the winner

    if ( userDiceThrow > computerDiceThrow ) {

        console.log("Complimenti, hai vinto !");

        // a writins says the user has won the game

        resultDice.innerHTML = "Congratulations, you have won !"

    } else if ( computerDiceThrow > userDiceThrow ) {

        console.log("Siamo spiacenti, hai perso ");

        // a writins says the user has lost the game

        resultDice.innerHTML = "Sorry, this time you have lost !";

    } else {

        console.log("E' un pareggio !");

        // a writins says there has been a draw in the game

        resultDice.innerHTML = "What a thrilling challenge, it's a draw! !";
    }


})

