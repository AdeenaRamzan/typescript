import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Enter name to check whether he/she your friend or not",
    type: "text",
    name: "friendName",
  },
]);
//Storing my friend name
if (
  answer.friendName === "Rameen"||
  answer.friendName === "Hadia" ||
  answer.friendName === "rameen"||
  answer.friendName === "hadia" ||
  answer.friendName === "Adeena"||
  answer.friendName === "adeena"
) {
  console.log(`${answer.friendName} is your friend.`);
} else {
  console.log(`${answer.friendName} is not your friend.`);
}
