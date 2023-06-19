// nested if else

// winning number 19
// 19 your guess is right
// 17 too low
// 22 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
// "12"
// console.log( typeof userGuess , userGuess);

if (userGuess === winningNumber) {
    console.log("your guess is right!");
}
else {
    // console.log("your guess is wrong");
    if (userGuess < winningNumber) {
        console.log("too low!!!");
    }
    else {
        console.log("too high !!");
    }
}
