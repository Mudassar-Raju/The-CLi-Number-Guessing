

import inquirer from "inquirer"

// 1) Computer will generate a random number
// 2) user input for guessing number
// 3)  compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1)


const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6:"
  }
]);

if (answer.userGuessedNumber === randomNumber){
  console.log("Congratulations! you guessed right number.");

}else{
  console.log("you guessed wrong number.")
}