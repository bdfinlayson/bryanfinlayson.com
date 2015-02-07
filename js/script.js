// JavaScript Document

// MAIN MENU PROMPT ALERTS

function myDesignAlert() {
   alert("More design content coming soon!")

}

function myCodingAlert() {
   alert("More coding content coming soon!")

}

function myWritingAlert() {
   alert("More writing content coming soon!")

}

function myPhotographyAlert() {
   alert("More photography content coming soon!")

}

function myContactAlert() {
   alert("Check back for my contact information soon!")

}

//CORRECT NUMBER GAME: GUESS THE CORRECT NUMBER 1-10

function randomNumberGuessingGame() {
  var randomNumber = Math.floor(Math.random() * 3 ) + 1;
  var secondRandomNumber = Math.floor(Math.random() * 6 ) + 1;
  var secondNumberGameGuess;
  var player = false;
  var gameToPlay;
  var wordGame = "n";
  var numberGame2 = "y";
  var playerLevel2 = false;
  var wordGameGuess = "mouse";
  var userWordGameGuess;
  var guess = prompt("I am thinking of a number between 1 and 3. Can you guess the correct number?");

  while (parseInt(guess) !== randomNumber)  {
    alert("You guessed " + guess + ". Unfortunately, the number " + guess + " is not correct." + " Please enter another number between 1 and 3 to try again.");
    guess = prompt("I am thinking of a number between 1 and 3. Can you guess the correct number?");
  }

  if (parseInt(guess) === randomNumber) {
    player = true;
    alert("Congratulations! You guessed " + guess + "! " + "The number " + randomNumber + " is correct!" + " You win!");
  }

  if (player === true) {
    alert("Because you're a winner, you get to play our special word game!");
    alert("Welcome to our word game!");
    alert("To play, guess which of the three words I am thinking.");
    userWordGameGuess = prompt("The three words are: dog, cat, or mouse. Make your selection now!");
}  while (wordGameGuess !== userWordGameGuess.toLowerCase()) {
  alert("Aww, " + userWordGameGuess + " is not the word I was thinking of. Please try your guess again!");
  userWordGameGuess = prompt("Which word am I thinking of: dog, cat, or mouse?");
}

  if (wordGameGuess === userWordGameGuess.toLowerCase()) {
    alert("You guessed the right word! I can't believe it! You win again!");
    alert("I hope you've enjoyed this game! Please come back another time!");
  }


}

