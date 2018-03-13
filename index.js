var inquirer = require("inquirer");
var Word = require('./word.js');

var attempts = 10;
var mistakes = [];

function game() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Type a Letter to Make a Guess!'
        }
    ]).then(answers => {
        mistakes.push(answers.guess);
        hanging();
    });

}

game();

// \n
//      ______
//     |      |
//    ( )     |
//   __|__    |
//     |      |
//    / \     |
//   /   \    |
//  __________|
// \n
// INCORRECT!
// \n
// X mistakes left!
// \n
// Guesses so far: char, char, char...

function hanging() {

    attempts--;

    // 9 lives left
    if (attempts === 9) {

        console.log("\n");
        console.log("  __________");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 8 lives left
    if (attempts === 8) {

        console.log("\n");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("  __________|");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 7 lives left
    if (attempts === 7) {

        console.log("\n");
        console.log("      ______");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("  __________|");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 6 lives left
    if (attempts === 6) {

        console.log("\n");
        console.log("      ______");
        console.log("     |      |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("  __________|");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 5 lives left
    if (attempts === 5) {

        console.log("\n");
        console.log("      ______");
        console.log("     |      |");
        console.log("    ( )     |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("            |");
        console.log("  __________|");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 4 lives left
    if (attempts === 4) {

        console.log("\n");
        console.log("      ______");
        console.log("     |      |");
        console.log("    ( )     |");
        console.log("     |      |");
        console.log("     |      |");
        console.log("            |");
        console.log("            |");
        console.log("  __________|");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 3 lives left
    if (attempts === 3) {

        console.log("\n");
        console.log("      ______");
        console.log("     |      |");
        console.log("    ( )     |");
        console.log("   __|      |");
        console.log("     |      |");
        console.log("            |");
        console.log("            |");
        console.log("  __________|");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 2 lives left
    if (attempts === 2) {

        console.log("\n");
        console.log("      ______");
        console.log("     |      |");
        console.log("    ( )     |");
        console.log("   __|__    |");
        console.log("     |      |");
        console.log("            |");
        console.log("            |");
        console.log("  __________|");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 1 lives left
    if (attempts === 1) {

        console.log("\n");
        console.log("      ______");
        console.log("     |      |");
        console.log("    ( )     |");
        console.log("   __|__    |");
        console.log("     |      |");
        console.log("    /       |");
        console.log("   /        |");
        console.log("  __________|");

        console.log("\n"
            + "INCORRECT!"
            + "\n"
            + attempts + " mistakes left!"
            + "\n"
            + "Guesses so far: " + mistakes.join(", ")
            + "\n"
        );

        game();

    }

    // 0 lives left
    if (attempts === 0) {

        console.log("\n");
        console.log("      ______");
        console.log("     |      |");
        console.log("    ( )     |");
        console.log("   __|__    |");
        console.log("     |      |");
        console.log("    / |     |");
        console.log("   /  |     |");
        console.log("  __________|");

        console.log("\n"
            + "GAME OVER!"
            + "\n"
        );

    }

}