// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicianNames: string[] = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"];

function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians: string[]): string[] {
  return magicians.map((magician) => `The Great ${magician}`);
}

const greatMagicians = makeGreat([...magicianNames]); // Using spread operator to create a copy of the array
console.log("\tOriginal Magicians:");
show_magicians(magicianNames);
console.log("\n\tGreat Magicians:");
show_magicians(greatMagicians);
