// Event listeners for the buttons
document.getElementById('rock').addEventListener('click', playGame);
document.getElementById('paper').addEventListener('click', playGame);
document.getElementById('scissors').addEventListener('click', playGame);

// Initialize variables
let roundsPlayed = 0; // To track how many rounds have been played
const maxRounds = 5; // Total number of rounds
const userChoices = []; // Array to store user's choices
const computerChoices = []; // Array to store computer's choices
const results = []; // Array to store the result of each round

// Function to handle the game
function playGame(event) {
    if (roundsPlayed >= maxRounds) {
        displaySummary();
        return;
    }

    const userChoice = event.target.id; // Get user's choice
    const computerChoice = getComputerChoice(); // Get computer's random choice
    const roundResult = determineWinner(userChoice, computerChoice); // Determine the result of the round

    // Update the choices and results
    userChoices.push(userChoice);
    computerChoices.push(computerChoice);
    results.push(roundResult);

    roundsPlayed++; // Increment rounds played

    // Display round results
    document.getElementById('result').innerHTML = `
        <p>Round ${roundsPlayed}:</p>
        <p>You chose: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}</p>
        <p>Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        <p>${roundResult}</p>
        <p>Rounds left: ${maxRounds - roundsPlayed}</p>
    `;

    // Check if all rounds are completed
    if (roundsPlayed === maxRounds) {
        displaySummary();
    }
}

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner of the round
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win this round!";
    } else {
        return "Computer wins this round!";
    }
}

// Function to display a summary after all rounds
function displaySummary() {
    let summary = "<h2>Game Summary:</h2><ul>";
    for (let i = 0; i < maxRounds; i++) {
        summary += `<li>Round ${i + 1}: You chose ${userChoices[i]}, Computer chose ${computerChoices[i]} - ${results[i]}</li>`;
    }
    summary += "</ul>";

    document.getElementById('summary').innerHTML = summary;
    document.getElementById('result').innerHTML = "<p>Game Over! Check the summary below.</p>";
}
