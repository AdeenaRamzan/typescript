//Assignment No:03
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName="Adeena Ramzan"; //storing name in variable
//Lowercase:
console.log("In lowerCase: "+ personName.toLowerCase());
//Uppercase:
console.log("In upperCase: "+ personName.toUpperCase());
//Titlecase:
console.log("In titleCase: "+ personName.charAt(0).toUpperCase()+ personName.slice(1).toLowerCase());