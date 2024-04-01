"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color = "green";
//Version that passes if test
if (alien_color === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
//Version that passes else test
if (alien_color === "Yellow") {
    console.log("the player just earned 10 points.");
}
else {
    console.log("player just earned 5 points for shooting the alien.");
}
