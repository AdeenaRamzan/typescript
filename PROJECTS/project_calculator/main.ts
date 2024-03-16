import inquirer from "inquirer";

const answer= await inquirer.prompt([
    {
        message: "Enter First Number",
        type:"number",
        name:"firstNumber",
    
    },
    {
        message: "Enter Second Number",
        type:"number",
        name:"secondNumber",
    
    },
    {
        message: "Select any Operator to perform action",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    
    },

]);
if(answer.operator==="Addition"){
    let add=answer.firstNumber+answer.secondNumber
    console.log("Your answer is: "+add);
}
if(answer.operator==="Subtraction"){
    let sub=answer.firstNumber-answer.secondNumber
    console.log("Your answer is: "+sub);
}if(answer.operator==="Multiplication"){
    let mul=answer.firstNumber*answer.secondNumber
    console.log("Your answer is: "+mul);
}if(answer.operator==="Division"){
    let div=answer.firstNumber/answer.secondNumber
    console.log("Your answer is: "+div);
}