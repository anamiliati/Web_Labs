// Event listeners for the buttons
document.getElementById('rock').addEventListener('click', playGame);
document.getElementById('paper').addEventListener('click', playGame);
document.getElementById('scissors').addEventListener('click', playGame);

// Initial variables to track rounds and user wins
let rounds = 3;  // The user can play 3 rounds
let userWins = 0; // Tracks how many times the user wins
let totalRoundsPlayed = 0;  // Tracks the total number of rounds played

// Function to handle the game when a button is clicked
function playGame(event) {
    // If no rounds are left, ask the user if they won and if they want to continue
    if (rounds <= 0) {
        askForRestart();
        return;
    }

    // If the user has already won, don't let them continue playing
    if (userWins > 0) {
        askForRestart();
        return;
    }

    const userChoice = event.target.id;  // Get the user's choice (rock, paper, or scissors)
    const computerChoice = getComputerChoice();  // Get the computer's random choice
    const result = determineWinner(userChoice, computerChoice);  // Determine the result

    // Display the result on the webpage
    document.getElementById('result').innerHTML = `
        <p>You chose: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}</p>
        <p>The computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        <p>${result}</p>
        <p>Rounds left: ${rounds}</p>
    `;

    // Show the result in an alert box
    alert(`You chose: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}\n` +
          `The computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}\n` +
          result);

    // Decrease the rounds count after each play
    rounds--;
    totalRoundsPlayed++;

    // If the user wins, stop the game immediately
    if (userWins > 0) {
        document.getElementById('result').innerHTML = `
            <p>Congratulations! You win the game!</p>
            <p>The game is over. Refresh to play again.</p>
        `;
    } else if (rounds === 0 && userWins === 0) {
        // If the user loses all rounds
        document.getElementById('result').innerHTML = `
            <p>Game Over!</p>
            <p>You couldn't win in 3 rounds. Refresh to play again.</p>
        `;
    }
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
        userWins++;  // Increment user win count
        return "You win this round!";
    } else {
        return "You lose this round!";
    }
}

// Function to ask the user if they want to continue playing or restart the game
function askForRestart() {
    if (userWins > 0) {
        let continueGame = confirm("Congratulations! You win! Would you like to play again?");
        if (continueGame) {
            resetGame();
        } else {
            alert("Thank you for playing! The game is over.");
        }
    } else {
        let continueGame = confirm("Game Over! You didn't win. Would you like to try again?");
        if (continueGame) {
            resetGame();
        } else {
            alert("Thank you for playing! The game is over.");
        }
    }
}

// Function to reset the game
function resetGame() {
    rounds = 3;  // Reset rounds to 3
    userWins = 0;  // Reset user wins count
    totalRoundsPlayed = 0;  // Reset the total rounds played
    document.getElementById('result').innerHTML = "<p>Make your choice!</p>";  // Reset the result message
}
