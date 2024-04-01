// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let fruit = "mango";
let upperCaseFruit = "MANGO";
let num1=3;
let num2=5;
let cars=["BMW","Civic","Suzuki"];

//Tests for equality and inequality with strings
//True
console.log("Is mango is equal to mango?");
console.log(fruit == "mango");
//False
console.log("Is mango is equal to Orange?");
console.log(fruit == "Orange");

//Tests using the lower case function
console.log("Is MANGO is equal to mango after changing it to lowercase!");
console.log(upperCaseFruit.toLowerCase() == fruit.toLowerCase());


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//Equal to..
//False
console.log("Is num1=3 is equal to num2=5 ?");
console.log(num1 == num2);

//Not Equal to..
//True
console.log("Is num1=3 is not equal to num2=5 ?");
console.log(num1 != num2);

//Greater Than..
//False
console.log("Is num1=3 is greater than num2=5 ?");
console.log(num1 > num2);

//Less Than..
//True
console.log("Is num1=3 is Less than num2=5 ?")
console.log(num1 < num2);

//greater than or equal to
//False
console.log("Is num1=3 is greater than or equal to num2=5 ?")
console.log(num1 >= num2);

//Less than or equal to
//True
console.log("Is num1=3 is less than or equal to num2=5 ?")
console.log(num1 <= num2);


//Tests using "and" and "or" operators
//Using &&(and)
//True
console.log("Is num1=3 is not equal to num2=5 and num1=3 is less than num2=5 ?");
console.log(num1 != num2 && num1 < num2);

//False
console.log("Is num1=3 is not equal to num2=5 and num1=3 is greater than num2=5 ?");
console.log(num1 != num2 && num1 > num2);

//Using ||(or)
//True
console.log("Is num1=3 is not equal to num2=5 or num1=3 is less than num2=5 ?");
console.log(num1 != num2 || num1 < num2);

//False
console.log("Is num1=3 is equal to num2=5 or num1=3 is greater than num2=5 ?");
console.log(num1 == num2 || num1 > num2);


//Test whether an item is in a array
//True
console.log("Is BMW is included in cars array ?");
console.log(cars.includes("BMW"));

//Test whether an item is not in a array
//True
console.log("Is mango is included in cars array ?");
console.log(cars.includes("Mango"));