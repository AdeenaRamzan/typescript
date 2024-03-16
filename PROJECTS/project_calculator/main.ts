import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter First Number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter Second Number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select any one Operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
//Conditional Statements
if (answer.operator === "Addition") {
  let add = answer.firstNumber + answer.secondNumber;
  console.log("The answer is: " + add);
}
if (answer.operator === "Subtraction") {
  let sub = answer.firstNumber - answer.secondNumber;
  console.log("The answer is: " + sub);
}
if (answer.operator === "Multiplication") {
  let multiply = answer.firstNumber * answer.secondNumber;
  console.log("The answer is: " + multiply);
}
if (answer.operator === "Division") {
  let divide = answer.firstNumber / answer.secondNumber;
  console.log("The answer is: " + divide);
}
