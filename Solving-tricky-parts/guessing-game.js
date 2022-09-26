function guessingGame() {
    let answer = Math.floor(Math.random() * 100);
    let guesses = 0;
    let completed = false;
    return function guess(num) {
        if (completed) return "The game is over, you already won!";
        guesses++;
        if (num === answer) {
            completed = true;
            return `You win! You found ${answer} in ${guesses} guesses.`;
        } else if (num < answer) {
            return `${num} is too low!`;
        } else {
            return `${num} is too high!`;
        }
    };
}

// let game = guessingGame();
// console.log(game(50)); // "50 is too low!"
// console.log(game(90)); // "90 is too high!"
// console.log(game(70)); // "You win! You found 70 in 3 guesses."
// console.log(game(70)); // "The game is over, you already won!"

module.exports = {
    guessingGame
};