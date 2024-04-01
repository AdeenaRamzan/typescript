"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magicians);
    });
}
show_magicians(magicians);
