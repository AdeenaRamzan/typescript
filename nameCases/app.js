//Assignment No: 03 
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Adeena Ramzan"; //Storing person name in a variable
//Lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));
//Uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));
//Titlecase
console.log("Titlecase: ".concat(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()));
