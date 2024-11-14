// script.js

// Event listeners for the buttons
document.getElementById('rock').addEventListener('click', playGame);
document.getElementById('paper').addEventListener('click', playGame);
document.getElementById('scissors').addEventListener('click', playGame);

// Function to handle the game when a button is clicked
function playGame(event) {
    const userChoice = event.target.id; // Get the user's choice (rock, paper, or scissors)
    const computerChoice = getComputerChoice(); // Get the computer's random choice
    const result = determineWinner(userChoice, computerChoice); // Determine the result

    // Display the result both on the webpage and using an alert
    document.getElementById('result').innerHTML = `
        <p>You chose: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}</p>
        <p>The computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        <p>${result}</p>
    `;

    // Show the result in an alert box
    alert(`You chose: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}\n` +
          `The computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}\n` +
          result);
}

// Function to get the computer's choice randomly (rock, paper, or scissors)
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner based on the choices
function determineWinner(userChoice, computerChoice) {
    // If both choices are the same, it's a tie
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    // If the user wins based on the game rules
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
